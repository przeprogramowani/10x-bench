export type Course = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  modules?: string[];
  duration?: string;
  level: 'Od podstaw' | 'Średnio zaawansowany' | 'Zaawansowany';
  status: 'Dostępny' | 'Zapisy otwarte' | 'Wkrótce';
  accent: 'brand' | 'accent' | 'cyan';
  url: string;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: '10xdevs',
    name: '10xDevs',
    tagline: 'Flagowy program dla inżynierów epoki AI',
    description:
      'Kompleksowy program, który uczy jak budować produkty z wykorzystaniem Claude Code, Cursora i nowoczesnego stacku. Od promptowania po wdrożenia na produkcji.',
    highlights: [
      'Claude Code, Cursor, Copilot w codziennym workflow',
      'Spec-driven development i meta-prompting',
      'Integracja z GitHub Actions i automatyzacja',
      'Od MVP do produkcji w kilka tygodni',
    ],
    duration: '10 tygodni',
    level: 'Średnio zaawansowany',
    status: 'Zapisy otwarte',
    accent: 'brand',
    url: 'https://10xdevs.pl',
    featured: true,
  },
  {
    slug: 'opanuj-frontend',
    name: 'Opanuj Frontend',
    tagline: 'AI Edition — pełen program frontendowca',
    description:
      'Pięć kompleksowych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Prawie 400 absolwentów czterech edycji.',
    highlights: [
      '5 modułów: fundamenty, testy, CI/CD, OSS, architektura',
      'Projekty produkcyjne od zera do deploymentu',
      'Mentoring i społeczność absolwentów',
      'React 19 + TypeScript + Vite + AI tooling',
    ],
    duration: '12 tygodni',
    level: 'Średnio zaawansowany',
    status: 'Dostępny',
    accent: 'accent',
    url: 'https://opanujfrontend.pl',
  },
  {
    slug: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Produkcyjny TypeScript 5 i React 19',
    description:
      'Skoncentrowany trening jakości projektów produkcyjnych. Typy zaawansowane, wzorce, generyki, infer, conditional types — wszystko czego potrzebujesz na co dzień.',
    highlights: [
      'Typy zaawansowane i type-level programming',
      'Wzorce dla dużych aplikacji',
      'Integracja z React 19 i Next.js',
      'Live coding i ćwiczenia praktyczne',
    ],
    duration: '6 tygodni',
    level: 'Zaawansowany',
    status: 'Dostępny',
    accent: 'cyan',
    url: 'https://opanujtypescript.pl',
  },
];
