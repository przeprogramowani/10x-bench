export interface Course {
  id: string;
  tag: string;
  name: string;
  description: string;
  features: string[];
  url: string;
  badge?: string;
  featured?: boolean;
}

/** Programy edukacyjne Przeprogramowanych */
export const courses: Course[] = [
  {
    id: '10xdevs',
    tag: 'Gen AI',
    name: '10xDevs 4.0',
    badge: 'Nowość — Wrzesień 2026',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    features: ['6700+ absolwentów', '5+1 tygodni nauki', 'Projekt końcowy i certyfikat', '10xWorkflow z agentami AI'],
    url: 'https://10xdevs.pl',
    featured: true,
  },
  {
    id: 'ofe',
    tag: 'Frontend',
    name: 'Opanuj Frontend: AI Edition',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    features: ['5 obszernych modułów', 'Testowanie i CI/CD', 'Architektura aplikacji webowych', 'Prawie 400 absolwentów'],
    url: 'https://www.opanujfrontend.pl',
  },
  {
    id: 'ots',
    tag: 'TypeScript',
    name: 'Opanuj TypeScript',
    description:
      'Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    features: ['TypeScript 5 i React 19', 'Jakość projektów produkcyjnych', 'Zaawansowane typowanie', 'Praktyczne wzorce'],
    url: 'https://www.opanujtypescript.pl',
  },
];
