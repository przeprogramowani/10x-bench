import type { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: '10xdevs',
    title: '10xDevs 4.0',
    badge: 'Nowość — Wrzesień 2026',
    tagline: 'Czas na AI-Native Software Engineering!',
    description:
      'Kompletny program edukacyjny uczący świadomego i usystematyzowanego wykorzystania Generatywnego AI oraz agentów w całym cyklu wytwarzania oprogramowania (SDLC). Praca z Cursorem, Claude Code, Model Context Protocol (MCP), refaktoryzacją legacy i testowaniem z AI.',
    url: 'https://10xdevs.pl',
    features: [
      '5+1 tygodni intensywnego programu z cotygodniowymi sesjami LIVE',
      '10xWorkflow (10x-cli) — kompletny proces pracy z agentami',
      'Context Engineering, subagenci i zarządzanie oknem kontekstowym',
      'Realne projekty od zera (Greenfield MVP) oraz modernizacja Legacy',
      'Społeczność ponad 6700 absolwentów i certyfikacja 10xBuilder'
    ],
    featured: true
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    badge: 'Frontend Pro',
    tagline: 'Zostań kompletnym frontend developerem i buduj aplikacje wysokiej jakości',
    description:
      'Intensywne szkolenie przygotowujące do tworzenia zaawansowanych aplikacji webowych z wykorzystaniem nowoczesnych narzędzi, wzorców architektonicznych, testowania i asystentów AI.',
    url: 'https://opanujfrontend.pl',
    features: [
      '5 modułów: Czysty kod, Jakość i testy (Vitest/Playwright), CI/CD na AWS, Frontend zespołowy, Architektura',
      'Narzędzia AI (ChatGPT, GitHub Copilot, Cursor) w codziennej pracy frontendu',
      'Własna biblioteka Open Source, Design System i integracja z API przez OpenAPI i Zod',
      'Ponad 400 absolwentów 4 edycji programu'
    ],
    featured: false
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript: Frontend Pro',
    badge: 'TypeScript 5 & React 19',
    tagline: 'Buduj niezawodne aplikacje z TypeScriptem i Reactem',
    description:
      'Praktyczny kurs podnoszący jakość projektów produkcyjnych. Opanuj typy generyczne, warunkowe, inferencję, zaawansowane wzorce typowania komponentów i hooków w React 19 oraz integrację z ekosystemem (Zod, tRPC, React Query, Astro).',
    url: 'https://opanujtypescript.pl',
    features: [
      'Moduł Core Pro: zaawansowany kompilator tsc, generyki, typy mapowane, satisfies, infer',
      'Moduł React Pro: typowanie komponentów React 19, hooków, reducerów, render props, HOC',
      'Współpraca z narzędziami ekosystemu: SWR, TanStack Query, tRPC, Astro',
      'Ponad 40 praktycznych ćwiczeń produkcyjnych'
    ],
    featured: false
  }
];
