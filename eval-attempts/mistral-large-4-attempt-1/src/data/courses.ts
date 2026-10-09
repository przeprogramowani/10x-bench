export type Accent = "violet" | "sky" | "blue" | "orange";

export interface Course {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  url: string;
  cta: string;
  accent: Accent;
  stats: { value: string; label: string }[];
  features: string[];
}

export const heroCourse = {
  id: "10xdevs",
  name: "10xDevs 4.0",
  badge: "Nowość — Wrzesień 2026",
  headline: "Programuj z AI",
  lead: "Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania — od researchu i planowania, przez implementację i testy, po wdrożenie na produkcję.",
  url: "https://10xdevs.pl?utm_source=przeprogramowani_website",
  cta: "Zobacz program 10xDevs",
  stats: [
    { value: "8100+", label: "absolwentów" },
    { value: "5+1", label: "tygodni nauki" },
    { value: "100%", label: "projekt końcowy + certyfikat" },
  ],
  conductors: "Prowadzą: Przemek Smyrdek i Marcin Czarkowski",
} as const;

export const courses: Course[] = [
  {
    id: "opanuj-frontend",
    name: "Opanuj Frontend: AI Edition",
    badge: "Frontend",
    tagline: "Zostań nowoczesnym frontend developerem",
    description:
      "Intensywne 10-tygodniowe szkolenie, które przygotuje Cię do tworzenia zaawansowanych aplikacji webowych. Cztery edycje i prawie 400 absolwentów!",
    url: "https://www.opanujfrontend.pl?utm_source=przeprogramowani_website",
    cta: "Szczegóły kursu",
    accent: "sky",
    stats: [
      { value: "10 tyg.", label: "nauki" },
      { value: "5", label: "modułów" },
      { value: "~400", label: "absolwentów" },
    ],
    features: [
      "Wzorce i dobre praktyki frontendu",
      "Testy jednostkowe (Vitest) i E2E (Playwright)",
      "CI/CD z GitHub Actions i wdrożenia na AWS",
      "Design systemy, open source i inner source",
      "Architektura aplikacji frontendowych",
    ],
  },
  {
    id: "opanuj-typescript",
    name: "Opanuj TypeScript",
    badge: "TypeScript",
    tagline: "Buduj niezawodne aplikacje z TypeScriptem i Reactem",
    description:
      "Szkolenie, które podniesie jakość Twoich projektów działających na produkcji i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19!",
    url: "https://www.opanujtypescript.pl?utm_source=przeprogramowani_website",
    cta: "Szczegóły kursu",
    accent: "blue",
    stats: [
      { value: "40+", label: "ćwiczeń" },
      { value: "TS 5", label: "+ React 19" },
      { value: "121", label: "programistów w edycji" },
    ],
    features: [
      "Typy generyczne w praktycznych scenariuszach",
      "Typowanie komponentów, hooków i stanu w React",
      "SWR, React Query, Zod i full-stack tRPC",
      "Narzędzia ekosystemu TypeScript",
      "Lekcja bonusowa AI Edition",
    ],
  },
  {
    id: "opanuj-ai",
    name: "Opanuj AI",
    badge: "Gen AI",
    tagline: "Praktyczna wiedza o sztucznej inteligencji",
    description:
      "Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdrażaj ją w codziennej pracy.",
    url: "https://opanuj.ai/",
    cta: "Odwiedź Opanuj AI",
    accent: "orange",
    stats: [
      { value: "#1", label: "podcast o LLM w Polsce" },
      { value: "100%", label: "praktyczne podejście" },
    ],
    features: [
      "Warsztaty AI dla firm i zespołów",
      "Opanuj AI Podcast — liderzy branży",
      "Blog i darmowe ebooki",
      "Sprawdzone promptowanie w praktyce",
    ],
  },
];

export const accentClasses: Record<Accent, { gradient: string; border: string; text: string; glow: string }> = {
  violet: {
    gradient: "from-violet-500 to-fuchsia-500",
    border: "hover:border-violet-500/60",
    text: "text-violet-400",
    glow: "shadow-violet-950/40",
  },
  sky: {
    gradient: "from-sky-500 to-cyan-400",
    border: "hover:border-sky-500/60",
    text: "text-sky-400",
    glow: "shadow-sky-950/40",
  },
  blue: {
    gradient: "from-blue-500 to-violet-500",
    border: "hover:border-blue-500/60",
    text: "text-blue-400",
    glow: "shadow-blue-950/40",
  },
  orange: {
    gradient: "from-orange-500 to-rose-500",
    border: "hover:border-orange-500/60",
    text: "text-orange-400",
    glow: "shadow-orange-950/40",
  },
};
