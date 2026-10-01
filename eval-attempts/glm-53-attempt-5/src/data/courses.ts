export interface Course {
  id: string;
  name: string;
  tag: string;
  tagStyle: 'new' | 'frontend' | 'typescript';
  description: string;
  highlights: string[];
  url: string;
  cta: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 4.0',
    tag: 'AI-Native Software Engineering',
    tagStyle: 'new',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    highlights: ['8100+ absolwentów', '5+1 tygodni nauki', 'Projekt końcowy + certyfikat'],
    url: 'https://10xdevs.pl',
    cta: 'Zobacz program',
    featured: true,
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    tag: 'Frontend',
    tagStyle: 'frontend',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    highlights: ['4 edycje programu', 'Prawie 400 absolwentów', '10 tygodni nauki'],
    url: 'https://www.opanujfrontend.pl',
    cta: 'Poznaj szczegóły',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    tag: 'TypeScript',
    tagStyle: 'typescript',
    description:
      'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    highlights: ['TypeScript 5 + React 19', '40+ ćwiczeń praktycznych', 'Typy generyczne w praktyce'],
    url: 'https://www.opanujtypescript.pl',
    cta: 'Zaczynam z TS',
  },
];
