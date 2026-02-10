export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image?: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  summary: string[];
  tagline: string;
  yearsOnMarket: string;
  founders: Founder[];
}

export interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  url: string;
  image: string;
}

export interface YouTubeVideo {
  title: string;
  url: string;
  image: string;
  videoId: string;
}

export interface CourseData {
  key: 'frontend' | 'typescript' | '10xdevs';
  name: string;
  title: string;
  description: string;
  url: string;
  ctaLabel: string;
}

export interface SiteContent {
  about: AboutData;
  podcasts: PodcastEpisode[];
  videos: YouTubeVideo[];
  courses: CourseData[];
  fetchedAt: string;
}

const SOURCE_URLS = {
  home: 'https://przeprogramowani.pl',
  about: 'https://przeprogramowani.pl/o-nas',
  podcast: 'https://przeprogramowani.pl/podcast',
  courses: {
    frontend: 'https://opanujfrontend.pl',
    typescript: 'https://opanujtypescript.pl',
    tenX: 'https://10xdevs.pl'
  }
} as const;

const FETCH_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (compatible; PrzeprogramowaniShowcaseBot/1.0; +https://przeprogramowani.pl)'
};

let contentPromise: Promise<SiteContent> | null = null;

export function getSiteContent(): Promise<SiteContent> {
  if (!contentPromise) {
    contentPromise = loadSiteContent();
  }

  return contentPromise;
}

function fallbackAbout(): AboutData {
  return {
    title: 'Przeprogramowani',
    subtitle: 'Łączymy świat programowania, biznesu i rozwoju',
    summary: [
      'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym.',
      'Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się technicznie i zawodowo.'
    ],
    tagline: 'Zyskaj szersze spojrzenie na programowanie.',
    yearsOnMarket: '7 lat na rynku edukacji technologicznej',
    founders: [
      {
        name: 'Przemek Smyrdek',
        role: 'Co-founder, Przeprogramowani',
        bio: 'Autor programów edukacyjnych, Lead Engineer i manager. Twórca kursów, podcastów i materiałów dla developerów.',
        linkedin: 'https://www.linkedin.com/in/psmyrdek/'
      },
      {
        name: 'Marcin Czarkowski',
        role: 'Co-founder, Przeprogramowani',
        bio: 'Lead techniczny frontendowy i edukator. Specjalista TypeScript, React i Node.js.',
        linkedin: 'https://www.linkedin.com/in/mkczarkowski/'
      }
    ]
  };
}

function fallbackPodcasts(): PodcastEpisode[] {
  return [
    {
      title:
        'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin',
      description:
        'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI i nowoczesnego developmentu.',
      duration: '01:23:04',
      url: 'https://podcasters.spotify.com/pod/show/opanujai',
      image:
        'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg'
    },
    {
      title:
        'Wielkie Podsumowanie AI w 2025 - Modele, Narzędzia, Przełomy, Liderzy, Firmy i Wpadki Influencerów',
      description:
        'Najważniejsze trendy AI i ich wpływ na codzienną pracę programistów.',
      duration: '01:47:28',
      url: 'https://podcasters.spotify.com/pod/show/opanujai',
      image:
        'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg'
    },
    {
      title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
      description:
        'Praktyczna rozmowa o decyzjach architektonicznych, które mają realny wpływ na jakość aplikacji.',
      duration: '01:16:44',
      url: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
      image:
        'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg'
    }
  ];
}

function fallbackVideos(): YouTubeVideo[] {
  return [
    {
      title: 'Claude Code + GLM-4.7 - Programowanie z darmowym AI wreszcie możliwe?',
      url: 'https://www.youtube.com/watch?v=KAJTsQbqBow',
      image: 'https://i3.ytimg.com/vi/KAJTsQbqBow/maxresdefault.jpg',
      videoId: 'KAJTsQbqBow'
    },
    {
      title: '5 TECHNIK, KTÓRE NAPRAWIŁY MÓJ WORKFLOW PROGRAMOWANIA Z AI',
      url: 'https://www.youtube.com/watch?v=uwi39C2O8NI',
      image: 'https://i3.ytimg.com/vi/uwi39C2O8NI/maxresdefault.jpg',
      videoId: 'uwi39C2O8NI'
    },
    {
      title: 'Opanuj Agenta AI (Cursor, Codex, MCP) – praktyczne scenariusze dla programistów',
      url: 'https://www.youtube.com/watch?v=WJLGzf7qq-c',
      image: 'https://i3.ytimg.com/vi/WJLGzf7qq-c/maxresdefault.jpg',
      videoId: 'WJLGzf7qq-c'
    }
  ];
}

