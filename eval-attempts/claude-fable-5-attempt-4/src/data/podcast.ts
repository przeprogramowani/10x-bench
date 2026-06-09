export interface Episode {
  title: string;
  date: string;
  duration: string;
  guest?: string;
  description: string;
}

export const PODCAST_DESCRIPTION =
  'Przeprogramowani, czyli szersze spojrzenie na programowanie. Rozmowy z ekspertami branży IT o nowoczesnym wytwarzaniu oprogramowania, karierze i rozwoju — dla programistów na każdym etapie drogi zawodowej.';

export const EPISODES: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    date: '25 września 2025',
    duration: '34 min',
    guest: 'Wiktoria Sitko',
    description:
      'O barierach językowych programistów i skutecznych strategiach nauki angielskiego w branży IT — od pierwszych rozmów rekrutacyjnych po codzienną współpracę w międzynarodowych zespołach.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    date: '10 września 2025',
    duration: '46 min',
    guest: 'Wojciech Trawiński',
    description:
      'Senior engineer dzieli się doświadczeniami o rozwoju zawodowym, zmianach ścieżki kariery i świadomym poruszaniu się po branży technologicznej.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    date: '10 października 2024',
    duration: '1 godz. 17 min',
    guest: 'Tomasz Ducin',
    description:
      'Architektura frontendu to nie narzędzia. Rozmowa o kluczowych decyzjach projektowych w systemach frontendowych i o tym, co naprawdę wpływa na jakość aplikacji.',
  },
  {
    title: 'Co nowego w TypeScript?',
    date: '21 sierpnia 2024',
    duration: '1 godz. 37 min',
    description:
      'Live Q&A o nowościach w TypeScripcie — co zmienia się w języku, jak wpływa to na codzienną pracę i jak przygotować się na nadchodzące wydania.',
  },
  {
    title: 'No-code i Low-code',
    date: '13 czerwca 2024',
    duration: '37 min',
    guest: 'Kamil Tarczyński',
    description:
      'Platformy no-code i low-code z perspektywy programisty — gdzie sprawdzają się najlepiej, jakie mają ograniczenia i jaki jest ich potencjał w przyszłości web developmentu.',
  },
];
