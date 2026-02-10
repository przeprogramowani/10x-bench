import { load } from 'cheerio';

const BASE_URL = 'https://przeprogramowani.pl';
const CACHE_TTL_MS = 1000 * 60 * 20;

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface Course {
  name: string;
  href: string;
  description: string;
  category: string;
}

export interface PodcastEpisode {
  title: string;
  href: string;
  description: string;
  image: string;
  duration: string;
}

export interface Video {
  title: string;
  href: string;
  image: string;
}

export interface SiteData {
  fetchedAt: string;
  hero: {
    title: string;
    badge: string;
    description: string;
    href: string;
  };
  about: {
    headline: string;
    description: string;
    mission: string[];
    slogan: string;
    founders: Founder[];
  };
  courses: Course[];
  podcast: {
    description: string;
    episodes: PodcastEpisode[];
  };
  youtube: {
    description: string;
    videos: Video[];
  };
}

let cached: { timestamp: number; data: SiteData } | null = null;

const FALLBACK_DATA: SiteData = {
  fetchedAt: new Date().toISOString(),
  hero: {
    title: '10xDevs',
    badge: 'Programuj z AI',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    href: 'https://10xdevs.pl'
  },
  about: {
    headline: 'Łączymy świat programowania, biznesu i rozwoju',
    description: 'Kim jesteśmy? Tworzymy edukację technologiczną dla ambitnych programistów.',
    mission: [
      'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym.',
      'Tworzymy treści, kursy i narzędzia, które pomagają rozwijać się na wielu płaszczyznach.'
    ],
    slogan: 'Zyskaj szersze spojrzenie na programowanie.',
    founders: [
      {
        name: 'Przemek Smyrdek',
        role: 'Co-founder, Przeprogramowani',
        bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager.',
        image: '/favicon.ico',
        linkedin: 'https://www.linkedin.com/in/psmyrdek/'
      },
      {
        name: 'Marcin Czarkowski',
        role: 'Co-founder, Przeprogramowani',
        bio: 'Lead techniczny, twórca materiałów edukacyjnych i podcastów o AI.',
        image: '/favicon.ico',
        linkedin: 'https://www.linkedin.com/in/mkczarkowski/'
      }
    ]
  },
  courses: [
    {
      name: '10xDevs',
      href: 'https://10xdevs.pl',
      description: 'Programuj z AI i buduj nowoczesne procesy software development.',
      category: 'AI'
    },
    {
      name: 'Opanuj Frontend',
      href: 'https://www.opanujfrontend.pl',
      description: 'Program rozwoju nowoczesnego frontend developera.',
      category: 'Frontend'
    },
    {
      name: 'Opanuj TypeScript',
      href: 'https://www.opanujtypescript.pl',
      description: 'Szkolenie TypeScript dla produkcyjnych projektów.',
      category: 'TypeScript'
    }
  ],
  podcast: {
    description: 'Podcasty o programowaniu, AI i technologii.',
    episodes: []
  },
  youtube: {
    description: 'Filmy o praktycznym wykorzystaniu AI i nowoczesnym programowaniu.',
    videos: []
  }
};

const toText = (value: string | undefined | null): string =>
  (value ?? '').replace(/\s+/g, ' ').trim();

