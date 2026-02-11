export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string[];
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder & Lead Instructor",
    bio: "Programista z wieloletnim doświadczeniem w międzynarodowych firmach technologicznych. Pasjonat dzielenia się wiedzą i budowania społeczności programistów.",
    experience: ["DAZN", "Cabify", "Przeprogramowani"],
    avatar: "PS",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder & Instructor",
    bio: "Doświadczony inżynier oprogramowania specjalizujący się w architekturze frontendowej i dobrych praktykach wytwarzania oprogramowania.",
    experience: ["SmartRecruiters", "Przeprogramowani"],
    avatar: "MC",
  },
];
