export const SITE = {
  name: "Przeprogramowani",
  tagline: "Szersze spojrzenie na programowanie",
  description:
    "Przeprogramowani to miejsce, w którym programowanie spotyka się z rozwojem osobistym. Tworzymy treści, kursy i narzędzia, które pomagają programistom rozwijać się na wielu płaszczyznach.",
  url: "https://przeprogramowani.pl",
  email: "kontakt@przeprogramowani.pl",
};

export const SOCIALS = {
  youtube: "https://www.youtube.com/c/przeprogramowani",
  facebook: "https://www.facebook.com/przeprogramowani",
  instagram: "https://www.instagram.com/przeprogramowani",
  newsletter: "https://przeprogramowani.substack.com",
};

export const NAV_LINKS = [
  { label: "O nas", href: "/o-nas" },
  { label: "Podcast", href: "/podcast" },
  { label: "YouTube", href: "/youtube" },
];

export const STATS = [
  { value: "7 lat", label: "na rynku edukacji technologicznej" },
  { value: "8100+", label: "absolwentów 10xDevs" },
  { value: "7800+", label: "słuchaczy podcastów" },
  { value: "15 000+", label: "programistów w społeczności" },
];

export const BRANDS = [
  "Huuuge Games",
  "Nutridome",
  "SmartRecruiters",
  "Future Processing",
  "Callstack",
  "edrone",
  "Xfive",
  "Euvic",
  "Strabag",
  "Autodesk",
];

export type Founder = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  linkedin: string;
};

export const FOUNDERS: Founder[] = [
  {
    name: "Przemek Smyrdek",
    role: "Co-founder, Przeprogramowani",
    initials: "PS",
    bio: "Autor programów edukacyjnych, kursów i podcastów. Lead Engineer i Manager w DAZN i Cabify. Full-stack developer (.NET/C#, Java, Node.js, Angular, TypeScript). Prelegent na 4Developers, ReactiveConf i InfoShare. Kontrybutor Open Source (CursorLens, openapi-typescript).",
    linkedin: "https://www.linkedin.com/in/psmyrdek/",
  },
  {
    name: "Marcin Czarkowski",
    role: "Co-founder, Przeprogramowani",
    initials: "MC",
    bio: "Lead techniczny Platformy Frontendowej w SmartRecruiters z ponad 10-letnim doświadczeniem. Entuzjasta neurobiologii, tworzący materiały edukacyjne w oparciu o badania nad uczeniem się. Twórca „Opanuj AI Podcast” — najpopularniejszego technicznego podcastu o LLM w Polsce. Specjalista TypeScript, React, Node.js.",
    linkedin: "https://www.linkedin.com/in/mkczarkowski/",
  },
];
