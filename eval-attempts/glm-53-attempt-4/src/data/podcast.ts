export type Episode = {
  title: string;
  duration: string;
  url: string;
};

export type PodcastShow = {
  id: string;
  name: string;
  tagline: string;
  listeners: string;
  description: string;
  episodes: Episode[];
};

export const SHOWS: PodcastShow[] = [
  {
    id: "opanuj-ai",
    name: "Opanuj.AI Podcast",
    tagline: "Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI",
    listeners: "4000+ słuchaczy",
    description:
      "Modele, narzędzia i praktyczne zastosowania sztucznej inteligencji w pracy programisty. Najpopularniejszy techniczny podcast o LLM w Polsce.",
    episodes: [
      {
        title:
          "Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI)",
        duration: "01:14:11",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Plan-mode-to-przeszo---planowanie-wrcz-przeciwnie--nowy-cookie-banner-epoki-AI--Opanuj-AI-e3pn4mj",
      },
      {
        title: "Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC",
        duration: "01:32:30",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Kod-nie-jest-ju-wkim-gardem--Nadchodzi-AI-Native-SDLC--Opanuj-AI-e3o9hpt",
      },
      {
        title: "Cena i bezpieczeństwo — kluczowe pytania o AI przyszłości",
        duration: "01:48:52",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Cena-i-bezpieczestwo---kluczowe-pytania-o-AI-przyszoci--Opanuj-AI-e3mvo52",
      },
      {
        title: "BAN NA AI?! USA blokują Anthropic i OpenAI (Claude Mythos, Claude Fable i GPT-5.6)",
        duration: "01:21:53",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p",
      },
      {
        title: "Byliśmy na Google I/O 2026 — wrażenia na gorąco!",
        duration: "01:12:26",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u",
      },
      {
        title: "GPT-5.5 vs Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)",
        duration: "00:47:22",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh",
      },
    ],
  },
  {
    id: "ft-gosc",
    name: "Przeprogramowani ft. Gość",
    tagline: "Rozmowy dla głodnych wiedzy",
    listeners: "3800+ słuchaczy",
    description:
      "Rozmowy z najciekawszymi osobami z branży IT — o karierze, architekturze, testach i dojrzewaniu zawodowym programisty.",
    episodes: [
      {
        title: "Programista vs. angielski: od strachu do sukcesu — Wiktoria Sitko",
        duration: "00:33:45",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo",
      },
      {
        title: "O dojrzewaniu zawodowym programisty — Wojciech Trawiński",
        duration: "00:45:56",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn",
      },
      {
        title: "Architektura frontendu: co naprawdę ma znaczenie? — Tomasz Ducin",
        duration: "01:16:44",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3",
      },
      {
        title: "Co nowego w TypeScript? Zmiany w języku i plany konferencyjne (LIVE YT)",
        duration: "01:36:34",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm",
      },
      {
        title: "No-code i low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński",
        duration: "00:36:31",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6",
      },
      {
        title: "Nauka nowoczesnego frontendu — Paweł Gnat",
        duration: "00:42:11",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935",
      },
    ],
  },
];

export const PODCAST_PLATFORMS = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o",
  },
  {
    name: "Google Podcasts",
    href: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw",
  },
  {
    name: "RSS",
    href: "https://anchor.fm/s/22544b7c/podcast/rss",
  },
];
