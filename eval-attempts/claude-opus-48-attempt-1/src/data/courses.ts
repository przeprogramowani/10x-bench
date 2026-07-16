export interface Course {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  accent: string; // tailwind gradient classes
  badge?: string;
  highlights: string[];
  meta: { label: string; value: string }[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs',
    tagline: 'Czas na AI-Native Software Engineering!',
    description:
      'Kohortowy program online, w którym uczysz się wpinać agentów AI (Claude, Cursor) w realny workflow inżynierski — od greenfieldu, przez modernizację legacy, po pracę zespołową. Zbuduj pełny projekt MVP i wdróż go do chmury.',
    url: 'https://10xdevs.pl',
    accent: 'from-brand-500 to-indigo-500',
    badge: 'Flagowy program',
    featured: true,
    highlights: [
      'AI-native workflow: research → planowanie → implementacja → testy → wdrożenie',
      'Context engineering i zarządzanie agentami',
      'Analiza i modernizacja legacy z pomocą AI',
      'Pełny projekt MVP wdrożony do chmury',
    ],
    meta: [
      { label: 'Format', value: '5-tygodniowa kohorta' },
      { label: 'Dostęp', value: '12 miesięcy' },
      { label: 'Języki', value: 'PL / EN' },
    ],
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tagline: 'Zostań kompletnym frontend developerem',
    description:
      'Intensywny, 10-tygodniowy program przygotowujący do budowania zaawansowanych aplikacji webowych. Wzorce i dobre praktyki, inżynieria jakości, wdrożenia produkcyjne, praca zespołowa i architektura frontendu — wszystko z wykorzystaniem AI.',
    url: 'https://opanujfrontend.pl',
    accent: 'from-sky-500 to-cyan-400',
    highlights: [
      '5 modułów: wzorce, jakość, produkcja, zespół, architektura',
      '25 lekcji: artykuły, wideo, ćwiczenia i materiały dodatkowe',
      'Testy z Vitest i Playwright, CI/CD, feature flags, monitoring',
      'Live consultations i wsparcie senior developerów',
    ],
    meta: [
      { label: 'Format', value: '10 tygodni' },
      { label: 'Absolwenci', value: '383+' },
      { label: 'Poziom', value: 'Śr. / zaawansowany' },
    ],
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tagline: 'Buduj niezawodne aplikacje z TypeScriptem 5 i React 19',
    description:
      'Praktyczny kurs OTS: Frontend Pro, który uczy nowoczesnego TypeScriptu i Reacta 19 na realnych scenariuszach. Ponad 40 ćwiczeń, wiedza z 10+ lat komercyjnego frontendu i moduł AI Edition w bonusie.',
    url: 'https://opanujtypescript.pl',
    accent: 'from-violet-500 to-fuchsia-500',
    highlights: [
      'Moduł Core Pro: generyki, mapped/conditional types, inference',
      'Moduł React Pro: typowanie komponentów, hooków i stanu',
      'Komunikacja z API: Fetch, Axios, SWR, React Query, tRPC, Zod',
      '40+ ćwiczeń i bonusowy moduł AI Edition',
    ],
    meta: [
      { label: 'Stack', value: 'TypeScript 5 · React 19' },
      { label: 'Uczestnicy', value: '900+' },
      { label: 'Edycje', value: '7' },
    ],
  },
];
