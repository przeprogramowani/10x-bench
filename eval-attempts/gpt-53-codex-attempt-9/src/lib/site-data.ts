export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
};

export type Course = {
  name: string;
  short: string;
  description: string;
  url: string;
  badge: string;
  accent: string;
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Start' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/youtube', label: 'YouTube' },
  { href: 'https://10xdevs.pl', label: '10xDevs', external: true }
];

export const footerLinks: NavItem[] = [
  { href: 'https://przeprogramowani.pl', label: 'Przeprogramowani.pl', external: true },
  { href: 'https://opanujfrontend.pl', label: 'Opanuj Frontend', external: true },
  { href: 'https://opanujtypescript.pl', label: 'Opanuj TypeScript', external: true },
  { href: 'https://10xdevs.pl', label: '10xDevs', external: true }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Przemek Smyrdek',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Autor programow edukacyjnych, kursow i podcastow. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript).',
    linkedin: 'https://www.linkedin.com/in/psmyrdek/'
  },
  {
    name: 'Marcin Czarkowski',
    role: 'Co-founder, Przeprogramowani',
    bio: 'Lead techniczny platformy frontendowej w SmartRecruiters. Tworca Opanuj.AI Podcast, specjalista TypeScript, React i Node.js.',
    linkedin: 'https://www.linkedin.com/in/mkczarkowski/'
  }
];

export const courses: Course[] = [
  {
    name: 'Opanuj Frontend: AI Edition',
    short: 'Opanuj Frontend',
    description:
      'Kluczowa wiedza dla nowoczesnego frontend developera: architektura aplikacji, testy, jakosc kodu i praktyczne wykorzystanie AI.',
    url: 'https://opanujfrontend.pl',
    badge: 'Frontend',
    accent: 'from-cyan-500 to-teal-500'
  },
  {
    name: 'Opanuj TypeScript: Frontend Pro',
    short: 'Opanuj TypeScript',
    description:
      'Pracuj z TypeScript 5 i React 19. Kurs stawia na praktyke, typy generyczne, projektowe decyzje i bezpieczny kod na produkcji.',
    url: 'https://opanujtypescript.pl',
    badge: 'TypeScript',
    accent: 'from-sky-500 to-blue-500'
  }
];

export const hero10x = {
  name: '10xDevs 3.0',
  tagline: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI.',
  description:
    'Techniki i narzedzia pozwalajace swiadomie stosowac AI w calym cyklu wytwarzania oprogramowania.',
  url: 'https://10xdevs.pl'
};

export const companyFacts = [
  { label: 'Na rynku od', value: '2017' },
  { label: 'Laczymy', value: 'programowanie + biznes + rozwoj' },
  { label: 'Kontakt', value: 'kontakt@przeprogramowani.pl' }
];
