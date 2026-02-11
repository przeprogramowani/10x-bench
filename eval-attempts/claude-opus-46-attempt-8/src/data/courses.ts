export interface Course {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  url: string;
  highlights: string[];
  featured?: boolean;
}

export const courses: Course[] = [
  {
    name: "10xDevs 3.0",
    slug: "10xdevs",
    tagline: "Programowanie z AI",
    description:
      "Intensywny kurs programowania z wykorzystaniem narzędzi AI. Naucz się budować aplikacje szybciej i efektywniej, korzystając z najnowszych modeli językowych i asystentów kodu.",
    url: "https://10xdevs.pl",
    highlights: [
      "1250+ uczestników",
      "5 tygodni intensywnej nauki",
      "Praktyczne projekty z AI",
      "Społeczność i wsparcie mentorów",
    ],
    featured: true,
  },
  {
    name: "Opanuj Frontend: AI Edition",
    slug: "opanuj-frontend",
    tagline: "Frontend z nowoczesnymi narzędziami",
    description:
      "10-tygodniowy kurs frontendowy nowej generacji. Opanuj React, TypeScript i nowoczesne narzędzia deweloperskie, wspierane przez AI.",
    url: "https://opanujfrontend.pl",
    highlights: [
      "400+ absolwentów",
      "10 tygodni kursu",
      "React + TypeScript",
      "Code review od mentorów",
    ],
  },
  {
    name: "Opanuj TypeScript",
    slug: "opanuj-typescript",
    tagline: "TypeScript 5 + React 19",
    description:
      "Kompleksowy kurs TypeScript od podstaw po zaawansowane techniki. Poznaj system typów, generyki, utility types i integrację z React 19.",
    url: "https://opanujtypescript.pl",
    highlights: [
      "121+ uczestników",
      "TypeScript 5",
      "React 19 integration",
      "Praktyczne zadania",
    ],
  },
];
