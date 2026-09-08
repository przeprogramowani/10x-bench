import { XMLParser } from 'fast-xml-parser';
import type { MediaItem, DataSourceResult } from '../types';
import { formatDatePl } from '../formatters';
import przCache from '../cache/przeprogramowani.json';

const PRZEPROGRAMOWANI_PODCAST_RSS = 'https://anchor.fm/s/c72d808/podcast/rss';
const ATTEMPT_START = new Date('2026-09-08T07:41:47Z').getTime();
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const WINDOW_START = ATTEMPT_START - NINETY_DAYS_MS;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

export async function fetchPrzeprogramowaniEpisodes(options?: { forceFail?: boolean }): Promise<DataSourceResult<MediaItem[]>> {
  const fetchTime = new Date().toISOString();

  // Controlled failure trigger for testing resilience
  if (options?.forceFail || process.env.MOCK_FAIL_PRZEPROGRAMOWANI === 'true') {
    return getFallbackResult('Kontrolowany błąd pobierania Przeprogramowani Podcast (test awarii źródła)');
  }

  try {
    const res = await fetch(PRZEPROGRAMOWANI_PODCAST_RSS, {
      headers: {
        'User-Agent': 'Przeprogramowani-Portal/2.0 (+https://przeprogramowani.pl)',
        'Accept': 'application/rss+xml, application/xml, text/xml'
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(`Błąd HTTP ${res.status}: ${res.statusText}`);
    }

    const xmlText = await res.text();
    const parsed = parser.parse(xmlText);

    if (!parsed.rss || !parsed.rss.channel || !parsed.rss.channel.item) {
      throw new Error('Nieprawidłowa struktura feedu RSS Przeprogramowani.');
    }

    const rawItems = Array.isArray(parsed.rss.channel.item) ? parsed.rss.channel.item : [parsed.rss.channel.item];

    const normalized: MediaItem[] = rawItems.map((item: any) => {
      const id = item.guid?.['#text'] || item.guid || item.link || '';
      const pubDate = item.pubDate ? new Date(item.pubDate).toISOString() : 'nieznana';
      const pubTime = item.pubDate ? new Date(item.pubDate).getTime() : NaN;
      const cleanDesc = (item.description || '').replace(/<[^>]*>?/gm, '').trim();

      return {
        id,
        title: item.title || 'Bez tytułu',
        publishedAt: pubDate,
        formattedDate: formatDatePl(pubDate),
        url: item.link,
        audioUrl: item.enclosure?.['@_url'] || '',
        thumbnailUrl: item['itunes:image']?.['@_href'] || 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
        duration: item['itunes:duration'] || '',
        description: cleanDesc,
        source: 'przeprogramowani' as const,
        sourceName: 'Podcast Przeprogramowani ft. Gość',
        sourceUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
        fetchedAt: fetchTime,
        _pubTime: pubTime,
      };
    });

    // Filter within 90 days preceding attempt start
    let filtered = normalized.filter((item: any) => {
      if (isNaN(item._pubTime)) return false;
      return item._pubTime <= ATTEMPT_START && item._pubTime >= WINDOW_START;
    });

    // If none found in 90 days, select the newest available material and show authentic date (P03 requirement)
    if (filtered.length === 0 && normalized.length > 0) {
      filtered = normalized.slice(0, 6);
    }

    return {
      data: filtered,
      sourceUrl: PRZEPROGRAMOWANI_PODCAST_RSS,
      fetchedAt: fetchTime,
      isStale: false,
      status: 'live',
    };
  } catch (err: any) {
    console.warn(`[Przeprogramowani Podcast Source] Fetch failed: ${err.message}. Używam danych z pamięci podręcznej.`);
    return getFallbackResult(err.message);
  }
}

function getFallbackResult(reason: string): DataSourceResult<MediaItem[]> {
  const cachedItems = (przCache.items || []).map((item: any) => ({
    ...item,
    formattedDate: formatDatePl(item.publishedAt),
  }));

  const filtered = cachedItems.filter((item: any) => {
    const t = new Date(item.publishedAt).getTime();
    return !isNaN(t) && t <= ATTEMPT_START && t >= WINDOW_START;
  });

  return {
    data: filtered.length > 0 ? filtered : cachedItems.slice(0, 6),
    sourceUrl: PRZEPROGRAMOWANI_PODCAST_RSS,
    fetchedAt: przCache.fetchedAt,
    isStale: true,
    status: 'stale_cache',
    errorMessage: reason,
  };
}
