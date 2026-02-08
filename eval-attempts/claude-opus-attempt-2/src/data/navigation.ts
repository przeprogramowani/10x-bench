import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Strona główna', href: '/' },
  {
    label: 'Kursy',
    href: '/kursy',
    children: [
      { label: '10xDevs 3.0', href: '/kursy/10xdevs' },
      { label: 'Opanuj Frontend', href: '/kursy/opanuj-frontend' },
      { label: 'Opanuj TypeScript', href: '/kursy/opanuj-typescript' },
    ],
  },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'O nas', href: '/o-nas' },
];

export const footerNavigation = {
  courses: [
    { label: '10xDevs 3.0', href: '/kursy/10xdevs' },
    { label: 'Opanuj Frontend', href: '/kursy/opanuj-frontend' },
    { label: 'Opanuj TypeScript', href: '/kursy/opanuj-typescript' },
  ],
  resources: [
    { label: 'Podcast', href: '/podcast' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'O nas', href: '/o-nas' },
  ],
  social: [
    { label: 'YouTube', href: 'https://www.youtube.com/@przerogramowani' },
    { label: 'Spotify', href: 'https://open.spotify.com/show/0jIneOnaCBbfwtGlEMnzPR' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/przeprogramowani' },
    { label: 'GitHub', href: 'https://github.com/psmyrdek' },
  ],
};
