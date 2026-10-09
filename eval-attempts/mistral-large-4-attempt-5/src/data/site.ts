export const site = {
  name: "Przeprogramowani",
  title: "Przeprogramowani — Szersze spojrzenie na programowanie",
  description:
    "Kursy i szkolenia dla programistów — JavaScript, TypeScript, AI. Podcast, YouTube i newsletter dla ambitnych developerów.",
  url: "https://przeprogramowani.pl",
  email: "kontakt@przeprogramowani.pl",
  tagline: "Szersze spojrzenie na programowanie",
  locale: "pl_PL",
  ogImage: "/og-image.jpg",
} as const;

export const navLinks = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/podcast", label: "Podcast" },
  { href: "/youtube", label: "YouTube" },
  { href: "/kursy", label: "Kursy" },
] as const;

export const socialLinks = {
  youtube: "https://www.youtube.com/@Przeprogramowani",
  facebook: "https://facebook.com/przeprogramowani",
  instagram: "https://instagram.com/przeprogramowani",
  newsletter: "https://przeprogramowani.substack.com",
} as const;

export const stats = [
  { value: "7 lat", label: "na rynku edukacji technologicznej" },
  { value: "8100+", label: "absolwentów programu 10xDevs" },
  { value: "1500+", label: "przeszkolonych developerów (O:FE i O:JS)" },
  { value: "40 000+", label: "programistów w zasięgu na YouTube" },
] as const;

export const partners = [
  "Huuuge Games",
  "SmartRecruiters",
  "Future Processing",
  "Callstack",
  "edrone",
  "Xfive",
  "Nutridome",
  "Autodesk",
  "DAZN",
  "Cabify",
] as const;
