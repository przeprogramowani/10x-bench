export interface Course {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  accent: 'violet' | 'sky' | 'amber';
}

export const FLAGSHIP_COURSE: Course = {
  id: '10xdevs',
  name: '10xDevs 3.0',
  badge: 'Start: 18 maja 2026',
  tagline: 'AI-Native Software Engineering',
  description:
    'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Poznaj praktyczne workflow pracy z agentami AI — od researchu i planowania, przez implementację, po utrzymanie produkcji. Bez zgadywania. Bez halucynacji. Bez chaosu.',
  highlights: [
    '5 tygodni + tydzień bonusowy',
    'Pełny workflow: Research → Plan → Implementacja → Testy → Deploy',
    'Context engineering, subagenci i MCP w praktyce',
    'Moduł pracy z legacy i skalowania AI w zespole',
    '3700+ absolwentów poprzednich edycji',
  ],
  url: 'https://10xdevs.pl',
  accent: 'violet',
};

export const COURSES: Course[] = [
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    badge: '5 modułów · 10 tygodni',
    tagline: 'Zostań kompletnym frontend developerem',
    description:
      'Kompleksowy program rozwoju frontend developera: wzorce i dobre praktyki, inżynieria jakości, CI/CD i utrzymanie produkcji, praca zespołowa oraz architektura aplikacji. Framework-agnostic — React, Vue, Angular, Svelte czy Astro.',
    highlights: [
      'Codzienne wsparcie senior frontend developerów',
      '25 lekcji: wideo, artykuły i praktyczne zadania',
      'Testowanie z Vitest i Playwright, CI/CD z GitHub Actions',
      'Blisko 400 absolwentów czterech edycji',
    ],
    url: 'https://www.opanujfrontend.pl',
    accent: 'sky',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript: Frontend Pro',
    badge: 'TypeScript 5 · React 19',
    tagline: 'Buduj niezawodne aplikacje z TypeScriptem',
    description:
      'Profesjonalny trening TypeScripta, który podnosi jakość produkcyjnego kodu. Zamiast suchej teorii poznasz rzeczywiste scenariusze użycia — od konfiguracji kompilatora i typów generycznych po zaawansowane typowanie ekosystemu React 19.',
    highlights: [
      'Ponad 40 praktycznych ćwiczeń na TypeScript 5.7+',
      'Moduł React Pro: hooki, zarządzanie stanem, komunikacja z API',
      'Ekosystem: Astro 5, Zod, tRPC, React Query',
      'Bonus: praktyczne przykłady AI Edition',
    ],
    url: 'https://www.opanujtypescript.pl',
    accent: 'amber',
  },
];
