import { XMLParser } from 'fast-xml-parser';
import type { FetchResult, MediaItem } from './types';
import { BACKUP_YOUTUBE } from './backup-cache';
import { ATTEMPT_START_DATE, CUTOFF_DATE, formatPolishDate, cleanText } from './utils';

const CHANNEL_ID = 'UCb2Y3vMeD6N4WDt5Acw7Arw';
const SOURCE_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export async function fetchYouTube(options?: { forceError?: boolean }): Promise<FetchResult<MediaItem[]>> {
  const fetchedAt = new Date().toISOString();

  const shouldSimulateFailure =
    options?.forceError ||
    (typeof process !== 'undefined' && process.env?.SIMULATE_FAILURE_YOUTUBE === 'true');

  if (shouldSimulateFailure) {
    return {
      items: BACKUP_YOUTUBE,
      sourceUrl: SOURCE_URL,
      fetchedAt,
      status: 'cached',
      isFallback: true,
      message: 'Uruchomiono kontrolowaną awarię źródła YouTube. Wyświetlono sprawdzone dane z pamięci podręcznej (oznaczone jako archiwalne).'
    };
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(SOURCE_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'PrzeprogramowaniSite/1.0 (+https://przeprogramowani.pl)'
      }
    });
    clearTimeout(timer);

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
    }

    const xmlText = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_'
    });
    const parsed = parser.parse(xmlText);
    const rawEntries = parsed?.feed?.entry;

    if (!rawEntries) {
      throw new Error('Brak wpisów w kanale Atom YouTube');
    }

    const entriesList = Array.isArray(rawEntries) ? rawEntries : [rawEntries];
    const items: MediaItem[] = [];

    for (const entry of entriesList) {
      const pubDateStr = entry.published;
      const pubDate = pubDateStr ? new Date(pubDateStr) : null;
      const pubTime = pubDate ? pubDate.getTime() : 0;

      // Filter: within 90 days before attempt start (and not after start)
      if (pubTime && pubTime <= ATTEMPT_START_DATE.getTime() && pubTime >= CUTOFF_DATE.getTime()) {
        const videoId = entry['yt:videoId'] || '';
        const title = cleanText(entry.title) || 'Brak tytułu';
        const url = entry.link?.['@_href'] || `https://www.youtube.com/watch?v=${videoId}`;
        const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
        const mediaGroup = entry['media:group'];
        const description = cleanText(mediaGroup?.['media:description'] || '');
        const thumbnailUrl = mediaGroup?.['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

        items.push({
          id: videoId || String(items.length),
          title,
          source: 'youtube',
          sourceName: 'YouTube Przeprogramowani',
          publishedAt: pubDate ? pubDate.toISOString() : 'nieznana',
          publishedDateDisplay: formatPolishDate(pubDateStr),
          url,
          embedUrl,
          description,
          thumbnailUrl
        });
      }
    }

    // Fallback if 0 items in window
    if (items.length === 0 && entriesList.length > 0) {
      for (const entry of entriesList.slice(0, 5)) {
        const videoId = entry['yt:videoId'] || '';
        const title = cleanText(entry.title) || 'Brak tytułu';
        const url = entry.link?.['@_href'] || `https://www.youtube.com/watch?v=${videoId}`;
        const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
        const mediaGroup = entry['media:group'];
        items.push({
          id: videoId || String(items.length),
          title,
          source: 'youtube',
          sourceName: 'YouTube Przeprogramowani',
          publishedAt: entry.published ? new Date(entry.published).toISOString() : 'nieznana',
          publishedDateDisplay: formatPolishDate(entry.published),
          url,
          embedUrl,
          description: cleanText(mediaGroup?.['media:description'] || ''),
          thumbnailUrl: mediaGroup?.['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
        });
      }
    }

    return {
      items,
      sourceUrl: SOURCE_URL,
      fetchedAt,
      status: 'live',
      isFallback: false
    };
  } catch (err: any) {
    console.warn(`[fetchYouTube] Fetch failed: ${err.message}. Using verified backup cache.`);
    return {
      items: BACKUP_YOUTUBE,
      sourceUrl: SOURCE_URL,
      fetchedAt,
      status: 'cached',
      isFallback: true,
      message: 'Nie udało się pobrać aktualnych danych z kanału YouTube. Wyświetlono kopię zapasową z pamięci podręcznej (stan archiwalny).',
      error: err.message
    };
  }
}
