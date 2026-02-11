export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string[];
  linkedin: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    name: "Przemek Smyrdek",
    role: "Współzałożyciel",
    bio: "Programista i educator z wieloletnim doświadczeniem w międzynarodowych firmach technologicznych. Pasjonat dzielenia się wiedzą i budowania społeczności programistów w Polsce.",
    experience: [
      "DAZN — platforma streamingowa dla sportu",
      "Cabify — aplikacja ride-hailing",
      "Współtwórca kursów 10xDevs i Opanuj Frontend",
      "Prelegent na konferencjach technologicznych",
    ],
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
  },
  {
    name: "Marcin Czarkowski",
    role: "Współzałożyciel",
    bio: "Doświadczony inżynier oprogramowania, specjalizujący się w architekturze frontendowej i rozwoju zespołów. Twórca podcastu Opanuj.AI o sztucznej inteligencji.",
    experience: [
      "SmartRecruiters — platforma rekrutacyjna",
      "Współtwórca kursów Opanuj TypeScript i Opanuj Frontend",
      "Autor podcastu Opanuj.AI",
      "Mentor i code reviewer",
    ],
    linkedin: "https://www.linkedin.com/in/mczarkowski/",
  },
];
