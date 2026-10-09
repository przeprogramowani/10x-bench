export const site = {
  name: "Przeprogramowani",
  domain: "przeprogramowani.pl",
  url: "https://przeprogramowani.pl",
  title: "Przeprogramowani — szersze spojrzenie na programowanie",
  tagline: "Szersze spojrzenie na programowanie",
  description:
    "Przeprogramowani to miejsce, w którym ambitni programiści znajdą coś dla siebie. Łączymy świat programowania, biznesu i rozwoju — kursy, podcasty, YouTube i newsletter.",
  mission: "Łączymy świat programowania, biznesu i rozwoju",
  email: "kontakt@przeprogramowani.pl",
  locale: "pl_PL",
  language: "pl",
  logo: "/img/logo.png",
  ogImage: "/og-image.svg",
  socials: {
    youtube: "https://www.youtube.com/c/przeprogramowani",
    facebook: "https://www.facebook.com/przeprogramowani",
    instagram: "https://www.instagram.com/przeprogramowani",
    podcast: "https://anchor.fm/przeprogramowani",
    newsletter: "https://przeprogramowani.substack.com",
  },
} as const;

export const navigation = [
  { label: "Strona główna", href: "/" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kursy", href: "/kursy" },
  { label: "Podcast", href: "/podcast" },
  { label: "YouTube", href: "/youtube" },
] as const;

export const stats = [
  { value: "7+", label: "lat na rynku edukacji technicznej" },
  { value: "850+", label: "absolwentów kursu Opanuj JavaScript" },
  { value: "40 000+", label: "programistów zasięgu na YouTube" },
  { value: "8.84/10", label: "średnia ocena kursu Opanuj JavaScript" },
] as const;

export const partners = [
  "Huuuge Games",
  "Nutridome",
  "SmartRecruiters",
  "Dover",
  "Future Processing",
  "callstack",
  "Bitnoise",
  "NoFluffJobs",
  "edrone",
  "emagine",
  "DAZN",
  "Cabify",
] as const;
