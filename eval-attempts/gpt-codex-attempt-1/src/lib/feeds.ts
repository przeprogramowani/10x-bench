import { XMLParser } from 'fast-xml-parser';

export type PodcastEpisode = {
  title: string;
  link: string;
  publishedAt: string;
  duration?: string;
};

export type YouTubeVideo = {
  id: string;
  title: string;
  link: string;
  publishedAt: string;
  thumbnail: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true,
});

const PODCAST_FEED_URL = 'https://anchor.fm/s/c72d808/podcast/rss';
const YOUTUBE_FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';

const fallbackPodcastEpisodes: PodcastEpisode[] = [
  {
    title:
      'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    publishedAt: '2025-09-25T04:00:00Z',
    duration: '00:33:45',
  },
  {
    title:
      'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    publishedAt: '2025-09-10T04:00:00Z',
    duration: '00:45:57',
  },
  {
    title:
      'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    publishedAt: '2024-10-10T12:31:14Z',
    duration: '00:47:09',
  },
];

const fallbackYouTubeVideos: YouTubeVideo[] = [
  {
    id: 'KAJTsQbqBow',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    link: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
    publishedAt: '2026-02-02T18:00:06Z',
    thumbnail: 'https://i.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
  },
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    link: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
    publishedAt: '2026-01-19T18:00:00Z',
    thumbnail: 'https://i.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
  },
  {
    id: 'b-gOI128G2s',
    title: 'Demo Day 10xDevs - zobacz najlepsze projekty uczestników 2 edycji!',
    link: 'https://www.youtube.com/watch?v=b-gOI128G2s',
    publishedAt: '2025-12-11T20:00:47Z',
    thumbnail: 'https://i.ytimg.com/vi/b-gOI128G2s/maxresdefault.jpg',
  },
];

const asArray = <T>(value: T | T[] | undefined): T[] => {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

const toIsoDate = (input: string | undefined): string => {
  if (!input) {
    return new Date(0).toISOString();
  }

  const date = new Date(input);
  return Number.isNaN(date.getTime()) ? new Date(0).toISOString() : date.toISOString();
};

export async function getPodcastEpisodes(limit = 6): Promise<PodcastEpisode[]> {
  try {
    const response = await fetch(PODCAST_FEED_URL, {
      headers: {
        'user-agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      throw new Error(`Podcast feed responded with status ${response.status}`);
    }

    const xml = await response.text();
    const parsed = parser.parse(xml);
    const items = asArray<Record<string, string>>(parsed?.rss?.channel?.item);

    const episodes = items
      .map((item) => ({
        title: (item.title || '').trim(),
        link: item.link || '',
        publishedAt: toIsoDate(item.pubDate),
        duration: item['itunes:duration'],
      }))
      .filter((item) => item.title && item.link)
      .slice(0, limit);

    return episodes.length > 0 ? episodes : fallbackPodcastEpisodes.slice(0, limit);
  } catch (error) {
    console.error('Error while fetching podcast episodes:', error);
    return fallbackPodcastEpisodes.slice(0, limit);
  }
}

export async function getYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(YOUTUBE_FEED_URL, {
      headers: {
        'user-agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      throw new Error(`YouTube feed responded with status ${response.status}`);
    }

    const xml = await response.text();
    const parsed = parser.parse(xml);
    const entries = asArray<Record<string, string | Record<string, string>>>(parsed?.feed?.entry);

    const videos = entries
      .map((entry) => {
        const id = String(entry['yt:videoId'] || '').trim();
        const mediaGroup = (entry['media:group'] || {}) as Record<string, Record<string, string>>;
        const thumbnail = mediaGroup?.['media:thumbnail']?.['@_url'];
        const linkObject = entry.link as Record<string, string> | undefined;

        return {
          id,
          title: String(entry.title || '').trim(),
          link: linkObject?.['@_href'] || `https://www.youtube.com/watch?v=${id}`,
          publishedAt: toIsoDate(String(entry.published || '')),
          thumbnail: thumbnail || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
        };
      })
      .filter((item) => item.id && item.title)
      .slice(0, limit);

    return videos.length > 0 ? videos : fallbackYouTubeVideos.slice(0, limit);
  } catch (error) {
    console.error('Error while fetching YouTube videos:', error);
    return fallbackYouTubeVideos.slice(0, limit);
  }
}

export const formatPolishDate = (isoDate: string): string => {
  return new Intl.DateTimeFormat('pl-PL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(isoDate));
};
