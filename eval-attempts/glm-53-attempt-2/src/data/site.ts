export const SITE = {
  name: 'Przeprogramowani',
  tagline: 'Szersze spojrzenie na programowanie',
  description:
    'Kursy, podcasty i YouTube dla ambitnych programistów. Łączymy świat programowania, biznesu i rozwoju w epoce AI.',
  url: 'https://przeprogramowani.pl',
  email: 'kontakt@przeprogramowani.pl',
  yearsActive: 7,
  socials: {
    youtube: 'https://youtube.com/c/przeprogramowani',
    facebook: 'https://facebook.com/przeprogramowani',
    instagram: 'https://instagram.com/przeprogramowani',
    newsletter: 'https://przeprogramowani.substack.com',
    linkedinPrzemek: 'https://www.linkedin.com/in/psmyrdek/',
    linkedinMarcin: 'https://www.linkedin.com/in/mkczarkowski/',
  },
};

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
];

export const COURSE_LINKS: NavLink[] = [
  { label: 'Opanuj Frontend', href: 'https://www.opanujfrontend.pl', external: true },
  { label: 'Opanuj TypeScript', href: 'https://www.opanujtypescript.pl', external: true },
  { label: '10xDevs', href: 'https://10xdevs.pl', external: true },
];
