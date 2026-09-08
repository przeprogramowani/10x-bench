import type { MediaItem, SourceResult } from './types';
import {
  xmlParser,
  getXmlValue,
  formatPolishDate,
  filterByWindowRule,
  fetchWithTimeout,
} from './common';
import snapshot from './snapshots/opanuj-ai.json';

const OPANUJ_AI_RSS_URL = 'https://anchor.fm/s/e2cb03d0/podcast/rss';
const SOURCE_NAME = 'Podcast Opanuj.AI';

export async function getOpanujAIPodcast(options?: { forceFail?: boolean }): Promise<SourceResult> {
  const shouldFail = options?.forceFail ||
    (typeof process !== 'undefined' && (process.env.SIMULATE_SOURCE_FAILURE === 'opanuj-ai' || process.env.SIMULATE_SOURCE_FAILURE === 'all'));

  if (shouldFail) {
    console.warn('[Opanuj.AI Module] Kontrolowana symulacja awarii źródła Opanuj.AI.');
    return {
      items: filterByWindowRule(snapshot.items as MediaItem[]),
      sourceUrl: OPANUJ_AI_RSS_URL,
      sourceName: SOURCE_NAME,
      fetchedAt: snapshot.fetchedAt,
      status: 'cached',
      isFallback: true,
      errorMessage: 'Kontrolowana awaria źródła (symulacja niedostępności feedu RSS). Wyświetlamy dane z pamięci podręcznej.',
    };
  }

  try {
    const res = await fetchWithTimeout(OPANUJ_AI_RSS_URL);
    if (!res.ok) {
      throw new Error(`Błąd HTTP ${res.status}: ${res.statusText}`);
    }
    const xmlText = await res.text();
    const parsed = xmlParser.parse(xmlText);
    const rawItems = parsed.rss?.channel?.item || [];
    const itemsList = Array.isArray(rawItems) ? rawItems : [rawItems];

    if (itemsList.length === 0) {
      throw new Error('Brak odcinków w kanale RSS Opanuj.AI.');
    }

    const items: MediaItem[] = itemsList.map((item: any, idx: number) => {
      const title = getXmlValue(item.title);
      const pubDate = getXmlValue(item.pubDate);
      const link = getXmlValue(item.link);
      const enclosure = item.enclosure?.['@_url'] || '';
      const duration = getXmlValue(item['itunes:duration']);
      const desc = getXmlValue(item.description);
      const image = item['itunes:image']?.['@_href'] || parsed.rss?.channel?.image?.url || '';

      const isoDate = pubDate ? new Date(pubDate).toISOString() : 'nieznana';

      return {
        id: `opanuj-ai-${idx}`,
        title,
        source: 'opanuj-ai',
        sourceName: SOURCE_NAME,
        publishedAt: isoDate,
        formattedDate: formatPolishDate(pubDate),
        url: link || 'https://podcasters.spotify.com/pod/show/opanujai',
        audioUrl: enclosure,
        duration: duration || undefined,
        description: desc ? desc.replace(/<[^>]*>/g, '').slice(0, 240) + '...' : undefined,
        thumbnail: image || '/img/podcast/opanuj-ai-cover.jpg',
      };
    });

    const filtered = filterByWindowRule(items);

    return {
      items: filtered,
      sourceUrl: OPANUJ_AI_RSS_URL,
      sourceName: SOURCE_NAME,
      fetchedAt: new Date().toISOString(),
      status: 'live',
      isFallback: false,
    };
  } catch (error: any) {
    console.error('[Opanuj.AI Module] Awaria pobierania:', error?.message);
    const fallbackItems = filterByWindowRule(snapshot.items as MediaItem[]);
    return {
      items: fallbackItems,
      sourceUrl: OPANUJ_AI_RSS_URL,
      sourceName: SOURCE_NAME,
      fetchedAt: snapshot.fetchedAt,
      status: 'cached',
      isFallback: true,
      errorMessage: `Błąd połączenia z RSS Opanuj.AI (${error?.message || 'Nieznany błąd'}). Serwujemy sprawdzone dane z lokalnego snapshotu.`,
    };
  }
}
