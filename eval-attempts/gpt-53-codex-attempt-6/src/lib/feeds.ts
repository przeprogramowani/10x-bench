import { XMLParser } from 'fast-xml-parser';

const PODCAST_RSS_URL = 'https://anchor.fm/s/c72d808/podcast/rss';
const YOUTUBE_RSS_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '',
  trimValues: true,
});

export type PodcastEpisode = {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
  duration: string;
  image: string;
};

export type YouTubeVideo = {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
  thumbnail: string;
};

const podcastFallback: PodcastEpisode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    publishedAt: '2025-09-25T04:00:00.000Z',
    description: 'O barierach językowych programistów i skutecznej nauce angielskiego w IT.',
    duration: '00:33:45',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    publishedAt: '2025-09-10T04:00:00.000Z',
    description: 'Jak budować dojrzałość zawodową i podejmować lepsze decyzje w karierze.',
    duration: '00:45:56',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    publishedAt: '2024-10-10T12:31:14.000Z',
    description: 'Rozmowa o decyzjach architektonicznych i ich wpływie na jakość systemu.',
    duration: '01:16:44',
    image:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
  },
];

const youtubeFallback: YouTubeVideo[] = [
  {
    title: 'Skills vs AgentsMD: 53% vs 100%. Co poszło nie tak?',
    link: 'https://www.youtube.com/watch?v=_kQHwE6zAbM',
    publishedAt: '2026-02-09T18:00:06.000Z',
    description: 'Analiza skuteczności podejść agentowych i praktyczne wnioski dla developerów.',
    thumbnail: 'https://i4.ytimg.com/vi/_kQHwE6zAbM/hqdefault.jpg',
  },
  {
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    link: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
    publishedAt: '2026-02-02T18:00:06.000Z',
    description: 'Przegląd narzędzi i praktyczny test codziennej pracy z AI przy kodzie.',
    thumbnail: 'https://i4.ytimg.com/vi/KAJTsQbqBow/hqdefault.jpg',
  },
  {
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    link: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
    publishedAt: '2026-01-19T18:00:00.000Z',
    description: 'Konkretne praktyki usprawniające pracę z modelami AI podczas developmentu.',
    thumbnail: 'https://i4.ytimg.com/vi/uwi39C2O8NI/hqdefault.jpg',
  },
];

const toArray = <T>(value: T | T[] | undefined | null): T[] => {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

const cleanText = (value: string): string =>
  value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

const parseDate = (value: string | undefined): string => {
  if (!value) {
    return new Date(0).toISOString();
  }

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? new Date(0).toISOString() : date.toISOString();
};

async function fetchXml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
      'user-agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniSiteBot/1.0)',
    },
  });

  if (!response.ok) {
    throw new Error(`Fetch failed for ${url}: ${response.status}`);
  }

  return response.text();
}

export async function getLatestPodcastEpisodes(limit = 6): Promise<PodcastEpisode[]> {
  try {
    const xml = await fetchXml(PODCAST_RSS_URL);
    const parsed = parser.parse(xml);

    const channel = parsed?.rss?.channel;
    const channelImage = channel?.['itunes:image']?.href ?? '';

    const items = toArray<Record<string, unknown>>(channel?.item)
      .map((entry) => {
        const itemImage =
          (entry?.['itunes:image'] as Record<string, string> | undefined)?.href ?? channelImage;

        return {
          title: cleanText(String(entry?.title ?? 'Bez tytułu')),
          link: String(entry?.link ?? '#'),
          publishedAt: parseDate(String(entry?.pubDate ?? '')),
          description: cleanText(
            String(entry?.description ?? entry?.['itunes:summary'] ?? 'Brak opisu odcinka.'),
          ),
          duration: String(entry?.['itunes:duration'] ?? ''),
          image: itemImage,
        } satisfies PodcastEpisode;
      })
      .filter((item) => item.link.startsWith('http'))
      .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
      .slice(0, limit);

    return items.length ? items : podcastFallback.slice(0, limit);
  } catch {
    return podcastFallback.slice(0, limit);
  }
}

export async function getLatestYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const xml = await fetchXml(YOUTUBE_RSS_URL);
    const parsed = parser.parse(xml);

    const items = toArray<Record<string, unknown>>(parsed?.feed?.entry)
      .map((entry) => {
        const linkNodes = toArray<Record<string, string>>(entry.link as Record<string, string>);
        const alternateLink = linkNodes.find((node) => node.rel === 'alternate') ?? linkNodes[0];

        const mediaGroup = (entry['media:group'] as Record<string, unknown>) ?? {};
        const thumbnailNode = toArray<Record<string, string>>(
          mediaGroup['media:thumbnail'] as Record<string, string>,
        )[0];

        return {
          title: cleanText(String(entry.title ?? 'Bez tytułu')),
          link: String(alternateLink?.href ?? '#'),
          publishedAt: parseDate(String(entry.published ?? '')),
          description: cleanText(String(mediaGroup['media:description'] ?? 'Brak opisu filmu.')),
          thumbnail: String(thumbnailNode?.url ?? ''),
        } satisfies YouTubeVideo;
      })
      .filter((item) => item.link.startsWith('http'))
      .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
      .slice(0, limit);

    return items.length ? items : youtubeFallback.slice(0, limit);
  } catch {
    return youtubeFallback.slice(0, limit);
  }
}
