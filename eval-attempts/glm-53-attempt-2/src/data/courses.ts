export interface Course {
  title: string;
  tag: string;
  description: string;
  url: string;
  badge?: string;
  features: string[];
  accent: {
    text: string;
    bar: string;
    button: string;
    card: string;
  };
}

export const COURSES: Course[] = [
  {
    title: '10xDevs 4.0',
    tag: 'Gen AI',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.',
    url: 'https://10xdevs.pl',
    badge: 'Nowość — Wrzesień 2026',
    features: [
      'Świadome stosowanie AI w całym cyklu wytwarzania',
      '10xWorkflow i Core Skill Chain w praktyce',
      'Praca z agentami AI na prawdziwym projekcie',
    ],
    accent: {
      text: 'text-orange-400',
      bar: 'bg-orange-500',
      button: 'bg-orange-500 hover:bg-orange-400',
      card: 'from-orange-950/60 to-gray-900 border-orange-900/60 hover:border-orange-700/60',
    },
  },
  {
    title: 'Opanuj Frontend: AI Edition',
    tag: 'Frontend',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.',
    url: 'https://www.opanujfrontend.pl',
    features: [
      'Cztery edycje i prawie 400 absolwentów',
      'Testowanie, CI/CD i contribution do open source',
      'Architektura nowoczesnych aplikacji webowych',
    ],
    accent: {
      text: 'text-pink-400',
      bar: 'bg-pink-500',
      button: 'bg-pink-500 hover:bg-pink-400',
      card: 'from-pink-950/50 to-gray-900 border-pink-900/60 hover:border-pink-700/60',
    },
  },
  {
    title: 'Opanuj TypeScript',
    tag: 'TypeScript',
    description:
      'Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    url: 'https://www.opanujtypescript.pl',
    features: [
      'TypeScript 5 i React 19 na produkcji',
      'Zaawansowane typowanie i wzorce projektowe',
      'Materiały oparte na realnych projektach',
    ],
    accent: {
      text: 'text-sky-400',
      bar: 'bg-sky-500',
      button: 'bg-sky-500 hover:bg-sky-400',
      card: 'from-sky-950/60 to-gray-900 border-sky-900/60 hover:border-sky-700/60',
    },
  },
];