const toAbsolute = (value: string | undefined | null): string => {
  if (!value) {
    return '';
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  if (value.startsWith('//')) {
    return `https:${value}`;
  }

  if (value.startsWith('/')) {
    return `${BASE_URL}${value}`;
  }

  return value;
};

const uniqBy = <T>(items: T[], key: (item: T) => string): T[] => {
  const seen = new Set<string>();
  const result: T[] = [];

  for (const item of items) {
    const value = key(item);
    if (!value || seen.has(value)) {
      continue;
    }
    seen.add(value);
    result.push(item);
  }

  return result;
};

async function fetchPage(pathname: string): Promise<string> {
  const response = await fetch(`${BASE_URL}${pathname}`, {
    headers: {
      'accept-language': 'pl-PL,pl;q=0.9,en;q=0.8'
    }
  });

  if (!response.ok) {
    throw new Error(`Nie udało się pobrać ${pathname}: ${response.status}`);
  }

  return response.text();
}

function parseHome(html: string): {
  hero: SiteData['hero'];
  courses: Course[];
  youtube: SiteData['youtube'];
} {
  const $ = load(html);

  const heroTitle = toText($('main h1').first().text()) || FALLBACK_DATA.hero.title;
  const heroBadge =
    toText(
      $('span')
        .filter((_, element) => toText($(element).text()).includes('Nowość'))
        .first()
        .text()
    ) || FALLBACK_DATA.hero.badge;
  const heroDescription =
    toText($('main h1').first().nextAll('p').first().text()) || FALLBACK_DATA.hero.description;
  const heroHref =
    toAbsolute($('main a[href*="10xdevs.pl"]').first().attr('href')) || FALLBACK_DATA.hero.href;

  const parsedCourses: Course[] = [];

  $('a[href*="opanujfrontend"], a[href*="opanujtypescript"]').each((_, anchor) => {
    const card = $(anchor);
    parsedCourses.push({
      name: toText(card.find('h3').first().text()),
      href: toAbsolute(card.attr('href')),
      description: toText(card.find('p').first().text()),
      category: toText(card.find('span').first().text()) || 'Kurs'
    });
  });

  parsedCourses.unshift({
    name: heroTitle,
    href: heroHref,
    description: heroDescription,
    category: 'AI'
  });

  const videos: Video[] = [];

  $('a[href*="youtube.com/watch"]').each((_, anchor) => {
    const card = $(anchor);
    videos.push({
      title: toText(card.find('h3').first().text()) || toText(card.find('img').attr('alt')),
      href: toAbsolute(card.attr('href')),
      image: toAbsolute(card.find('img').first().attr('src'))
    });
  });

  return {
    hero: {
      title: heroTitle,
      badge: heroBadge,
      description: heroDescription,
      href: heroHref
    },
    courses: uniqBy(parsedCourses, (course) => course.name).filter((course) => course.name).slice(0, 3),
    youtube: {
      description:
        toText(
          $('h2')
            .filter((_, element) => toText($(element).text()).includes('Filmy i podcasty'))
            .first()
            .closest('div')
            .find('p')
            .first()
            .text()
        ) || FALLBACK_DATA.youtube.description,
      videos: uniqBy(videos, (video) => video.href).filter((video) => video.title).slice(0, 9)
    }
  };
}

function parseAbout(html: string): SiteData['about'] {
  const $ = load(html);

  const description =
    toText($('meta[name="description"]').attr('content')) || FALLBACK_DATA.about.description;
  const headline =
    toText($('h1').first().nextAll('p').first().text()) || FALLBACK_DATA.about.headline;

  const missionStart = $('p')
    .filter((_, element) => toText($(element).text()).includes('Przeprogramowani to miejsce'))
    .first();

  const mission = [
    toText(missionStart.text()),
    toText(missionStart.nextAll('p').first().text())
  ].filter(Boolean);

  const slogan =
    toText(
      $('p')
        .filter((_, element) => toText($(element).text()).includes('Zyskaj szersze spojrzenie'))
        .first()
        .text()
    ) || FALLBACK_DATA.about.slogan;

  const founders: Founder[] = [];

  $('a[href*="linkedin.com"]').each((_, anchor) => {
    const card = $(anchor).closest('div.rounded-2xl');
    const name = toText(card.find('h3').first().text());

    if (!name) {
      return;
    }

    founders.push({
      name,
      role: toText(card.find('p').eq(0).text()),
      bio: toText(card.find('p').eq(1).text()),
      image: toAbsolute(card.find('img').first().attr('src')),
      linkedin: toAbsolute($(anchor).attr('href'))
    });
  });

  return {
    headline,
    description,
    mission: mission.length > 0 ? mission : FALLBACK_DATA.about.mission,
    slogan,
    founders: uniqBy(founders, (founder) => founder.name).slice(0, 3)
  };
}

function parsePodcast(html: string): SiteData['podcast'] {
  const $ = load(html);

  const description =
    toText($('meta[name="description"]').attr('content')) || FALLBACK_DATA.podcast.description;

  const episodes: PodcastEpisode[] = [];

  $('a[href*="podcasters.spotify.com/pod/show/"]').each((_, anchor) => {
    const card = $(anchor);
    episodes.push({
      title: toText(card.find('h3').first().text()),
      href: toAbsolute(card.attr('href')),
      description: toText(card.find('p').first().text()),
      image: toAbsolute(card.find('img').first().attr('src')),
      duration: toText(card.find('span').first().text()) || 'odcinek'
    });
  });

  return {
    description,
    episodes: uniqBy(episodes, (episode) => episode.href).filter((episode) => episode.title).slice(0, 9)
  };
}

async function buildData(): Promise<SiteData> {
  const [homeHtml, aboutHtml, podcastHtml] = await Promise.all([
    fetchPage('/'),
    fetchPage('/o-nas'),
    fetchPage('/podcast')
  ]);

  const home = parseHome(homeHtml);
  const about = parseAbout(aboutHtml);
  const podcast = parsePodcast(podcastHtml);

  return {
    fetchedAt: new Date().toISOString(),
    hero: home.hero,
    about,
    courses: home.courses.length > 0 ? home.courses : FALLBACK_DATA.courses,
    podcast,
    youtube: home.youtube
  };
}

export async function getPrzeprogramowaniData(): Promise<SiteData> {
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  try {
    const data = await buildData();
    cached = { timestamp: now, data };
    return data;
  } catch (error) {
    console.error('Błąd pobierania danych Przeprogramowani:', error);

    if (cached) {
      return cached.data;
    }

    return FALLBACK_DATA;
  }
}
