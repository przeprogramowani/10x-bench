export const SITE = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Edukacja technologiczna w epoce AI. Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  social: {
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    youtube: 'https://youtube.com/c/przeprogramowani',
  },
};

export const NAV_LINKS = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: '10xDevs', href: 'https://10xdevs.pl' },
];

export const COURSES = [
  {
    id: '10xdevs',
    title: '10xDevs',
    tagline: 'Programuj z AI',
    badge: 'Nowość - Maj 2026',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    href: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    cta: 'Zobacz teraz',
    featured: true,
    accent: 'from-brand-600 to-brand-400',
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    tagline: 'AI Edition',
    badge: 'Kurs',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    href: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    cta: 'Szczegóły',
    featured: false,
    accent: 'from-emerald-600 to-emerald-400',
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    tagline: 'TypeScript 5 + React 19',
    badge: 'Kurs',
    description:
      'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    href: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    cta: 'Szczegóły',
    featured: false,
    accent: 'from-indigo-600 to-indigo-400',
  },
];

export const PODCASTS = [
  {
    id: 'opanuj-ai',
    title: 'Opanuj.AI Podcast',
    description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    listeners: 'Ponad 4000 słuchaczy',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    episodes: [
      {
        title:
          'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        duration: '01:12:26',
        description:
          'Byliśmy na Google I/O 2026 i opowiemy wam o tym na żywo! W zupełnie nowym formacie podcastu Opanuj.AI zapraszamy na relację z konferencji, która była dla nas jedną wielką niewiadomą.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title:
          'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        duration: '00:47:22',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        duration: '01:39:33',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy jednocześnie właśnie na naszych oczach kończy się era klasycznych SaaS-ów?',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
      },
      {
        title:
          'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        duration: '01:28:30',
        description:
          'Dawid Sibiński to programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. W naszej rozmowie dzieli się swoimi doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
      },
      {
        title:
          'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        duration: '01:43:15',
        description:
          'Bierzemy na warsztat jedną z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
      },
      {
        title:
          'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5 z Chin',
        duration: '01:23:04',
        description:
          'ChatGPT Health vs Google MedGemma 1.5 - giganci Generative AI chcą podbić świat medycyny. Inny z gigantów, Anthropic, próbuje nadać AI ludzkie wartości.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4',
      },
    ],
  },
  {
    id: 'przeprogramowani-gosc',
    title: 'Przeprogramowani ft. Gość',
    description: 'Rozmowy dla głodnych wiedzy',
    listeners: 'Ponad 3800 słuchaczy',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    episodes: [
      {
        title:
          'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość',
        duration: '00:33:45',
        description:
          'W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą programistów i jak skutecznie uczyć się angielskiego w IT.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        title:
          'O dojrzewaniu zawodowym programisty, Wojciech Trawiński | Przeprogramowani ft. Gość',
        duration: '00:45:56',
        description:
          'Wojciech Trawiński, Senior Software Engineer w XTB opowiada, o tym jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        title:
          'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin, Przeprogramowani ft. Gość',
        duration: '01:16:44',
        description:
          'W rozmowie z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach, które kształtują charakterystykę systemu.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:34',
        description:
          'Zapraszamy na kolejne LIVE Q&A - w najbliższy wtorek o 19 porozmawiamy o nadchodzącym szkoleniu OpanujTypeScript, a także opowiemy, gdzie będzie można przybić pionę w trakcie nadchodzących eventów.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        title:
          'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński - Przeprogramowani ft. Gość',
        duration: '00:36:31',
        description:
          'Kamil Tarczyński, Co-founder oraz CTO agencji havenocode, która specjalizuje się w tworzeniu aplikacji za pomocą platform i narzędzi no-code i low-code.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat - Przeprogramowani ft. Gość',
        duration: '00:42:11',
        description:
          'Paweł Gnat to frontend developer, którzy przebranżowił się do IT z budownictwa. W tym podcaście dzieli się swoimi wrażeniami z udziału w pierwszej edycji programu Opanuj Frontend: AI Edition.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];

export const VIDEOS = [
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    thumbnail: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    thumbnail: 'https://i3.ytimg.com/vi/XgyH-HSzKRQ/maxresdefault.jpg',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    thumbnail: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    thumbnail: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    thumbnail: 'https://i3.ytimg.com/vi/aRkECt7derY/maxresdefault.jpg',
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    thumbnail: 'https://i3.ytimg.com/vi/vH1T5qB4dBQ/maxresdefault.jpg',
  },
];

export const FOUNDERS = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    initials: 'PS',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    initials: 'MC',
  },
];

export const PARTNERS = [
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

export const PODCAST_PLATFORMS = [
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
  { name: 'Google Podcasts', url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw' },
  { name: 'RSS', url: 'https://anchor.fm/s/22544b7c/podcast/rss' },
];
