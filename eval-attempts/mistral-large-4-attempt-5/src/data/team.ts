export type Founder = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  course: string;
  linkedin: string;
};

export const founders: Founder[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    photo: "/img/team/przemek.webp",
    bio: [
      "Co-founder Przeprogramowanych. Autor programów szkoleniowych, kursów i podcastów promujących szersze spojrzenie na programowanie.",
      "Lead Engineer i Manager w międzynarodowych firmach produktowych takich jak DAZN i Cabify. Rozwijał full-stackowe aplikacje webowe m.in. w stacku .NET/C#, Java, Node.js, Angular i TypeScript.",
      "Kontrybutor w projektach Open Source takich jak CursorLens i openapi-typescript. Autor publikacji technicznych w Magazynie Programista oraz Increment by Stripe.",
      "Prelegent na uznanych konferencjach programistycznych — 4Developers, ReactiveConf i InfoShare.",
    ],
    course: "Opanuj JavaScript",
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    photo: "/img/team/marcin.webp",
    bio: [
      "Co-founder Przeprogramowanych. Lead techniczny Platformy Frontendowej w SmartRecruiters, globalnym liderze sektora HR-Tech.",
      "Pasjonat neuronauki — tworzy materiały edukacyjne z uwzględnieniem badań dotyczących efektywnego przyswajania wiedzy.",
      "Przez ponad 10 lat kariery programistycznej realizował projekty komercyjne oparte o TypeScript, React, Node.js oraz PHP.",
      "Autor najpopularniejszego podcastu technicznego o LLM-ach w Polsce: Opanuj AI Podcast. Lubi refaktoryzować legacy i pisać testy (nie mów nikomu).",
    ],
    course: "10xDevs",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/",
  },
];

export const contributors = [
  "Adam Gospodarczyk",
  "Wiktor Jamro",
  "Olaf Sulich",
  "Jakub Paczkowski",
  "Krzysztof Bohaczyk",
] as const;

export const values = [
  {
    title: "Więcej niż kodowanie",
    description:
      "Nowoczesne technologie to coś więcej niż kod. Stawiamy na kreatywne myślenie, rozwiązywanie problemów, pracę zespołową i komunikację.",
  },
  {
    title: "Holistyczny rozwój",
    description:
      "Same techniczne umiejętności to za mało. Rozwijamy kompetencje, które są realnie wymagane przez rynek.",
  },
  {
    title: "Wszechstronni specjaliści",
    description:
      "Chcemy tworzyć nie tylko świetnych programistów, ale świadomych i wszechstronnych profesjonalistów.",
  },
  {
    title: "Różnorodne formaty",
    description:
      "Artykuły, podcasty, newsletter, kursy, warsztaty i darmowe ebooki — dzielimy się wiedzą w formie, która do Ciebie trafia.",
  },
  {
    title: "Zawsze na bieżąco",
    description:
      "Pomagamy nadążać za trendami i znajdować nowe kierunki profesjonalnego rozwoju.",
  },
  {
    title: "Społeczność",
    description:
      "Budujemy środowisko, w którym programiści uczą się i rosną razem — bo społeczność bije samotną naukę.",
  },
] as const;

export const mission =
  "Przeprogramowani to miejsce, w którym ambitni programiści znajdą coś dla siebie. Przekazujemy wiedzę o programowaniu poprzez artykuły, podcasty, blogi i newslettery, abyś był zawsze na bieżąco i zawsze mógł znaleźć nowy kierunek własnego rozwoju.";

export const goal =
  "Naszym celem jest tworzenie środowiska, w którym każdy może rozwijać kompetencje potrzebne na rynku pracy. Chcemy, żebyś był nie tylko świetnym programistą, ale też świadomym i wszechstronnym specjalistą.";
