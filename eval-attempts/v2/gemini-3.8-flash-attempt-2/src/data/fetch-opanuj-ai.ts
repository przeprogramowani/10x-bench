import { XMLParser } from 'fast-xml-parser';
import type { FetchResult, MediaItem } from './types';
import { BACKUP_OPANUJ_AI } from './backup-cache';
import { ATTEMPT_START_DATE, CUTOFF_DATE, formatPolishDate, cleanText } from './utils';

const SOURCE_URL = 'https://anchor.fm/s/e2cb03d0/podcast/rss';

export async function fetchOpanujAi(options?: { forceError?: boolean }): Promise<FetchResult<MediaItem[]>> {
  const fetchedAt = new Date().toISOString();

  // Controlled failure support
  const shouldSimulateFailure =
    options?.forceError ||
    (typeof process !== 'undefined' && process.env?.SIMULATE_FAILURE_OPANUJ_AI === 'true');

  if (shouldSimulateFailure) {
    return {
      items: BACKUP_OPANUJ_AI,
      sourceUrl: SOURCE_URL,
      fetchedAt,
      status: 'cached',
      isFallback: true,
      message: 'Uruchomiono kontrolowaną awarię źródła Opanuj.AI. Wyświetlono sprawdzone dane z pamięci podręcznej (oznaczone jako archiwalne).'
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
    const rawItems = parsed?.rss?.channel?.item;

    if (!rawItems || !Array.isArray(rawItems)) {
      throw new Error('Nieprawidłowa struktura feedu RSS Opanuj.AI');
    }

    const items: MediaItem[] = [];

    for (const entry of rawItems) {
      const pubDateStr = entry.pubDate;
      const pubDate = pubDateStr ? new Date(pubDateStr) : null;
      const pubTime = pubDate ? pubDate.getTime() : 0;

      // Filter: within 90 days before attempt start
      if (pubTime && pubTime <= ATTEMPT_START_DATE.getTime() && pubTime >= CUTOFF_DATE.getTime()) {
        const title = cleanText(entry.title) || 'Brak tytułu';
        const url = entry.link || (entry.guid ? String(entry.guid) : SOURCE_URL);
        const audioUrl = entry.enclosure?.['@_url'] || undefined;
        const description = cleanText(entry.description || entry['itunes:summary'] || '');
        const duration = entry['itunes:duration'] || undefined;
        const image = entry['itunes:image']?.['@_href'] || 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg';
        const id = entry.guid ? String(entry.guid['#text'] || entry.guid) : String(items.length);

        items.push({
          id,
          title,
          source: 'opanuj-ai',
          sourceName: 'Opanuj.AI Podcast',
          publishedAt: pubDate ? pubDate.toISOString() : 'nieznana',
          publishedDateDisplay: formatPolishDate(pubDateStr),
          url,
          audioUrl,
          description,
          duration,
          thumbnailUrl: image
        });
      }
    }

    // Fallback: if no items in 90 days window, pick latest available
    if (items.length === 0 && rawItems.length > 0) {
      for (const entry of rawItems.slice(0, 5)) {
        const title = cleanText(entry.title) || 'Brak tytułu';
        const url = entry.link || SOURCE_URL;
        const audioUrl = entry.enclosure?.['@_url'] || undefined;
        items.push({
          id: entry.guid ? String(entry.guid['#text'] || entry.guid) : String(items.length),
          title,
          source: 'opanuj-ai',
          sourceName: 'Opanuj.AI Podcast',
          publishedAt: entry.pubDate ? new Date(entry.pubDate).toISOString() : 'nieznana',
          publishedDateDisplay: formatPolishDate(entry.pubDate),
          url,
          audioUrl,
          description: cleanText(entry.description || ''),
          thumbnailUrl: 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg'
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
    console.warn(`[fetchOpanujAi] Fetch failed: ${err.message}. Using verified backup cache.`);
    return {
      items: BACKUP_OPANUJ_AI,
      sourceUrl: SOURCE_URL,
      fetchedAt,
      status: 'cached',
      isFallback: true,
      message: 'Nie udało się pobrać aktualnych danych ze źródła. Wyświetlono kopię zapasową z pamięci podręcznej (stan archiwalny).',
      error: err.message
    };
  }
}
