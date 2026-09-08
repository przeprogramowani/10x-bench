import type { MediaItem, SourceResult } from './types';
import {
  xmlParser,
  getXmlValue,
  formatPolishDate,
  filterByWindowRule,
  fetchWithTimeout,
} from './common';
import snapshot from './snapshots/youtube.json';

const YOUTUBE_FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';
const SOURCE_NAME = 'Kanał YouTube Przeprogramowani';

export async function getYouTubeVideos(options?: { forceFail?: boolean }): Promise<SourceResult> {
  const shouldFail = options?.forceFail ||
    (typeof process !== 'undefined' && (process.env.SIMULATE_SOURCE_FAILURE === 'youtube' || process.env.SIMULATE_SOURCE_FAILURE === 'all'));

  if (shouldFail) {
    console.warn('[YouTube Module] Kontrolowana symulacja awarii źródła YouTube.');
    return {
      items: filterByWindowRule(snapshot.items as MediaItem[]),
      sourceUrl: YOUTUBE_FEED_URL,
      sourceName: SOURCE_NAME,
      fetchedAt: snapshot.fetchedAt,
      status: 'cached',
      isFallback: true,
      errorMessage: 'Kontrolowana awaria źródła (symulacja niedostępności sieci / HTTP 500). Wyświetlamy dane z pamięci podręcznej.',
    };
  }

  try {
    const res = await fetchWithTimeout(YOUTUBE_FEED_URL);
    if (!res.ok) {
      throw new Error(`Błąd HTTP ${res.status}: ${res.statusText}`);
    }
    const xmlText = await res.text();
    const parsed = xmlParser.parse(xmlText);
    const rawEntries = parsed.feed?.entry || [];
    const entries = Array.isArray(rawEntries) ? rawEntries : [rawEntries];

    if (entries.length === 0) {
      throw new Error('Brak wpisów w kanale YouTube.');
    }

    const items: MediaItem[] = entries.map((entry: any) => {
      const videoId = getXmlValue(entry['yt:videoId']);
      const title = getXmlValue(entry.title);
      const published = getXmlValue(entry.published);
      const link = entry.link?.['@_href'] || `https://www.youtube.com/watch?v=${videoId}`;
      const mediaGroup = entry['media:group'] || {};
      const description = getXmlValue(mediaGroup['media:description']);
      const thumbnail = mediaGroup['media:thumbnail']?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      return {
        id: videoId,
        title,
        source: 'youtube',
        sourceName: SOURCE_NAME,
        publishedAt: published || 'nieznana',
        formattedDate: formatPolishDate(published),
        url: link,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
        thumbnail,
        description: description ? description.slice(0, 240) + '...' : undefined,
      };
    });

    const filtered = filterByWindowRule(items);

    return {
      items: filtered,
      sourceUrl: YOUTUBE_FEED_URL,
      sourceName: SOURCE_NAME,
      fetchedAt: new Date().toISOString(),
      status: 'live',
      isFallback: false,
    };
  } catch (error: any) {
    console.error('[YouTube Module] Awaria pobierania:', error?.message);
    const fallbackItems = filterByWindowRule(snapshot.items as MediaItem[]);
    return {
      items: fallbackItems,
      sourceUrl: YOUTUBE_FEED_URL,
      sourceName: SOURCE_NAME,
      fetchedAt: snapshot.fetchedAt,
      status: 'cached',
      isFallback: true,
      errorMessage: `Błąd połączenia z YouTube (${error?.message || 'Nieznany błąd'}). Serwujemy sprawdzone dane z lokalnego snapshotu.`,
    };
  }
}
