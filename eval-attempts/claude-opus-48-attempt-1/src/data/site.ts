export const site = {
  name: 'Przeprogramowani',
  domain: 'przeprogramowani.pl',
  url: 'https://przeprogramowani.pl',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Tworzymy podcast, filmy i kursy (Opanuj Frontend, Opanuj TypeScript, 10xDevs), które pomagają programistom rozwijać się w każdym wymiarze — technicznym, biznesowym i osobistym.',
  email: 'kontakt@przeprogramowani.pl',
  foundedYearsAgo: 7,
  stats: {
    community: '15 000+',
    trained: '1500+',
    years: '7 lat',
  },
} as const;

export const nav = [
  { label: 'Start', href: '/' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
] as const;

export const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@Przeprogramowani', icon: 'youtube' },
  { label: 'Spotify', href: 'https://open.spotify.com/show/przeprogramowani', icon: 'spotify' },
  {
    label: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
    icon: 'apple',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/przeprogramowani/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/przeprogramowani', icon: 'facebook' },
] as const;

// Firmy, które zaufały zespołowi Przeprogramowani (na podstawie materiałów o marce).
export const clients = [
  'SmartRecruiters',
  'Huuuge Games',
  'Autodesk',
  'Future Processing',
  'Callstack',
  'edrone',
  'Euvic',
  'Strabag',
  'Nutridome',
  'Xfive',
] as const;
