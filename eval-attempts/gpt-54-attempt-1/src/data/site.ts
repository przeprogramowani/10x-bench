export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Course = {
  name: string;
  href: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  cta: string;
};

export type ContentItem = {
  title: string;
  href: string;
  image: string;
  publishedAt: string;
  description: string;
  duration?: string;
};

export type PodcastSeries = {
  name: string;
  href: string;
  summary: string;
  badge: string;
  cover: string;
  items: ContentItem[];
};

export type Founder = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  accent: string;
};

export const siteMeta = {
  title: "Przeprogramowani.pl",
  tagline: "Szersze spojrzenie na programowanie",
  description:
    "Nowoczesna strona projektu Przeprogramowani.pl z podstronami O nas, Podcast i YouTube oraz sekcjami kursów Opanuj Frontend, Opanuj TypeScript i 10xDevs.",
  email: "kontakt@przeprogramowani.pl",
  newsletter: "https://przeprogramowani.pl/newsletter",
  youtube: "https://www.youtube.com/channel/UCb2Y3vMeD6N4WDt5Acw7Arw",
  podcast: "https://przeprogramowani.pl/podcast",
  about: "https://przeprogramowani.pl/o-nas",
  home: "https://przeprogramowani.pl",
  social: {
    instagram: "https://www.instagram.com/przeprogramowani/",
    linkedinPrzemek: "https://www.linkedin.com/in/psmyrdek/",
    linkedinMarcin: "https://www.linkedin.com/in/mkczarkowski/",
  },
};

export const navigation: NavItem[] = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/podcast", label: "Podcast" },
  { href: "/youtube", label: "YouTube" },
];

export const hero = {
  eyebrow: "Nowoczesna edukacja technologiczna",
  title: "Przeprogramowani - treści, kursy i AI dla ambitnych developerów",
  lead:
    "Przeprogramowani łączą świat programowania, biznesu i rozwoju. Tworzą szkolenia, podcasty i materiały, które pomagają pracować szerzej - od jakości kodu i architektury po świadome korzystanie z AI.",
  spotlight: {
    name: "10xDevs 3.0",
    href: "https://10xdevs.pl/",
    label: "Hero programu",
    description:
      "5-tygodniowy, intensywny program uczący pracy z AI w całym cyklu tworzenia oprogramowania: od researchu i planowania, przez implementację, aż po utrzymanie produkcji.",
    bullets: [
      "AI-native software engineering zamiast przypadkowego vibe codingu",
      "Praktyka na stacku Astro + React + TypeScript",
      "Workflowy agentowe, context engineering i produkcyjne quality gates",
    ],
  },
};

export const stats: Stat[] = [
  { value: "7 lat", label: "na rynku edukacji technologicznej" },
  { value: "4000+", label: "słuchaczy Opanuj.AI Podcast" },
  { value: "3800+", label: "słuchaczy Przeprogramowani ft. Gość" },
  { value: "383", label: "programistów po Opanuj Frontend: AI Edition" },
];

export const courses: Course[] = [
  {
    name: "Opanuj Frontend: AI Edition",
    href: "https://opanujfrontend.pl/",
    eyebrow: "Kurs premium",
    description:
      "Intensywne 10-tygodniowe szkolenie dla developerów, którzy chcą budować zaawansowane aplikacje webowe i podnosić jakość pracy na produkcji.",
    bullets: [
      "Testowanie, quality engineering i bezpieczna komunikacja z API",
      "CI/CD, monitoring, feature flagi i utrzymanie frontendu na produkcji",
      "Mikrofrontendy, design systemy i praktyki dużej skali",
    ],
    cta: "Poznaj program",
  },
  {
    name: "Opanuj TypeScript",
    href: "https://opanujtypescript.pl/",
    eyebrow: "Kurs specjalistyczny",
    description:
      "Praktyczny program o TypeScript 5 i React 19 dla osób, które chcą budować bardziej niezawodne aplikacje i świadomie projektować typy.",
    bullets: [
      "Praca z najnowszym TypeScriptem 5.7+ i ekosystemem Reacta 19",
      "Typy generyczne, decyzje projektowe i skalowanie typowania",
      "Ponad 40 ćwiczeń i konkretne wzorce z produkcyjnego frontendu",
    ],
    cta: "Zobacz kurs",
  },
  {
    name: "10xDevs",
    href: "https://10xdevs.pl/",
    eyebrow: "Program AI",
    description:
      "Program rozwoju dla programistów pracujących z AI, z naciskiem na planowanie, implementację, review i utrzymanie systemów tworzonych z agentami.",
    bullets: [
      "Research, plan, implement, deploy - cały proces pracy z AI",
      "Narzędzia typu Claude Code, Codex, Cursor, Windsurf i Copilot",
      "Gotowe patterny współpracy z agentami i praca na realnych scenariuszach",
    ],
    cta: "Wejdź do 10xDevs",
  },
];

