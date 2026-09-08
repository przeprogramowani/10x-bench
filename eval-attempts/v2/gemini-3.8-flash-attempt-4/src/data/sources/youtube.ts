import { XMLParser } from 'fast-xml-parser';
import type { MediaItem, DataSourceResult } from '../types';
import { formatDatePl } from '../formatters';
import youtubeCache from '../cache/youtube.json';

const YOUTUBE_FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';
const ATTEMPT_START = new Date('2026-09-08T07:41:47Z').getTime();
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const WINDOW_START = ATTEMPT_START - NINETY_DAYS_MS;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

export async function fetchYoutubeVideos(options?: { forceFail?: boolean }): Promise<DataSourceResult<MediaItem[]>> {
  const fetchTime = new Date().toISOString();

  // Controlled failure trigger for testing resilience
  if (options?.forceFail || process.env.MOCK_FAIL_YOUTUBE === 'true') {
    return getFallbackResult('Kontrolowany błąd pobierania YouTube (test awarii źródła)');
  }

  try {
    const res = await fetch(YOUTUBE_FEED_URL, {
      headers: {
        'User-Agent': 'Przeprogramowani-Portal/2.0 (+https://przeprogramowani.pl)',
        'Accept': 'application/atom+xml, application/xml, text/xml'
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(`Błąd HTTP ${res.status}: ${res.statusText}`);
    }

    const xmlText = await res.text();
    const parsed = parser.parse(xmlText);

    if (!parsed.feed || !parsed.feed.entry) {
      throw new Error('Nieprawidłowa struktura odpowiedzi z kanału YouTube.');
    }

    const rawEntries = Array.isArray(parsed.feed.entry) ? parsed.feed.entry : [parsed.feed.entry];

    const normalized: MediaItem[] = rawEntries
      .map((entry: any) => {
        const videoId = entry['yt:videoId'] || entry.id?.replace('yt:video:', '') || '';
        const title = entry.title || 'Bez tytułu';
        const pubDateStr = entry.published;
        const pubTime = pubDateStr ? new Date(pubDateStr).getTime() : NaN;

        return {
          id: videoId,
          title,
          publishedAt: pubDateStr || 'nieznana',
          formattedDate: formatDatePl(pubDateStr),
          url: `https://www.youtube.com/watch?v=${videoId}`,
          embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
          thumbnailUrl: entry['media:group']?.['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          description: entry['media:group']?.['media:description'] || '',
          source: 'youtube' as const,
          sourceName: 'Oficjalny kanał YouTube Przeprogramowani',
          sourceUrl: 'https://www.youtube.com/c/przeprogramowani',
          fetchedAt: fetchTime,
          _pubTime: pubTime,
        };
      })
      .filter((item: any) => Boolean(item.id));

    // Filter within 90 days preceding attempt start
    let filtered = normalized.filter((item: any) => {
      if (isNaN(item._pubTime)) return false;
      return item._pubTime <= ATTEMPT_START && item._pubTime >= WINDOW_START;
    });

    // If none found in 90 days, select the newest available
    if (filtered.length === 0 && normalized.length > 0) {
      filtered = normalized.slice(0, 6);
    }

    return {
      data: filtered,
      sourceUrl: YOUTUBE_FEED_URL,
      fetchedAt: fetchTime,
      isStale: false,
      status: 'live',
    };
  } catch (err: any) {
    console.warn(`[YouTube Data Source] Fetch failed: ${err.message}. Używam danych z pamięci podręcznej.`);
    return getFallbackResult(err.message);
  }
}

function getFallbackResult(reason: string): DataSourceResult<MediaItem[]> {
  const cachedItems = (youtubeCache.items || []).map((item: any) => ({
    ...item,
    formattedDate: formatDatePl(item.publishedAt),
  }));

  // Apply the same 90-day filter or fallback
  const filtered = cachedItems.filter((item: any) => {
    const t = new Date(item.publishedAt).getTime();
    return !isNaN(t) && t <= ATTEMPT_START && t >= WINDOW_START;
  });

  return {
    data: filtered.length > 0 ? filtered : cachedItems.slice(0, 6),
    sourceUrl: YOUTUBE_FEED_URL,
    fetchedAt: youtubeCache.fetchedAt,
    isStale: true,
    status: 'stale_cache',
    errorMessage: reason,
  };
}
