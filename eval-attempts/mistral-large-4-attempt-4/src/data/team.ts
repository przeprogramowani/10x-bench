export interface Founder {
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
  highlights: string[];
  course: string;
  linkedinUrl: string;
}

export const founders: Founder[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder Przeprogramowanych",
    photoUrl: "/img/profiles/przemek.webp",
    bio: "Autor programów szkoleniowych, kursów i podcastów promujących szersze spojrzenie na programowanie. Lead Engineer i Manager w międzynarodowych firmach produktowych takich jak DAZN i Cabify, gdzie rozwijał full-stackowe aplikacje webowe m.in. w stacku .NET/C#, Java, Node.js, Angular i TypeScript.",
    highlights: [
      "Lead Engineer i Manager w DAZN i Cabify",
      "Full-stack: .NET/C#, Java, Node.js, Angular, TypeScript",
      "Kontrybutor Open Source — CursorLens i openapi-typescript",
      "Autor publikacji w Magazynie Programista oraz Increment by Stripe",
      "Prelegent na 4Developers, ReactiveConf i InfoShare",
    ],
    course: "Opanuj JavaScript",
    linkedinUrl: "https://www.linkedin.com/in/psmyrdek/",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder Przeprogramowanych",
    photoUrl: "/img/profiles/marcin.webp",
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters, globalnym liderze sektora HR-Tech. Pasjonat neuronauki — tworzy materiały edukacyjne z uwzględnieniem badań dot. efektywnego przyswajania wiedzy. Przez ponad 10 lat kariery realizował projekty komercyjne oparte o TypeScript, React, Node.js oraz PHP.",
    highlights: [
      "Lead techniczny Platformy Frontendowej w SmartRecruiters",
      "10+ lat doświadczenia: TypeScript, React, Node.js, PHP",
      "Autor najpopularniejszego podcastu technicznego o LLMach w Polsce: Opanuj AI Podcast",
      "Pasjonat neuronauki i efektywnego przyswajania wiedzy",
      "Lubi refaktoryzować legacy i pisać testy (nie mów nikomu)",
    ],
    course: "10xDevs",
    linkedinUrl: "https://www.linkedin.com/in/mkczarkowski/",
  },
];

export const contributors = [
  { name: "Adam Gospodarczyk", photoUrl: "/img/profiles/adam.webp" },
  { name: "Wiktor Jamro", photoUrl: null },
  { name: "Olaf Sulich", photoUrl: "/img/profiles/olaf.jpeg" },
  { name: "Jakub Paczkowski", photoUrl: null },
  { name: "Krzysztof Bohaczyk", photoUrl: null },
] as const;

export const values = [
  {
    title: "Holistyczny rozwój",
    description: "Same umiejętności techniczne to za mało — kreativność, rozwiązywanie problemów, praca zespołowa i komunikacja.",
  },
  {
    title: "Wszechstronni specjaliści",
    description: "Tworzymy nie tylko świetnych programistów, ale świadomych i wszechstronnych profesjonalistów.",
  },
  {
    title: "Kompetencje z rynku",
    description: "Skupiamy się na umiejętnościach faktycznie wymaganych przez branżę i przydatnych w codziennej pracy.",
  },
  {
    title: "Różne formaty nauki",
    description: "Wiedzę dzielimy się przez artykuły, podcasty, newslettery, kursy, warsztaty i darmowe ebooki.",
  },
  {
    title: "Bycie na bieżąco",
    description: "Pomagamy śledzić trendy i znajdować nowe kierunki rozwoju zawodowego.",
  },
  {
    title: "Społeczność",
    description: "Budujemy wspierające środowisko, w którym programiści uczą się i rozwijają razem.",
  },
  {
    title: "Jakość i praktyka",
    description: "Kursy oparte na praktycznych projektach, indywidualnych code review i mentoringu.",
  },
] as const;

export const missionStatement =
  "Przeprogramowani to miejsce, w którym ambitni programiści znajdą coś dla siebie. Przekazujemy wiedzę o programowaniu poprzez artykuły, podcasty, blogi i newslettery, abyś był zawsze na bieżąco i zawsze mógł znaleźć nowy kierunek własnego rozwoju.";

export const goalStatement =
  "Naszym celem jest tworzenie środowiska, w którym każdy może rozwijać kompetencje potrzebne na rynku pracy. Chcemy, żebyś był nie tylko świetnym programistą, ale również świadomym i wszechstronnym specjalistą. Tworzymy treści, które pomogą Ci stać się lepszym w tym, co robisz.";

export const philosophyQuote =
  "Współczesny świat nowych technologii to coś więcej niż kodowanie. Na styku biznesu i programowania najlepiej sprawdzają się osoby, które potrafią myśleć kreatywnie, rozwiązywać problemy, pracować w zespole i komunikować się z innymi.";
