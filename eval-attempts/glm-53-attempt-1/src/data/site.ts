export const SITE = {
  name: 'Przeprogramowani',
  domain: 'przeprogramowani.pl',
  url: 'https://przeprogramowani.pl',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Edukacja technologiczna w epoce AI. Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI.',
  email: 'kontakt@przeprogramowani.pl',
  newsletterUrl: 'https://przeprogramowani.substack.com',
  youtubeUrl: 'https://youtube.com/c/przeprogramowani',
  youtubeSubscribeUrl: 'https://www.youtube.com/c/przeprogramowani?sub_confirmation=1',
  facebookUrl: 'https://facebook.com/przeprogramowani',
  instagramUrl: 'https://instagram.com/przeprogramowani',
};

export const NAV_LINKS = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
];

export interface Course {
  tag: string;
  title: string;
  description: string;
  features: string[];
  url: string;
  cta: string;
  featured?: boolean;
}

export const COURSES: Course[] = [
  {
    tag: 'Nowość — 4.0',
    title: '10xDevs',
    description:
      'Nadeszła era AI-Native Software Engineering. Poznaj praktyczne workflow pracy z AI: 10xWorkflow (10x-cli), Context Engineering, Cursor, Claude Code i MCP. Zakończysz program z narzędziami do codziennej pracy z agentami AI.',
    features: [
      '8100+ absolwentów',
      '5+1 tygodni nauki',
      'Projekt końcowy + certyfikat',
      'Wersja PL i EN',
    ],
    url: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    cta: 'Zobacz program',
    featured: true,
  },
  {
    tag: 'Frontend',
    title: 'Opanuj Frontend: AI Edition',
    description:
      'Zostań nowoczesnym frontend developerem. 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    features: ['10 tygodni', '25 lekcji + 5 o AI', 'Codzienne wsparcie mentorów'],
    url: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    cta: 'Szczegóły kursu',
  },
  {
    tag: 'TypeScript',
    title: 'Opanuj TypeScript',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    features: ['Moduły Core Pro i React Pro', 'Ponad 40 ćwiczeń', '10+ lat praktyki'],
    url: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    cta: 'Szczegóły kursu',
  },
];

export const STATS = [
  { value: '7', suffix: ' lat', label: 'na rynku edukacji technologicznej' },
  { value: '15 000+', suffix: '', label: 'osób w społeczności Przeprogramowanych' },
  { value: '8100+', suffix: '', label: 'absolwentów programu 10xDevs' },
  { value: '1500+', suffix: '', label: 'przeszkolonych programistów' },
];

export interface PodcastEpisode {
  title: string;
  duration: string;
  url: string;
}

export interface PodcastShow {
  id: string;
  name: string;
  listeners: string;
  description: string;
  cover: string;
  url: string;
  episodes: PodcastEpisode[];
}

export const PODCAST_SHOWS: PodcastShow[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    description:
      'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI. O modelach, narzędziach i praktykach, które zmieniają sposób, w jaki programujemy.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    url: 'https://podcasters.spotify.com/pod/show/opanujai',
    episodes: [
      {
        title:
          'Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI)',
        duration: '01:14:11',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Plan-mode-to-przeszo---planowanie-wrcz-przeciwnie--nowy-cookie-banner-epoki-AI--Opanuj-AI-e3pn4mj',
      },
      {
        title: 'Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC',
        duration: '01:32:30',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Kod-nie-jest-ju-wskim-gardem--Nadchodzi-AI-Native-SDLC--Opanuj-AI-e3o9hpt',
      },
      {
        title: 'Cena i bezpieczeństwo — kluczowe pytania o AI przyszłości',
        duration: '01:48:52',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Cena-i-bezpieczestwo---kluczowe-pytania-o-AI-przyszoci--Opanuj-AI-e3mvo52',
      },
      {
        title: 'BAN NA AI?! USA blokuje Anthropic i OpenAI (Claude Mythos, Claude Fable i GPT-5.6)',
        duration: '01:21:53',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
      },
      {
        title: 'Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE',
        duration: '01:12:26',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        duration: '00:47:22',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
    ],
  },
  {
    id: 'ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    description:
      'Rozmowy dla głodnych wiedzy. Zapraszamy ekspertów z branży IT, żeby rozmawiać o karierze, architekturze i rozwoju zawodowym programistów.',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu | Wiktoria Sitko',
        duration: '00:33:45',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty | Wojciech Trawiński',
        duration: '00:45:56',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? | Tomasz Ducin',
        duration: '01:16:44',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:34',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title: 'No-code i Low-code — przyszłość tworzenia aplikacji? | Kamil Tarczyński',
        duration: '00:36:31',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat',
        duration: '00:42:11',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];

export const PODCAST_PLATFORMS = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
  },
  {
    name: 'Google Podcasts',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw',
  },
  { name: 'RSS', url: 'https://anchor.fm/s/22544b7c/podcast/rss' },
];

export interface Video {
  id: string;
  title: string;
}

export const VIDEOS: Video[] = [
  {
    id: 'rRM4pXF_4yw',
    title: 'Programowanie kiedyś vs dziś',
  },
  {
    id: '8cHXeQN2tQw',
    title: 'AI w dużych firmach VS social media | 10xDevs Demo Day',
  },
  {
    id: '1agLBxJskps',
    title: 'Hackathon AI-Native — tak było na BRAVE UNAITED',
  },
  {
    id: 'rR2sbf0KkRU',
    title: '10xWorkflow i Core Skill Chain — Budujemy nowy feature na platformie',
  },
  {
    id: 'MDZA6vww74g',
    title: 'Najlepszy benchmark AI pochodzi od ciebie — stwórz go z 10x-bench-kit',
  },
  {
    id: 'bdO9bBvg8Zg',
    title:
      'Projektowanie stabilnych bibliotek i architektury z agentem AI — LIVE z Adrianem Połubińskim',
  },
];

export interface Founder {
  initials: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  gradient: string;
}

export const FOUNDERS: Founder[] = [
  {
    initials: 'PS',
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    initials: 'MC',
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    gradient: 'from-cyan-400 to-blue-500',
  },
];

export const BRANDS = [
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

export const VALUES = [
  {
    icon: 'telescope',
    title: 'Szersze spojrzenie',
    description:
      'Wierzymy, że najlepsi programiści to ci, którzy patrzą szerzej — na architekturę, na biznes, na ludzi i na siebie.',
  },
  {
    icon: 'tools',
    title: 'Praktyczna wiedza',
    description:
      'Od technicznych deep-dive\u2019ów po rozmowy o karierze. Łączymy teorię z praktyką w najbardziej użyteczny dla programisty sposób.',
  },
  {
    icon: 'users',
    title: 'Społeczność',
    description:
      'Od ponad 7 lat tworzymy darmowe treści dla społeczności 15 tysięcy programistów — newsletter, podcasty, blog i webinary.',
  },
];
