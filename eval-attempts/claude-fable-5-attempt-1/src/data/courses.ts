export interface Course {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  accent: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs',
    badge: 'Flagowy program',
    tagline: 'Czas na AI-Native Software Engineering',
    description:
      'Kompleksowy program pracy z generatywnym AI w całym cyklu życia oprogramowania — od researchu i planowania, przez implementację i testy, po utrzymanie produkcji. Context engineering, orkiestracja agentów i modernizacja legacy.',
    highlights: [
      '5 modułów: środowisko agentowe, workflow, jakość, projekty legacy, praca zespołowa',
      'Ponad 3700 absolwentów poprzednich edycji',
      'Certyfikacja na trzech poziomach: Builder, Architect, Champion',
      'Dostęp do społeczności 2000+ developerów przez 12 miesięcy',
    ],
    url: 'https://www.10xdevs.pl',
    accent: 'from-violet-500 to-indigo-600',
    featured: true,
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    badge: '10 tygodni',
    tagline: 'Zostań kompletnym frontend developerem',
    description:
      'Intensywny program o budowaniu wysokiej jakości aplikacji webowych: wzorce i dobre praktyki, testowanie, CI/CD, praca zespołowa i architektura — z narzędziami AI wplecionymi w cały proces.',
    highlights: [
      '5 modułów: dobre praktyki, jakość, deployment, praca zespołowa, architektura',
      '25 lekcji: wideo, artykuły i ćwiczenia praktyczne',
      'Code review i codzienna opieka mentorów',
      'Społeczność ~400 uczestników',
    ],
    url: 'https://opanujfrontend.pl',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    badge: 'TypeScript 5+',
    tagline: 'Statyczne typowanie w praktyce',
    description:
      'Szkolenie z nowoczesnego TypeScriptu w oparciu o najnowsze wersje języka (5+) i React 19. Od fundamentów systemu typów po zaawansowane wzorce wykorzystywane w dużych projektach.',
    highlights: [
      'Najnowsze wersje TypeScript 5+ i React 19',
      'System typów od podstaw po typy zaawansowane',
      'Praktyczne wzorce z realnych projektów',
      'Materiały dostępne od razu po zakupie',
    ],
    url: 'https://opanujtypescript.pl',
    accent: 'from-cyan-500 to-teal-600',
  },
];
