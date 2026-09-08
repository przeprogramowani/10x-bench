import type { Course } from './types';

export const courses: Course[] = [
  {
    id: '10xdevs',
    title: '10xDevs',
    tagline: 'Nowe oblicze programowania z Generatywnym AI',
    description: 'Kompleksowy program szkoleniowy dla ambitnych programistów chcących świadomie i efektywnie stosować narzędzia Generative AI (LLMy, modele reasoningowe, agenci i workflow) w całym cyklu wytwarzania oprogramowania (SDLC). Opanuj techniki pracy z agentami kodującymi, prompt engineering, testowanie i architekturę z AI.',
    url: 'https://10xdevs.pl',
    badge: 'Flagowy program edukacyjny',
    highlights: [
      'Świadome programowanie z agentami AI (Claude Code, Cursor, Copilot)',
      'AI-Native SDLC i integracja narzędzi w codziennej pracy',
      'Praktyczne warsztaty, architektura kodu i code review z AI',
      'Dostęp do aktywnej społeczności inżynierów i absolwentów',
    ],
    audience: 'Programiści na każdym poziomie doświadczenia (od Mida po Staff/Lead), którzy chcą 10-krotnie zwiększyć swoją produktywność i jakość dostarczanego kodu.',
    instructors: ['Przemek Smyrdek', 'Marcin Czarkowski'],
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    tagline: 'Zostań nowoczesnym frontend developerem',
    description: 'Praktyczny program edukacyjny złożony z 5 obszernych modułów: nowoczesny ekosystem JavaScript/TypeScript, architektura aplikacji webowych, zaawansowane testowanie, procesy CI/CD oraz praca w realiach Open Source i skalowalnych projektów produkcyjnych. Ponad 400 zadowolonych absolwentów czterech edycji.',
    url: 'https://opanujfrontend.pl',
    badge: 'Ponad 400 absolwentów',
    highlights: [
      '5 modułów z praktycznymi zadaniami i indywidualnym code review',
      'Architektura frontendu, state management i performance',
      'Automatyzacja testów i nowoczesny toolchain frontendowy',
      'Przejście od wiedzy teoretycznej do projektów klasy enterprise',
    ],
    audience: 'Frontend deweloperzy chcący usystematyzować wiedzę architektoniczną i wejść na poziom Senior / Lead Engineer.',
    instructors: ['Marcin Czarkowski', 'Przemek Smyrdek'],
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    tagline: 'Podnieś jakość i bezpieczeństwo swoich aplikacji',
    description: 'Zaawansowane szkolenie, które podnosi jakość Twoich projektów działających na produkcji i ułatwia ich stabilny rozwój. Od systemów typów, przez generyki i zaawansowane wzorce, po integrację z Reactem i frameworkami backendowymi. Praca na najnowszych wersjach TypeScript.',
    url: 'https://opanujtypescript.pl',
    badge: 'Praktyczne wzorce produkcyjne',
    highlights: [
      'Głębokie zrozumienie systemu typów, generyków i inferencji',
      'Typowanie zaawansowanych komponentów React oraz API',
      'Refaktoryzacja dużych baz kodu i eliminacja długu technicznego',
      'Najlepsze praktyki i wzorce projektowe sprawdzone w środowisku produkcyjnym',
    ],
    audience: 'Programiści JavaScript i TypeScript pragnący pisać przewidywalny, bezbłędny i łatwy w utrzymaniu kod produkcyjny.',
    instructors: ['Przemek Smyrdek', 'Marcin Czarkowski'],
  },
];
