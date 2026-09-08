import { XMLParser } from 'fast-xml-parser';
import type { MediaItem, SourceResult } from '../types';
import fallbackData from '../cache/fallbackData.json' with { type: 'json' };
import { formatPolishDate, isWithin90Days, BENCHMARK_START_DATE } from './utils.ts';

const CHANNEL_ID = 'UCb2Y3vMeD6N4WDt5Acw7Arw';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const HOMEPAGE_URL = 'https://www.youtube.com/@Przeprogramowani';

export async function fetchYoutubeVideos(options?: { simulateFailure?: boolean; timeoutMs?: number }): Promise<SourceResult<MediaItem[]>> {
  const fetchedAt = new Date().toISOString();

  if (options?.simulateFailure) {
    console.warn('[Data Module: YouTube] Simulated failure triggered.');
    return {
      data: fallbackData.youtube as MediaItem[],
      meta: {
        id: 'youtube',
        name: 'Kanał YouTube Przeprogramowani',
        feedUrl: FEED_URL,
        homepageUrl: HOMEPAGE_URL,
        fetchedAt,
        status: 'stale-fallback',
        isStale: true,
        error: 'Symulowany błąd źródła danych (Controlled Failure Experiment)',
        itemCount: fallbackData.youtube.length
      }
    };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), options?.timeoutMs ?? 7000);

    const res = await fetch(FEED_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniBot/1.0; +https://przeprogramowani.pl)',
        'Accept': 'application/atom+xml, application/xml, text/xml;q=0.9, */*;q=0.8'
      }
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Błąd HTTP ${res.status}: ${res.statusText}`);
    }

    const xmlText = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      trimValues: true
    });

    const parsed = parser.parse(xmlText);
    const rawEntries = parsed?.feed?.entry;

    if (!rawEntries || !Array.isArray(rawEntries) && typeof rawEntries !== 'object') {
      throw new Error('Nieprawidłowa struktura pliku Atom');
    }

    const entriesArray = Array.isArray(rawEntries) ? rawEntries : [rawEntries];

    const normalizedItems: MediaItem[] = entriesArray.map((entry: any, index: number) => {
      const videoId = entry['yt:videoId'] || `yt-${index}`;
      const publishedStr = entry.published || entry.updated || '';
      const pubDate = publishedStr ? new Date(publishedStr) : undefined;
      const isoDate = pubDate && !isNaN(pubDate.getTime()) ? pubDate.toISOString() : 'Data nieznana';
      const link = entry.link?.['@_href'] || `https://www.youtube.com/watch?v=${videoId}`;
      const mediaGroup = entry['media:group'] || {};
      const desc = mediaGroup['media:description'] || '';
      const thumb = mediaGroup['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      return {
        id: videoId,
        title: entry.title || 'Wideo bez tytułu',
        publishedAt: isoDate,
        displayDate: formatPolishDate(pubDate),
        sourceUrl: link,
        mediaUrl: link,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
        thumbnail: thumb,
        description: typeof desc === 'string' ? desc.slice(0, 320) + (desc.length > 320 ? '...' : '') : '',
        duration: 'Wideo',
        isRecent90Days: isWithin90Days(pubDate)
      };
    });

    const validItems = normalizedItems.filter(item => {
      if (item.publishedAt === 'Data nieznana') return true;
      const d = new Date(item.publishedAt);
      return isNaN(d.getTime()) || d <= BENCHMARK_START_DATE;
    });

    const recent90 = validItems.filter(item => item.isRecent90Days);
    const finalSelection = recent90.length > 0 ? recent90 : validItems.slice(0, 5);

    return {
      data: finalSelection,
      meta: {
        id: 'youtube',
        name: 'Kanał YouTube Przeprogramowani',
        feedUrl: FEED_URL,
        homepageUrl: HOMEPAGE_URL,
        fetchedAt,
        status: 'live',
        isStale: false,
        itemCount: finalSelection.length
      }
    };
  } catch (err: any) {
    console.error('[Data Module: YouTube] Pobieranie na żywo nie powiodło się, używam danych z pamięci podręcznej:', err?.message || err);
    return {
      data: fallbackData.youtube as MediaItem[],
      meta: {
        id: 'youtube',
        name: 'Kanał YouTube Przeprogramowani',
        feedUrl: FEED_URL,
        homepageUrl: HOMEPAGE_URL,
        fetchedAt,
        status: 'stale-fallback',
        isStale: true,
        error: err?.message || 'Błąd połączenia ze źródłem',
        itemCount: fallbackData.youtube.length
      }
    };
  }
}
