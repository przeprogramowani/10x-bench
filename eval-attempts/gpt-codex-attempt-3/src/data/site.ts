export type Course = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  highlight?: boolean;
};

export const site = {
  name: "Przeprogramowani",
  tagline: "Szersze spojrzenie na programowanie",
  description:
    "Polska platforma edukacyjna dla programistów: kursy, szkolenia, podcast, YouTube i newsletter dla ambitnych developerów.",
  founded: "2017",
  contact: "kontakt@przeprogramowani.pl",
  founders: ["Przemek Smyrdek", "Marcin Czarkowski"],
  social: {
    website: "https://przeprogramowani.pl",
    youtube: "https://www.youtube.com/c/przeprogramowani",
    spotify: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
    podcastRss: "https://anchor.fm/s/c72d808/podcast/rss",
    youtubeRss: "https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw"
  }
};

export const courses: Course[] = [
  {
    title: "10xDevs",
    subtitle: "Flagowy program",
    description:
      "Program rozwoju dla developerów, którzy chcą wejść poziom wyżej: praktyka, mentoring i nowoczesny workflow.",
    href: "https://przeprogramowani.pl",
    highlight: true
  },
  {
    title: "Opanuj Frontend",
    subtitle: "Od podstaw do produkcji",
    description:
      "Kompletny kurs frontendowy oparty o realne projekty i dobre praktyki nowoczesnego JavaScriptu.",
    href: "https://przeprogramowani.pl"
  },
  {
    title: "Opanuj TypeScript",
    subtitle: "Silne typowanie w praktyce",
    description:
      "TypeScript od fundamentów po zaawansowane wzorce, które realnie podnoszą jakość kodu i pewność refaktoryzacji.",
    href: "https://przeprogramowani.pl"
  }
];
