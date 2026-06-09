export interface Episode {
  title: string;
  guest?: string;
  date: string;
  duration: string;
  description: string;
}

export const podcastDescription =
  'Przeprogramowani, czyli szersze spojrzenie na programowanie. Zapraszają Marcin Czarkowski i Przemek Smyrdek.';

export const episodes: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    guest: 'Wiktoria Sitko',
    date: '25.09.2025',
    duration: '33:45',
    description:
      'Bariera językowa to jeden z najczęstszych blokerów w karierze programisty. Rozmawiamy o skutecznych strategiach nauki angielskiego w IT — od pierwszych rozmów rekrutacyjnych po codzienną pracę w międzynarodowym zespole.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    guest: 'Wojciech Trawiński',
    date: '10.09.2025',
    duration: '45:57',
    description:
      'Jak wygląda droga od entuzjasty do doświadczonego inżyniera? Rozmawiamy o rozwoju od juniora do seniora, zmianach ścieżki kariery i umiejętnościach negocjacyjnych, które warto rozwijać równolegle z kodem.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    guest: 'Tomasz Ducin',
    date: '10.10.2024',
    duration: '1:16:44',
    description:
      'Architektura frontendu to znacznie więcej niż wybór frameworka. Wspólnie z Tomaszem Ducinem szukamy decyzji, które naprawdę kształtują systemy frontendowe — niezależnie od narzędzi.',
  },
  {
    title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne (LIVE)',
    date: '21.08.2024',
    duration: '1:36:35',
    description:
      'Sesja live Q&A o nowościach w TypeScript — co zmienia się w języku, jak wpływa to na codzienną pracę i jakie wydarzenia szykujemy w najbliższych miesiącach.',
  },
  {
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji?',
    guest: 'Kamil Tarczyński',
    date: '13.06.2024',
    duration: '36:32',
    description:
      'Czy narzędzia no-code i low-code zagrażają programistom, czy raczej otwierają nowe możliwości? Rozmawiamy ze współzałożycielem havenocode o potencjale i ograniczeniach tego podejścia.',
  },
];

export const podcastPlatforms = [
  {
    name: 'Spotify',
    url: 'https://creators.spotify.com/pod/profile/przeprogramowani',
  },
  {
    name: 'Apple Podcasts',
    url: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@przeprogramowani',
  },
];
