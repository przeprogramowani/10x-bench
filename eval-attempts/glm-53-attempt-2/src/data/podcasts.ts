export interface PodcastEpisode {
  title: string;
  duration: string;
  published?: string;
  url: string;
}

export interface PodcastShow {
  slug: string;
  name: string;
  listeners: string;
  tagline: string;
  description: string;
  artwork: string;
  showUrl: string;
  accent: string;
  episodes: PodcastEpisode[];
}

export const PODCAST_SHOWS: PodcastShow[] = [
  {
    slug: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    tagline: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    description:
      'Najpopularniejszy techniczny podcast o LLM w Polsce. Rozbieramy na czynniki pierwsze premiery modeli, narzędzia AI i ich wpływ na pracę programistów.',
    artwork:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    showUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    episodes: [
      {
        title: 'Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI)',
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
    slug: 'ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    tagline: 'Rozmowy dla głodnych wiedzy',
    description:
      'Cykl rozmów z ekspertami branży IT: o architekturze, karierze, nauce i zmianach, które przynosi era AI. Goście z DAZN, SmartRecruiters, XTB i nie tylko.',
    artwork:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    showUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    accent: 'text-main bg-main/10 border-main/20',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu — Wiktoria Sitko',
        duration: '00:33:45',
        published: '25 września 2025',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty — Wojciech Trawiński',
        duration: '00:45:57',
        published: '10 września 2025',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? — Tomasz Ducin',
        duration: '01:16:44',
        published: '10 października 2024',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:35',
        published: '21 sierpnia 2024',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title: 'No-code i Low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński',
        duration: '00:36:32',
        published: '13 czerwca 2024',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu — Paweł Gnat',
        duration: '00:42:12',
        published: '6 czerwca 2024',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];

export const PODCAST_PLATFORMS = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o', color: 'bg-[#1DB954]' },
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
    color: 'bg-[#a378fa]',
  },
  {
    name: 'Google Podcasts',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw',
    color: 'bg-[#4285F4]',
  },
  {
    name: 'RSS',
    url: 'https://anchor.fm/s/22544b7c/podcast/rss',
    color: 'bg-orange-500',
  },
];
