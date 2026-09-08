// Static editorial content, compiled from official sources on 2026-09-08.
// See research/NOTES.md (attempt root) for source URLs and retrieval times.

export interface Course {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export const COURSES: Course[] = [
  {
    slug: '10xdevs',
    name: '10xDevs',
    url: 'https://10xdevs.pl',
    tagline: 'Programuj z AI — nowe oblicze programowania',
    description:
      'Flagowe szkolenie Przeprogramowanych o skutecznej współpracy programisty z agentami AI. Techniki i narzędzia pozwalające świadomie stosować Generative AI w całym cyklu wytwarzania oprogramowania. W pierwszej edycji wzięło udział ponad 1000 uczestników.',
    highlights: [
      'Świadoma praca z Generative AI w cyklu wytwarzania oprogramowania',
      'Techniki współpracy z agentami AI',
      'Ponad 1000 uczestników pierwszej edycji',
    ],
    featured: true,
  },
  {
    slug: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    url: 'https://opanujfrontend.pl',
    tagline: 'Zostań nowoczesnym frontend developerem',
    description:
      'Obszerne szkolenie frontendowe: pięć modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów.',
    highlights: [
      '5 modułów: frontend, testowanie, CI/CD, open source, architektura',
      'Prawie 400 absolwentów w czterech edycjach',
    ],
  },
  {
    slug: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    url: 'https://opanujtypescript.pl',
    tagline: 'Podnieś jakość projektów produkcyjnych',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Praca z najnowszymi wersjami TypeScript 5 i React 19.',
    highlights: [
      'TypeScript 5 i React 19 w praktyce',
      'Nacisk na kod produkcyjny i jego rozwój',
    ],
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
}

// Biographies based on the official team page at https://opanuj.ai (retrieved 2026-09-08).
export const FOUNDERS: Founder[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-Founder, Engineering Manager',
    bio: 'Lead engineer i engineering manager w globalnych firmach produktowych, takich jak DAZN i Cabify. Autor programów szkoleniowych, kursów i podcastów promujących szersze spojrzenie na programowanie.',
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-Founder, Lead Software Engineer',
    bio: 'Tech lead w SmartRecruiters, przedsiębiorca i doświadczony trener, który prowadził szkolenia dla setek programistów. Autor podcastów z ekspertami z branży IT.',
  },
];

export const VALUES = [
  {
    title: 'Szersze spojrzenie na programowanie',
    text: 'Od ponad 7 lat pokazują, że rozwój programisty to nie tylko kod: architektura, komunikacja, biznes i narzędzia AI.',
  },
  {
    title: 'Praktyczne wdrożenia AI',
    text: 'Aktywnie wykorzystują narzędzia AI w codziennej pracy programistycznej i przy tworzeniu materiałów edukacyjnych.',
  },
  {
    title: 'Dzielenie się wiedzą',
    text: 'Autorzy podcastów Opanuj.AI i Przeprogramowani oraz szkoleń: 10xDevs, Opanuj Frontend i Opanuj TypeScript.',
  },
  {
    title: 'Eksperymentowanie z AI',
    text: 'Regularnie testują najnowsze narzędzia AI i poddają je merytorycznej analizie, bez marketingowych ogólników.',
  },
];

export const PODCASTS = [
  {
    slug: 'opanuj-ai',
    name: 'Opanuj.AI',
    path: '/podcast/opanuj-ai',
    description:
      'Podcast o sztucznej inteligencji z perspektywy programisty: najnowsze modele, narzędzia i praktyczne wdrożenia AI w codziennej pracy. Prowadzony przez Przemka Smyrdka i Marcina Czarkowskiego.',
    spotifyUrl: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
    appleUrl:
      'https://podcasts.apple.com/us/podcast/opanuj-ai-podcast/id1690353799',
  },
  {
    slug: 'przeprogramowani',
    name: 'Przeprogramowani',
    path: '/podcast/przeprogramowani',
    description:
      'Podcast o szerszym spojrzeniu na programowanie: rozmowy z ekspertami branży IT o karierze, architekturze, frontendzie i umiejętnościach miękkich.',
    spotifyUrl: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    appleUrl: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1508387250',
  },
] as const;

export const NAV_LINKS = [
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcasty' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/kursy', label: 'Kursy' },
] as const;

export const CONTACT_EMAIL = 'kontakt@przeprogramowani.pl';
