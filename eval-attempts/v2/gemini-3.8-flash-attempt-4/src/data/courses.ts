import type { Course } from './types';

export const COURSES: Course[] = [
  {
    id: '10xdevs',
    title: '10xDevs 4.0',
    subtitle: 'Programuj z Generatywnym AI',
    tag: 'Generative AI & Agentic SDLC',
    description: 'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Zaawansowane techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania (SDLC). Architektura agentowa, benchmarki i automatyzacja workflow.',
    url: 'https://10xdevs.pl',
    badge: 'Flagowy program 2026',
    highlights: [
      'AI-Native Software Development Lifecycle',
      'Praktyka z modelami Claude Opus, GPT-5 i agentami kodującymi',
      'Projektowanie stabilnych workflow z AI w produkcji'
    ]
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Zostań nowoczesnym frontend developerem',
    tag: 'Frontend Engineering',
    description: 'Kompleksowy program rozwoju dla ambitnych inżynierów frontendu. 5 obszernych modułów obejmujących architekturę aplikacji webowych, testowanie, CI/CD, open source i nowoczesne narzędzia. Cztery edycje i blisko 400 absolwentów.',
    url: 'https://opanujfrontend.pl',
    badge: '4 edycje • 400+ absolwentów',
    highlights: [
      '5 dogłębnych modułów inżynierii frontendowej',
      'Testowanie, jakość i architektura enterprise',
      'CI/CD, automatyzacja i najlepsze praktyki zespołowe'
    ]
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    subtitle: 'Typy, które ratują produkcję',
    tag: 'TypeScript 5 & React 19',
    description: 'Szkolenie, które wynosi jakość kodu w Twoich projektach na najwyższy poziom. Od zaawansowanego modelowania typów i inferencji po optymalizację architektury pod produkcję. Pełne wsparcie dla TypeScript 5 i React 19.',
    url: 'https://opanujtypescript.pl',
    badge: 'Zaawansowany program',
    highlights: [
      'Praktyka na najnowszych wersjach TS 5 i React 19',
      'Zaawansowane typy generyczne i utility types',
      'Wyeliminowanie błędów w aplikacjach produkcyjnych'
    ]
  }
];
