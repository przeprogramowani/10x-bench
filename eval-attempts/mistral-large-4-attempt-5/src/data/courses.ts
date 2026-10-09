export type Course = {
  slug: string;
  tag: string;
  name: string;
  shortName: string;
  url: string;
  description: string;
  highlights: string[];
  modules: string[];
  stats: { value: string; label: string }[];
  badge?: string;
  note?: string;
};

export const courses: Course[] = [
  {
    slug: "10xdevs",
    tag: "Gen AI",
    name: "10xDevs — Programuj z AI",
    shortName: "10xDevs",
    url: "https://10xdevs.pl",
    description:
      "Nowe oblicze programowania z wykorzystaniem generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania — od researchu i planowania, przez implementację i testy, po wdrożenie na produkcję.",
    highlights: [
      "Context Engineering i praca z dużymi codebase'ami",
      "Cursor, Claude Code i MCP w codziennym workflow",
      "AI-First MVP — od pierwszej linijki kodu po wdrożenie (Docker + Cloudflare)",
      "Modernizacja legacy i skalowanie pracy z AI w dużych projektach",
      "AI-Native teamwork — code review, estymacje i procesy zespołowe z AI",
    ],
    modules: [
      "Agentic Environment — Cursor, Claude Code, MCP",
      "10xDevs Workflow — Research → Plan → Implement",
      "AI Development Quality & Maintenance — testy i quality gates",
      "Large scale & legacy projects — DDD i migracje",
      "AI-Native Teamwork — code review i procesy w zespole",
    ],
    stats: [
      { value: "8100+", label: "absolwentów" },
      { value: "5+1", label: "tygodni nauki" },
      { value: "3 filary", label: "certyfikacji 10x" },
    ],
    badge: "Bestseller",
    note: "Kolejna edycja startuje wiosną 2027",
  },
  {
    slug: "opanuj-frontend",
    tag: "Frontend",
    name: "Opanuj Frontend: AI Edition",
    shortName: "Opanuj Frontend",
    url: "https://www.opanujfrontend.pl",
    description:
      "Zostań nowoczesnym frontend developerem. Intensywne 10-tygodniowe szkolenie, które uczy budować aplikacje wysokiej jakości: wzorce, testowanie, CI/CD, open source i architektura aplikacji webowych.",
    highlights: [
      "Wzorce i dobre praktyki zarządzania stanem oraz przepływem danych",
      "Testy jednostkowe (Vitest), e2e (Playwright) i dostępność (a11y)",
      "CI/CD z GitHub Actions i wdrożenia na AWS, Vercel i Netlify",
      "Design systemy, biblioteki open source i inner source",
      "Architektura aplikacji frontendowych, mikrofrontendy i monorepo",
    ],
    modules: [
      "Wzorce i dobre praktyki",
      "Inżynieria jakości frontendu — Vitest, Playwright, a11y",
      "Wdrożenia i utrzymanie produkcji — CI/CD, AWS",
      "Frontend zespołowo — design systemy, open source, inner source",
      "Architektura aplikacji frontendowych",
    ],
    stats: [
      { value: "10 tyg.", label: "nauki" },
      { value: "25+", label: "obszernych lekcji" },
      { value: "~400", label: "absolwentów (4 edycje)" },
    ],
  },
  {
    slug: "opanuj-typescript",
    tag: "TypeScript",
    name: "Opanuj TypeScript: Frontend Pro",
    shortName: "Opanuj TypeScript",
    url: "https://www.opanujtypescript.pl",
    description:
      "Buduj niezawodne aplikacje z TypeScriptem 5 i Reactem 19. Praktyczny kurs, który pomoże Ci pewnie używać typów generycznych, podejmować lepsze decyzje o typowaniu i skutecznie rozwijać projekty działające na produkcji.",
    highlights: [
      "Praktyczne typy generyczne na realnych scenariuszach",
      "Typowanie komponentów, hooków i zarządzania stanem",
      "Typy warunkowe, mapowane, szablony stringów i inferencja",
      "Ekosystem Reacta: SWR, React Query, Zod, tRPC i Astro 5",
      "40+ ćwiczeń i wzorce typowania z produkcji",
    ],
    modules: [
      "Core Pro — fundamenty i filozofia TypeScripta",
      "React Pro — komponenty, hooki i stan z TS",
      "Ekosystem — SWR, React Query, Zod, tRPC, Astro 5",
    ],
    stats: [
      { value: "TS 5", label: "+ React 19" },
      { value: "40+", label: "ćwiczeń praktycznych" },
      { value: "1500+", label: "przeszkolonych devów" },
    ],
  },
];
