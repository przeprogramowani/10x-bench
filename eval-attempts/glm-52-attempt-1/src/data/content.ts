export type VideoItem = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

export type PodcastEpisode = {
  id: string;
  title: string;
  description: string;
  duration: string;
  url: string;
  show: string;
};

export type Course = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  url: string;
  gradient: string;
  emoji: string;
};

export const site = {
  name: "Przeprogramowani",
  tagline: "Szersze spojrzenie na programowanie",
  description:
    "Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Tworzymy treści, kursy i narzędzia dla programistów, którzy chcą patrzeć szerzej — na architekturę, biznes i ludzi.",
  email: "kontakt@przeprogramowani.pl",
  social: {
    youtube: "https://youtube.com/c/przeprogramowani",
    instagram: "https://instagram.com/przeprogramowani",
    facebook: "https://facebook.com/przeprogramowani",
  },
};

export const founders = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    bio: "Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).",
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
    initials: "PS",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca Opanuj AI Podcast — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/",
    initials: "MC",
  },
];

export const courses: Course[] = [
  {
    slug: "10xdevs",
    name: "10xDevs",
    tag: "Nowość 2026",
    description:
      "Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.",
    url: "https://10xdevs.pl",
    gradient: "from-violet-600 via-fuchsia-600 to-pink-600",
    emoji: "🚀",
  },
  {
    slug: "opanuj-frontend",
    name: "Opanuj Frontend: AI Edition",
    tag: "Kurs",
    description:
      "Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!",
    url: "https://www.opanujfrontend.pl?utm_source=przeprogramowani_website",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    emoji: "🎨",
  },
  {
    slug: "opanuj-typescript",
    name: "Opanuj TypeScript",
    tag: "Kurs",
    description:
      "Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!",
    url: "https://www.opanujtypescript.pl?utm_source=przeprogramowani_website",
    gradient: "from-cyan-500 via-teal-500 to-emerald-600",
    emoji: "🛡️",
  },
];

export const brands = [
  "Huuuge Games",
  "Nutridome",
  "SmartRecruiters",
  "Future Processing",
  "Callstack",
  "edrone",
  "Xfive",
  "Euvic",
  "Strabag",
  "Autodesk",
];

