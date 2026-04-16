export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Programowanie spotyka się z rozwojem osobistym. Kursy, podcast i materiały, które pomogą Ci świadomie wykorzystać AI w codziennej pracy dewelopera.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  social: {
    youtube: 'https://www.youtube.com/@Przeprogramowani',
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    applePodcasts: 'https://podcasts.apple.com/us/podcast/przeprogramowani/id1471770526',
    instagram: 'https://www.instagram.com/przeprogramowani/',
    linkedin: 'https://www.linkedin.com/company/przeprogramowani/',
    substack: 'https://przeprogramowani.substack.com/',
  },
} as const;

export const nav = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kursy', href: '/kursy' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
] as const;
