export type Course = {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  url: string;
  accent: 'brand' | 'accent' | 'emerald' | 'amber';
  stats?: { label: string; value: string }[];
};

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 3.0',
    badge: 'Flagowy program',
    tagline: 'AI-Native Software Engineering',
    description:
      'Intensywny program, który pokazuje nowe oblicze programowania z użyciem generatywnej AI. Naucz się świadomie stosować Cursor, Copilot, Aider i agentów AI w każdym etapie cyklu wytwarzania oprogramowania — od POC, przez refaktoryzację legacy, po testy i CI/CD.',
    highlights: [
      '5 intensywnych modułów z praktycznymi zadaniami',
      'Własny projekt oparty o agentów AI',
      'Live sessions z ekspertami i społecznością',
      'Ponad 1000 absolwentów pierwszej edycji',
    ],
    url: 'https://www.10xdevs.pl/',
    accent: 'brand',
    stats: [
      { label: 'Edycje', value: '3' },
      { label: 'Absolwenci', value: '1250+' },
      { label: 'Moduły', value: '5' },
    ],
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    badge: 'Kurs',
    tagline: 'Frontend w erze AI. Na poważnie.',
    description:
      '10-tygodniowy program, w którym w komfortowym tempie opanujesz frontend na produkcyjnym poziomie — architekturę, testy, CI/CD, open source i współpracę z AI. Cztery edycje, prawie 400 absolwentów.',
    highlights: [
      '5 modułów: architektura, testy, CI/CD, open source, produkcja',
      'Praktyczne zadania i code review',
      'Wsparcie społeczności i mentorów',
      'Integracja narzędzi AI w codziennej pracy',
    ],
    url: 'https://opanujfrontend.pl/',
    accent: 'accent',
    stats: [
      { label: 'Tygodnie', value: '10' },
      { label: 'Moduły', value: '5' },
      { label: 'Absolwenci', value: '~400' },
    ],
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    badge: 'Kurs',
    tagline: 'TypeScript 5 i React 19 w praktyce',
    description:
      'Praktyczny kurs, w którym nauczysz się świadomie korzystać z typów generycznych, dobierać poziom typowania w różnych warstwach aplikacji i rozwijać projekty produkcyjne z Zod, tRPC, React Query, SWR i Astro 5.',
    highlights: [
      'Zaawansowane generyki i inferencja',
      'Typowanie komponentów, hooków i stanu',
      'Zod, tRPC, React Query, SWR, Astro 5',
      'Ścieżki nauki dostosowane do poziomu',
    ],
    url: 'https://opanujtypescript.pl/',
    accent: 'emerald',
    stats: [
      { label: 'TypeScript', value: '5.x' },
      { label: 'React', value: '19' },
      { label: 'Stack', value: 'prod-ready' },
    ],
  },
];
