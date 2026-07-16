export type Course = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  accent: string; // tailwind gradient classes
  emoji: string;
  featured?: boolean;
  meta: { label: string; value: string }[];
  highlights: string[];
  modules?: { title: string; points: string[] }[];
  stack: string[];
};

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 4.0',
    tagline: 'Czas na AI-Native Software Engineering',
    description:
      'Pięciotygodniowy, kohortowy kurs online, który uczy wplatania narzędzi AI w cały cykl wytwarzania oprogramowania — od nowych projektów po modernizację legacy. Wyjdź poza proste promptowanie i pracuj z AI jak profesjonalny inżynier.',
    url: 'https://10xdevs.pl',
    accent: 'from-brand-500 via-brand-600 to-accent-500',
    emoji: '⚡️',
    featured: true,
    meta: [
      { label: 'Format', value: '5 tygodni + projekt' },
      { label: 'Absolwenci', value: '6 700+' },
      { label: 'Start', value: '14 września 2026' },
    ],
    highlights: [
      'Konfiguracja agentów AI i delegowanie zadań',
      'Context engineering i zarządzanie pamięcią modeli',
      'Budowa full-stack MVP z asystą AI',
      'Modernizacja legacy z pomocą AI',
      'Bezpieczeństwo operacyjne: sandboxy i izolacja agentów',
      'Trzy poziomy certyfikacji: AI Builder, Architect, Champion',
    ],
    stack: ['Claude Code', 'Cursor', 'GitHub Copilot', 'MCP', 'Agent Skills'],
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend',
    tagline: 'AI Edition — zostań kompletnym frontend developerem',
    description:
      'Intensywny, 10-tygodniowy program, który przygotowuje do tworzenia zaawansowanych aplikacji webowych z użyciem nowoczesnych technologii i najlepszych praktyk. Pięć modułów: od wzorców i jakości, przez wdrożenia, po architekturę.',
    url: 'https://opanujfrontend.pl',
    accent: 'from-fuchsia-500 via-brand-600 to-brand-700',
    emoji: '🎨',
    meta: [
      { label: 'Format', value: '5 modułów · 25 lekcji' },
      { label: 'Absolwenci', value: '400+' },
      { label: 'Wsparcie', value: '5 sesji live' },
    ],
    highlights: [
      'Wzorce, zarządzanie stanem i optymalizacja wydajności',
      'Testy jednostkowe (Vitest) i e2e (Playwright) oraz a11y',
      'CI/CD z GitHub Actions i wdrożenia na AWS',
      'Design systems, Open Source i praca w monorepo',
      'Architektura aplikacji i mikrofrontendy',
    ],
    modules: [
      { title: 'Wzorce i dobre praktyki', points: ['Clean code', 'Zarządzanie stanem', 'Komunikacja z API', 'AI pair programming'] },
      { title: 'Frontend Quality Engineering', points: ['Vitest', 'Playwright', 'Bezpieczeństwo API', 'Dostępność (a11y)'] },
      { title: 'Wdrożenia i produkcja', points: ['CI/CD GitHub Actions', 'AWS', 'Feature flags', 'Monitoring'] },
      { title: 'Praca zespołowa', points: ['Design systems', 'Open Source', 'Inner Source', 'Monorepo'] },
      { title: 'Architektura aplikacji', points: ['Dobór stacku', 'Bootstrap projektu', 'Tech leadership', 'Mikrofrontendy'] },
    ],
    stack: ['TypeScript', 'React', 'Astro', 'Playwright', 'Storybook', 'AWS', 'GitHub Actions'],
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Kurs TypeScript 5 i React 19',
    description:
      'Praktyczny kurs, który pomaga pewnie używać typów generycznych, podejmować lepsze decyzje o typowaniu i skuteczniej rozwijać projekty produkcyjne. Ponad 40 ćwiczeń i wiedza z 10+ lat pracy z frontendem.',
    url: 'https://opanujtypescript.pl',
    accent: 'from-blue-500 via-brand-600 to-brand-700',
    emoji: '🧩',
    meta: [
      { label: 'Ćwiczenia', value: '40+' },
      { label: 'Stack', value: 'TS 5.7 · React 19' },
      { label: 'Moduły', value: 'Core Pro + React Pro' },
    ],
    highlights: [
      'Typy generyczne, ograniczenia i kompozycja typów',
      'Typy warunkowe, mapowane i inferencja',
      'Typowanie komponentów, hooków i zdarzeń w React 19',
      'Strategie zarządzania stanem i komunikacji z backendem',
      'Wzorce projektowe i integracje z ekosystemem',
    ],
    modules: [
      { title: 'Core Pro — nowoczesny TypeScript', points: ['Konfiguracja projektu', 'Teoria zbiorów', 'Typy generyczne', 'Wzorce i anty-wzorce'] },
      { title: 'React Pro — sekrety React 19', points: ['Typowanie komponentów', 'Custom hooks', 'React Query / SWR', 'Compound Components'] },
    ],
    stack: ['TypeScript 5.7', 'React 19', 'Zod', 'tRPC', 'React Query', 'Astro 5'],
  },
];

export const featuredCourse = courses.find((c) => c.featured)!;
