export interface CourseStat {
  value: string;
  label: string;
}

export interface Course {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  url: string;
  gradient: string;
  accentText: string;
  topics: string[];
  stats: string[];
}

export const heroCourse = {
  name: '10xDevs 4.0',
  badge: 'Nowość — wrzesień 2026',
  url: 'https://10xdevs.pl',
  description:
    'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania — od pomysłu, przez implementację, po wdrożenie na produkcję.',
  stats: [
    { value: '6700+', label: 'absolwentów' },
    { value: '5+1', label: 'tygodni nauki' },
    { value: '~40h', label: 'materiałów' },
    { value: '3', label: 'ścieżki certyfikacji' },
  ] as CourseStat[],
  features: [
    'Aktualna wiedza do przeniesienia na Twoje legacy — mapowanie, refaktoryzacja i modernizacja produkcyjnego kodu.',
    '10xWorkflow (10x-cli) — kompletny proces pracy z agentem: od pomysłu, przez plan i implementację, po testy i wdrożenie.',
    'AI Code & Cost Efficiency System — metody ograniczania kosztów pracy z AI bez kompromisów w jakości developmentu.',
  ],
};

export const courses: Course[] = [
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    badge: 'Frontend',
    tagline: 'Zostań nowoczesnym frontend developerem',
    description:
      'Intensywne, 10-tygodniowe szkolenie: 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    url: 'https://www.opanujfrontend.pl',
    gradient: 'from-sky-400 to-blue-600',
    accentText: 'text-sky-400',
    topics: ['Testowanie', 'CI/CD', 'Architektura', 'Open Source'],
    stats: ['10 tygodni', '25 lekcji', '5 spotkań na żywo'],
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    badge: 'TypeScript',
    tagline: 'TypeScript 5 i React 19 na produkcji',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19 — od typów generycznych po tRPC.',
    url: 'https://www.opanujtypescript.pl',
    gradient: 'from-blue-400 to-indigo-600',
    accentText: 'text-blue-400',
    topics: ['Typy generyczne', 'React 19', 'Zod', 'tRPC'],
    stats: ['2 moduły PRO', '40+ ćwiczeń', 'Lekcja AI Edition'],
  },
  {
    id: 'opanuj-ai',
    name: 'Opanuj AI',
    badge: 'Gen AI',
    tagline: 'Praktyczna wiedza o sztucznej inteligencji',
    description:
      'Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy — dla zespołów i indywidualnych programistów.',
    url: 'https://opanuj.ai',
    gradient: 'from-violet-400 to-purple-600',
    accentText: 'text-violet-400',
    topics: ['Warsztaty', 'Podcast', 'Ebooki', 'Blog'],
    stats: ['Dla firm', 'Darmowe ebooki', 'Warsztaty AI'],
  },
];
