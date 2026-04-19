export interface Course {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  url: string;
  badge?: string;
  color: string;
  icon: string;
}

export const courses: Course[] = [
  {
    title: '10xDevs 3.0',
    subtitle: 'Programuj z AI',
    description:
      'Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania. 5+1 tygodni intensywnego programu.',
    features: [
      '3700+ absolwentów',
      '5+1 tygodni nauki',
      'AI-Native Workflow',
      'Cursor, Claude Code, MCP',
      'Legacy code z AI',
      'AI-Native Teamwork',
    ],
    url: 'https://10xdevs.pl?utm_source=przeprogramowani_website',
    badge: 'Nowość - Maj 2026',
    color: 'from-violet-600 to-purple-600',
    icon: '🚀',
  },
  {
    title: 'Opanuj Frontend',
    subtitle: 'AI Edition',
    description:
      'Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych. Cztery edycje i prawie 400 absolwentów!',
    features: [
      '383 absolwentów',
      '10 tygodni nauki',
      '5 modułów tematycznych',
      'TypeScript, React, Angular, Vue',
      'CI/CD z GitHub Actions',
      'Pair programming z AI',
    ],
    url: 'https://opanujfrontend.pl?utm_source=przeprogramowani_website',
    color: 'from-brand-600 to-blue-600',
    icon: '⚡',
  },
  {
    title: 'Opanuj TypeScript',
    subtitle: 'Frontend Pro',
    description:
      'Opanuj TypeScript to szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!',
    features: [
      '121 absolwentów',
      'TypeScript 5.7+',
      'React 19',
      'Typy generyczne',
      'SWR, React Query, Zod',
      'tRPC i Astro 5',
    ],
    url: 'https://opanujtypescript.pl?utm_source=przeprogramowani_website',
    color: 'from-sky-600 to-cyan-600',
    icon: '💎',
  },
];
