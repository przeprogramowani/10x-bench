export interface Episode {
  title: string;
  guest?: string;
  date: string; // ISO
  duration: string;
  description: string;
}

export const podcastLinks = {
  apple: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
  spotify: 'https://open.spotify.com/show/przeprogramowani',
  youtube: 'https://www.youtube.com/@Przeprogramowani',
};

export const podcastMeta = {
  title: 'Przeprogramowani Podcast',
  subtitle: 'Szersze spojrzenie na programowanie',
  rating: '4.9 / 5',
  episodes: 98,
  years: '2019 – dziś',
  description:
    'Podcast prowadzony przez Marcina Czarkowskiego i Przemka Smyrdka. Kierowany do programistów na każdym etapie kariery — od juniorów szukających kierunku, po seniorów zastanawiających się nad kolejnym krokiem. Rozmawiamy o architekturze, karierze, AI i rozwoju osobistym.',
};

// Ostatnie odcinki (na podstawie danych z Apple Podcasts).
export const episodes: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    guest: 'Wiktoria Sitko',
    date: '2025-09-25',
    duration: '34 min',
    description:
      'O barierach językowych programistów i skutecznych strategiach nauki angielskiego w IT. Gościni: Wiktoria Sitko, programistka i założycielka szkoły językowej HejHey.pl.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    guest: 'Wojciech Trawiński',
    date: '2025-09-10',
    duration: '46 min',
    description:
      'Senior Software Engineer Wojciech Trawiński o rozwoju zawodowym, zarządzaniu ego, rozwiązywaniu problemów biznesowych i podejmowaniu decyzji o karierze.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    guest: 'Tomasz Ducin',
    date: '2024-10-10',
    duration: '1 godz 17 min',
    description:
      'Spojrzenie na architekturę frontendu wykraczające poza narzędzia — o kluczowych decyzjach, które kształtują charakterystykę systemu.',
  },
  {
    title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne',
    date: '2024-08-21',
    duration: '1 godz 37 min',
    description:
      'Live Q&A na YouTube o nowościach w TypeScripcie i naszych planach konferencyjnych.',
  },
  {
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji?',
    guest: 'Kamil Tarczyński',
    date: '2024-06-13',
    duration: '37 min',
    description:
      'O potencjale, wyzwaniach i przyszłości narzędzi no-code i low-code w tworzeniu aplikacji webowych.',
  },
];
