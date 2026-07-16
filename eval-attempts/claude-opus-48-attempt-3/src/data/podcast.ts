export type Episode = {
  title: string;
  guest?: string;
  date: string; // ISO
  duration: string; // hh:mm:ss or mm:ss
  url: string;
  description: string;
};

// Ostatnie odcinki podcastu Przeprogramowani (z kanału RSS).
export const episodes: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    guest: 'Wiktoria Sitko',
    date: '2025-09-25',
    duration: '33:45',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Programista-vs--Angielski-Od-strachu-do-sukcesu--Wiktoria-Sitko--Przeprogramowani-ft--Go-e38lmlo',
    description:
      'O największych barierach językowych programistów, o tym dlaczego tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    guest: 'Wojciech Trawiński',
    date: '2025-09-10',
    duration: '45:56',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/O-dojrzewaniu-zawodowym-programisty--Wojciech-Trawiski--Przeprogramowani-ft--Go-e380adn',
    description:
      'Senior Software Engineer w XTB opowiada, jak przejść drogę od młodego entuzjasty do doświadczonego profesjonalisty.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    guest: 'Tomasz Ducin',
    date: '2024-10-10',
    duration: '1:16:44',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Architektura-frontendu-Co-naprawd-ma-znaczenie--Tomasz-Ducin--Przeprogramowani-ft--Go-e2pfjg3',
    description:
      'Badamy, w jaki sposób architektura wykracza poza konkretne narzędzia i koncentruje się na kluczowych decyzjach kształtujących projekt.',
  },
  {
    title: 'Co nowego w TypeScript? Zmiany w języku i plany konferencyjne',
    date: '2024-08-21',
    duration: '1:36:34',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Co-nowego-w-TypeScript--Zmiany-w-jzyku-i-nasze-plany-konferencyjne-LIVE-YT-e2nepgm',
    description:
      'LIVE Q&A o nadchodzącym szkoleniu Opanuj TypeScript oraz najważniejszych zmianach w języku.',
  },
  {
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji?',
    guest: 'Kamil Tarczyński',
    date: '2024-06-13',
    duration: '36:31',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/No-code-i-Low-code---przyszo-tworzenia-aplikacji---Kamil-Tarczyski---Przeprogramowani-ft--Go-e2kqhp6',
    description:
      'Co-founder i CTO agencji havenocode o tworzeniu aplikacji za pomocą platform no-code i low-code.',
  },
  {
    title: 'Nauka nowoczesnego frontendu',
    guest: 'Paweł Gnat',
    date: '2024-06-06',
    duration: '42:11',
    url: 'https://podcasters.spotify.com/pod/show/przeprogramowani/episodes/Nauka-nowoczesnego-frontendu--Pawe-Gnat---Przeprogramowani-ft--Go-e2kj935',
    description:
      'Frontend developer, który przebranżowił się z budownictwa, dzieli się wrażeniami z programu Opanuj Frontend: AI Edition.',
  },
];

export const podcastPlatforms = [
  { label: 'Spotify', href: 'https://creators.spotify.com/pod/show/przeprogramowani' },
  { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526' },
];
