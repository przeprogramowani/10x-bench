import { parseHTML } from 'linkedom';
import { XMLParser } from 'fast-xml-parser';

const YOUTUBE_FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';
const PODCAST_PAGE_URL = 'https://przeprogramowani.pl/podcast';

export interface Founder {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  link: string;
}

export interface Course {
  name: string;
  accent: string;
  href: string;
  tag: string;
  description: string;
  highlights: string[];
  stats: string[];
}

export interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  url: string;
}

export interface PodcastSeries {
  title: string;
  subtitle: string;
  listeners: string;
  episodes: PodcastEpisode[];
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  views: number;
}

export interface SiteData {
  about: {
    title: string;
    description: string[];
    founders: Founder[];
    partners: string[];
  };
  courses: Course[];
  podcast: {
    title: string;
    description: string;
    platforms: Array<{ label: string; href: string }>;
    series: PodcastSeries[];
  };
  youtube: {
    channelName: string;
    channelUrl: string;
    videos: YouTubeVideo[];
  };
  sourcedAt: string;
}

const founders: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    focus: ['Programy edukacyjne', 'Architektura produktów', 'Full-stack engineering'],
    link: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" i specjalista TypeScript, React oraz Node.js.',
    focus: ['Frontend platformy', 'TypeScript i React', 'Nauka oparta o research'],
    link: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

const partners = [
  'Huuuge Games',
  'Nutridome',
  'SmartRecruiters',
  'Future Processing',
  'Callstack',
  'edrone',
  'Xfive',
  'Euvic',
  'Strabag',
  'Autodesk',
];

const courses: Course[] = [
  {
    name: '10xDevs',
    accent: 'var(--color-accent)',
    href: 'https://www.10xdevs.pl/',
    tag: 'Hero programu',
    description:
      '5-tygodniowy, intensywny program o pracy z AI w całym cyklu tworzenia oprogramowania: od researchu i planowania, przez implementację, aż po utrzymanie produkcji.',
    highlights: [
      'AI-Native Software Engineering zamiast naiwnego vibe codingu',
      'Workflow pracy z agentami na greenfieldach i projektach legacy',
      'Praktyki jakości, testów, code review i odpowiedzialnego wdrażania AI',
    ],
    stats: ['5+1 tygodni', '3700+ absolwentów', 'Astro + React + TypeScript'],
  },
  {
    name: 'Opanuj Frontend',
    accent: 'var(--color-signal)',
    href: 'https://opanujfrontend.pl/',
    tag: 'Kurs premium',
    description:
      'Intensywne 10-tygodniowe szkolenie dla frontend developerów, którzy chcą budować skalowalne aplikacje wysokiej jakości i wejść na poziom architektury, procesów oraz jakości delivery.',
    highlights: [
      '5 modułów o wzorcach, quality engineeringu, CI/CD i architekturze',
      'Codzienne wsparcie senior frontend developerów',
      'Nauka testów, komunikacji z API, wydajności i pracy z AI',
    ],
    stats: ['10 tygodni', '383 absolwentów', 'React, Astro, CI/CD'],
  },
  {
    name: 'Opanuj TypeScript',
    accent: 'var(--color-teal)',
    href: 'https://www.opanujtypescript.pl/',
    tag: 'Frontend Pro',
    description:
      'Praktyczny kurs dla osób, które chcą pewnie używać TypeScriptu w produkcyjnych projektach React i świadomie korzystać z generyków, wzorców typowania oraz narzędzi nowoczesnego ekosystemu.',
    highlights: [
      'TypeScript 5.7+ i React 19 w realnych scenariuszach produkcyjnych',
      'Ponad 40 ćwiczeń oraz wzorce typowania komponentów, hooków i stanu',
      'Narzędzia takie jak Zod, React Query, SWR, tRPC i Astro 5',
    ],
    stats: ['121 programistów', '40+ ćwiczeń', 'TypeScript 5.7+'],
  },
];

const podcastSeriesMeta: Record<string, { subtitle: string; listeners: string }> = {
  'Opanuj.AI Podcast': {
    subtitle: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.',
    listeners: 'Ponad 4000 słuchaczy',
  },
  'Przeprogramowani ft. Gość': {
    subtitle: 'Rozmowy dla głodnych wiedzy o technologii, karierze i nowoczesnym developmencie.',
    listeners: 'Ponad 3800 słuchaczy',
  },
};