export const overviewPillars = [
  "Podcasty o technologii, AI i programowaniu",
  "Materiały YouTube dla nowoczesnych developerów",
  "Programy szkoleniowe dla frontendu, TypeScriptu i AI-assisted engineering",
  "Newsletter i treści łączące technikę, biznes i rozwój",
];

export const founders: Founder[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    bio: "Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source.",
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
    accent: "from-[#ff7a59] to-[#ffb36b]",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Twórca materiałów edukacyjnych opartych o badania nad uczeniem się. Autor Opanuj.AI Podcast i specjalista TypeScript, React oraz Node.js.",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/",
    accent: "from-[#15c6b4] to-[#7cf7d4]",
  },
];

export const partnerNames = [
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

export const latestVideos: ContentItem[] = [
  {
    title: "5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO",
    href: "https://www.youtube.com/watch?v=S-iNbyLSisE",
    image: "https://i4.ytimg.com/vi/S-iNbyLSisE/hqdefault.jpg",
    publishedAt: "2026-04-13",
    description:
      "Live demo o quality engineeringu z AI, agent skills, review planów i kodu oraz kosztach nieświadomego kodowania z pomocą agentów.",
  },
  {
    title: "Product Builders Day | LIVE AI Product Heroes i 10xDevs",
    href: "https://www.youtube.com/watch?v=aRkECt7derY",
    image: "https://i2.ytimg.com/vi/aRkECt7derY/hqdefault.jpg",
    publishedAt: "2026-04-07",
    description:
      "Spotkanie o product builderach, projektowaniu z AI, przejściu od product managementu do budowania oraz pracy z zespołem wspieranym agentami.",
  },
  {
    title: "Wybierasz model AI do kodowania? Nie ufaj benchmarkom",
    href: "https://www.youtube.com/watch?v=vH1T5qB4dBQ",
    image: "https://i3.ytimg.com/vi/vH1T5qB4dBQ/hqdefault.jpg",
    publishedAt: "2026-03-30",
    description:
      "Odcinek o pułapkach benchmarków, doborze modeli do kodowania i o tym, jak podejmować bardziej wiarygodne decyzje narzędziowe.",
  },
  {
    title: "Claude Code w rękach Product Buildera | LIVE AI Product Heroes x 10xDevs",
    href: "https://www.youtube.com/watch?v=bcs8WS4A5Zg",
    image: "https://i3.ytimg.com/vi/bcs8WS4A5Zg/hqdefault.jpg",
    publishedAt: "2026-03-12",
    description:
      "Webinar o przejściu od pomysłu do MVP z użyciem AI, analizie konkurencji, projektowaniu interfejsu i inżynierskim podejściu do agentów.",
  },
  {
    title: "MVP w Claude Code - Context Engineering, kontrola Agenta i refaktoryzacja",
    href: "https://www.youtube.com/watch?v=Vce4cD_5XW0",
    image: "https://i3.ytimg.com/vi/Vce4cD_5XW0/hqdefault.jpg",
    publishedAt: "2026-03-09",
    description:
      "Case study o budowie MVP z Claude Code, refaktoryzacji, kontroli jakości i praktycznym context engineeringu.",
  },
  {
    title: "Od chaosu do AI-Native Infrastructure - budujemy platformę dla zespołu, który programuje z Agentami",
    href: "https://www.youtube.com/watch?v=hbuCLvwbMVg",
    image: "https://i1.ytimg.com/vi/hbuCLvwbMVg/hqdefault.jpg",
    publishedAt: "2026-02-26",
    description:
      "Nagranie o budowie prywatnej infrastruktury dla skills, rules i commands oraz o porządkowaniu pracy zespołu korzystającego z AI.",
  },
];

export const podcastSeries: PodcastSeries[] = [
  {
    name: "Opanuj.AI Podcast",
    href: "https://przeprogramowani.pl/podcast",
    summary: "Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI.",
    badge: "Ponad 4000 słuchaczy",
    cover:
      "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
    items: [
      {
        title: "TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI",
        href: "https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
        publishedAt: "2026-04-16",
        duration: "01:39:33",
        description:
          "Czy AI naprawdę rozumie świat, skoro oblewa testy rozwiązywane przez człowieka, i czy właśnie kończy się epoka klasycznych SaaS-ów?",
      },
      {
        title: "Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński",
        href: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
        publishedAt: "2026-04-09",
        duration: "01:28:30",
        description:
          "Rozmowa o pracy z Copilotem, Cursorem i Claude Code oraz o praktyce programowania wspieranego przez AI.",
      },
      {
        title: "OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!",
        href: "https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
        publishedAt: "2026-04-02",
        duration: "01:43:15",
        description:
          "Analiza głośnych historii AI, od OpenClaw po nowe agenty, oraz dyskusja o kierunku rozwoju narzędzi programistycznych.",
      },
      {
        title: "Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin",
        href: "https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg",
        publishedAt: "2026-03-26",
        duration: "01:23:04",
        description:
          "O zdrowiu wspieranym przez AI, nowych modelach oraz o tym, jak giganci AI próbują wejść w kolejne branże.",
      },
    ],
  },
  {
    name: "Przeprogramowani ft. Gość",
    href: "https://przeprogramowani.pl/podcast",
    summary: "Rozmowy dla głodnych wiedzy - o architekturze, karierze i rozwoju.",
    badge: "Ponad 3800 słuchaczy",
    cover:
      "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
    items: [
      {
        title: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość",
        href: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
        publishedAt: "2026-02-12",
        duration: "00:33:45",
        description:
          "Praktyczna rozmowa o barierach językowych programistów i skuteczniejszej nauce angielskiego w IT.",
      },
      {
        title: "O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość",
        href: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
        publishedAt: "2026-01-29",
        duration: "00:45:56",
        description:
          "O drodze od młodego entuzjasty do doświadczonego software engineera i o dojrzałości zawodowej w branży.",
      },
      {
        title: "Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin | Przeprogramowani ft. Gość",
        href: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
        publishedAt: "2025-11-20",
        duration: "01:16:44",
        description:
          "Rozmowa o architekturze rozumianej szerzej niż narzędzia - jako zestawie decyzji kształtujących system.",
      },
      {
        title: "Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)",
        href: "https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm",
        image:
          "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg",
        publishedAt: "2025-10-30",
        duration: "01:36:34",
        description:
          "Live Q&A o zmianach w TypeScript, szkoleniu Opanuj TypeScript i planach konferencyjnych.",
      },
    ],
  },
];

export const podcastPlatforms = [
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250" },
  { name: "Spotify", href: "https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o" },
  { name: "RSS", href: "https://przeprogramowani.pl/podcast" },
];

export const youtubeHighlights = [
  "AI-native engineering",
  "Praktyczne benchmarki modeli",
  "Claude Code, Codex i workflow agentowy",
  "Architektura, review i jakość kodu",
];

export const homepageSources = [
  "https://przeprogramowani.pl/",
  "https://przeprogramowani.pl/o-nas",
  "https://przeprogramowani.pl/podcast",
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw",
  "https://opanujfrontend.pl/",
  "https://opanujtypescript.pl/",
  "https://10xdevs.pl/",
];
