export type Episode = {
  id: string;
  title: string;
  /** ISO date, e.g. "2026-10-01" */
  date: string;
  /** Duration in "hh:mm:ss" */
  duration: string;
  description: string;
  spotifyUrl: string;
};

export type PodcastShow = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  listeners: string;
  spotifyShowUrl: string;
  appleUrl: string;
  rssUrl: string;
  episodes: Episode[];
};

const przeprogramowaniEpisodes: Episode[] = [
  {
    id: "e38lmlo",
    title:
      "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość",
    date: "2025-09-25",
    duration: "00:33:45",
    description:
      "W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.",
    spotifyUrl: "https://open.spotify.com/episode/e38lmlo",
  },
  {
    id: "e380adn",
    title:
      "O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość",
    date: "2025-09-10",
    duration: "00:45:56",
    description:
      "Wojciech Trawiński, Senior Software Engineer w XTB, opowiada o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.",
    spotifyUrl: "https://open.spotify.com/episode/e380adn",
  },
  {
    id: "e2pfjg3",
    title:
      "Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość",
    date: "2024-10-10",
    duration: "01:16:44",
    description:
      "W rozmowie z Tomaszem Ducinem badamy, w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach, które kształtują charakterystykę systemu.",
    spotifyUrl: "https://open.spotify.com/episode/e2pfjg3",
  },
  {
    id: "e2nepgm",
    title:
      "Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)",
    date: "2024-08-21",
    duration: "01:36:34",
    description:
      "Zapraszamy na kolejne LIVE Q&A — porozmawiamy o nadchodzącym szkoleniu Opanuj TypeScript oraz o tym, gdzie będzie można spotkać nas na nadchodzących eventach.",
    spotifyUrl: "https://open.spotify.com/episode/e2nepgm",
  },
  {
    id: "e2kqhp6",
    title:
      "No-code i Low-code — przyszłość tworzenia aplikacji? | Kamil Tarczyński — Przeprogramowani ft. Gość",
    date: "2024-06-13",
    duration: "00:36:31",
    description:
      "Kamil Tarczyński, Co-founder oraz CTO agencji havenocode, o potencjale, wyzwaniach oraz przyszłości narzędzi no-code i low-code w kontekście web developmentu.",
    spotifyUrl: "https://open.spotify.com/episode/e2kqhp6",
  },
  {
    id: "e2kj935",
    title: "Nauka nowoczesnego frontendu | Paweł Gnat — Przeprogramowani ft. Gość",
    date: "2024-06-06",
    duration: "00:42:11",
    description:
      "Paweł Gnat, frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.",
    spotifyUrl: "https://open.spotify.com/episode/e2kj935",
  },
];

const opanujaiEpisodes: Episode[] = [
  {
    id: "e3pn4mj",
    title:
      "Plan mode to przeszłość — planowanie wręcz przeciwnie (+ nowy cookie banner epoki AI) | Opanuj.AI",
    date: "2026-10-01",
    duration: "01:14:11",
    description:
      "Kiedy inżynierowie z Doliny Krzemowej zapowiadają koniec plan mode, my mówimy — planowanie nigdy nie było tak ważne. Sprzeczność? Wręcz przeciwnie — raczej wyjaśnienie definicji.",
    spotifyUrl: "https://open.spotify.com/episode/e3pn4mj",
  },
  {
    id: "e3o9hpt",
    title: "Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI",
    date: "2026-09-03",
    duration: "01:32:30",
    description:
      "Co trzeba zmienić w software developmencie, kiedy napisanie kodu przestaje być najdroższą częścią procesu? Omawiamy AI-Native SDLC Playbook od Anthropic i porównujemy go z 10xDevs.",
    spotifyUrl: "https://open.spotify.com/episode/e3o9hpt",
  },
  {
    id: "e3mvo52",
    title: "Cena i bezpieczeństwo — kluczowe pytania o AI przyszłości | Opanuj.AI",
    date: "2026-08-05",
    duration: "01:48:52",
    description:
      "Czy sztuczna inteligencja naprawdę staje się tańsza, skoro rachunki za modele i agentów AI rosną? I czy autonomiczne systemy są wystarczająco bezpieczne, aby powierzać im coraz bardziej złożone zadania?",
    spotifyUrl: "https://open.spotify.com/episode/e3mvo52",
  },
  {
    id: "e3lfs2p",
    title:
      "BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)",
    date: "2026-07-01",
    duration: "01:21:53",
    description:
      "Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Omawiamy bezprecedensową sytuację: rząd USA blokuje publiczny dostęp do najmocniejszych modeli AI.",
    spotifyUrl: "https://open.spotify.com/episode/e3lfs2p",
  },
  {
    id: "e3k9b7u",
    title:
      "Byliśmy na Google I/O 2026 — wrażenia na gorąco! | Opanuj.AI LIVE — Maj 2026",
    date: "2026-06-03",
    duration: "01:12:26",
    description:
      "Byliśmy na Google I/O 2026 i opowiadamy o tym na żywo! W zupełnie nowym formacie podcastu Opanuj.AI zapraszamy na relację z konferencji, która była dla nas jedną wielką niewiadomą.",
    spotifyUrl: "https://open.spotify.com/episode/e3k9b7u",
  },
  {
    id: "e3injdh",
    title:
      "GPT-5.5 VS Opus 4.7 — kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)",
    date: "2026-05-01",
    duration: "00:47:22",
    description:
      "W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT. Na pierwszy rzut oka wygląda to jak kolejny wyścig modeli.",
    spotifyUrl: "https://open.spotify.com/episode/e3injdh",
  },
];

export const podcastShows: PodcastShow[] = [
  {
    id: "przeprogramowani",
    name: "Przeprogramowani ft. Gość",
    tagline: "Rozmowy dla głodnych wiedzy",
    description:
      "Rozmowy z najciekawszymi osobami z branży IT — o programowaniu, karierze, biznesie i rozwoju. Prowadzą Przemek Smyrdek i Marcin Czarkowski.",
    listeners: "Ponad 3800 słuchaczy",
    spotifyShowUrl: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
    appleUrl: "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526",
    rssUrl: "https://anchor.fm/s/c72d808/podcast/rss",
    episodes: przeprogramowaniEpisodes,
  },
  {
    id: "opanujai",
    name: "Opanuj.AI Podcast",
    tagline: "Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI",
    description:
      "Opanuj.AI to podcast, w którym znajdziesz cykliczne podsumowanie nowinek technicznych ze świata AI. Prowadzą Marcin Czarkowski i Przemek Smyrdek.",
    listeners: "Ponad 4000 słuchaczy",
    spotifyShowUrl: "https://open.spotify.com/show/3D6LmchBdoqL2sWkQjvWOy",
    appleUrl: "https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1690353799",
    rssUrl: "https://anchor.fm/s/e2cb03d0/podcast/rss",
    episodes: opanujaiEpisodes,
  },
];

const polishMonths = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

/** Formats an ISO date as e.g. "1 października 2026" */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${polishMonths[month - 1]} ${year}`;
}
