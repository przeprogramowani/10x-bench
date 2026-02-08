export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder & Educator",
    bio: "Frontend developer z wieloletnim doświadczeniem w firmach takich jak Accenture i Tesco Technology. Pasjonat edukacji i dzielenia się wiedzą. Współtwórca kursów Opanuj Frontend, Opanuj TypeScript i programu 10xDevs.",
    socials: {
      twitter: "https://twitter.com/psmyrdek",
      linkedin: "https://linkedin.com/in/psmyrdek",
      github: "https://github.com/psmyrdek",
    },
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder & Educator",
    bio: "Doświadczony developer i mentor. Specjalizuje się w TypeScript, architekturze frontend i nowoczesnych wzorcach projektowych. Współtwórca wszystkich produktów edukacyjnych Przeprogramowani.",
    socials: {
      twitter: "https://twitter.com/mczarkowski",
      linkedin: "https://linkedin.com/in/marcinczarkowski",
      github: "https://github.com/mczarkowski",
    },
  },
];

export const partners = [
  "Allegro",
  "Ringier Axel Springer",
  "DPD",
  "Huuuge Games",
  "Nordea",
  "ING",
  "PwC",
  "Capgemini",
];
