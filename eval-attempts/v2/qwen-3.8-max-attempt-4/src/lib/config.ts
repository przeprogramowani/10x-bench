export const SITE_NAME = 'Przeprogramowani';

export const SITE_URL =
  (typeof process !== 'undefined' && process.env?.PUBLIC_SITE_URL) ||
  'http://localhost:8788';

export const ATTEMPT_START_ISO = '2026-09-08T07:29:49Z';

export const RECENT_WINDOW_DAYS = 90;

export const SOURCES = {
  opanujai: {
    key: 'opanujai',
    sourceName: 'Opanuj.AI Podcast',
    sourceUrl: 'https://podcasters.spotify.com/pod/show/opanujai',
    feedUrl: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    kind: 'rss' as const,
  },
  przeprogramowani: {
    key: 'przeprogramowani',
    sourceName: 'Podcast Przeprogramowani',
    sourceUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    feedUrl: 'https://anchor.fm/s/c72d808/podcast/rss',
    kind: 'rss' as const,
  },
  youtube: {
    key: 'youtube',
    sourceName: 'YouTube — Przeprogramowani',
    sourceUrl: 'https://www.youtube.com/@przeprogramowani',
    feedUrl:
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
    kind: 'atom' as const,
  },
};

export const COURSES = [
  {
    slug: '10xdevs',
    name: '10xDevs',
    url: 'https://10xdevs.pl',
    tagline: 'Programuj z AI — AI-Native Software Engineering',
    description:
      'Flagowy program Przeprogramowanych o pracy inżynierskiej z modelami językowymi: AI-Native Software Engineering, agenci kodujący, workflowy 10x i budowanie realnych projektów z asystą AI.',
  },
  {
    slug: 'opanuj-frontend',
    name: 'Opanuj Frontend',
    url: 'https://www.opanujfrontend.pl',
    tagline: 'AI Edition — kluczowa wiedza dla nowoczesnego frontend developera',
    description:
      'Kurs Opanuj Frontend: AI Edition przeprowadza przez nowoczesny frontend — HTML, CSS, JavaScript, TypeScript, React i narzędzia AI wspierające codzienną pracę frontend developera.',
  },
  {
    slug: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    url: 'https://www.opanujtypescript.pl',
    tagline: 'TypeScript 5 i React 19 w praktyce',
    description:
      'Kurs Opanuj TypeScript uczy pracy z najnowszą wersją TypeScripta w połączeniu z Reactem 19 — od typowania podstaw po zaawansowane wzorce wykorzystywane w produkcyjnych aplikacjach.',
  },
];

export const FOUNDERS = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programów edukacyjnych, kursów i podcastów. Doświadczony inżynier full-stack (.NET/C#, Java, Node.js, Angular, TypeScript), który pracował m.in. jako Lead Engineer i Manager w DAZN oraz Cabify. Prelegent konferencji takich jak 4Developers, ReactiveConf i InfoShare. Kontrybutor projektów open source.',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/',
    twitter: 'https://twitter.com/psmyrdek',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Specjalista TypeScript, React i Node.js z ponad 10-letnim doświadczeniem; prowadził technicznie platformę frontendową w SmartRecruiters. Entuzjasta neurobiologii, który tworzy materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca podcastu Opanuj.AI — popularnego technicznego podcastu o dużych modelach językowych w Polsce.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/',
    twitter: 'https://twitter.com/mkczarkowski',
  },
];
