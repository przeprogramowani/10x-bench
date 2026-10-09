export interface Course {
  name: string;
  label: string;
  description: string;
  url: string;
  imageUrl: string;
  accent: "main" | "turquoise" | "sky" | "pink" | "cyan";
  ctaText: string;
  featured?: boolean;
  meta?: string;
}

/**
 * Główne kursy — sekcja „Kursy" na stronie głównej oraz strona /kursy.
 * 10xDevs jest dodatkowo promowany w hero strony głównej.
 */
export const courses: Course[] = [
  {
    name: "10xDevs",
    label: "Generative AI",
    description:
      "Generatywne AI w pełnym cyklu wytwarzania oprogramowania — od pomysłu, przez kod, po wdrożenie. Najnowsza oferta Przeprogramowanych (2025).",
    url: "https://10xdevs.pl",
    imageUrl: "/img/10xdevs-hero.webp",
    accent: "main",
    ctaText: "Zobacz kurs",
    featured: true,
    meta: "Nowa edycja 2025",
  },
  {
    name: "Opanuj Frontend: AI Edition",
    label: "Frontend",
    description:
      "Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.",
    url: "https://www.opanujfrontend.pl",
    imageUrl: "/img/courses/kurs-ofe.jpg",
    accent: "pink",
    ctaText: "Zobacz kurs",
    meta: "5 modułów · ~400 absolwentów",
  },
  {
    name: "Opanuj TypeScript",
    label: "TypeScript",
    description:
      "Podnieś jakość swoich projektów produkcyjnych i ułatw sobie rozwój kodu dzięki TypeScript 5 i React 19.",
    url: "https://www.opanujtypescript.pl",
    imageUrl: "/img/courses/kurs-ots.jpg",
    accent: "sky",
    ctaText: "Zobacz kurs",
    meta: "TypeScript 5 + React 19",
  },
];

/** Pozostałe kursy i programy Przeprogramowanych. */
export const moreCourses: Course[] = [
  {
    name: "Opanuj JavaScript",
    label: "JavaScript",
    description:
      "Kompleksowy kurs JavaScript od podstaw — 6+ edycji, 850+ absolwentów i średnia ocena 8.84/10.",
    url: "https://przeprogramowani.pl/ojs-premium",
    imageUrl: "/img/logo.png",
    accent: "turquoise",
    ctaText: "Zobacz kurs",
    meta: "6+ edycji · 850+ absolwentów · 8.84/10",
  },
  {
    name: "Opanuj AI",
    label: "Gen AI",
    description:
      "Praktyczna sztuczna inteligencja w codziennej pracy developera — warsztaty, podcast i darmowe ebooki.",
    url: "https://opanuj.ai/",
    imageUrl: "/img/courses/kurs-ai.jpg",
    accent: "cyan",
    ctaText: "Zobacz więcej",
    meta: "Warsztaty · podcast · ebooki",
  },
  {
    name: "Cursor: Programuj z AI",
    label: "AI tooling",
    description:
      "Praktyczny kurs pracy z edytorem Cursor i Claude 3.5 Sonnet — narzędzia AI dla developerów.",
    url: "https://opanuj.ai/",
    imageUrl: "/img/logo.png",
    accent: "main",
    ctaText: "Zobacz więcej",
    meta: "Cursor + Claude 3.5 Sonnet",
  },
];
