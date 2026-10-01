export type Course = {
  id: string;
  name: string;
  tag: string;
  tagClassName: string;
  badge?: string;
  description: string;
  features: string[];
  url: string;
  cta: string;
  featured?: boolean;
};

export const COURSES: Course[] = [
  {
    id: "10xdevs",
    name: "10xDevs 4.0",
    tag: "AI-Native Software Engineering",
    tagClassName: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
    badge: "Nowość — wrzesień 2026",
    description:
      "Nowe oblicze programowania z Generatywnym AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.",
    features: [
      "5+1 tygodni nauki i projekt końcowy",
      "10xWorkflow i Context Engineering",
      "Cursor, Claude Code i MCP",
      "8100+ absolwentów",
    ],
    url: "https://10xdevs.pl",
    cta: "Poznaj program",
    featured: true,
  },
  {
    id: "opanuj-frontend",
    name: "Opanuj Frontend: AI Edition",
    tag: "Frontend",
    tagClassName: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    description:
      "Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.",
    features: [
      "10 tygodni, 25 obszernych lekcji",
      "Wzorce, testy i CI/CD w praktyce",
      "TypeScript, React, Angular, Vue, Astro",
      "Prawie 400 absolwentów",
    ],
    url: "https://www.opanujfrontend.pl",
    cta: "Poznaj program",
  },
  {
    id: "opanuj-typescript",
    name: "Opanuj TypeScript",
    tag: "TypeScript",
    tagClassName: "border-blue-400/30 bg-blue-400/10 text-blue-300",
    description:
      "Szkolenie, które podniesie jakość twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!",
    features: [
      "TypeScript 5 i React 19",
      "Typy generyczne i warunkowe",
      "SWR, React Query, Zod, tRPC",
      "Ponad 40 ćwiczeń praktycznych",
    ],
    url: "https://www.opanujtypescript.pl",
    cta: "Poznaj program",
  },
];
