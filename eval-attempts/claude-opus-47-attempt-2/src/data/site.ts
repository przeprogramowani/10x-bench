export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Tworzymy kursy, podcasty i narzędzia dla świadomych programistów ery AI.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  social: {
    youtube: 'https://www.youtube.com/c/przeprogramowani',
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    applePodcasts: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
    instagram: 'https://www.instagram.com/przeprogramowani/',
    facebook: 'https://www.facebook.com/przeprogramowani',
    linkedin: 'https://www.linkedin.com/company/przeprogramowani/',
    newsletter: 'https://przeprogramowani.substack.com/',
    twitter: 'https://x.com/przeprogramowan',
  },
} as const;

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
  { label: '10xDevs', href: 'https://10xdevs.pl' },
];
