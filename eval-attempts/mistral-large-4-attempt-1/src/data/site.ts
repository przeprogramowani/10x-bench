export const site = {
  name: "Przeprogramowani",
  title: "Przeprogramowani.pl",
  url: "https://przeprogramowani.pl",
  description:
    "Przeprogramowani — szersze spojrzenie na programowanie. Podcasty, kursy (Opanuj Frontend, Opanuj TypeScript, 10xDevs), YouTube i newsletter dla ambitnych programistów.",
  tagline: "Szersze spojrzenie na programowanie",
  email: "kontakt@przeprogramowani.pl",
  language: "pl",
} as const;

export const navLinks = [
  { label: "Start", href: "/" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kursy", href: "/#kursy" },
  { label: "Podcast", href: "/podcast" },
  { label: "YouTube", href: "/youtube" },
  { label: "Newsletter", href: "/#newsletter" },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/przeprogramowani" },
  { label: "Instagram", href: "https://instagram.com/przeprogramowani" },
  { label: "YouTube", href: "https://www.youtube.com/@przeprogramowani" },
  { label: "LinkedIn — Przemek", href: "https://www.linkedin.com/in/psmyrdek/" },
  { label: "LinkedIn — Marcin", href: "https://www.linkedin.com/in/mkczarkowski/" },
] as const;

export const youtubeChannelUrl = "https://www.youtube.com/@przeprogramowani";
export const newsletterUrl = "https://przeprogramowani.substack.com";
