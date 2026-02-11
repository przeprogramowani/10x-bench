export interface Course {
  name: string;
  slug: string;
  url: string;
  description: string;
  alumni: string;
  duration: string;
  price?: string;
  dates?: string;
  featured?: boolean;
  tags: string[];
}

export const courses: Course[] = [
  {
    name: "10xDevs 3.0",
    slug: "10xdevs",
    url: "https://10xdevs.pl",
    description:
      "Intensywny kurs programowania z AI. Naucz się budować aplikacje szybciej, korzystając z najnowszych narzędzi i technik. Cohort-based — uczysz się z grupą.",
    alumni: "2500+",
    duration: "5 tygodni",
    price: "2990 PLN",
    dates: "18.05–15.06.2026",
    featured: true,
    tags: ["AI", "Cohort-based", "Live"],
  },
  {
    name: "Opanuj Frontend",
    slug: "opanuj-frontend",
    url: "https://opanujfrontend.pl",
    description:
      "Kompleksowy kurs frontendowy — od podstaw po zaawansowane wzorce. React, TypeScript, testy, architektura i dobre praktyki.",
    alumni: "383+",
    duration: "10 tygodni",
    tags: ["Frontend", "React", "TypeScript"],
  },
  {
    name: "Opanuj TypeScript",
    slug: "opanuj-typescript",
    url: "https://opanujtypescript.pl",
    description:
      "Dogłębny kurs TypeScriptu — typy generyczne, utility types, zaawansowane wzorce i praktyczne zastosowania w codziennej pracy.",
    alumni: "121+",
    duration: "Kurs online",
    tags: ["TypeScript", "Self-paced"],
  },
];