function fallbackCourses(): CourseData[] {
  return [
    {
      key: '10xdevs',
      name: '10xDevs',
      title: '10xDevs 3.0 - Dołącz do programistów nowej generacji',
      description:
        'Nowe oblicze programowania z wykorzystaniem Generatywnego AI i nowoczesnych praktyk software engineering.',
      url: 'https://10xdevs.pl',
      ctaLabel: 'Poznaj 10xDevs'
    },
    {
      key: 'frontend',
      name: 'Opanuj Frontend',
      title: 'Opanuj Frontend: AI Edition',
      description:
        'Intensywny program dla frontend developerów, którzy chcą budować aplikacje wysokiej jakości i pracować efektywnie z AI.',
      url: 'https://opanujfrontend.pl',
      ctaLabel: 'Zobacz kurs'
    },
    {
      key: 'typescript',
      name: 'Opanuj TypeScript',
      title: 'Opanuj TypeScript - Kurs TypeScript 5 i React 19',
      description:
        'Praktyczny kurs TypeScript i React dla osób, które chcą pewnie projektować typy i rozwijać duże aplikacje frontendowe.',
      url: 'https://opanujtypescript.pl',
      ctaLabel: 'Sprawdź program'
    }
  ];
}

async function loadSiteContent(): Promise<SiteContent> {
  const [homeHtmlResult, aboutHtmlResult, podcastHtmlResult] = await Promise.allSettled([
    fetchHtml(SOURCE_URLS.home),
    fetchHtml(SOURCE_URLS.about),
    fetchHtml(SOURCE_URLS.podcast)
  ]);

  const homeHtml = valueOrEmpty(homeHtmlResult);
  const aboutHtml = valueOrEmpty(aboutHtmlResult);
  const podcastHtml = valueOrEmpty(podcastHtmlResult);

  const about = parseAbout(aboutHtml || homeHtml);
  const podcasts = parsePodcastEpisodes(podcastHtml);
  const videos = parseYouTubeVideos(homeHtml);
  const courses = await parseCourses();

  return {
    about,
    podcasts,
    videos,
    courses,
    fetchedAt: new Date().toISOString()
  };
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: FETCH_HEADERS
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

function valueOrEmpty(result: PromiseSettledResult<string>): string {
  return result.status === 'fulfilled' ? result.value : '';
}

function parseAbout(aboutHtml: string): AboutData {
  if (!aboutHtml) {
    return fallbackAbout();
  }

  const fallback = fallbackAbout();
  const founders = extractFounders(aboutHtml);

  const subtitle = decodeHtml(
    firstMatch(
      aboutHtml,
      /<h1[^>]*>O nas<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/i,
      fallback.subtitle
    )
  );

  const summaryBlock = firstMatch(
    aboutHtml,
    /<div class="mt-6 space-y-4 text-gray-400 leading-relaxed">([\s\S]*?)<\/div>/i,
    ''
  );

  const summary = [...summaryBlock.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((entry) => cleanText(entry[1]))
    .filter(Boolean);

  const yearsOnMarket = cleanText(
    firstMatch(
      aboutHtml,
      /<h2[^>]*>(\d+\s+lat na rynku edukacji technologicznej)<\/h2>/i,
      fallback.yearsOnMarket
    )
  );

  return {
    title: 'Przeprogramowani',
    subtitle,
    summary: summary.length > 0 ? summary.slice(0, 2) : fallback.summary,
    tagline: summary[2] ?? fallback.tagline,
    yearsOnMarket,
    founders: founders.length > 0 ? founders : fallback.founders
  };
}

function extractFounders(aboutHtml: string): Founder[] {
  const founderPattern =
    /<div class="rounded-2xl[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p class="mt-1\.5[^>]*>([\s\S]*?)<\/p>[\s\S]*?<p class="mt-4[^>]*>([\s\S]*?)<\/p>[\s\S]*?<a href="([^"]+)"/g;

  const founders = [...aboutHtml.matchAll(founderPattern)].map((match) => ({
    name: cleanText(match[3] || match[2]),
    role: cleanText(match[4]),
    bio: cleanText(match[5]),
    linkedin: match[6],
    image: absoluteUrl(match[1], SOURCE_URLS.home)
  }));

  return uniqueBy(founders, (founder) => founder.name).slice(0, 4);
}

function parsePodcastEpisodes(podcastHtml: string): PodcastEpisode[] {
  if (!podcastHtml) {
    return fallbackPodcasts();
  }

  const blockPattern = /<a href="(https:\/\/podcasters\.spotify\.com\/pod\/show\/[^"]+)" class="group[\s\S]*?<\/a>/g;

  const episodes = [...podcastHtml.matchAll(blockPattern)]
    .map((block) => {
      const cardHtml = block[0];
      const title = cleanText(
        firstMatch(cardHtml, /<h3[^>]*>([\s\S]*?)<\/h3>/i, firstMatch(cardHtml, /alt="([^"]+)"/i, ''))
      );

      const description = cleanText(
        firstMatch(cardHtml, /<p class="mt-1 text-sm text-gray-400 line-clamp-2">([\s\S]*?)<\/p>/i, '')
      );

      const duration = cleanText(
        firstMatch(cardHtml, /<span class="absolute top-3 left-3[^>]*>([\s\S]*?)<\/span>/i, 'Podcast')
      );

      const image = absoluteUrl(
        firstMatch(cardHtml, /<img src="([^"]+)"/i, ''),
        SOURCE_URLS.home
      );

      return {
        title,
        description,
        duration,
        url: block[1],
        image
      };
    })
    .filter((episode) => episode.title && episode.url);

  const uniqueEpisodes = uniqueBy(episodes, (episode) => episode.url);

  return uniqueEpisodes.length > 0 ? uniqueEpisodes : fallbackPodcasts();
}

function parseYouTubeVideos(homeHtml: string): YouTubeVideo[] {
  if (!homeHtml) {
    return fallbackVideos();
  }

  const blockPattern =
    /<a href="(https:\/\/www\.youtube\.com\/watch\?v=[^"]+)"[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<\/a>/g;

  const videos = [...homeHtml.matchAll(blockPattern)]
    .map((match) => {
      const url = match[1];
      const videoId = extractVideoId(url);
      const title = cleanText(match[4] || match[3]);

      return {
        title,
        url,
        image: absoluteUrl(match[2], SOURCE_URLS.home),
        videoId
      };
    })
    .filter((video) => Boolean(video.videoId));

  const uniqueVideos = uniqueBy(videos, (video) => video.url);

  return uniqueVideos.length > 0 ? uniqueVideos : fallbackVideos();
}

