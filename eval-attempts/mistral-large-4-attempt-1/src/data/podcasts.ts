export interface PodcastEpisode {
  title: string;
  duration: string;
  description: string;
  url: string;
}

export interface PodcastPlatforms {
  spotify: string;
  apple: string;
  google?: string;
  rss: string;
}

export interface PodcastShow {
  id: string;
  name: string;
  listeners: string;
  description: string;
  cover: string;
  platforms: PodcastPlatforms;
  episodes: PodcastEpisode[];
}

export const podcastShows: PodcastShow[] = [
  {
    id: "opanuj-ai",
    name: "Opanuj.AI Podcast",
    listeners: "Ponad 4000 słuchaczy",
    description: "Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.",
    cover: "/img/podcast/opanuj-ai.jpg",
    platforms: {
      spotify: "https://open.spotify.com/show/3D6LmchBdoqL2sWkQjvWOy",
      apple: "https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1690353799",
      rss: "https://anchor.fm/s/e2cb03d0/podcast/rss",
    },
    episodes: [
      {
        title: "Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI) | Opanuj.AI",
        duration: "01:14:11",
        description:
          "Kiedy inżynierowie z Doliny Krzemowej zapowiadają koniec plan mode, my mówimy — planowanie nigdy nie było tak ważne. Wyjaśniamy definicje, które zbyt łatwo są ze sobą utożsamiane.",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Plan-mode-to-przeszo---planowanie-wrcz-przeciwnie--nowy-cookie-banner-epoki-AI--Opanuj-AI-e3pn4mj",
      },
      {
        title: "Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI",
        duration: "01:32:30",
        description:
          "Co trzeba zmienić w software developmencie, kiedy napisanie kodu przestaje być najdroższą częścią procesu? Omawiamy AI-Native SDLC Playbook od Anthropic i porównujemy go z 10xDevs.",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Kod-nie-jest-ju-wskim-gardem--Nadchodzi-AI-Native-SDLC--Opanuj-AI-e3o9hpt",
      },
      {
        title: "Cena i bezpieczeństwo — kluczowe pytania o AI przyszłości | Opanuj.AI",
        duration: "01:48:52",
        description:
          "Czy sztuczna inteligencja naprawdę staje się tańsza, skoro rachunki za modele i agentów AI rosną? I czy autonomiczne systemy są wystarczająco bezpieczne?",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Cena-i-bezpieczestwo---kluczowe-pytania-o-AI-przyszoci--Opanuj-AI-e3mvo52",
      },
      {
        title: "BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)",
        duration: "01:21:53",
        description:
          "Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Rząd USA blokuje publiczny dostęp.",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p",
      },
      {
        title: "Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026",
        duration: "01:12:26",
        description:
          "Byliśmy na Google I/O 2026 i opowiadamy o tym na żywo! Relacja z konferencji, która była dla nas jedną wielką niewiadomą.",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u",
      },
      {
        title: "GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)",
        duration: "00:47:22",
        description:
          "W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.",
        url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh",
      },
    ],
  },
  {
    id: "przeprogramowani",
    name: "Przeprogramowani ft. Gość",
    listeners: "Ponad 3800 słuchaczy",
    description: "Rozmowy dla głodnych wiedzy — o programowaniu, karierze i rozwoju.",
    cover: "/img/podcast/przeprogramowani.jpg",
    platforms: {
      spotify: "https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o",
      apple: "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw",
      rss: "https://anchor.fm/s/c72d808/podcast/rss",
    },
    episodes: [
      {
        title: "Programista vs. Angielski: Od strachu do sukcesu — Wiktoria Sitko | Przeprogramowani ft. Gość",
        duration: "00:33:45",
        description:
          "O największych barierach językowych programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo",
      },
      {
        title: "O dojrzewaniu zawodowym programisty — Wojciech Trawiński | Przeprogramowani ft. Gość",
        duration: "00:45:56",
        description:
          "Wojciech Trawiński, Senior Software Engineer w XTB, o drodze od młodego entuzjasty do doświadczonego profesjonalisty. Dlaczego mit „ciężka praca = sukces” nie działa w IT?",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn",
      },
      {
        title: "Architektura frontendu: Co naprawdę ma znaczenie? — Tomasz Ducin | Przeprogramowani ft. Gość",
        duration: "01:16:44",
        description:
          "W rozmowie z Tomaszem Ducinem badamy, w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach kształtujących system.",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3",
      },
      {
        title: "Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)",
        duration: "01:36:34",
        description:
          "Kolejne LIVE Q&A — rozmawiamy o nadchodzącym szkoleniu Opanuj TypeScript oraz o tym, gdzie będzie można nas spotkać na nadchodzących eventach.",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm",
      },
      {
        title: "No-code i Low-code — przyszłość tworzenia aplikacji? — Kamil Tarczyński | Przeprogramowani ft. Gość",
        duration: "00:36:31",
        description:
          "Kamil Tarczyński, Co-founder i CTO agencji havenocode, o potencjale platform i narzędzi no-code oraz low-code.",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6",
      },
      {
        title: "Nauka nowoczesnego frontendu — Paweł Gnat | Przeprogramowani ft. Gość",
        duration: "00:42:11",
        description:
          "Paweł Gnat przebranżowił się do IT z budownictwa. Dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.",
        url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935",
      },
    ],
  },
];
