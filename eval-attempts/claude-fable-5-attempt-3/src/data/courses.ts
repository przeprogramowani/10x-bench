export interface Course {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  badge?: string;
  url: string;
  gradient: string;
  icon: 'frontend' | 'typescript' | 'ai';
}

export const courses: Course[] = [
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Kompletna ścieżka nowoczesnego frontend developera',
    description:
      'Pięć rozbudowanych modułów: frontend, testowanie, CI/CD, open source i architektura webowa. Praktyczna wiedza, która działa w produkcji.',
    features: [
      '5 kompleksowych modułów',
      'Ponad 400 absolwentów w 4 edycjach',
      'Testowanie, CI/CD i architektura webowa',
      'Praca z narzędziami AI w codziennym kodowaniu',
    ],
    badge: '400+ absolwentów',
    url: 'https://przeprogramowani.pl/opanuj-frontend',
    gradient: 'from-brand-500 to-brand-700',
    icon: 'frontend',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Kod produkcyjnej jakości w TypeScript',
    description:
      'Szkolenie z TypeScripta nastawione na jakość produkcyjną — od solidnych podstaw typowania po zaawansowane wzorce w nowoczesnych aplikacjach.',
    features: [
      'Wsparcie dla TypeScript 5 i React 19',
      'Wzorce typowania używane w realnych projektach',
      'Od podstaw do zaawansowanych typów generycznych',
      'Praktyczne ćwiczenia i code review',
    ],
    badge: 'TypeScript 5 + React 19',
    url: 'https://przeprogramowani.pl/opanuj-typescript',
    gradient: 'from-sky-500 to-blue-700',
    icon: 'typescript',
  },
  {
    id: '10xdevs',
    name: '10xDevs',
    tagline: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI',
    description:
      'Flagowy program Przeprogramowanych. Naucz się budować oprogramowanie 10x efektywniej z agentami AI, Claude Code, Cursorem i nowoczesnym workflow.',
    features: [
      'Edycja 3.0 — start maj 2026',
      'Programowanie z agentami AI w praktyce',
      'Workflow z Claude Code, Cursorem i Copilotem',
      'Społeczność programistów pracujących z GenAI',
    ],
    badge: 'Edycja 3.0',
    url: 'https://10xdevs.pl',
    gradient: 'from-violet-500 to-fuchsia-600',
    icon: 'ai',
  },
];
