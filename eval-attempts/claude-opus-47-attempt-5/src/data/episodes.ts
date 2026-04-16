export type Episode = {
  title: string;
  description: string;
  date: string;
  duration: string;
  guest?: string;
  url: string;
};

export const episodes: Episode[] = [
  {
    title: 'Programista vs. Angielski: Od strachu do sukcesu',
    description:
      'Z Wiktorią Sitko rozmawiamy o największych barierach językowych w IT, dlaczego klasyczne metody nauki zawodzą i jak skutecznie uczyć się angielskiego w branży technologicznej.',
    date: '2025-09-25',
    duration: '1h 06min',
    guest: 'Wiktoria Sitko',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'O dojrzewaniu zawodowym programisty',
    description:
      'Wojciech Trawiński opowiada o przejściu z juniora w doświadczonego inżyniera — negocjacjach, odpowiedzialności, zmianie ról i tym, co naprawdę przyspiesza rozwój.',
    date: '2025-09-10',
    duration: '58min',
    guest: 'Wojciech Trawiński',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
    description:
      'Tomasz Ducin pokazuje, że architektura frontendu to coś więcej niż dobór biblioteki. Rozmawiamy o decyzjach projektowych, które kształtują długoterminową jakość systemu.',
    date: '2024-10-10',
    duration: '1h 14min',
    guest: 'Tomasz Ducin',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'Co nowego w TypeScript?',
    description:
      'Live Q&A o nowościach w TypeScript, najciekawszych RFC i tym, jak rozwijać się w ekosystemie typów. Przy okazji zapowiadamy nowy program szkoleniowy.',
    date: '2024-08-21',
    duration: '52min',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'No-code i Low-code — przyszłość tworzenia aplikacji?',
    description:
      'Kamil Tarczyński pokazuje potencjał i ograniczenia platform no-code/low-code w web developmencie. Gdzie to ma sens, a gdzie jeszcze nie?',
    date: '2024-06-13',
    duration: '1h 02min',
    guest: 'Kamil Tarczyński',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'Nauka nowoczesnego frontendu',
    description:
      'Paweł Gnat dzieli się doświadczeniami z pierwszej edycji Opanuj Frontend — z perspektywy osoby zmieniającej branżę i zaczynającej przygodę z frontendem.',
    date: '2024-06-06',
    duration: '48min',
    guest: 'Paweł Gnat',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'Techniczny Product Management',
    description:
      'Jakub Łaziński opowiada o pracy TPM-a w MongoDB, Atlassian i SmartRecruiters — o granicy między techniką a produktem i o tym, jak tam trafić.',
    date: '2024-04-24',
    duration: '59min',
    guest: 'Jakub Łaziński',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
  {
    title: 'Czym jest Frontend Tech Radar 2024?',
    description:
      'Przegląd technologii i technik, które warto mieć na radarze w 2024 — do czego warto sięgać, co obserwować, a co spokojnie można odłożyć.',
    date: '2024-01-14',
    duration: '1h 08min',
    url: 'https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo',
  },
];
