export interface Course {
  slug: string;
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  highlights: string[];
  url: string;
  cta: string;
  gradient: string;
  badge?: string;
}

export const courses: Course[] = [
  {
    slug: "10xdevs",
    name: "10xDevs 4.0",
    tag: "Gen AI • Flagowy program",
    tagColor: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    description:
      "Nowe oblicze programowania z wykorzystaniem Generatywnego AI. Techniki i narzędzia pozwalające świadomie stosować AI w całym cyklu wytwarzania oprogramowania.",
    highlights: ["AI-Native SDLC", "Agenci i workflow AI", "Projekty do portfolio + Demo Day"],
    url: "https://10xdevs.pl?utm_source=przeprogramowani_website",
    cta: "Zobacz 10xDevs",
    gradient: "from-emerald-400 via-teal-300 to-cyan-400",
    badge: "Nowość — wrzesień 2026",
  },
  {
    slug: "opanuj-frontend",
    name: "Opanuj Frontend: AI Edition",
    tag: "Frontend",
    tagColor: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    description:
      "Zostań nowoczesnym frontend developerem — 5 obszernych modułów o frontendzie, testowaniu, CI/CD, open source i architekturze aplikacji webowych.",
    highlights: ["5 modułów + projekty", "Testowanie, CI/CD, architektura", "Prawie 400 absolwentów, 4 edycje"],
    url: "https://www.opanujfrontend.pl?utm_source=przeprogramowani_website",
    cta: "Zobacz program",
    gradient: "from-violet-400 via-fuchsia-400 to-pink-400",
  },
  {
    slug: "opanuj-typescript",
    name: "Opanuj TypeScript",
    tag: "TypeScript",
    tagColor: "bg-sky-400/10 text-sky-300 border-sky-400/20",
    description:
      "Szkolenie, które podniesie jakość Twoich projektów produkcyjnych i ułatwi ich rozwój. Pracujemy z najnowszymi wersjami TypeScript 5 i React 19.",
    highlights: ["TypeScript 5 + React 19", "Typy, generyki, architektura", "Praktyka na kodzie produkcyjnym"],
    url: "https://www.opanujtypescript.pl?utm_source=przeprogramowani_website",
    cta: "Zobacz szkolenie",
    gradient: "from-sky-400 via-blue-400 to-indigo-400",
  },
  {
    slug: "opanuj-ai",
    name: "Opanuj AI",
    tag: "Gen AI • Warsztaty",
    tagColor: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    description:
      "Warsztaty, podcast, blog i darmowe ebooki o sztucznej inteligencji. Zdobądź praktyczną wiedzę o AI i wdróż ją w codziennej pracy.",
    highlights: ["Warsztaty na żywo", "Podcast Opanuj.AI", "Darmowe ebooki i blog"],
    url: "https://opanuj.ai/",
    cta: "Poznaj Opanuj AI",
    gradient: "from-amber-300 via-orange-400 to-rose-400",
  },
];
