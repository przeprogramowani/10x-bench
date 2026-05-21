import { XMLParser } from 'fast-xml-parser';

export type Course = {
  name: string;
  description: string;
  href: string;
  label: string;
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
};

export type PodcastEpisode = {
  title: string;
  link: string;
  description: string;
  publishedAt: string;
  duration?: string;
};

export type YouTubeVideo = {
  id: string;
  title: string;
  link: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

const PODCAST_RSS = 'https://anchor.fm/s/c72d808/podcast/rss';
const YOUTUBE_RSS =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw';

export const navItems = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export const heroData = {
  badge: 'Nowa edycja',
  title: '10xDevs 3.0',
  subtitle:
    'Program mentoringowy dla developerów, którzy chcą budować produkty szybciej i mądrzej z AI, TypeScriptem i nowoczesnym stackiem webowym.',
  primaryCta: {
    label: 'Sprawdź 10xDevs',
    href: 'https://10xdevs.pl',
  },
  secondaryCta: {
    label: 'Poznaj Przeprogramowanych',
    href: '/o-nas',
  },
};

export const aboutData = {
  companyName: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  founded: '2017',
  mission:
    'Łączymy świat programowania, biznesu i rozwoju osobistego. Tworzymy kursy, podcast i materiały edukacyjne, które pomagają developerom pracować nowocześnie i skutecznie.',
  founders: [
    {
      name: 'Przemek Smyrdek',
      role: 'Co-founder',
      bio: 'Autor programów edukacyjnych i kursów, Lead Engineer/Manager. Praktyk full-stack z doświadczeniem w budowie produktów na skalę.',
      linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    },
    {
      name: 'Marcin Czarkowski',
      role: 'Co-founder',
      bio: 'Lead techniczny platformy frontendowej. Specjalizuje się w TypeScript, React i Node.js oraz projektowaniu skutecznej edukacji technicznej.',
      linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    },
  ] satisfies Founder[],
  highlights: [
    'Podcast i kanał YouTube o nowoczesnym programowaniu',
    'Programy edukacyjne prowadzone przez praktyków',
    'Społeczność developerów skupiona na rozwoju i realnych efektach',
  ],
};

export const courses: Course[] = [
  {
    name: 'Opanuj Frontend',
    label: 'Kurs',
    href: 'https://www.opanujfrontend.pl',
    description:
      'Kompletny program dla frontend developerów: architektura aplikacji webowych, testowanie, CI/CD i praktyczny workflow pracy w zespole.',
  },
  {
    name: 'Opanuj TypeScript',
    label: 'Kurs',
    href: 'https://www.opanujtypescript.pl',
    description:
      'Szkolenie skupione na TypeScript w realnych projektach produkcyjnych: lepsze modelowanie domeny, większa niezawodność i szybszy rozwój kodu.',
  },
];

const fallbackPodcast: PodcastEpisode[] = [
  {
    title:
      'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    description:
      'Jak skutecznie uczyć się angielskiego w IT i przełamać barierę mówienia w codziennej pracy programisty.',
    publishedAt: '2025-09-25T04:00:00.000Z',
    duration: '00:33:45',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    description:
      'Rozmowa o rozwoju kariery programisty, podejmowaniu decyzji i budowaniu wartości biznesowej.',
    publishedAt: '2025-09-10T04:00:00.000Z',
    duration: '00:45:56',
  },
  {
    title:
      'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin | Przeprogramowani ft. Gość',
    link: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    description:
      'Czym jest architektura frontendu i jakie decyzje mają największe znaczenie w skalowalnych projektach.',
    publishedAt: '2024-10-10T12:31:14.000Z',
    duration: '01:16:44',
  },
];

const fallbackVideos: YouTubeVideo[] = [
  {
    id: '_kQHwE6zAbM',
    title: 'Skills vs AgentsMD: 53% vs 100%. Co poszło nie tak?',
    link: 'https://www.youtube.com/watch?v=_kQHwE6zAbM',
    publishedAt: '2026-02-09T18:00:06.000Z',
    thumbnail: 'https://i4.ytimg.com/vi/_kQHwE6zAbM/hqdefault.jpg',
    description: 'Analiza jakości agentów AI i praktyczne wnioski dla codziennego programowania.',
  },
  {
    id: 'KAJTsQbqBow',
    title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
    link: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
    publishedAt: '2026-02-02T18:00:39.000Z',
    thumbnail: 'https://i4.ytimg.com/vi/KAJTsQbqBow/hqdefault.jpg',
    description: 'Przegląd narzędzi AI i ich praktycznej użyteczności w workflow developera.',
  },
  {
    id: 'uwi39C2O8NI',
    title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
    link: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
    publishedAt: '2026-01-29T18:00:09.000Z',
    thumbnail: 'https://i4.ytimg.com/vi/uwi39C2O8NI/hqdefault.jpg',
    description: 'Pięć konkretnych technik usprawniających współpracę z narzędziami AI.',
  },
];

function asArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function stripHtml(raw: string) {
  return raw
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

function getYouTubeLink(link: unknown): string {
  if (typeof link === 'string') {
    return link;
  }

  if (!link || typeof link !== 'object') {
    return '';
  }

  const links = Array.isArray(link) ? link : [link];
  const alternate = links.find((entry) => {
    if (!entry || typeof entry !== 'object') {
      return false;
    }

    const rel = (entry as Record<string, unknown>)['@_rel'];
    return rel === 'alternate';
  });

  const selected = alternate ?? links[0];
  if (!selected || typeof selected !== 'object') {
    return '';
  }

  return String((selected as Record<string, unknown>)['@_href'] ?? '');
}

export async function getLatestPodcastEpisodes(limit = 6): Promise<PodcastEpisode[]> {
  try {
    const response = await fetch(PODCAST_RSS, {
      headers: {
        'User-Agent': 'Przeprogramowani-Eval-Site/1.0',
      },
    });

    if (!response.ok) {
      return fallbackPodcast.slice(0, limit);
    }

    const text = await response.text();
    const parsed = parser.parse(text) as {
      rss?: {
        channel?: {
          item?: Array<Record<string, string>> | Record<string, string>;
        };
      };
    };

    const items = asArray(parsed.rss?.channel?.item)
      .map((item) => ({
        title: String(item.title ?? 'Bez tytułu'),
        link: String(item.link ?? '#'),
        description: stripHtml(String(item.description ?? '')), 
        publishedAt: new Date(String(item.pubDate ?? Date.now())).toISOString(),
        duration: item['itunes:duration'] ? String(item['itunes:duration']) : undefined,
      }))
      .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

    return items.slice(0, limit).length > 0 ? items.slice(0, limit) : fallbackPodcast.slice(0, limit);
  } catch {
    return fallbackPodcast.slice(0, limit);
  }
}

export async function getLatestYouTubeVideos(limit = 6): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(YOUTUBE_RSS, {
      headers: {
        'User-Agent': 'Przeprogramowani-Eval-Site/1.0',
      },
    });

    if (!response.ok) {
      return fallbackVideos.slice(0, limit);
    }

    const text = await response.text();
    const parsed = parser.parse(text) as {
      feed?: {
        entry?: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };

    const items = asArray(parsed.feed?.entry)
      .map((entry) => {
        const mediaGroup = entry['media:group'] as Record<string, unknown> | undefined;
        const mediaThumbnail = mediaGroup?.['media:thumbnail'] as
          | Record<string, string>
          | undefined;
        const rawDescription = mediaGroup?.['media:description'];

        const id = String(entry['yt:videoId'] ?? '');
        const title = String(entry.title ?? 'Bez tytułu');

        return {
          id,
          title,
          link: getYouTubeLink(entry.link),
          publishedAt: new Date(String(entry.published ?? Date.now())).toISOString(),
          thumbnail:
            mediaThumbnail?.['@_url'] ??
            (id ? `https://i4.ytimg.com/vi/${id}/hqdefault.jpg` : '/favicon.svg'),
          description:
            typeof rawDescription === 'string'
              ? stripHtml(rawDescription)
              : 'Najnowszy materiał z kanału Przeprogramowani.',
        } satisfies YouTubeVideo;
      })
      .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

    return items.slice(0, limit).length > 0 ? items.slice(0, limit) : fallbackVideos.slice(0, limit);
  } catch {
    return fallbackVideos.slice(0, limit);
  }
}
