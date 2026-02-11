export interface PodcastShow {
  name: string;
  description: string;
  episodeCount: string;
  spotifyUrl: string;
  appleUrl: string;
}

export interface PodcastEpisode {
  title: string;
  date: string;
  duration: string;
  description: string;
  show: string;
}

export const podcastShows: PodcastShow[] = [
  {
    name: "Przeprogramowani ft. Gość",
    description:
      "Rozmowy z ekspertami ze świata IT o programowaniu, karierze i technologiach. Szersze spojrzenie na branżę tech.",
    episodeCount: "98",
    spotifyUrl:
      "https://open.spotify.com/show/przeprogramowani",
    appleUrl:
      "https://podcasts.apple.com/pl/podcast/przeprogramowani",
  },
  {
    name: "Opanuj.AI Podcast",
    description:
      "Podcast o sztucznej inteligencji w kontekście programowania i produktywności. Praktyczne porady i narzędzia AI.",
    episodeCount: "20+",
    spotifyUrl:
      "https://open.spotify.com/show/opanuj-ai",
    appleUrl:
      "https://podcasts.apple.com/pl/podcast/opanuj-ai",
  },
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    title: "Programista vs. Angielski — jak uczyć się języków efektywnie?",
    date: "2025-09-25",
    duration: "33:45",
    description:
      "Rozmowa o nauce języków obcych jako programista. Strategie, narzędzia i motywacja.",
    show: "Przeprogramowani ft. Gość",
  },
  {
    title: "O dojrzewaniu zawodowym w IT",
    date: "2025-09-10",
    duration: "45:56",
    description:
      "Jak wygląda ścieżka kariery w IT? Czym różni się junior od seniora? Rozmowa o rozwoju zawodowym.",
    show: "Przeprogramowani ft. Gość",
  },
  {
    title: "Architektura frontendu — wzorce i praktyki",
    date: "2024-10-10",
    duration: "1:16:44",
    description:
      "Głęboka rozmowa o architekturze aplikacji frontendowych, wzorcach projektowych i skalowaniu.",
    show: "Przeprogramowani ft. Gość",
  },
  {
    title: "Co nowego w TypeScript?",
    date: "2024-08-21",
    duration: "1:36:34",
    description:
      "Przegląd najnowszych funkcji TypeScriptu — od nowych typów po usprawnienia kompilatora.",
    show: "Przeprogramowani ft. Gość",
  },
  {
    title: "No-code i Low-code — przyszłość czy hype?",
    date: "2024-06-13",
    duration: "36:31",
    description:
      "Czy no-code zastąpi programistów? Kiedy warto sięgnąć po narzędzia low-code?",
    show: "Przeprogramowani ft. Gość",
  },
  {
    title: "Nauka nowoczesnego frontendu — od czego zacząć?",
    date: "2024-06-06",
    duration: "42:11",
    description:
      "Przewodnik po nauce frontendu w 2024 roku. Frameworki, narzędzia i ścieżka rozwoju.",
    show: "Przeprogramowani ft. Gość",
  },
];
