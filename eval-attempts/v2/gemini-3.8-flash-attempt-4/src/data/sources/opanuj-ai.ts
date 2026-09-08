import { XMLParser } from 'fast-xml-parser';
import type { MediaItem, DataSourceResult } from '../types';
import { formatDatePl } from '../formatters';
import opanujAiCache from '../cache/opanuj-ai.json';

const OPANUJ_AI_RSS = 'https://anchor.fm/s/e2cb03d0/podcast/rss';
const ATTEMPT_START = new Date('2026-09-08T07:41:47Z').getTime();
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const WINDOW_START = ATTEMPT_START - NINETY_DAYS_MS;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

export async function fetchOpanujAiEpisodes(options?: { forceFail?: boolean }): Promise<DataSourceResult<MediaItem[]>> {
  const fetchTime = new Date().toISOString();

  // Controlled failure trigger for testing resilience
  if (options?.forceFail || process.env.MOCK_FAIL_OPANUJ_AI === 'true') {
    return getFallbackResult('Kontrolowany błąd pobierania Opanuj.AI (test awarii źródła)');
  }

  try {
    const res = await fetch(OPANUJ_AI_RSS, {
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
      throw new Error('Nieprawidłowa struktura feedu RSS Opanuj.AI.');
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
        thumbnailUrl: item['itunes:image']?.['@_href'] || 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
        duration: item['itunes:duration'] || '',
        description: cleanDesc,
        source: 'opanuj-ai' as const,
        sourceName: 'Podcast Opanuj.AI',
        sourceUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
        fetchedAt: fetchTime,
        _pubTime: pubTime,
      };
    });

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
      sourceUrl: OPANUJ_AI_RSS,
      fetchedAt: fetchTime,
      isStale: false,
      status: 'live',
    };
  } catch (err: any) {
    console.warn(`[Opanuj.AI Data Source] Fetch failed: ${err.message}. Używam danych z pamięci podręcznej.`);
    return getFallbackResult(err.message);
  }
}

function getFallbackResult(reason: string): DataSourceResult<MediaItem[]> {
  const cachedItems = (opanujAiCache.items || []).map((item: any) => ({
    ...item,
    formattedDate: formatDatePl(item.publishedAt),
  }));

  const filtered = cachedItems.filter((item: any) => {
    const t = new Date(item.publishedAt).getTime();
    return !isNaN(t) && t <= ATTEMPT_START && t >= WINDOW_START;
  });

  return {
    data: filtered.length > 0 ? filtered : cachedItems.slice(0, 6),
    sourceUrl: OPANUJ_AI_RSS,
    fetchedAt: opanujAiCache.fetchedAt,
    isStale: true,
    status: 'stale_cache',
    errorMessage: reason,
  };
}
