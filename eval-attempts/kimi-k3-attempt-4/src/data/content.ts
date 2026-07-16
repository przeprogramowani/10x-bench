export interface Course {
  id: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  url: string;
  badge?: string;
  features: string[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 4.0',
    tag: 'Gen AI',
    tagline: 'Programuj z AI',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl',
    badge: 'Nowość',
    features: [
      'AI w całym cyklu wytwarzania oprogramowania',
      'Praca z agentami AI i nowoczesnymi edytorami',
      'Techniki prompt engineeringu dla programistów',
      'Praktyczne projekty i warsztaty na żywo',
    ],
    featured: true,
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tag: 'Frontend',
    tagline: 'Zostań nowoczesnym frontend developerem',
    description:
      '5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    url: 'https://www.opanujfrontend.pl',
    features: [
      '5 obszernych modułów tematycznych',
      'Testowanie, CI/CD i architektura aplikacji webowych',
      'Prawie 400 absolwentów czterech edycji',
      'Wsparcie AI w procesie nauki',
    ],
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tag: 'TypeScript',
    tagline: 'Typowanie, które robi różnicę',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    url: 'https://www.opanujtypescript.pl',
    features: [
      'Najnowsze wersje TypeScript 5 i React 19',
      'Zaawansowane techniki typowania',
      'Lepsza jakość kodu na produkcji',
      'Praktyczne ćwiczenia i realne scenariusze',
    ],
  },
];

export interface Episode {
  title: string;
  description: string;
  duration: string;
  url: string;
  date: string;
}

export interface PodcastShow {
  id: string;
  name: string;
  listeners: string;
  description: string;
  coverUrl: string;
  episodes: Episode[];
}

export const podcastShows: PodcastShow[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    listeners: 'Ponad 4000 słuchaczy',
    description: 'Comiesięczne podsumowanie najważniejszych wydarzeń ze świata AI',
    coverUrl:
      'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/37949556/37949556-1685638211267-077987255082e.jpg',
    episodes: [
      {
        title:
          'BAN NA AI?! USA BLOKUJE ANTHROPICA i OPEN AI (Claude Mythos, Claude Fable i GPT-5.6)',
        description:
          'Czy najlepsze modele AI właśnie przestały być zwykłym produktem, a stały się technologią kontrolowaną przez państwo? Rozmawiamy o bezprecedensowej sytuacji: rząd USA blokuje publiczny dostęp do modeli.',
        duration: '01:21:53',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/BAN-NA-AI---USA-BLOKUJE-ANTHROPICA-i-OPEN-AI-Claude-Mythos--Claude-Fable-i-GPT-5-6-e3lfs2p',
        date: 'Czerwiec 2026',
      },
      {
        title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        description:
          'Byliśmy na Google I/O 2026 i opowiadamy o tym na żywo! W nowym formacie podcastu Opanuj.AI — relacja z konferencji, która była dla nas jedną wielką niewiadomą.',
        duration: '01:12:26',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
        date: 'Maj 2026',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI? (+ Cursor 3.0, DeepSeek V4, Meta Muse)',
        description:
          'W kwietniu 2026 dostaliśmy wysyp dużych premier: GPT-5.5, Claude Opus 4.7, DeepSeek V4, Cursor 3.0, Zed 1.0, Meta Muse Spark i nowe obrazy w ChatGPT.',
        duration: '00:47:22',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/GPT-5-5-VS-Opus-4-7---kto-rzdzi-na-scenie-AI---Cursor-3-0--DeepSeek-V4--Meta-Muse-e3injdh',
        date: 'Kwiecień 2026',
      },
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS | Opanuj.AI',
        description:
          'Czy AI naprawdę rozumie świat, skoro oblewa testy, które człowiek rozwiązuje bez większego problemu? I czy właśnie na naszych oczach kończy się era klasycznych SaaS-ów?',
        duration: '01:39:33',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/TEGO-AI-NIE-POTRAFI---ARC-AGI-3-i-koniec-epoki-SaaS--Opanuj-AI-e3hc7nk',
        date: 'Marzec 2026',
      },
      {
        title:
          'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem - Gość: Dawid Sibiński',
        description:
          'Dawid Sibiński to programista full-stack, cyfrowy nomad i entuzjasta programowania wspieranego AI. Dzieli się doświadczeniami w pracy z Copilotem, Cursorem oraz Claude Code.',
        duration: '01:28:30',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Programowanie-w-epoce-AI-z-Claude-Code--Cursorem-i-Copilotem---Go-Dawid-Sibiski-e3gmm83',
        date: 'Luty 2026',
      },
      {
        title:
          'OpenClaw, SWE-AGI i zmierzch chatbotów - Opus 4.6 i GPT-5.3 Codex to Agenci z przyszłości!',
        description:
          'Bierzemy na warsztat jedną z najbardziej absurdalnych i jednocześnie najciekawszych historii AI ostatnich miesięcy: viralowy projekt OpenClaw oraz agenty przyszłości.',
        duration: '01:43:15',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/OpenClaw--SWE-AGI-i-zmierzch-chatbotw---Opus-4-6-i-GPT-5-3-Codex-to-Agenci-z-przyszoci-e3fu2u2',
        date: 'Styczeń 2026',
      },
    ],
  },
  {
    id: 'przeprogramowani-gosc',
    name: 'Przeprogramowani ft. Gość',
    listeners: 'Ponad 3800 słuchaczy',
    description: 'Rozmowy dla głodnych wiedzy',
    coverUrl:
      'https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/1988530/1988530-1700599022827-301b808b3e021.jpg',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko',
        description:
          'W rozmowie z Wiktorią Sitko omawiamy największe bariery językowe programistów, dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.',
        duration: '00:33:45',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
        date: '2025',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty, Wojciech Trawiński',
        description:
          'Wojciech Trawiński, Senior Software Engineer w XTB, opowiada o tym, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
        duration: '00:45:56',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
        date: '2025',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie? Tomasz Ducin',
        description:
          'W rozmowie z Tomaszem Ducinem badamy, w jaki sposób architektura wykracza poza konkretne narzędzia, koncentrując się na kluczowych decyzjach kształtujących system.',
        duration: '01:16:44',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
        date: '2024',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE YT)',
        description:
          'Live Q&A o nadchodzącym szkoleniu Opanuj TypeScript oraz o konferencjach, na których będzie można nas spotkać w najbliższym czasie.',
        duration: '01:36:34',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
        date: '2024',
      },
      {
        title: 'No-code i Low-code - przyszłość tworzenia aplikacji? | Kamil Tarczyński',
        description:
          'Kamil Tarczyński, Co-founder oraz CTO agencji havenocode, o potencjale, wyzwaniach i przyszłości platform no-code i low-code.',
        duration: '00:36:31',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
        date: '2024',
      },
      {
        title: 'Nauka nowoczesnego frontendu | Paweł Gnat',
        description:
          'Paweł Gnat, frontend developer, który przebranżowił się do IT z budownictwa, dzieli się wrażeniami z pierwszej edycji programu Opanuj Frontend: AI Edition.',
        duration: '00:42:11',
        url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
        date: '2024',
      },
    ],
  },
];

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  category: string;
}

