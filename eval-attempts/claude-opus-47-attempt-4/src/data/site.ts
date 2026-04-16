export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Edukacja techniczna w erze AI. Pomagamy ambitnym programistom świadomie wykorzystywać generatywną AI w całym cyklu wytwarzania oprogramowania.',
  url: 'https://przeprogramowani.pl',
  contactEmail: 'kontakt@przeprogramowani.pl',
  social: {
    youtube: 'https://www.youtube.com/c/przeprogramowani',
    podcastApple: 'https://podcasts.apple.com/pl/podcast/opanuj-ai-podcast/id1690353799',
    podcastSpotify: 'https://open.spotify.com/show/3D6LmchBdoqL2sWkQjvWOy',
    instagram: 'https://www.instagram.com/przeprogramowani/',
    facebook: 'https://www.facebook.com/przeprogramowani',
    newsletter: 'https://przeprogramowani.substack.com/',
  },
  stats: [
    { value: '7 lat', label: 'na rynku edukacji technicznej' },
    { value: '1500+', label: 'programistów przeszkolonych' },
    { value: '400+', label: 'absolwentów Opanuj Frontend' },
    { value: '#1', label: 'podcast o LLM w Polsce' },
  ],
  partners: ['Huuuge Games', 'SmartRecruiters', 'Future Processing', 'Callstack', 'Autodesk'],
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kursy', href: '/#kursy' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Newsletter', href: 'https://przeprogramowani.substack.com/', external: true },
];
