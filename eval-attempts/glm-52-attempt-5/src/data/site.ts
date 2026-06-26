export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  description: string;
  url: string;
}

export interface PodcastShow {
  name: string;
  listeners: string;
  description: string;
  cover: string;
  episodes: PodcastEpisode[];
}

export interface Course {
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  url: string;
  badge?: string;
  gradient: string;
  icon: string;
}

export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Edukacja technologiczna w epoce AI. Topowe programy edukacyjne dla ambitnych programistów i świadome korzystanie z potencjału Generative AI.',
  email: 'kontakt@przeprogramowani.pl',
  social: {
    youtube: 'https://youtube.com/c/przeprogramowani',
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    linkedin: 'https://www.linkedin.com/company/przeprogramowani',
  },
  nav: [
    { label: 'O nas', href: '/o-nas' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
  ],
};

export const founders = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    image:
      'https://przeprogramowani.pl/img/profiles/przemek.webp',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    image:
      'https://przeprogramowani.pl/img/profiles/marcin.webp',
    bio: 'Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca "Opanuj AI Podcast" — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
];

export const brands = [
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

export const courses: Course[] = [
  {
    name: 'Opanuj Frontend',
    tag: 'Kurs',
    tagColor: 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    url: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    badge: '4 edycje • ~400 absolwentów',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    icon: 'FE',
  },
  {
    name: 'Opanuj TypeScript',
    tag: 'Kurs',
    tagColor: 'bg-blue-500/15 text-blue-300 ring-blue-500/30',
    description:
      'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    url: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    badge: 'TypeScript 5 • React 19',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    icon: 'TS',
  },
  {
    name: '10xDevs',
    tag: 'Nowość',
    tagColor: 'bg-fuchsia-500/15 text-fuchsia-300 ring-fuchsia-500/30',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    badge: 'Maj 2026 • 10xDevs 3.0',
    gradient: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
    icon: '10x',
  },
];

export const youtubeVideos: Video[] = [
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    thumbnail: 'https://i3.ytimg.com/vi/0JOszZXqKaM/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    thumbnail: 'https://i3.ytimg.com/vi/XgyH-HSzKRQ/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=XgyH-HSzKRQ',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    thumbnail: 'https://i3.ytimg.com/vi/03y826SVjG0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=03y826SVjG0',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    thumbnail: 'https://i3.ytimg.com/vi/S-iNbyLSisE/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    thumbnail: 'https://i3.ytimg.com/vi/aRkECt7derY/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=aRkECt7derY',
  },
  {
    id: 'vH1T5qB4dBQ',
    title: 'Wybierasz model AI do kodowania? Nie ufaj benchmarkom',
    thumbnail: 'https://i3.ytimg.com/vi/vH1T5qB4dBQ/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=vH1T5qB4dBQ',
  },
];

export const podcastShows: PodcastShow[] = [
  {
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    episodes: [
      {
        id: 'e3k9b7u',
        title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        duration: '01:12:26',
        description:
          'Byliśmy na Google I/O 2026 i opowiemy wam o tym na żywo! W zupełnie nowym formacie podcastu Opanuj.AI zapraszamy na relację z konferencji.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        id: 'e3injdh',
        title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        duration: '00:47:22',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
      },
      {
        id: 'e3hc7nk',
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        duration: '01:39:33',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy kończy się era klasycznych SaaS-ów?',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
      },
      {
        id: 'e3gmm83',
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        duration: '01:28:30',
        description:
          'Dawid Sibiński, programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI, dzieli się doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
      },
      {
        id: 'e3fu2u2',
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        duration: '01:43:15',
        description:
          'Bierzemy na warsztat jedną z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt ClawdBot, później MoltBot, a dziś OpenClaw.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
      },
      {
        id: 'e3eg2n4',
        title: 'Doktor AI nadchodzi - ChatGPT Health vs Google MedGemma, konstytucja Anthropic i GLM-4.7 & KIMI K2.5',
        duration: '01:23:04',
        description:
          'ChatGPT Health vs Google MedGemma 1.5 — giganci Generative AI chcą podbić świat medycyny. Anthropic próbuje nadać AI wartości, a z Chin przychodzą GLM-4.7 i KIMI K2.5.',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Doktor-AI-nadchodzi---ChatGPT-Health-vs-Google-MedGemma--konstytucja-Anthropic-i-GLM-4-7--KIMI-K2-5-z-Chin-e3eg2n4',
      },
    ],
  },
  {
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    description: 'Rozmowy dla głodnych wiedzy',
    cover:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    episodes: [
      {
        id: 'e38lmlo',
        title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko',
        duration: '00:33:45',
        description:
          'Omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
      },
      {
        id: 'e380adn',
        title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński',
        duration: '00:45:56',
        description:
          'Wojciech Trawiński, Senior Software Engineer w XTB opowiada, o tym jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
      },
      {
        id: 'e2pfjg3',
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin',
        duration: '01:16:44',
        description:
          'Z Tomaszem Ducinem badamy w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach kształtujących system.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
      },
      {
        id: 'e2nepgm',
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        duration: '01:36:34',
        description:
          'LIVE Q&A o nadchodzącym szkoleniu OpanujTypeScript oraz o tym, gdzie będzie można przybić pionę w trakcie nadchodzących eventów.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
      },
      {
        id: 'e2kqhp6',
        title: 'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński',
        duration: '00:36:31',
        description:
          'Kamil Tarczyński, Co-founder i CTO agencji havenocode, specjalizującej się w tworzeniu aplikacji za pomocą platform no-code i low-code.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
      },
      {
        id: 'e2kj935',
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat',
        duration: '00:42:11',
        description:
          'Paweł Gnat, frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z udziału w pierwszej edycji Opanuj Frontend: AI Edition.',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
      },
    ],
  },
];

export const podcastPlatforms = [
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
  { name: 'Google Podcasts', url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw' },
  { name: 'RSS', url: 'https://anchor.fm/s/22544b7c/podcast/rss' },
];
