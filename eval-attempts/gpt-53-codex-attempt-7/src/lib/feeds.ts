export type PodcastEpisode = {
  title: string;
  url: string;
  publishedAt: string;
  duration?: string;
  excerpt: string;
};

export type YouTubeVideo = {
  title: string;
  url: string;
  videoId: string;
  thumbnail: string;
  publishedAt: string;
};

const PODCAST_FEED_URL = 'https://anchor.fm/s/c72d808/podcast/rss';
const YOUTUBE_FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';

const FALLBACK_PODCAST: PodcastEpisode[] = [
  {
    title:
      'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    publishedAt: '2025-09-25T04:00:00.000Z',
    duration: '00:33:45',
    excerpt:
      'Bariery językowe programistów, skuteczne metody nauki angielskiego i praktyczne wskazówki do pracy w międzynarodowym środowisku.'
  },
  {
    title:
      'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    publishedAt: '2025-09-10T04:00:00.000Z',
    duration: '00:45:56',
    excerpt:
      'O ścieżce od juniora do seniora: priorytety w rozwoju, decyzje zawodowe i realia pracy w branży IT.'
  },
  {
    title:
      'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    publishedAt: '2024-10-10T12:31:14.000Z',
    duration: '01:16:44',
    excerpt:
      'Rozmowa o architekturze frontendu jako serii decyzji technicznych i biznesowych, a nie tylko zestawie narzędzi.'
  }
];

const FALLBACK_YOUTUBE: YouTubeVideo[] = [
  {
    title: 'Skills vs AgentsMD: 53% vs 100%. Co poszło nie tak?',
    url: 'https://www.youtube.com/watch?v=_kQHwE6zAbM',
    videoId: '_kQHwE6zAbM',
    thumbnail: 'https://i4.ytimg.com/vi/_kQHwE6zAbM/hqdefault.jpg',
    publishedAt: '2026-02-09T18:00:06.000Z'
  },
  {
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    url: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
    videoId: 'KAJTsQbqBow',
    thumbnail: 'https://i4.ytimg.com/vi/KAJTsQbqBow/hqdefault.jpg',
    publishedAt: '2026-02-02T18:00:06.000Z'
  },
  {
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    url: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
    videoId: 'uwi39C2O8NI',
    thumbnail: 'https://i4.ytimg.com/vi/uwi39C2O8NI/hqdefault.jpg',
    publishedAt: '2026-01-19T18:00:00.000Z'
  }
];

const XML_HEADERS = {
  Accept: 'application/xml,text/xml;q=0.9,*/*;q=0.8',
  'User-Agent': 'Przeprogramowani-Site/1.0'
};

function decodeEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/g, '/');
}

function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function cleanXmlValue(input: string | undefined): string {
  if (!input) return '';

  const withoutCdata = input
    .replace(/^<!\[CDATA\[/, '')
    .replace(/\]\]>$/, '')
    .trim();

  return decodeEntities(withoutCdata);
}

function readTag(fragment: string, tagName: string): string {
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`);
  const match = fragment.match(pattern);
  return cleanXmlValue(match?.[1]);
}

function readAttr(fragment: string, tagName: string, attrName: string): string {
  const pattern = new RegExp(`<${tagName}[^>]*\\b${attrName}="([^"]+)"[^>]*>`);
  const match = fragment.match(pattern);
  return cleanXmlValue(match?.[1]);
}

function parseDate(input: string): string {
  const value = new Date(input);
  if (Number.isNaN(value.getTime())) {
    return new Date(0).toISOString();
  }
  return value.toISOString();
}

function buildExcerpt(description: string): string {
  const plain = stripHtml(description);
  if (plain.length <= 190) return plain;
  return `${plain.slice(0, 187)}...`;
}

function parsePodcast(xml: string): PodcastEpisode[] {
  const episodes: PodcastEpisode[] = [];
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

  for (const itemMatch of items) {
    const fragment = itemMatch[1];
    const title = readTag(fragment, 'title');
    const url = readTag(fragment, 'link');
    const publishedAt = parseDate(readTag(fragment, 'pubDate'));
    const description = readTag(fragment, 'description');
    const duration = readTag(fragment, 'itunes:duration');

    if (!title || !url) {
      continue;
    }

    episodes.push({
      title,
      url,
      publishedAt,
      duration: duration || undefined,
      excerpt: buildExcerpt(description)
    });
  }

  return episodes.sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0
  );
}

function parseYouTube(xml: string): YouTubeVideo[] {
  const videos: YouTubeVideo[] = [];
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

  for (const entryMatch of entries) {
    const fragment = entryMatch[1];
    const title = readTag(fragment, 'title');
    const publishedAt = parseDate(readTag(fragment, 'published'));

    const videoId = readTag(fragment, 'yt:videoId');
    const url = readAttr(fragment, 'link', 'href') ||
      (videoId ? `https://www.youtube.com/watch?v=${videoId}` : '');
    const thumbnail = readAttr(fragment, 'media:thumbnail', 'url') ||
      (videoId ? `https://i4.ytimg.com/vi/${videoId}/hqdefault.jpg` : '');

    if (!title || !url || !videoId) {
      continue;
    }

    videos.push({
      title,
      url,
      videoId,
      thumbnail,
      publishedAt
    });
  }

  return videos.sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : a.publishedAt > b.publishedAt ? -1 : 0
  );
}

async function fetchXml(url: string): Promise<string> {
  const response = await fetch(url, { headers: XML_HEADERS });
  if (!response.ok) {
    throw new Error(`Feed download failed: ${response.status}`);
  }

  return response.text();
}

export async function getPodcastEpisodes(limit = 6): Promise<PodcastEpisode[]> {
  try {
    const xml = await fetchXml(PODCAST_FEED_URL);
    const parsed = parsePodcast(xml).slice(0, limit);
    return parsed.length > 0 ? parsed : FALLBACK_PODCAST.slice(0, limit);
  } catch {
    return FALLBACK_PODCAST.slice(0, limit);
  }
}

export async function getYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const xml = await fetchXml(YOUTUBE_FEED_URL);
    const parsed = parseYouTube(xml).slice(0, limit);
    return parsed.length > 0 ? parsed : FALLBACK_YOUTUBE.slice(0, limit);
  } catch {
    return FALLBACK_YOUTUBE.slice(0, limit);
  }
}