export const videos: Video[] = [
  {
    id: 'B4t6w4QsD24',
    title: 'Darmowe AI na każdym Maku - jak działa Apple Foundational Models na macOS 27',
    url: 'https://www.youtube.com/watch?v=B4t6w4QsD24',
    thumbnail: 'https://i.ytimg.com/vi/B4t6w4QsD24/hqdefault.jpg',
    category: 'AI',
  },
  {
    id: '0JOszZXqKaM',
    title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
    url: 'https://www.youtube.com/watch?v=0JOszZXqKaM',
    thumbnail: 'https://i.ytimg.com/vi/0JOszZXqKaM/hqdefault.jpg',
    category: 'AI',
  },
  {
    id: 'XgyH-HSzKRQ',
    title: 'Byłem na Google I/O 2026. Nie tego się spodziewałem.',
    url: 'https://www.youtube.com/watch?v=XgyH-HSzKRQ',
    thumbnail: 'https://i.ytimg.com/vi/XgyH-HSzKRQ/hqdefault.jpg',
    category: 'Vlog',
  },
  {
    id: '03y826SVjG0',
    title: 'Jak wybrać najlepszego Agenta AI do programowania?',
    url: 'https://www.youtube.com/watch?v=03y826SVjG0',
    thumbnail: 'https://i.ytimg.com/vi/03y826SVjG0/hqdefault.jpg',
    category: 'AI',
  },
  {
    id: 'S-iNbyLSisE',
    title: '5 Agent Skills do jakościowego programowania z AI - Claude Code LIVE DEMO',
    url: 'https://www.youtube.com/watch?v=S-iNbyLSisE',
    thumbnail: 'https://i.ytimg.com/vi/S-iNbyLSisE/hqdefault.jpg',
    category: 'Live Demo',
  },
  {
    id: 'aRkECt7derY',
    title: 'Product Builders Day | LIVE AI Product Heroes i 10xDevs',
    url: 'https://www.youtube.com/watch?v=aRkECt7derY',
    thumbnail: 'https://i.ytimg.com/vi/aRkECt7derY/hqdefault.jpg',
    category: 'Live',
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
}

export const founders: Founder[] = [
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

export const stats = [
  { value: 7, suffix: ' lat', label: 'na rynku edukacji technologicznej' },
  { value: 400, suffix: '+', label: 'absolwentów Opanuj Frontend' },
  { value: 4000, suffix: '+', label: 'słuchaczy Opanuj.AI Podcast' },
  { value: 3800, suffix: '+', label: 'słuchaczy Przeprogramowani ft. Gość' },
];

export const podcastPlatforms = [
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
  },
  {
    name: 'Google Podcasts',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw',
  },
  {
    name: 'RSS',
    url: 'https://anchor.fm/s/22544b7c/podcast/rss',
  },
];

export const socialLinks = {
  youtube: 'https://youtube.com/c/przeprogramowani',
  facebook: 'https://facebook.com/przeprogramowani',
  instagram: 'https://instagram.com/przeprogramowani',
  linkedin: 'https://www.linkedin.com/company/przeprogramowani',
  email: 'kontakt@przeprogramowani.pl',
  newsletter: 'https://przeprogramowani.substack.com',
};
