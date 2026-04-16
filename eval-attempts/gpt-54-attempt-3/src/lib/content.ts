export type VideoItem = {
  title: string;
  href: string;
  image: string;
};

export type PodcastEpisode = {
  title: string;
  href: string;
  image: string;
  duration: string;
  description: string;
};

export type PodcastCollection = {
  title: string;
  listeners: string;
  description: string;
  episodes: PodcastEpisode[];
};

const HOMEPAGE_URL = 'https://przeprogramowani.pl/';
const PODCAST_PAGE_URL = 'https://przeprogramowani.pl/podcast';

const fallbackVideos: VideoItem[] = [
  {
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    href: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    image: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg'
  },
  {
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    href: 'https://www.youtube.com/watch?v=aRkECt7derY',
    image: 'https://i3.ytimg.com/vi/aRkECt7derY/maxresdefault.jpg'
  },
  {
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    href: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
    image: 'https://i3.ytimg.com/vi/vH1T5qB4dBQ/maxresdefault.jpg'
  },
  {
    title: 'Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs',
    href: 'https://www.youtube.com/watch?v=bcs8WS4A5Zg',
    image: 'https://i3.ytimg.com/vi/bcs8WS4A5Zg/maxresdefault.jpg'
  },
  {
    title: 'MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja',
    href: 'https://www.youtube.com/watch?v=Vce4cD_5XW0',
    image: 'https://i3.ytimg.com/vi/Vce4cD_5XW0/maxresdefault.jpg'
  },
  {
    title: 'Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu, który programuje z Agentami',
    href: 'https://www.youtube.com/watch?v=hbuCLvwbMVg',
    image: 'https://i3.ytimg.com/vi/hbuCLvwbMVg/maxresdefault.jpg'
  }
];

const fallbackPodcasts: PodcastCollection[] = [
  {
    title: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.',
    episodes: [
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
        image:
          'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
        duration: '01:39:33',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu?'
      },
      {
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
        image:
          'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
        duration: '01:28:30',
        description:
          'Rozmowa o praktycznym wykorzystywaniu Claude Code, Cursora i Copilota w codziennej pracy programisty.'
      },
      {
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        href: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
        image:
          'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
        duration: '01:43:15',
        description:
          'O agentach, OpenClaw i zmianach w świecie AI, które najmocniej wpływają na software engineering.'
      }
    ]
  },
  {
    title: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    description: 'Rozmowy dla głodnych wiedzy.',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e3hbce3',
        image: 'https://przeprogramowani.pl/img/page-cover.jpg',
        duration: '00:33:45',
        description:
          'Praktyczne spojrzenie na naukę angielskiego w IT i największe bariery językowe programistów.'
      },
      {
        title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e3g3ddv',
        image: 'https://przeprogramowani.pl/img/page-cover.jpg',
        duration: '00:45:56',
        description:
          'Rozmowa o dojrzewaniu zawodowym, ciężkiej pracy, oczekiwaniach wobec seniorów i realiach rozwoju kariery.'
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin | Przeprogramowani ft. Gość',
        href: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie-Tomasz-Ducin--Przeprogramowani-ft--Go-e39m5bc',
        image: 'https://przeprogramowani.pl/img/page-cover.jpg',
        duration: '01:16:44',
        description:
          'Rozmowa o architekturze frontendu rozumianej jako zestaw świadomych decyzji, a nie tylko wybór narzędzi.'
      }
    ]
  }
];

function decodeHtml(value: string) {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&hellip;/g, '...')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(value: string) {
  return decodeHtml(value.replace(/<[^>]*>/g, ' '));
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractSection(html: string, start: string, end?: string) {
  const startIndex = html.indexOf(start);
  if (startIndex === -1) {
    return '';
  }

  const endIndex = end ? html.indexOf(end, startIndex) : -1;
  return html.slice(startIndex, endIndex === -1 ? html.length : endIndex);
}

function dedupeByTitle<T extends { title: string }>(items: T[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.title)) {
      return false;
    }

    seen.add(item.title);
    return true;
  });
}

async function fetchHtml(url: string) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; PrzeprogramowaniLanding/1.0)',
      accept: 'text/html,application/xhtml+xml'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

function parseVideos(html: string) {
  const section = extractSection(html, 'Filmy i podcasty', '7 lat na rynku edukacji technologicznej');
  if (!section) {
    return [];
  }

  const pattern =
    /<a href="(https:\/\/www\.youtube\.com\/watch\?v=[^"]+)"[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[\s\S]*?<h3[^>]*>\s*([\s\S]*?)\s*<\/h3>/g;

  const items = Array.from(section.matchAll(pattern), (match) => ({
    href: decodeHtml(match[1]),
    image: decodeHtml(match[2]),
    title: stripTags(match[4] || match[3])
  }));

  return dedupeByTitle(items).slice(0, 6);
}

function parsePodcastCollection(html: string, config: Omit<PodcastCollection, 'episodes'> & { nextHeading?: string }) {
  const section = extractSection(html, config.title, config.nextHeading);
  if (!section) {
    return null;
  }

  const metaPattern = new RegExp(
    `${escapeRegExp(config.title)}<\\/h2>[\\s\\S]*?<span[^>]*>\\s*([^<]+?)\\s*<\\/span>[\\s\\S]*?<p[^>]*>\\s*([^<]+?)\\s*<\\/p>`
  );
  const metaMatch = section.match(metaPattern);

  const episodePattern =
    /<a href="(https:\/\/podcasters\.spotify\.com\/[^"]+)"[\s\S]*?<img src="([^"]+)" alt="([^"]+)"[\s\S]*?<span[^>]*>\s*([^<]+?)\s*<\/span>[\s\S]*?<h3[^>]*>\s*([\s\S]*?)\s*<\/h3>[\s\S]*?<p[^>]*>\s*([\s\S]*?)\s*<\/p>/g;

  const episodes = Array.from(section.matchAll(episodePattern), (match) => ({
    href: decodeHtml(match[1]),
    image: decodeHtml(match[2]),
    title: stripTags(match[5] || match[3]),
    duration: stripTags(match[4]),
    description: stripTags(match[6])
  }));

  if (!episodes.length) {
    return null;
  }

  return {
    title: config.title,
    listeners: metaMatch ? stripTags(metaMatch[1]) : config.listeners,
    description: metaMatch ? stripTags(metaMatch[2]) : config.description,
    episodes: dedupeByTitle(episodes).slice(0, 6)
  };
}

export async function getRecentVideos() {
  try {
    const html = await fetchHtml(HOMEPAGE_URL);
    const parsed = parseVideos(html);
    return parsed.length ? parsed : fallbackVideos;
  } catch {
    return fallbackVideos;
  }
}

export async function getPodcastCollections() {
  try {
    const html = await fetchHtml(PODCAST_PAGE_URL);
    const parsed = [
      parsePodcastCollection(html, {
        title: 'Opanuj.AI Podcast',
        listeners: 'Ponad 4000 słuchaczy',
        description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.',
        nextHeading: 'Przeprogramowani ft. Gość'
      }),
      parsePodcastCollection(html, {
        title: 'Przeprogramowani ft. Gość',
        listeners: 'Ponad 3800 słuchaczy',
        description: 'Rozmowy dla głodnych wiedzy.'
      })
    ].filter(Boolean) as PodcastCollection[];

    return parsed.length ? parsed : fallbackPodcasts;
  } catch {
    return fallbackPodcasts;
  }
}
