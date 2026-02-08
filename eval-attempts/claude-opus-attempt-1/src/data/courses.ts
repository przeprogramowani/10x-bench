export interface Course {
  title: string;
  slug: string;
  description: string;
  url: string;
  badge?: string;
  features: string[];
  color: "indigo" | "emerald" | "violet";
}

export const courses: Course[] = [
  {
    title: "Opanuj Frontend",
    slug: "opanuj-frontend",
    description:
      "Kompleksowy kurs frontend developmentu. Od HTML i CSS, przez JavaScript, aż po React i nowoczesne narzędzia.",
    url: "https://opanujfrontend.pl",
    features: [
      "React & TypeScript",
      "Projekty praktyczne",
      "Code review",
      "Społeczność",
    ],
    color: "indigo",
  },
  {
    title: "Opanuj TypeScript",
    slug: "opanuj-typescript",
    description:
      "Głębokie zanurzenie w TypeScript. Typy generyczne, utility types, wzorce projektowe i zaawansowane techniki.",
    url: "https://opanujtypescript.pl",
    features: [
      "Zaawansowane typy",
      "Wzorce projektowe",
      "Ćwiczenia praktyczne",
      "Certyfikat",
    ],
    color: "violet",
  },
  {
    title: "10xDevs 3.0",
    slug: "10xdevs",
    description:
      "Intensywny program dla developerów, którzy chcą wykorzystać AI w codziennej pracy. Cohort startuje maj 2026.",
    url: "https://10xdevs.pl",
    badge: "Nowy cohort!",
    features: [
      "AI w praktyce",
      "Projekty z mentorem",
      "Społeczność 10x",
      "8 tygodni",
    ],
    color: "emerald",
  },
];
