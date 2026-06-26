export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się na wielu płaszczyznach.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  yearsOnMarket: 7,
  social: {
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    youtube: 'https://youtube.com/c/przeprogramowani',
    linkedin: 'https://www.linkedin.com/company/przeprogramowani',
  },
  newsletter: {
    title: 'Przeprogramowany Newsletter',
    description:
      'Co tydzień w piątek otrzymaj porcję wartościowych treści w formacie 3-2-1: 3 rekomendacje techniczne, 2 rekomendacje rozwojowe, 1 bonus niespodzianka.',
    url: 'https://przeprogramowani.substack.com',
  },
};

export const navLinks = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: '10xDevs', href: 'https://10xdevs.pl', external: true },
];

export const courses = [
  {
    id: '10xdevs',
    title: '10xDevs 3.0',
    badge: 'Nowość — Maj 2026',
    category: 'Programuj z AI',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl',
    cta: 'Zobacz teraz',
    featured: true,
    accent: 'from-brand-500 to-accent-500',
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    badge: 'Kurs',
    category: 'Frontend',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszennych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    url: 'https://www.opanujfrontend.pl',
    cta: 'Szczegóły',
    featured: false,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    badge: 'Kurs',
    category: 'TypeScript',
    description:
      'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    url: 'https://www.opanujtypescript.pl',
    cta: 'Szczegóły',
    featured: false,
    accent: 'from-sky-500 to-blue-500',
  },
];

export const team = [
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

export const podcastPlatforms = [
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o' },
  { name: 'Google Podcasts', url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yMjU0NGI3Yy9wb2RjYXN0L3Jzcw' },
  { name: 'RSS', url: 'https://anchor.fm/s/22544b7c/podcast/rss' },
];