export const youtubeVideos: VideoItem[] = [
  {
    id: "0JOszZXqKaM",
    title: "Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026",
    url: "https://www.youtube.com/watch?v=0JOszZXqKaM",
    thumbnail: "https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg",
    published: "2026-06-02",
  },
  {
    id: "XgyH-HSzKRQ",
    title: "Byłem na Google I/O 2026. Nie tego się spodziewałem.",
    url: "https://www.youtube.com/watch?v=XgyH-HSzKRQ",
    thumbnail: "https://i3.ytimg.com/vi/XgyH-HSzKRQ/maxresdefault.jpg",
    published: "2026-05-27",
  },
  {
    id: "03y826SVjG0",
    title: "Jak wybrać najlepszego Agenta AI do programowania?",
    url: "https://www.youtube.com/watch?v=03y826SVjG0",
    thumbnail: "https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg",
    published: "2026-05-06",
  },
  {
    id: "S-iNbyLSisE",
    title: "5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO",
    url: "https://www.youtube.com/watch?v=S-iNbyLSisE",
    thumbnail: "https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg",
    published: "2026-04-23",
  },
  {
    id: "aRkECt7derY",
    title: "Product Builders Day | LIVE AI Product Heroes i 10xDevs",
    url: "https://www.youtube.com/watch?v=aRkECt7derY",
    thumbnail: "https://i3.ytimg.com/vi/aRkECt7derY/maxresdefault.jpg",
    published: "2026-04-07",
  },
  {
    id: "vH1T5qB4dBQ",
    title: "Wybierasz model AI do kodowania? Nie ufaj benchmarkom",
    url: "https://www.youtube.com/watch?v=vH1T5qB4dBQ",
    thumbnail: "https://i3.ytimg.com/vi/vH1T5qB4dBQ/maxresdefault.jpg",
    published: "2026-03-30",
  },
  {
    id: "bcs8WS4A5Zg",
    title: "Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs",
    url: "https://www.youtube.com/watch?v=bcs8WS4A5Zg",
    thumbnail: "https://i3.ytimg.com/vi/bcs8WS4A5Zg/maxresdefault.jpg",
    published: "2026-03-12",
  },
  {
    id: "Vce4cD_5XW0",
    title: "MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja",
    url: "https://www.youtube.com/watch?v=Vce4cD_5XW0",
    thumbnail: "https://i3.ytimg.com/vi/Vce4cD_5XW0/maxresdefault.jpg",
    published: "2026-03-09",
  },
  {
    id: "hbuCLvwbMVg",
    title: "Od chaosu do AI-Native Infrastructure - platforma dla zespołu, który programuje z Agentami",
    url: "https://www.youtube.com/watch?v=hbuCLvwbMVg",
    thumbnail: "https://i3.ytimg.com/vi/hbuCLvwbMVg/maxresdefault.jpg",
    published: "2026-02-26",
  },
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "e3k9b7u",
    title: "Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026",
    description:
      "Byliśmy na Google I/O 2026 i opowiemy wam o tym na żywo! W zupełnie nowym formacie podcastu Opanuj.AI zapraszamy na relację z konferencji, która była dla nas jedną wielką niewiadomą.",
    duration: "01:12:26",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u",
    show: "Opanuj.AI Podcast",
  },
  {
    id: "e3injdh",
    title: "GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)",
    description:
      "W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.",
    duration: "00:47:22",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh",
    show: "Opanuj.AI Podcast",
  },
  {
    id: "e3hc7nk",
    title: "TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI",
    description:
      "Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy jednocześnie właśnie na naszych oczach kończy się era klasycznych SaaS-ów?",
    duration: "01:39:33",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk",
    show: "Opanuj.AI Podcast",
  },
  {
    id: "e3gmm83",
    title: "Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński",
    description:
      "Dawid Sibiński to programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. W naszej rozmowie dzieli się doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.",
    duration: "01:28:30",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83",
    show: "Opanuj.AI Podcast",
  },
  {
    id: "e3fu2u2",
    title: "OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!",
    description:
      "Bierzemy na warsztat jedną z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw.",
    duration: "01:43:15",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2",
    show: "Opanuj.AI Podcast",
  },
  {
    id: "e3eg2n4",
    title: "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin",
    description:
      "ChatGPT Health vs Google MedGemma 1.5 - giganci Generative AI chcą podbić świat medycyny. Inny z gigantów, Anthropic, próbuje nadać AI wartości przez „konstytucję”.",
    duration: "01:23:04",
    url: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4",
    show: "Opanuj.AI Podcast",
  },
  {
    id: "e38lmlo",
    title: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość",
    description:
      "W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów i jak skutecznie uczyć się angielskiego w IT.",
    duration: "00:33:45",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo",
    show: "Przeprogramowani ft. Gość",
  },
  {
    id: "e380adn",
    title: "O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość",
    description:
      "Wojciech Trawiński, Senior Software Engineer w XTB opowiada o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.",
    duration: "00:45:56",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn",
    show: "Przeprogramowani ft. Gość",
  },
  {
    id: "e2pfjg3",
    title: "Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość",
    description:
      "W rozmowie z Tomaszem Ducinem badamy, w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach, które kształtują charakterystykę systemu.",
    duration: "01:16:44",
    url: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3",
    show: "Przeprogramowani ft. Gość",
  },
];

export const podcastPlatforms = [
  { name: "Apple Podcasts", url: "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250" },
  { name: "Spotify", url: "https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o" },
  { name: "Google Podcasts", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw" },
  { name: "RSS", url: "https://anchor.fm/s/22544b7c/podcast/rss" },
];
