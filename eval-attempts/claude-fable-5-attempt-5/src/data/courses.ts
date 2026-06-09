export interface Course {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  badge?: string;
  accent: 'violet' | 'sky' | 'amber';
}

export const courses: Course[] = [
  {
    name: '10xDevs',
    tagline: 'AI-Native Software Engineering',
    description:
      'Flagowy program o świadomej współpracy z agentami AI na każdym etapie wytwarzania oprogramowania — od researchu i planowania, przez implementację, po testy i utrzymanie. Inżynierska dyscyplina zamiast vibe codingu.',
    highlights: [
      'Agentic Environment — konfiguracja środowiska i agentów AI',
      '10xWorkflow — planowanie MVP i wdrażanie funkcji z AI',
      'Jakość, testy i debugging wsparte agentami',
      'Modernizacja dużych i legacy projektów',
      'AI-Native praca zespołowa',
    ],
    url: 'https://www.10xdevs.pl/',
    badge: '3700+ absolwentów',
    accent: 'violet',
  },
  {
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Zostań kompletnym frontend developerem',
    description:
      'Intensywny, 10-tygodniowy program, po którym budujesz wysokiej jakości aplikacje frontendowe — od wzorców i testów, przez CI/CD i open source, po architekturę aplikacji webowych.',
    highlights: [
      'Wzorce i dobre praktyki — jakość kodu, stan, wydajność',
      'Quality engineering — Vitest, Playwright, dostępność',
      'Wdrożenia i produkcja — CI/CD, feature flags, monitoring',
      'Frontend zespołowy — design systems, monorepo, open source',
      'Architektura aplikacji i techniczny leadership',
    ],
    url: 'https://opanujfrontend.pl/',
    badge: '383+ uczestników',
    accent: 'sky',
  },
  {
    name: 'Opanuj TypeScript',
    tagline: 'TypeScript 5 i React 19 w praktyce',
    description:
      'Szkolenie, dzięki któremu podniesiesz jakość projektów produkcyjnych z TypeScript 5 i React 19. Typowanie, które realnie chroni przed błędami — zamiast spowalniać zespół.',
    highlights: [
      'Nowości TypeScript 5 w codziennej pracy',
      'Typowanie komponentów i hooków React 19',
      'Bezpieczna komunikacja z API i walidacja danych',
      'Refaktoryzacja istniejących projektów na strict mode',
    ],
    url: 'https://przeprogramowani.pl/',
    accent: 'amber',
  },
];
