import type { CourseItem } from './types';

export const COURSES: CourseItem[] = [
  {
    id: '10xdevs',
    title: '10xDevs 4.0',
    subtitle: 'Programuj z AI i wejdź na poziom inżyniera nowej generacji',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania (SDLC), od analizy po wdrożenie na produkcję.',
    url: 'https://10xdevs.pl',
    badge: 'Nowość - Wrzesień 2026',
    highlights: [
      'Architektura i AI-Native Software Development Lifecycle',
      'Praktyka pracy z agentami AI: Claude Code, Cursor, Copilot Workspace',
      'Testowanie, jakość kodu i bezpieczeństwo z automatyzacją AI',
      'Dostęp do aktywnej społeczności i sesji na żywo z twórcami',
    ],
    isFeatured: true,
  },
  {
    id: 'opanuj-frontend',
    title: 'Opanuj Frontend: AI Edition',
    subtitle: 'Kompleksowy program dla nowoczesnych frontend developerów',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o architekturze, testowaniu, CI/CD, open source i ekosystemie aplikacji webowych. Cztery edycje i prawie 400 zadowolonych absolwentów!',
    url: 'https://www.opanujfrontend.pl',
    badge: '4 edycje • 400 absolwentów',
    highlights: [
      '5 obszernych modułów edukacyjnych',
      'Testowanie automatyczne (Vitest, Playwright) i CI/CD',
      'Nowoczesna architektura aplikacji frontendowych',
      'Praktyczne projekty z code review od doświadczonych inżynierów',
    ],
    isFeatured: false,
  },
  {
    id: 'opanuj-typescript',
    title: 'Opanuj TypeScript',
    subtitle: 'Praktyczne szkolenie podnoszące jakość systemów produkcyjnych',
    description:
      'Opanuj TypeScript to szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19 na rzeczywistych scenariuszach.',
    url: 'https://www.opanujtypescript.pl',
    badge: 'TypeScript 5 + React 19',
    highlights: [
      'Zaawansowany system typów (Generics, Type Narrowing, Mapped Types)',
      'Typowanie ekosystemu React 19 i integracja z API backendowym',
      'Wzorce architektoniczne i refaktoryzacja legacy kodu na produkcję',
      'Przykłady oparte na systemach o skali enterprise',
    ],
    isFeatured: false,
  },
];
