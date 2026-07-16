export interface Course {
  id: string;
  tag: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  image?: string;
  featured?: boolean;
  badge?: string;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    tag: 'AI-Native Development',
    name: '10xDevs 4.0',
    tagline: 'Programuj z AI',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    highlights: [
      '6700+ absolwentów poprzednich edycji',
      '5+1 tygodni intensywnej pracy z agentami AI',
      'Projekt końcowy i certyfikat 10xBuilder',
      'Cursor, Claude Code, MCP i pełny workflow Research → Plan → Implement',
    ],
    url: 'https://10xdevs.pl',
    image: '/img/10xdevs-hero.webp',
    featured: true,
    badge: 'Nowa edycja — start 14.09.2026',
  },
  {
    id: 'opanuj-frontend',
    tag: 'Frontend',
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Zostań nowoczesnym frontend developerem',
    description:
      '5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    highlights: [
      '10 tygodni nauki z ekspertami',
      'Testy z Vitest i Playwright, CI/CD z GitHub Actions',
      'Architektura, mikrofrontendy i design systemy',
      'Lekcje AI Edition: Copilot, Cursor i ChatGPT w pracy frontendu',
    ],
    url: 'https://www.opanujfrontend.pl',
    image: '/img/featured/kurs-ofe.jpg',
  },
  {
    id: 'opanuj-typescript',
    tag: 'TypeScript',
    name: 'Opanuj TypeScript',
    tagline: 'Buduj niezawodne aplikacje z TypeScriptem 5 i React 19',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    highlights: [
      'Typy generyczne, mapowane i warunkowe w praktyce',
      'Wzorce typowania komponentów i hooków React 19',
      'SWR, React Query, Zod, tRPC i Astro 5',
      'Ponad 40 ćwiczeń z feedbackiem mentorów',
    ],
    url: 'https://www.opanujtypescript.pl',
    image: '/img/featured/kurs-ots.jpg',
  },
];
