export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
};

export type PodcastEpisode = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  description: string;
  duration: string;
};

export type PodcastShow = {
  id: string;
  title: string;
  url: string;
  description: string;
  cover: string;
  episodes: PodcastEpisode[];
};

type PodcastSource = {
  id: string;
  title: string;
  url: string;
};

const YOUTUBE_FEED_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';

const PODCAST_SOURCES: PodcastSource[] = [
  {
    id: 'opanujai',
    title: 'Opanuj.AI Podcast',
    url: 'https://podcasters.spotify.com/pod/show/opanujai'
  },
  {
    id: 'przeprogramowani',
    title: 'Przeprogramowani Podcast',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani'
  }
];

const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: '_kQHwE6zAbM',
    title: 'Skills vs AgentsMD: 53% vs 100%. Co poszlo nie tak?',
    url: 'https://www.youtube.com/watch?v=_kQHwE6zAbM',
    publishedAt: '2026-02-09T18:00:06.000Z',
    thumbnail: 'https://i4.ytimg.com/vi/_kQHwE6zAbM/hqdefault.jpg',
    description: 'Najswiezszy material z kanalu Przeprogramowani.'
  },
  {
    id: 'KAJTsQbqBow',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI?',
    url: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
    publishedAt: '2026-02-02T18:00:06.000Z',
    thumbnail: 'https://i4.ytimg.com/vi/KAJTsQbqBow/hqdefault.jpg',
    description: 'Przeglad narzedzi i workflow AI dla developerow.'
  },
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTORE NAPRAWILY MOJ WORKFLOW PROGRAMOWANIA Z AI',
    url: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
    publishedAt: '2026-01-26T18:00:06.000Z',
    thumbnail: 'https://i4.ytimg.com/vi/uwi39C2O8NI/hqdefault.jpg',
    description: 'Praktyczne techniki codziennej pracy z AI.'
  }
];

const FALLBACK_PODCAST_SHOWS: PodcastShow[] = [
  {
    id: 'opanujai',
    title: 'Opanuj.AI Podcast',
    url: 'https://podcasters.spotify.com/pod/show/opanujai',
    description: 'Cykliczne podsumowanie najwazniejszych wydarzen ze swiata AI.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo400/37949556/37949556-1685638212506-bfc1469680543.jpg',
    episodes: [
      {
        id: 'e3eg2n4',
        title:
          'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7',
        url: 'https://open.spotify.com/episode/4P4ygiTxKmKcbMGG9FMPYC',
        publishedAt: '2026-02-01T18:45:06.000Z',
        description: 'Miesieczne podsumowanie najwazniejszych nowosci AI.',
        duration: '01:23:04'
      },
      {
        id: 'e3dcmq5',
        title: 'Wielkie podsumowanie AI w 2025',
        url: 'https://open.spotify.com/episode/4YgI2t3UDDUaKR6PFpLQ24',
        publishedAt: '2026-01-09T05:00:00.000Z',
        description: 'Przekroj trendow, narzedzi i najwiekszych zmian w AI.',
        duration: '01:47:28'
      }
    ]
  },
  {
    id: 'przeprogramowani',
    title: 'Przeprogramowani Podcast',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    description: 'Podcast o programowaniu, karierze i nowoczesnym tworzeniu oprogramowania.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo400/1988530/1988530-1700599022827-301b808b3e021.jpg',
    episodes: [
      {
        id: 'e38lmlo',
        title: 'Programista vs. Angielski: Od strachu do sukcesu',
        url: 'https://open.spotify.com/episode/5LDPF9s1zZdmXsn2khdKfb',
        publishedAt: '2025-09-25T04:00:00.000Z',
        description: 'Praktyczna rozmowa o komunikacji i rozwoju kariery.',
        duration: '00:33:45'
      },
      {
        id: 'e380adn',
        title: 'O dojrzewaniu zawodowym programisty',
        url: 'https://open.spotify.com/episode/34IvjGU6hd6vei3DdNKAoh',
        publishedAt: '2025-09-10T04:00:00.000Z',
        description: 'Rozmowa o rozwoju senioralnym i decyzjach zawodowych.',
        duration: '00:45:56'
      }
    ]
  }
];

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'accept-language': 'pl-PL,pl;q=0.9,en;q=0.8'
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed for ${url}: ${response.status}`);
  }

  return response.text();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function readTag(source: string, tagName: string): string {
  const escaped = escapeRegExp(tagName);
  const matcher = new RegExp(`<${escaped}>([\\s\\S]*?)<\\/${escaped}>`);
  return (source.match(matcher)?.[1] ?? '').trim();
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x2F;/g, '/')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripHtml(value: string): string {
  return decodeEntities(value.replace(/<[^>]+>/g, ' '));
}

function truncate(value: string, limit = 170): string {
  if (value.length <= limit) return value;
  return `${value.slice(0, limit - 1).trimEnd()}...`;
}

function formatDuration(ms: number): string {
  if (!Number.isFinite(ms) || ms <= 0) {
    return '--:--';
  }

  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function parseYouTubeFeed(xml: string, limit: number): YouTubeVideo[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((entry) => entry[1]);

  return entries.slice(0, limit).map((entry) => {
    const id = readTag(entry, 'yt:videoId');
    const title = decodeEntities(readTag(entry, 'title'));
    const url = entry.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/)?.[1] || `https://www.youtube.com/watch?v=${id}`;
    const publishedAt = readTag(entry, 'published');
    const description = truncate(decodeEntities(readTag(entry, 'media:description')));
    const thumbMatch = entry.match(/<media:thumbnail[^>]*url="([^"]+)"/);

    return {
      id,
      title,
      url: url || `https://www.youtube.com/watch?v=${id}`,
      publishedAt,
      thumbnail: thumbMatch?.[1] ?? `https://i4.ytimg.com/vi/${id}/hqdefault.jpg`,
      description
    };
  });
}

