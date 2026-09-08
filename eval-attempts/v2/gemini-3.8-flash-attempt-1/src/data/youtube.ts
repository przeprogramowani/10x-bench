import { XMLParser } from 'fast-xml-parser';
import type { FeedResult, MediaItem } from './types';
import { formatDatePl, filterRecentOrLatest } from './date-utils';
import fallbackData from './cache/youtube.json';

const YT_FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';
const SOURCE_NAME = 'YouTube Przeprogramowani';
const CHANNEL_URL = 'https://www.youtube.com/@przeprogramowani';

export async function fetchYouTubeFeed(): Promise<FeedResult> {
  const simulatedFailure =
    typeof process !== 'undefined' &&
    (process.env?.SIMULATE_SOURCE_FAILURE === 'youtube' ||
      process.env?.SIMULATE_SOURCE_FAILURE === 'all');

  if (simulatedFailure) {
    console.warn('[YouTube] Symulowana kontrolowana awaria źródła danych.');
    return {
      items: filterRecentOrLatest(fallbackData.items as MediaItem[]).map((item) => ({
        ...item,
        publishedDateFormatted: formatDatePl(item.publishedAt),
      })),
      sourceName: SOURCE_NAME,
      sourceUrl: YT_FEED_URL,
      fetchedAt: new Date().toISOString(),
      isFallback: true,
      status: 'stale-cache',
      errorMessage: 'Kontrolowana symulacja awarii: użyto bezpiecznych danych z lokalnej pamięci podręcznej.',
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(YT_FEED_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Przeprogramowani-Portal/2.0 (+https://przeprogramowani.pl)',
        Accept: 'application/atom+xml, application/xml, text/xml',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Błąd HTTP ${response.status}: ${response.statusText}`);
    }

    const xmlText = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
    });
    const parsed = parser.parse(xmlText);
    const rawEntries = parsed?.feed?.entry;

    if (!rawEntries || !Array.isArray(rawEntries)) {
      throw new Error('Nieprawidłowa struktura feedu Atom YouTube');
    }

    const normalizedItems: MediaItem[] = rawEntries.map((entry: any) => {
      const videoId = String(entry['yt:videoId'] || entry.id || '').replace(/^yt:video:/, '');
      const cleanDesc = String(entry['media:group']?.['media:description'] || '')
        .replace(/<[^>]*>?/gm, '')
        .trim();

      const publishedAt = entry.published || '';
      return {
        id: videoId,
        title: String(entry.title || 'Bez tytułu').trim(),
        description: cleanDesc.slice(0, 320) + (cleanDesc.length > 320 ? '...' : ''),
        url: `https://www.youtube.com/watch?v=${videoId}`,
        publishedAt,
        publishedDateFormatted: formatDatePl(publishedAt),
        sourceName: SOURCE_NAME,
        sourceUrl: CHANNEL_URL,
        mediaType: 'video',
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
        thumbnailUrl:
          entry['media:group']?.['media:thumbnail']?.['@_url'] ||
          `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      };
    });

    const filtered = filterRecentOrLatest(normalizedItems);

    return {
      items: filtered,
      sourceName: SOURCE_NAME,
      sourceUrl: YT_FEED_URL,
      fetchedAt: new Date().toISOString(),
      isFallback: false,
      status: 'live',
    };
  } catch (error: any) {
    console.error('[YouTube] Błąd pobierania danych na żywo:', error?.message || error);

    const cachedItems = filterRecentOrLatest(fallbackData.items as MediaItem[]).map((item) => ({
      ...item,
      publishedDateFormatted: formatDatePl(item.publishedAt),
    }));

    return {
      items: cachedItems,
      sourceName: SOURCE_NAME,
      sourceUrl: YT_FEED_URL,
      fetchedAt: fallbackData.fetchedAt || new Date().toISOString(),
      isFallback: true,
      status: 'stale-cache',
      errorMessage: `Źródło niedostępne (${error?.message || 'Błąd sieci'}). Prezentowane są zweryfikowane dane z pamięci podręcznej.`,
    };
  }
}
