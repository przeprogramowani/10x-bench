export type PodcastEpisode = {
  number: number;
  title: string;
  guest?: string;
  description: string;
  date: string;
  duration: string;
  spotifyUrl: string;
  applePodcastUrl?: string;
  tags: string[];
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    number: 97,
    title: 'Programista vs. Angielski: od strachu do sukcesu',
    guest: 'Wiktoria Sitko',
    description:
      'Rozmawiamy z założycielką HejHey.pl o największych barierach językowych u programistów, dlaczego tradycyjne metody zawodzą i jak skutecznie uczyć się angielskiego w IT.',
    date: '2025-09-25',
    duration: '33 min',
    spotifyUrl: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    tags: ['kariera', 'angielski', 'rozwój'],
  },
  {
    number: 96,
    title: 'O dojrzewaniu zawodowym programisty',
    guest: 'Wojciech Trawiński',
    description:
      'Senior Software Engineer z XTB opowiada o drodze od entuzjasty do doświadczonego profesjonalisty. Jak radzić sobie z ego, rozwiązywać realne problemy biznesowe i podejmować decyzje o kierunku kariery.',
    date: '2025-09-10',
    duration: '45 min',
    spotifyUrl: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    tags: ['kariera', 'senior', 'rozwój'],
  },
  {
    number: 95,
    title: 'Czy programiści staną się operatorami AI? Vibe Coding i Pair Programming',
    description:
      'Marcin Czarkowski i Przemek Smyrdek rozmawiają o przyszłości pracy programisty w świecie asystentów AI, o vibe codingu i o tym jak skutecznie programować w parze z modelem.',
    date: '2025-08-12',
    duration: '52 min',
    spotifyUrl: 'https://open.spotify.com/episode/7HNFo3wePVpcTz3NxzVAeM',
    tags: ['ai', 'produktywność', 'vibe coding'],
  },
  {
    number: 94,
    title: 'Architektura frontendu: co naprawdę ma znaczenie?',
    guest: 'Tomasz Ducin',
    description:
      'Dlaczego architektura frontendu wykracza daleko poza konkretne narzędzia. Rozmowa o decyzjach, które realnie kształtują długoterminowe cechy systemu.',
    date: '2024-10-10',
    duration: '1 godz. 16 min',
    spotifyUrl: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    tags: ['frontend', 'architektura'],
  },
  {
    number: 93,
    title: 'Co nowego w TypeScript? Zmiany w języku i plany konferencyjne',
    description:
      'Live Q&A o nadchodzących zmianach w TypeScript, nowościach w szkoleniu Opanuj TypeScript oraz najbliższych wystąpieniach konferencyjnych.',
    date: '2024-08-21',
    duration: '1 godz. 36 min',
    spotifyUrl: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    tags: ['typescript', 'live', 'q&a'],
  },
  {
    number: 92,
    title: 'Jak uczyć się szybciej? Nauka oparta na badaniach',
    description:
      'Spaced repetition, active recall, interleaving — metody uczenia się, które naprawdę działają i jak je wpleść w codzienny rozwój programisty.',
    date: '2024-07-03',
    duration: '58 min',
    spotifyUrl: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
    tags: ['nauka', 'rozwój', 'produktywność'],
  },
];
