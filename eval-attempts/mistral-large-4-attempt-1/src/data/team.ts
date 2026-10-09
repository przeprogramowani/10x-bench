export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    bio: "Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).",
    photo: "/img/team/przemek.webp",
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.",
    photo: "/img/team/marcin.webp",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/",
  },
];

export const stats = [
  { value: "7 lat", label: "na rynku edukacji technologicznej" },
  { value: "8100+", label: "absolwentów 10xDevs" },
  { value: "1500+", label: "przeszkolonych developerów" },
  { value: "4000+", label: "słuchaczy podcastów" },
] as const;
