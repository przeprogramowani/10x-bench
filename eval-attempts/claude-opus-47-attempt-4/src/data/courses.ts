export type Course = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  badge?: string;
  accent: 'brand' | 'accent' | 'emerald';
  startDate?: string;
  duration?: string;
  graduates?: string;
  modules: { title: string; summary: string }[];
};

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 3.0',
    tagline: 'AI-Native Software Engineering',
    description:
      'Pięciotygodniowy, kohortowy program, który nauczy Cię wykorzystywać AI w całym cyklu wytwarzania oprogramowania – od researchu i planowania, przez implementację, po utrzymanie produkcji.',
    highlights: [
      'Start: 18 maja 2026',
      '5 tygodni + 1 tydzień bonusowy',
      'Sesje live + społeczność',
      'Gwarancja 14 dni',
    ],
    url: 'https://10xdevs.pl',
    badge: 'Nowa edycja',
    accent: 'brand',
    startDate: '18 maja 2026',
    duration: '5 + 1 tydzień',
    modules: [
      { title: 'Agentic Environment', summary: 'Konfiguracja agentów, konteksty, MCP, skille.' },
      { title: '10xDevs Workflow', summary: 'Planowanie, architektura, implementacja, review.' },
      { title: 'Quality & Maintenance', summary: 'Testy, debugging, wsparcie produkcji.' },
      { title: 'Legacy & Scale', summary: 'Refaktor, modernizacja, duże bazy kodu.' },
      { title: 'AI-Native Teamwork', summary: 'Rejestry promptów, skille zespołowe, onboarding.' },
    ],
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend',
    tagline: 'AI Edition — 10 tygodni intensywnego treningu',
    description:
      'Pięć modułów, 25 lekcji, 5 sesji live i rok dostępu. Od wzorców i jakości, przez CI/CD i open source, po architekturę aplikacji frontendowych.',
    highlights: [
      '10 tygodni nauki',
      '25 lekcji + ćwiczenia',
      '400+ absolwentów',
      'Roczny dostęp',
    ],
    url: 'https://opanujfrontend.pl',
    accent: 'accent',
    duration: '10 tygodni',
    graduates: '400+',
    modules: [
      { title: 'Patterns & Best Practices', summary: 'Clean code, state, komunikacja z API, wydajność.' },
      { title: 'Frontend Quality Engineering', summary: 'Vitest, Playwright, a11y, bezpieczeństwo.' },
      { title: 'Deployment & Production', summary: 'GitHub Actions, AWS, feature flags, monitoring.' },
      { title: 'Team Frontend Development', summary: 'Design system, monorepo, inner source.' },
      { title: 'Application Architecture', summary: 'Dobór stacku, micro-frontends, leadership.' },
    ],
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'TypeScript 5 i React 19 w praktyce',
    description:
      'Zaawansowane typy, wzorce dla React, hooki, komunikacja z backendem, SWR / React Query / Zod oraz dedykowane lekcje z AI. Ponad 40 praktycznych ćwiczeń.',
    highlights: [
      '121+ kursantów',
      '40+ ćwiczeń',
      'Dostęp bez limitu',
      'Bonus: AI workflows',
    ],
    url: 'https://opanujtypescript.pl',
    accent: 'emerald',
    graduates: '121+',
    modules: [
      { title: 'Core Pro', summary: 'Generics, mapped & conditional types, inference, tooling.' },
      { title: 'React Pro', summary: 'Komponenty, custom hooki, state, komunikacja z API.' },
      { title: 'AI Bonus', summary: 'Generowanie kodu, testy, automatyzacja workflow.' },
    ],
  },
];
