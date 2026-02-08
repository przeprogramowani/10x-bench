import type { Course } from '../types';

export const courses: Course[] = [
  {
    slug: '10xdevs',
    title: '10xDevs',
    description:
      'Intensywny, 5-tygodniowy program, który nauczy Cię tworzyć oprogramowanie z wykorzystaniem AI. Dołącz do ponad 3700 absolwentów.',
    badge: 'Edycja 3.0',
    url: 'https://10xdevs.pl',
    color: '#f59e0b',
    features: [
      'Praca z najnowszymi modelami AI',
      'Praktyczne projekty z kodem',
      'Cotygodniowe sesje live',
      'Dostęp do społeczności absolwentów',
      'Certyfikat ukończenia',
    ],
    modules: [
      {
        title: 'Tydzień 1: Fundamenty AI w programowaniu',
        description: 'Poznaj podstawy pracy z modelami AI i naucz się efektywnie promptować.',
        lessons: [
          'Wprowadzenie do AI-assisted development',
          'Prompt engineering dla programistów',
          'Przegląd narzędzi AI (Copilot, Cursor, Claude)',
          'Pierwsze projekty z AI',
        ],
      },
      {
        title: 'Tydzień 2: Architektura i projektowanie z AI',
        description: 'Naucz się projektować systemy z wykorzystaniem AI jako partnera.',
        lessons: [
          'Projektowanie architektury z AI',
          'Code review z AI',
          'Refactoring z asystentem AI',
          'Testowanie kodu generowanego przez AI',
        ],
      },
      {
        title: 'Tydzień 3: Zaawansowane techniki',
        description: 'Opanuj zaawansowane wzorce pracy z AI w codziennym kodowaniu.',
        lessons: [
          'Zaawansowany prompt engineering',
          'Łańcuchy promptów i agenci',
          'Integracja AI w CI/CD',
          'Debugging z AI',
        ],
      },
      {
        title: 'Tydzień 4: Budowanie produktów z AI',
        description: 'Twórz kompletne produkty wykorzystując AI na każdym etapie.',
        lessons: [
          'Od pomysłu do MVP z AI',
          'AI w procesie designu',
          'Automatyzacja workflow',
          'Deployment i monitoring',
        ],
      },
      {
        title: 'Tydzień 5: Projekt końcowy',
        description: 'Zastosuj wszystkie poznane techniki w praktycznym projekcie.',
        lessons: [
          'Planowanie projektu końcowego',
          'Implementacja z pełnym wsparciem AI',
          'Prezentacja i code review',
          'Podsumowanie i dalsze kroki',
        ],
      },
    ],
    stats: [
      { label: 'Absolwentów', value: '3700+' },
      { label: 'Tygodni', value: '5' },
      { label: 'Godzin materiałów', value: '40h' },
    ],
  },
  {
    slug: 'opanuj-frontend',
    title: 'Opanuj Frontend',
    description:
      'Kompleksowy kurs frontendowy — od HTML i CSS, przez JavaScript, po React i TypeScript. Idealny na start kariery w web development.',
    url: 'https://opanujfrontend.pl',
    color: '#6366f1',
    features: [
      'Od podstaw do zaawansowanych konceptów',
      'Projekty praktyczne na każdym etapie',
      'HTML, CSS, JavaScript, React, TypeScript',
      'Nowoczesne narzędzia deweloperskie',
      'Wsparcie mentorskie',
    ],
    modules: [
      {
        title: 'Moduł 1: HTML i CSS',
        description: 'Solidne fundamenty budowy stron internetowych.',
        lessons: [
          'Semantyczny HTML5',
          'CSS Flexbox i Grid',
          'Responsive Web Design',
          'Animacje CSS',
        ],
      },
      {
        title: 'Moduł 2: JavaScript',
        description: 'Programowanie w JavaScript od podstaw.',
        lessons: [
          'Zmienne, funkcje, obiekty',
          'DOM i eventy',
          'Async/Await i Promises',
          'ES6+ features',
        ],
      },
      {
        title: 'Moduł 3: React',
        description: 'Budowanie nowoczesnych interfejsów użytkownika.',
        lessons: [
          'Komponenty i JSX',
          'State i Props',
          'Hooks',
          'Routing i zarządzanie stanem',
        ],
      },
      {
        title: 'Moduł 4: TypeScript',
        description: 'Typowany JavaScript dla profesjonalistów.',
        lessons: [
          'Typy podstawowe i zaawansowane',
          'Generyki',
          'TypeScript z React',
          'Konfiguracja projektu',
        ],
      },
    ],
    stats: [
      { label: 'Modułów', value: '4' },
      { label: 'Lekcji', value: '60+' },
      { label: 'Projektów', value: '12' },
    ],
  },
  {
    slug: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    description:
      'Dogłębny kurs TypeScript — od typów podstawowych po zaawansowane wzorce. Idealny dla programistów JavaScript, którzy chcą podnieść jakość swojego kodu.',
    url: 'https://opanujtypescript.pl',
    color: '#3b82f6',
    features: [
      'Zaawansowane typy i generyki',
      'Wzorce projektowe w TypeScript',
      'Integracja z popularnymi frameworkami',
      'Zadania praktyczne z code review',
      'Aktualizacje do najnowszych wersji TS',
    ],
    modules: [
      {
        title: 'Moduł 1: Fundamenty TypeScript',
        description: 'Solidne podstawy systemu typów.',
        lessons: [
          'Typy prymitywne i literałowe',
          'Interfejsy i type aliases',
          'Union i intersection types',
          'Type narrowing i guards',
        ],
      },
      {
        title: 'Moduł 2: Zaawansowane typy',
        description: 'Potężne techniki systemu typów.',
        lessons: [
          'Generyki',
          'Conditional types',
          'Mapped types',
          'Template literal types',
        ],
      },
      {
        title: 'Moduł 3: Wzorce i praktyki',
        description: 'Profesjonalne wzorce TypeScript.',
        lessons: [
          'Wzorce projektowe w TS',
          'Error handling',
          'Utility types',
          'Deklaracje typów',
        ],
      },
    ],
    stats: [
      { label: 'Modułów', value: '3' },
      { label: 'Lekcji', value: '45+' },
      { label: 'Zadań', value: '30+' },
    ],
  },
];
