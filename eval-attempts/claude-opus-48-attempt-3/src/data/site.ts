export const site = {
  name: 'Przeprogramowani',
  domain: 'przeprogramowani.pl',
  url: 'https://przeprogramowani.pl',
  tagline: 'Szersze spojrzenie na programowanie',
  mission: 'Edukacja technologiczna w epoce AI',
  description:
    'Przeprogramowani to Marcin Czarkowski i Przemek Smyrdek — od ponad 7 lat pomagamy ambitnym programistom świadomie wykorzystywać generatywne AI w codziennej pracy. Podcast, YouTube, newsletter i autorskie szkolenia.',
  email: 'kontakt@przeprogramowani.pl',
  newsletterUrl: 'https://przeprogramowani.pl/newsletter',
  youtubeSubscribeUrl: 'http://bit.ly/przeprogramowani-sub',
};

export type NavItem = { label: string; href: string; external?: boolean };

export const nav: NavItem[] = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'YouTube', href: '/youtube' },
  { label: 'Kursy', href: '/#kursy' },
];

export type Social = {
  label: string;
  href: string;
  // simple icon key used by the <Icon> component
  icon: 'youtube' | 'instagram' | 'tiktok' | 'twitter' | 'spotify' | 'apple' | 'mail';
};

export const socials: Social[] = [
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCb2Y3vMeD6N4WDt5Acw7Arw', icon: 'youtube' },
  { label: 'Spotify', href: 'https://creators.spotify.com/pod/show/przeprogramowani', icon: 'spotify' },
  { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526', icon: 'apple' },
  { label: 'Instagram', href: 'https://www.instagram.com/przeprogramowani/', icon: 'instagram' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@przeprogramowani', icon: 'tiktok' },
  { label: 'Kontakt', href: 'mailto:kontakt@przeprogramowani.pl', icon: 'mail' },
];

export type Course = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  accent: string; // tailwind gradient classes
  badge?: string;
};

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 4.0',
    tagline: 'Nowe oblicze programowania z generatywnym AI',
    description:
      'Flagowy program, w którym uczymy świadomego wykorzystania generatywnego AI na każdym etapie cyklu wytwarzania oprogramowania — od pomysłu, przez kod, po wdrożenie.',
    highlights: ['Praca z agentami AI', 'Cały cykl wytwarzania', 'Edycja jesień 2026'],
    url: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    accent: 'from-fuchsia-500 via-brand-500 to-cyan-400',
    badge: 'Nowa edycja',
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Kompleksowy program nowoczesnego frontendu',
    description:
      '5 obszernych modułów obejmujących nowoczesny frontend, testowanie, CI/CD, open source oraz architekturę aplikacji webowych. Blisko 400 absolwentów w czterech edycjach.',
    highlights: ['5 modułów', 'Testy, CI/CD, architektura', '~400 absolwentów'],
    url: 'https://www.opanujfrontend.pl?utm_source=przeprogramowani_website',
    accent: 'from-cyan-400 via-sky-500 to-brand-500',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Jakość kodu produkcyjnego z TypeScript 5',
    description:
      'Szkolenie skupione na podnoszeniu jakości projektów produkcyjnych z wykorzystaniem TypeScript 5 i React 19. Wzorce, typy i praktyki, które realnie ograniczają liczbę błędów.',
    highlights: ['TypeScript 5', 'React 19', 'Kod produkcyjny'],
    url: 'https://www.opanujtypescript.pl?utm_source=przeprogramowani_website',
    accent: 'from-brand-500 via-indigo-500 to-blue-600',
  },
];

export const stats = [
  { value: '7+', label: 'lat edukacji technologicznej' },
  { value: '~400', label: 'absolwentów Opanuj Frontend' },
  { value: '250+', label: 'odcinków podcastu i wideo' },
  { value: '4.0', label: 'edycja programu 10xDevs' },
];

export const clients = ['Huuuge Games', 'Autodesk', 'SmartRecruiters'];
