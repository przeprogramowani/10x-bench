import { XMLParser } from 'fast-xml-parser';
import type { FeedResult, MediaItem } from './types';
import { formatDatePl, filterRecentOrLatest } from './date-utils';
import fallbackData from './cache/opanuj-ai.json';

const RSS_URL = 'https://anchor.fm/s/e2cb03d0/podcast/rss';
const SOURCE_NAME = 'Opanuj.AI Podcast';

export async function fetchOpanujAiFeed(): Promise<FeedResult> {
  const simulatedFailure =
    typeof process !== 'undefined' &&
    (process.env?.SIMULATE_SOURCE_FAILURE === 'opanuj-ai' ||
      process.env?.SIMULATE_SOURCE_FAILURE === 'all');

  if (simulatedFailure) {
    console.warn('[Opanuj.AI] Symulowana kontrolowana awaria źródła danych.');
    return {
      items: filterRecentOrLatest(fallbackData.items as MediaItem[]).map((item) => ({
        ...item,
        publishedDateFormatted: formatDatePl(item.publishedAt),
      })),
      sourceName: SOURCE_NAME,
      sourceUrl: RSS_URL,
      fetchedAt: new Date().toISOString(),
      isFallback: true,
      status: 'stale-cache',
      errorMessage: 'Kontrolowana symulacja awarii: użyto bezpiecznych danych z lokalnej pamięci podręcznej.',
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(RSS_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Przeprogramowani-Portal/2.0 (+https://przeprogramowani.pl)',
        Accept: 'application/rss+xml, application/xml, text/xml',
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
    const rawItems = parsed?.rss?.channel?.item;

    if (!rawItems || !Array.isArray(rawItems)) {
      throw new Error('Nieprawidłowa struktura feedu RSS');
    }

    const normalizedItems: MediaItem[] = rawItems.map((item: any) => {
      const guid = typeof item.guid === 'object' ? item.guid['#text'] : item.guid;
      const cleanDesc = (item['itunes:summary'] || item.description || '')
        .replace(/<[^>]*>?/gm, '')
        .trim();

      const publishedAt = item.pubDate || '';
      return {
        id: String(guid || item.link || Math.random().toString(36).slice(2)),
        title: String(item.title || 'Bez tytułu').trim(),
        description: cleanDesc.slice(0, 320) + (cleanDesc.length > 320 ? '...' : ''),
        url: String(item.link || 'https://podcasters.spotify.com/pod/show/opanujai'),
        publishedAt,
        publishedDateFormatted: formatDatePl(publishedAt),
        sourceName: SOURCE_NAME,
        sourceUrl: RSS_URL,
        mediaType: 'podcast',
        audioUrl: item.enclosure?.['@_url'] || undefined,
        duration: item['itunes:duration'] || undefined,
        thumbnailUrl:
          item['itunes:image']?.['@_href'] ||
          'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
      };
    });

    const filtered = filterRecentOrLatest(normalizedItems);

    return {
      items: filtered,
      sourceName: SOURCE_NAME,
      sourceUrl: RSS_URL,
      fetchedAt: new Date().toISOString(),
      isFallback: false,
      status: 'live',
    };
  } catch (error: any) {
    console.error('[Opanuj.AI] Błąd pobierania danych na żywo:', error?.message || error);

    const cachedItems = filterRecentOrLatest(fallbackData.items as MediaItem[]).map((item) => ({
      ...item,
      publishedDateFormatted: formatDatePl(item.publishedAt),
    }));

    return {
      items: cachedItems,
      sourceName: SOURCE_NAME,
      sourceUrl: RSS_URL,
      fetchedAt: fallbackData.fetchedAt || new Date().toISOString(),
      isFallback: true,
      status: 'stale-cache',
      errorMessage: `Źródło niedostępne (${error?.message || 'Błąd sieci'}). Prezentowane są zweryfikowane dane z pamięci podręcznej.`,
    };
  }
}
