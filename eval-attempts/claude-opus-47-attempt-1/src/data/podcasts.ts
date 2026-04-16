export type PodcastEpisode = {
  number: number;
  title: string;
  show: 'Opanuj.AI' | 'Przeprogramowani ft. Gość';
  date: string;
  duration: string;
  description: string;
  guest?: string;
  topics: string[];
  spotify?: string;
  apple?: string;
  youtube?: string;
};

export const podcasts: PodcastEpisode[] = [
  {
    number: 212,
    title: 'TEGO AI NIE POTRAFI — ARC-AGI-3 i koniec epoki SaaS',
    show: 'Opanuj.AI',
    date: '2026-04-12',
    duration: '1h 39min',
    description:
      'Analizujemy ograniczenia najnowszych modeli, wyniki ARC-AGI-3 i zastanawiamy się, co to oznacza dla ekosystemu SaaS.',
    topics: ['AI', 'ARC-AGI', 'SaaS', 'LLM'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    number: 211,
    title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
    show: 'Opanuj.AI',
    date: '2026-03-28',
    duration: '1h 28min',
    description:
      'Gościem jest Dawid Sibiński. Porównujemy największe narzędzia AI dla developerów i pokazujemy gdzie każde z nich świeci najjaśniej.',
    guest: 'Dawid Sibiński',
    topics: ['Claude Code', 'Cursor', 'Copilot', 'DevTools'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    number: 210,
    title: 'OpenClaw, SWE-AGI i zmierzch chatbotów',
    show: 'Opanuj.AI',
    date: '2026-03-14',
    duration: '1h 43min',
    description:
      'Agenci AI przejmują to, co jeszcze rok temu robiły chatboty. Omawiamy najważniejsze premiery i co z tego wynika dla inżynierów.',
    topics: ['AI Agents', 'SWE-AGI', 'Autonomia'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    number: 209,
    title: 'Doktor AI nadchodzi',
    show: 'Opanuj.AI',
    date: '2026-02-28',
    duration: '1h 23min',
    description:
      'AI w medycynie: diagnostyka, wsparcie decyzji klinicznych, regulacje. Gdzie jest dziś, dokąd zmierza i co to oznacza dla branży.',
    topics: ['AI', 'HealthTech', 'Regulacje'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    number: 208,
    title: 'O dojrzewaniu zawodowym programisty',
    show: 'Przeprogramowani ft. Gość',
    date: '2026-02-14',
    duration: '1h 12min',
    description:
      'Wojciech Trawiński, Senior Software Engineer w XTB, o drodze od młodego entuzjasty do doświadczonego profesjonalisty.',
    guest: 'Wojciech Trawiński',
    topics: ['Kariera', 'Seniority', 'Soft skills'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    number: 207,
    title: 'Wielkie Podsumowanie AI w 2025',
    show: 'Opanuj.AI',
    date: '2026-01-17',
    duration: '1h 47min',
    description:
      'Retrospektywa modeli, przełomów i liderów branży AI w 2025 roku. Czego nauczył nas rok, który zmienił definicję "software engineera"?',
    topics: ['AI', 'Retrospektywa', 'Trendy'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    number: 206,
    title: 'GPT-5.2 to GEMINI KILLER?',
    show: 'Opanuj.AI',
    date: '2025-12-20',
    duration: '58 min',
    description:
      'Nowy GPT-5.2 kontra Gemini 3. Który model radzi sobie lepiej w codziennej pracy programisty i dlaczego różnice zaczynają zacierać się w benchmarkach.',
    topics: ['GPT-5', 'Gemini', 'Benchmarki'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    number: 205,
    title: 'Największe bariery językowe programistów',
    show: 'Przeprogramowani ft. Gość',
    date: '2025-12-05',
    duration: '1h 05min',
    description:
      'Z Wiktorią Sitko o tym, dlaczego tradycyjne metody nauki angielskiego zawodzą u programistów i jak skutecznie opanować angielski w IT.',
    guest: 'Wiktoria Sitko',
    topics: ['Angielski', 'Kariera', 'Komunikacja'],
    spotify: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
];
