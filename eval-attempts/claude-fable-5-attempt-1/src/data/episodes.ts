export interface Episode {
  title: string;
  guest?: string;
  date: string;
  duration: string;
  description: string;
}

export const podcastDescription =
  'Podcast technologiczny, w którym Przemek Smyrdek i Marcin Czarkowski oferują szersze spojrzenie na programowanie — od kariery i rozwoju, przez architekturę, po sztuczną inteligencję. Blisko 100 odcinków od 2019 roku.';

export const episodes: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    guest: 'Wiktoria Sitko',
    date: '25.09.2025',
    duration: '34 min',
    description:
      'Dlaczego bariera językowa blokuje programistów, czemu tradycyjne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w IT.',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    guest: 'Wojciech Trawiński',
    date: '10.09.2025',
    duration: '46 min',
    description:
      'Senior Software Engineer w XTB o drodze od młodego pasjonata do doświadczonego profesjonalisty — decyzje karierowe i rozwiązywanie problemów biznesowych, nie tylko pisanie kodu.',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    guest: 'Tomasz Ducin',
    date: '10.10.2024',
    duration: '1 h 17 min',
    description:
      'Rozmowa o architekturze frontendu — o fundamentalnych decyzjach projektowych, które znaczą więcej niż wybór konkretnych narzędzi.',
  },
  {
    title: 'Co nowego w TypeScript?',
    date: '21.08.2024',
    duration: '1 h 37 min',
    description:
      'Live Q&A o nowościach w TypeScript, nadchodzącym szkoleniu Opanuj TypeScript i planach konferencyjnych.',
  },
  {
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji?',
    guest: 'Kamil Tarczyński',
    date: '13.06.2024',
    duration: '37 min',
    description:
      'Potencjał i wyzwania platform no-code oraz low-code w budowaniu aplikacji webowych.',
  },
  {
    title: 'Nauka nowoczesnego frontendu',
    guest: 'Paweł Gnat',
    date: '06.06.2024',
    duration: '42 min',
    description:
      'Doświadczenia z pierwszej edycji programu Opanuj Frontend: AI Edition — z perspektywy uczestnika.',
  },
  {
    title: 'Techniczny Product Management',
    guest: 'Jakub Łaziński',
    date: '24.04.2024',
    duration: '1 h 8 min',
    description:
      'O technicznym zarządzaniu produktem na przykładach z MongoDB, Atlassiana i innych firm technologicznych.',
  },
  {
    title: 'Czym jest Frontend Tech Radar 2024?',
    date: '14.01.2024',
    duration: '36 min',
    description:
      'Przegląd technologii frontendowych i rekomendacje doboru stosu technologicznego na projekty w 2024 roku.',
  },
];
