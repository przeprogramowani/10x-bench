export type Course = {
  id: '10xdevs' | 'opanuj-frontend' | 'opanuj-typescript';
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
  accentFrom: string;
  accentTo: string;
  url: string;
  cta: string;
};

export const courses: Course[] = [
  {
    id: '10xdevs',
    name: '10xDevs 3.0',
    subtitle: 'AI-Native Software Engineering',
    description:
      'Powtarzalne workflowy i procesy, które zmieniają AI w profesjonalne narzędzie developera — od researchu, przez planowanie, po utrzymanie produkcji.',
    features: [
      'Agentic Environment (MCP, context engineering)',
      '10xWorkflow od MVP do dostawy feature\u2019ów',
      'Jakość, testy i legacy na dużą skalę',
    ],
    badge: 'Nowa edycja — maj 2026',
    accentFrom: 'from-brand-500',
    accentTo: 'to-accent-500',
    url: 'https://10xdevs.pl',
    cta: 'Zobacz program 10xDevs',
  },
  {
    id: 'opanuj-frontend',
    name: 'Opanuj Frontend: AI Edition',
    subtitle: '10 tygodni • 25 lekcji • 400+ absolwentów',
    description:
      'Zostań kompletnym frontendowcem: state management, quality engineering, CI/CD, design systems i architektura aplikacji — z naciskiem na jakość kodu.',
    features: [
      'Testy (Vitest, Playwright) i dostępność',
      'GitHub Actions, AWS, feature flags',
      'Design systems, monorepo, microfrontends',
    ],
    accentFrom: 'from-fuchsia-500',
    accentTo: 'to-brand-500',
    url: 'https://opanujfrontend.pl',
    cta: 'Dołącz do Opanuj Frontend',
  },
  {
    id: 'opanuj-typescript',
    name: 'Opanuj TypeScript',
    subtitle: 'TypeScript 5 × React 19',
    description:
      'Praktyczny kurs, który pokazuje jak wykorzystać pełen potencjał TypeScriptu w aplikacjach produkcyjnych — od generyków po wzorce domenowe.',
    features: [
      'Mapped & conditional types, type inference',
      'React 19: komponenty, hooki, server actions',
      'tRPC, Zod, SWR i integracje backendu',
    ],
    accentFrom: 'from-accent-500',
    accentTo: 'to-sky-400',
    url: 'https://opanujtypescript.pl',
    cta: 'Przejdź do Opanuj TypeScript',
  },
];
