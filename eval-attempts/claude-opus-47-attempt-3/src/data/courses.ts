export type Course = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  highlights: string[];
  modules: string[];
  level: string;
  duration: string;
  format: string;
  audience: string;
  badge: string;
  accent: 'blue' | 'violet' | 'orange';
  href: string;
  external?: boolean;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: '10xdevs',
    name: '10xDevs 3.0',
    shortName: '10xDevs',
    tagline: 'Nowe oblicze programowania z generatywnym AI',
    description:
      '5-tygodniowy, intensywny program dla doświadczonych programistek i programistów. Uczymy świadomego wykorzystania AI w całym cyklu wytwarzania oprogramowania — od researchu i planowania, przez implementację, po testy i utrzymanie w produkcji.',
    highlights: [
      'Powtarzalne workflow z AI agentami',
      'Context engineering i kontrola nad agentami',
      'Produkcyjne aplikacje: greenfield i legacy',
      'Ścieżki certyfikacji: Builder, Architect, Champion',
    ],
    modules: [
      'Research i planowanie z AI',
      'Implementacja z agentami',
      'Testy, review i QA wspierane przez LLM',
      'Deployment, monitoring i utrzymanie',
      'Praca z legacy codebase i zespołem',
    ],
    level: 'Intermediate → Advanced',
    duration: '5 tygodni',
    format: 'Online, kohortowo',
    audience: 'Doświadczeni programiści (min. 2 lata komercyjnie)',
    badge: 'Flagowy program',
    accent: 'violet',
    href: 'https://10xdevs.pl',
    external: true,
    featured: true,
  },
  {
    slug: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    shortName: 'Opanuj Frontend',
    tagline: 'Kompleksowa ścieżka do roli frontend developera',
    description:
      '5-modułowy kurs frontendu z niemal 400 absolwentami w czterech edycjach. Łączymy fundamenty HTML, CSS i JavaScript z nowoczesnym Reactem i praktycznym użyciem AI w codziennej pracy.',
    highlights: [
      'Fundamenty: HTML, CSS, JavaScript',
      'Nowoczesny React 19 i TypeScript',
      'AI jako codzienne narzędzie juniora i mida',
      'Projekty portfolio gotowe do rekrutacji',
    ],
    modules: [
      'HTML i CSS w praktyce',
      'JavaScript od zera do zaawansowanego',
      'React 19 i ekosystem',
      'Projekt portfolio end-to-end',
      'AI w codziennej pracy frontendowej',
    ],
    level: 'Beginner → Mid',
    duration: '12 tygodni',
    format: 'Online + wsparcie mentora',
    audience: 'Osoby wchodzące w IT oraz juniorzy chcący się przekwalifikować',
    badge: '400+ absolwentów',
    accent: 'blue',
    href: '/kursy/opanuj-frontend',
    featured: true,
  },
  {
    slug: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    shortName: 'Opanuj TypeScript',
    tagline: 'TypeScript 5 i React 19 dla projektów produkcyjnych',
    description:
      'Szkolenie dla frontend developerów, którzy chcą pisać skalowalny, typowany kod. Poznasz mechanikę systemu typów, generyki, wzorce projektowe oraz integrację z React 19 w realnych projektach.',
    highlights: [
      'Pełen system typów TypeScript 5',
      'Generyki, narrowing, typy warunkowe',
      'Wzorce projektowe w React 19',
      'Refaktoring legacy JS → TS',
    ],
    modules: [
      'Fundamenty systemu typów',
      'Generyki i typy zaawansowane',
      'TypeScript + React 19 w praktyce',
      'Architektura aplikacji i testy',
      'Migracja projektów JS → TS',
    ],
    level: 'Mid → Senior',
    duration: '6 tygodni',
    format: 'Online, self-paced',
    audience: 'Frontend developerzy z doświadczeniem w JS i React',
    badge: 'Produkcyjnie',
    accent: 'orange',
    href: '/kursy/opanuj-typescript',
    featured: true,
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
