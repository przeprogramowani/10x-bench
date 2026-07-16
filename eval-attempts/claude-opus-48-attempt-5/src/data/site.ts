export const site = {
  name: 'Przeprogramowani',
  domain: 'przeprogramowani.pl',
  url: 'https://przeprogramowani.pl',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Kursy, podcasty i narzędzia dla ambitnych programistów — od frontendu i TypeScriptu po AI-Native Software Engineering.',
  email: 'kontakt@przeprogramowani.pl',
  years: 7,
  socials: {
    youtube: 'https://www.youtube.com/@przeprogramowani',
    spotify: 'https://open.spotify.com/show/przeprogramowani',
    apple: 'https://podcasts.apple.com/us/podcast/przeprogramowani/id1471770526',
    instagram: 'https://www.instagram.com/przeprogramowani/',
    facebook: 'https://facebook.com/przeprogramowani',
  },
} as const;

export type NavItem = { label: string; href: string; badge?: string };

export const nav: NavItem[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kursy', href: '/kursy' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
];

// Aggregate, brand-level stats surfaced across the site.
export const stats = [
  { value: '7 lat', label: 'edukacji technicznej' },
  { value: '6 700+', label: 'absolwentów 10xDevs' },
  { value: '400+', label: 'absolwentów Opanuj Frontend' },
  { value: '4 000+', label: 'słuchaczy Opanuj.AI' },
];

// Companies whose engineers learn with Przeprogramowani.
export const clients = [
  'SmartRecruiters',
  'Autodesk',
  'Huuuge Games',
  'Future Processing',
  'Callstack',
  'edrone',
  'Euvic',
  'Nutridome',
  'Xfive',
  'Strabag',
];
