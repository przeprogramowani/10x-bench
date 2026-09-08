import type { CourseItem } from './types';

export const courses: CourseItem[] = [
  {
    id: '10xdevs',
    title: '10xDevs',
    subtitle: 'Programuj z AI — Nowe oblicze inżynierii oprogramowania',
    description:
      'Kompleksowy program edukacyjny o świadomym stosowaniu Generatywnego AI w całym cyklu wytwarzania oprogramowania (SDLC). Uczy powtarzalnych procesów, pracy z autonomicznymi agentami (m.in. Claude Code, Cursor, Copilot) oraz autorskiego frameworka Core Skills Chain.',
    details: [
      'Inżynierskie podejście do pracy z agentami AI zamiast powierzchownego vibe-codingu',
      'Metodyka Core Skills Chain: planowanie, research, implementacja, testy i code review z AI',
      'Praktyka na realnych projektach produkcyjnych, wzorcach architektonicznych i benchmarkach',
      'Dostęp do społeczności ambitnych programistów i materiałów aktualizowanych na bieżąco'
    ],
    url: 'https://10xdevs.pl',
    tag: 'Gen AI & Engineering',
    isFeatured: true
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Zostań nowoczesnym, kompletnym frontend developerem',
    description:
      '5 obszernych modułów edukacyjnych przygotowanych z myślą o inżynierach frontendu: architektura aplikacji webowych, zaawansowany React, inżynieria jakości i testowanie, CI/CD, open source oraz integracja narzędzi AI w codziennym warsztacie pracy. Ponad 400 zadowolonych absolwentów w dotychczasowych edycjach.',
    details: [
      'Architektura i wzorce projektowe nowoczesnych aplikacji webowych',
      'Kompleksowa piramida testów: jednostkowe, integracyjne oraz E2E z Playwright',
      'Optymalizacja wydajności, CI/CD i automatyzacja wdrożeń produkcyjnych',
      'Praktyczne techniki wspierania pracy programisty frontendowego narzędziami AI'
    ],
    url: 'https://www.opanujfrontend.pl',
    tag: 'Frontend Development'
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    subtitle: 'Praktyczne szkolenie z zaawansowanego TypeScriptu',
    description:
      'Szkolenie skupione na podniesieniu jakości projektów działających na produkcji i ułatwieniu ich długofalowego rozwoju. Obejmuje zaawansowany system typów, typowanie reaktywnych komponentów React 19, refaktoryzację kodu ze wsparciem nowoczesnego kompilatora oraz eliminację błędów runtime.',
    details: [
      'Zaawansowane typy uogólnione, mapped types, conditional types i infer',
      'Pełna zgodność z najnowszymi standardami TypeScript 5 i React 19',
      'Praktyczne techniki modelowania domeny biznesowej za pomocą typów',
      'Projektowanie bibliotek z niezawodnym typowaniem i ochroną przed regresjami'
    ],
    url: 'https://www.opanujtypescript.pl',
    tag: 'TypeScript & Architecture'
  }
];