function parseSpotifyShow(html: string, fallbackTitle: string, sourceId: string, limit: number): PodcastShow {
  const marker = 'window.__STATE__ = ';
  const start = html.indexOf(marker);

  if (start === -1) {
    throw new Error(`State marker missing for ${sourceId}`);
  }

  const jsonStart = start + marker.length;
  let index = jsonStart;
  let depth = 0;
  let inString = false;
  let isEscaped = false;
  let jsonEnd = -1;

  while (index < html.length) {
    const char = html[index];

    if (inString) {
      if (isEscaped) {
        isEscaped = false;
      } else if (char === '\\') {
        isEscaped = true;
      } else if (char === '"') {
        inString = false;
      }
      index += 1;
      continue;
    }

    if (char === '"') {
      inString = true;
      index += 1;
      continue;
    }

    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        jsonEnd = index;
        break;
      }
    }

    index += 1;
  }

  if (jsonEnd === -1) {
    throw new Error(`State JSON not terminated for ${sourceId}`);
  }

  const rawState = html.slice(jsonStart, jsonEnd + 1);

  const state = JSON.parse(rawState);

  const preview = state?.episodePreview;
  const episodes = Array.isArray(preview?.episodes) ? preview.episodes : [];
  const showTitle = preview?.creator?.name || fallbackTitle;
  const showDescription = state?.pageMetadata?.description || 'Podcast Przeprogramowanych';
  const showCover =
    state?.pageMetadata?.image ||
    state?.station?.podcastMetadata?.podcastImage ||
    'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg';

  const parsedEpisodes: PodcastEpisode[] = episodes.slice(0, limit).map((episode: any) => {
    const fallbackUrl = episode?.shareLinkPath
      ? `https://podcasters.spotify.com${episode.shareLinkPath}`
      : `https://podcasters.spotify.com/pod/show/${sourceId}`;

    return {
      id: String(episode.episodeId),
      title: String(episode.title || 'Nowy odcinek'),
      url: String(episode.spotifyUrl || fallbackUrl),
      publishedAt: String(episode.publishOn || episode.created || ''),
      description: truncate(stripHtml(String(episode.descriptionPreview || episode.description || ''))),
      duration: formatDuration(Number(episode.duration || 0))
    };
  });

  return {
    id: sourceId,
    title: showTitle,
    url: state?.station?.podcastMetadata?.spotifyShowUrl || `https://podcasters.spotify.com/pod/show/${sourceId}`,
    description: truncate(stripHtml(showDescription), 190),
    cover: showCover,
    episodes: parsedEpisodes
  };
}

export async function fetchLatestYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const xml = await fetchText(YOUTUBE_FEED_URL);
    const videos = parseYouTubeFeed(xml, limit).filter((video) => video.id && video.title);

    if (videos.length > 0) {
      return videos;
    }
  } catch (error) {
    console.error('Could not fetch YouTube feed:', error);
  }

  return FALLBACK_VIDEOS.slice(0, limit);
}

export async function fetchPodcastShows(limitPerShow = 6): Promise<PodcastShow[]> {
  try {
    const shows = await Promise.all(
      PODCAST_SOURCES.map(async (source) => {
        const html = await fetchText(source.url);
        return parseSpotifyShow(html, source.title, source.id, limitPerShow);
      })
    );

    const nonEmpty = shows.filter((show) => show.episodes.length > 0);
    if (nonEmpty.length > 0) {
      return nonEmpty;
    }
  } catch (error) {
    console.error('Could not fetch podcast episodes:', error);
  }

  return FALLBACK_PODCAST_SHOWS.map((show) => ({
    ...show,
    episodes: show.episodes.slice(0, limitPerShow)
  }));
}
