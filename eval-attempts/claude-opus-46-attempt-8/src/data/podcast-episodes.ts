export interface PodcastEpisode {
  title: string;
  guest: string;
  date: string;
  duration: string;
  description: string;
  spotifyUrl?: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    title: "Programista vs. Angielski: Od strachu do sukcesu",
    guest: "Wiktoria Sitko",
    date: "25 września 2025",
    duration: "33 min",
    description:
      "Rozmowa o tym, jak przełamać barierę językową w świecie IT. Wiktoria dzieli się swoim doświadczeniem i praktycznymi wskazówkami dla programistów.",
  },
  {
    title: "O dojrzewaniu zawodowym programisty",
    guest: "Wojciech Trawiński",
    date: "10 września 2025",
    duration: "45 min",
    description:
      "Czym jest dojrzałość zawodowa w kontekście kariery programisty? Rozmawiamy o ścieżkach rozwoju, podejmowaniu decyzji i budowaniu doświadczenia.",
  },
  {
    title: "Architektura frontendu: Co naprawdę ma znaczenie?",
    guest: "Tomasz Ducin",
    date: "10 października 2024",
    duration: "1h 16min",
    description:
      "Głęboka rozmowa o architekturze aplikacji frontendowych. Tomasz Ducin dzieli się swoimi przemyśleniami na temat tego, co naprawdę wpływa na jakość kodu.",
  },
];

export const podcastLinks = {
  spotify: "https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo",
  apple: "https://podcasts.apple.com/pl/podcast/przeprogramowani/id1507182214",
};