async function parseCourses(): Promise<CourseData[]> {
  const fallback = fallbackCourses();

  const entries: Array<{
    key: CourseData['key'];
    name: string;
    url: string;
    ctaLabel: string;
  }> = [
    {
      key: '10xdevs',
      name: '10xDevs',
      url: SOURCE_URLS.courses.tenX,
      ctaLabel: 'Poznaj 10xDevs'
    },
    {
      key: 'frontend',
      name: 'Opanuj Frontend',
      url: SOURCE_URLS.courses.frontend,
      ctaLabel: 'Zobacz kurs'
    },
    {
      key: 'typescript',
      name: 'Opanuj TypeScript',
      url: SOURCE_URLS.courses.typescript,
      ctaLabel: 'Sprawdź program'
    }
  ];

  const settled = await Promise.allSettled(entries.map((entry) => fetchHtml(entry.url)));

  return entries.map((entry, index) => {
    const source = settled[index];
    const fallbackCourse = fallback.find((course) => course.key === entry.key)!;

    if (source.status !== 'fulfilled') {
      return fallbackCourse;
    }

    const html = source.value;
    const title = cleanText(firstMatch(html, /<title>([\s\S]*?)<\/title>/i, fallbackCourse.title));

    const description = cleanText(
      firstMatch(
        html,
        /<meta[^>]*name="description"[^>]*content="([^"]+)"[^>]*>/i,
        fallbackCourse.description
      )
    );

    return {
      key: entry.key,
      name: entry.name,
      title,
      description,
      url: entry.url,
      ctaLabel: entry.ctaLabel
    };
  });
}

function extractVideoId(url: string): string {
  const parsed = new URL(url);
  return parsed.searchParams.get('v') ?? '';
}

function firstMatch(content: string, pattern: RegExp, fallbackValue: string): string {
  const match = content.match(pattern);
  return match?.[1] ?? fallbackValue;
}

function cleanText(value: string): string {
  return decodeHtml(value.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function decodeHtml(value: string): string {
  const namedEntities: Record<string, string> = {
    '&amp;': '&',
    '&#38;': '&',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&lt;': '<',
    '&gt;': '>',
    '&nbsp;': ' '
  };

  let text = value;

  for (const [entity, replacement] of Object.entries(namedEntities)) {
    text = text.split(entity).join(replacement);
  }

  text = text.replace(/&#(\d+);/g, (_, decimalCode) =>
    String.fromCharCode(Number.parseInt(decimalCode, 10))
  );

  text = text.replace(/&#x([\da-f]+);/gi, (_, hexCode) =>
    String.fromCharCode(Number.parseInt(hexCode, 16))
  );

  return text;
}

function absoluteUrl(pathOrUrl: string, baseUrl: string): string {
  if (!pathOrUrl) {
    return '';
  }

  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  if (pathOrUrl.startsWith('//')) {
    return `https:${pathOrUrl}`;
  }

  try {
    return new URL(pathOrUrl, baseUrl).toString();
  } catch {
    return pathOrUrl;
  }
}

function uniqueBy<T>(list: T[], getKey: (item: T) => string): T[] {
  const seen = new Set<string>();
  const result: T[] = [];

  for (const item of list) {
    const key = getKey(item);

    if (!key || seen.has(key)) {
      continue;
    }

    seen.add(key);
    result.push(item);
  }

  return result;
}
