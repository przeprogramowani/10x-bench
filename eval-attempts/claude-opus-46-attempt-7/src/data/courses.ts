export interface CourseModule {
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  url: string;
  price?: string;
  startDate?: string;
  modules: CourseModule[];
  tags: string[];
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    title: '10xDevs 3.0',
    subtitle: 'Programuj z AI',
    description:
      'Flagowy kurs Przeprogramowani. Naucz się efektywnie programować z wykorzystaniem narzędzi AI. 12 tygodni intensywnej nauki, praktyczne projekty i wsparcie mentorów.',
    featured: true,
    url: 'https://10xdevs.pl',
    price: '3 499 PLN',
    startDate: '18 maja 2026',
    modules: [
      {
        title: 'Fundamenty AI-assisted development',
        description: 'Prompt engineering, GitHub Copilot, Claude Code — narzędzia codziennej pracy programisty.',
      },
      {
        title: 'Architektura aplikacji z AI',
        description: 'Projektowanie systemów z AI jako integralnym elementem — od prototypu po produkcję.',
      },
      {
        title: 'Automatyzacja i agenci',
        description: 'Tworzenie agentów AI, automatyzacja workflow, integracja z istniejącymi systemami.',
      },
      {
        title: 'Projekt końcowy',
        description: 'Samodzielny projekt od A do Z z wykorzystaniem wszystkich poznanych technik.',
      },
    ],
    tags: ['AI', 'Programowanie', '12 tygodni', 'Mentoring'],
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    subtitle: 'Zostań frontend developerem',
    description:
      'Kompleksowy kurs frontend developmentu. Od HTML/CSS przez JavaScript po React. Praktyczne projekty i code review od doświadczonych programistów.',
    featured: false,
    url: 'https://przeprogramowani.pl/frontend',
    modules: [
      {
        title: 'HTML & CSS',
        description: 'Semantyczny HTML, nowoczesne CSS, Flexbox, Grid, responsywność.',
      },
      {
        title: 'JavaScript',
        description: 'ES6+, asynchroniczność, DOM API, programowanie funkcyjne.',
      },
      {
        title: 'React',
        description: 'Komponenty, hooks, state management, routing, testy.',
      },
      {
        title: 'Narzędzia & Workflow',
        description: 'Git, npm, bundlery, CI/CD, dobre praktyki.',
      },
    ],
    tags: ['Frontend', 'React', 'JavaScript', 'CSS'],
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    subtitle: 'Typowanie na poważnie',
    description:
      'Głębokie zanurzenie w TypeScript. Typy generyczne, zaawansowane wzorce, integracja z React i Node.js. Dla programistów, którzy chcą pisać bezpieczniejszy kod.',
    featured: false,
    url: 'https://przeprogramowani.pl/typescript',
    modules: [
      {
        title: 'Podstawy TypeScript',
        description: 'System typów, interfejsy, enumy, type narrowing.',
      },
      {
        title: 'Typy zaawansowane',
        description: 'Generyki, typy warunkowe, mapped types, template literal types.',
      },
      {
        title: 'TypeScript w praktyce',
        description: 'React + TS, Node.js + TS, konfiguracja, migracja z JS.',
      },
      {
        title: 'Wzorce i dobre praktyki',
        description: 'Utility types, branded types, type-safe API, testowanie.',
      },
    ],
    tags: ['TypeScript', 'Typowanie', 'React', 'Node.js'],
  },
];
