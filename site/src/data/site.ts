export const site = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Edukacja technologiczna w epoce AI. Kursy, podcast, YouTube i społeczność dla ambitnych programistów.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  social: {
    youtube: 'https://www.youtube.com/c/przeprogramowani',
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    apple: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
    facebook: 'https://www.facebook.com/przeprogramowani',
    instagram: 'https://www.instagram.com/przeprogramowani',
    substack: 'https://przeprogramowani.substack.com',
    github: 'https://github.com/przeprogramowani',
  },
  stats: [
    { label: 'lat edukacji tech', value: '7+' },
    { label: 'absolwentów kursów', value: '400+' },
    { label: 'odcinków podcastu', value: '200+' },
    { label: 'społeczności', value: '10k+' },
  ],
} as const;

export const navLinks = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: '/#kursy', label: 'Kursy' },
] as const;