const podcastPlatforms = [
  { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/przeprogramowani/id1524434230' },
  { label: 'Spotify', href: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo' },
  {
    label: 'RSS',
    href: 'https://anchor.fm/s/22544b7c/podcast/rss',
  },
];

let cachedSiteData: Promise<SiteData> | undefined;

export async function getSiteData(): Promise<SiteData> {
  if (!cachedSiteData) {
    cachedSiteData = loadSiteData();
  }

  return cachedSiteData;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function truncateWords(text: string, maxWords: number): string {
  const words = normalizeWhitespace(text).split(' ');

  if (words.length <= maxWords) {
    return words.join(' ');
  }

  return `${words.slice(0, maxWords).join(' ')}...`;
}

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; CodexSiteBuilder/1.0; +https://openai.com)',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function loadSiteData(): Promise<SiteData> {
  const [podcastSeries, youtubeVideos] = await Promise.all([
    getPodcastSeries(),
    getRecentYouTubeVideos(),
  ]);

  return {
    about: {
      title: 'Łączymy świat programowania, biznesu i rozwoju',
      description: [
        'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Wierzą, że najlepsi programiści patrzą szerzej: na architekturę, na biznes, na ludzi i na siebie.',
        'Tworzą treści, kursy i narzędzia, które pomagają programistom rozwijać się na wielu płaszczyznach. Od technicznych deep-dive’ów po rozmowy o karierze i rozwoju.',
      ],
      founders,
      partners,
    },
    courses,
    podcast: {
      title: 'Słuchaj podcastów o technologii, AI i programowaniu',
      description:
        'Na stronie podcastu Przeprogramowanych dostępne są dwa formaty: techniczny Opanuj.AI Podcast oraz rozmowy Przeprogramowani ft. Gość.',
      platforms: podcastPlatforms,
      series: podcastSeries,
    },
    youtube: {
      channelName: 'Przeprogramowani',
      channelUrl: 'https://www.youtube.com/channel/UCb2Y3vMeD6N4WDt5Acw7Arw',
      videos: youtubeVideos,
    },
    sourcedAt: new Date().toISOString(),
  };
}

async function getPodcastSeries(limitPerSeries = 6): Promise<PodcastSeries[]> {
  const html = await fetchText(PODCAST_PAGE_URL);
  const { document } = parseHTML(html);
  const nodes = [...document.querySelectorAll('h2, a[href*="podcasters.spotify.com"]')];

  const grouped = new Map<string, PodcastEpisode[]>();
  let currentSeries = '';

  for (const node of nodes) {
    if (node.tagName === 'H2') {
      currentSeries = normalizeWhitespace(node.textContent);
      grouped.set(currentSeries, []);
      continue;
    }

    if (!currentSeries) {
      continue;
    }

    const text = normalizeWhitespace(node.textContent);
    const durationMatch = text.match(/^(\d{2}:\d{2}:\d{2})\s+/);
    const duration = durationMatch?.[1] ?? '';
    const withoutDuration = text.replace(/^(\d{2}:\d{2}:\d{2})\s+/, '');
    const [rawTitle, ...rest] = withoutDuration.split(' | ');
    const title = normalizeWhitespace(rawTitle);
    let description = normalizeWhitespace(rest.join(' | '));

    const shortSeriesName = currentSeries.replace(/\s+Podcast$/, '');
    if (description.startsWith(currentSeries)) {
      description = description.slice(currentSeries.length).trim();
    } else if (description.startsWith(shortSeriesName)) {
      description = description.slice(shortSeriesName.length).trim();
    }

    grouped.get(currentSeries)?.push({
      title,
      description: truncateWords(description, 28),
      duration,
      url: node.getAttribute('href') ?? '#',
    });
  }

  return [...grouped.entries()]
    .filter(([, episodes]) => episodes.length > 0)
    .map(([title, episodes]) => ({
      title,
      subtitle: podcastSeriesMeta[title]?.subtitle ?? 'Podcast Przeprogramowanych',
      listeners: podcastSeriesMeta[title]?.listeners ?? '',
      episodes: episodes.slice(0, limitPerSeries),
    }));
}

async function getRecentYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  const xml = await fetchText(YOUTUBE_FEED_URL);
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });
  const parsed = parser.parse(xml) as {
    feed?: {
      entry?: Array<Record<string, unknown>> | Record<string, unknown>;
    };
  };

  const entries = toArray(parsed.feed?.entry);

  return entries.slice(0, limit).map((entry) => {
    const mediaGroup = entry['media:group'] as Record<string, unknown> | undefined;
    const mediaCommunity = mediaGroup?.['media:community'] as Record<string, unknown> | undefined;
    const stats = mediaCommunity?.['media:statistics'] as Record<string, string> | undefined;
    const thumbnail = mediaGroup?.['media:thumbnail'] as Record<string, string> | undefined;
    const links = toArray(entry.link as Record<string, string> | Array<Record<string, string>> | undefined);
    const alternateLink = links.find((link) => link['@_rel'] === 'alternate')?.['@_href'] ?? '#';

    return {
      id: String(entry['yt:videoId'] ?? ''),
      title: String(entry.title ?? ''),
      description: truncateWords(String(mediaGroup?.['media:description'] ?? ''), 30),
      url: alternateLink,
      thumbnail: String(thumbnail?.['@_url'] ?? ''),
      publishedAt: String(entry.published ?? ''),
      views: Number(stats?.['@_views'] ?? 0),
    };
  });
}
