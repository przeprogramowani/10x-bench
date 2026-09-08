import { XMLParser } from 'fast-xml-parser';
import type { MediaItem, SourceResult } from '../types';
import fallbackData from '../cache/fallbackData.json' with { type: 'json' };
import { formatPolishDate, isWithin90Days, BENCHMARK_START_DATE } from './utils.ts';

const FEED_URL = 'https://anchor.fm/s/c72d808/podcast/rss';
const HOMEPAGE_URL = 'https://podcasters.spotify.com/pod/show/przeprogramowani';

export async function fetchPrzeprogramowaniPodcastEpisodes(options?: { simulateFailure?: boolean; timeoutMs?: number }): Promise<SourceResult<MediaItem[]>> {
  const fetchedAt = new Date().toISOString();

  if (options?.simulateFailure) {
    console.warn('[Data Module: Przeprogramowani Podcast] Simulated failure triggered.');
    return {
      data: fallbackData.przeprogramowaniPodcast as MediaItem[],
      meta: {
        id: 'przeprogramowani-podcast',
        name: 'Podcast Przeprogramowani',
        feedUrl: FEED_URL,
        homepageUrl: HOMEPAGE_URL,
        fetchedAt,
        status: 'stale-fallback',
        isStale: true,
        error: 'Symulowany błąd źródła danych (Controlled Failure Experiment)',
        itemCount: fallbackData.przeprogramowaniPodcast.length
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
        'Accept': 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8'
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
    const rawItems = parsed?.rss?.channel?.item;

    if (!rawItems || !Array.isArray(rawItems) && typeof rawItems !== 'object') {
      throw new Error('Nieprawidłowa struktura pliku RSS');
    }

    const itemsArray = Array.isArray(rawItems) ? rawItems : [rawItems];

    const normalizedItems: MediaItem[] = itemsArray.map((item: any, index: number) => {
      const pubDateStr = item.pubDate || '';
      const pubDate = pubDateStr ? new Date(pubDateStr) : undefined;
      const isoDate = pubDate && !isNaN(pubDate.getTime()) ? pubDate.toISOString() : 'Data nieznana';
      const link = item.link || item.guid?.['#text'] || (typeof item.guid === 'string' ? item.guid : HOMEPAGE_URL);
      const mediaUrl = item.enclosure?.['@_url'] || undefined;
      const duration = item['itunes:duration'] || undefined;
      const rawDesc = item.description || item['itunes:summary'] || '';
      const cleanDesc = typeof rawDesc === 'string' ? rawDesc.replace(/<[^>]*>?/gm, '').trim() : '';

      const episodeSlugMatch = link.match(/\/episodes\/([^/?#]+)/);
      const id = episodeSlugMatch ? episodeSlugMatch[1] : `przeprogramowani-podcast-${index}`;

      return {
        id,
        title: item.title || 'Bez tytułu',
        publishedAt: isoDate,
        displayDate: formatPolishDate(pubDate),
        sourceUrl: link,
        mediaUrl,
        embedUrl: `https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/${id}`,
        thumbnail: item['itunes:image']?.['@_href'] || 'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo400/1988530/1988530-1700599021656-654f90c16fd33.jpg',
        description: cleanDesc.slice(0, 320) + (cleanDesc.length > 320 ? '...' : ''),
        duration: duration ? String(duration) : undefined,
        isRecent90Days: isWithin90Days(pubDate)
      };
    });

    const validItems = normalizedItems.filter(item => {
      if (item.publishedAt === 'Data nieznana') return true;
      const d = new Date(item.publishedAt);
      return isNaN(d.getTime()) || d <= BENCHMARK_START_DATE;
    });

    // Per P03: "Jeśli źródło niczego w tym okresie nie opublikowało, wybierz najnowszy dostępny materiał i pokaż jego rzeczywistą datę."
    const recent90 = validItems.filter(item => item.isRecent90Days);
    const finalSelection = recent90.length > 0 ? recent90 : validItems.slice(0, 3);

    return {
      data: finalSelection,
      meta: {
        id: 'przeprogramowani-podcast',
        name: 'Podcast Przeprogramowani',
        feedUrl: FEED_URL,
        homepageUrl: HOMEPAGE_URL,
        fetchedAt,
        status: 'live',
        isStale: false,
        itemCount: finalSelection.length
      }
    };
  } catch (err: any) {
    console.error('[Data Module: Przeprogramowani Podcast] Pobieranie na żywo nie powiodło się, używam danych z pamięci podręcznej:', err?.message || err);
    return {
      data: fallbackData.przeprogramowaniPodcast as MediaItem[],
      meta: {
        id: 'przeprogramowani-podcast',
        name: 'Podcast Przeprogramowani',
        feedUrl: FEED_URL,
        homepageUrl: HOMEPAGE_URL,
        fetchedAt,
        status: 'stale-fallback',
        isStale: true,
        error: err?.message || 'Błąd połączenia ze źródłem',
        itemCount: fallbackData.przeprogramowaniPodcast.length
      }
    };
  }
}
