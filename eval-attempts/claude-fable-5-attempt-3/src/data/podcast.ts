export interface Episode {
  title: string;
  description: string;
  duration: string;
  date?: string;
  guest?: string;
  url: string;
}

export interface Show {
  id: string;
  name: string;
  description: string;
  listeners: string;
  episodes: Episode[];
}

export const platformLinks = {
  spotify: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
  apple: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526',
  rss: 'https://anchor.fm/s/22544b7c/podcast/rss',
  youtube: 'https://www.youtube.com/c/przeprogramowani',
};

export const shows: Show[] = [
  {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    description:
      'Najpopularniejszy techniczny podcast o LLM-ach w Polsce. Comiesięczne podsumowania najważniejszych wydarzeń ze świata sztucznej inteligencji.',
    listeners: '4000+ słuchaczy',
    episodes: [
      {
        title: 'Byliśmy na Google I/O 2026 - wrażenia na gorąco! | Opanuj.AI LIVE - Maj 2026',
        description:
          'Relacja na żywo prosto z konferencji Google I/O 2026 — najważniejsze ogłoszenia i nasze wrażenia na gorąco.',
        duration: '1:12:26',
        date: 'Maj 2026',
        url: 'https://podcasters.spotify.com/pod/show/opanujai/episodes/Bylimy-na-Google-IO-2026---wraenia-na-gorco---Opanuj-AI-LIVE---Maj-2026-e3k9b7u',
      },
      {
        title: 'GPT-5.5 VS Opus 4.7 - kto rządzi na scenie AI?',
        description:
          'Przegląd najważniejszych premier AI z kwietnia 2026 — porównujemy najnowsze flagowe modele i ich możliwości.',
        duration: '47:22',
        date: 'Kwiecień 2026',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'TEGO AI NIE POTRAFI - ARC-AGI-3 i koniec epoki SaaS',
        description:
          'Czego współczesne modele AI wciąż nie potrafią? Benchmark ARC-AGI-3 i dyskusja o przyszłości rynku SaaS.',
        duration: '1:39:33',
        date: 'Marzec 2026',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'Programowanie w epoce AI z Claude Code, Cursorem i Copilotem',
        description:
          'Jak wygląda codzienna praca programisty z agentami AI? Rozmowa z gościem o praktycznym workflow.',
        duration: '1:28:30',
        date: 'Luty 2026',
        guest: 'Dawid Sibiński',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'OpenClaw, SWE-AGI i zmierzch chatbotów',
        description:
          'Rozwój agentów AI, nowe benchmarki inżynierii oprogramowania i dlaczego klasyczne chatboty odchodzą do lamusa.',
        duration: '1:43:15',
        date: 'Styczeń 2026',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'Doktor AI nadchodzi',
        description:
          'Sztuczna inteligencja w medycynie — realne zastosowania, szanse i zagrożenia dla systemu ochrony zdrowia.',
        duration: '1:23:04',
        date: 'Grudzień 2025',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
    ],
  },
  {
    id: 'przeprogramowani-ft-gosc',
    name: 'Przeprogramowani ft. Gość',
    description:
      'Szersze spojrzenie na programowanie. Rozmowy z ekspertami o technologii, karierze i rozwoju — zapraszają Marcin Czarkowski i Przemek Smyrdek.',
    listeners: '3800+ słuchaczy',
    episodes: [
      {
        title: 'Programista vs. Angielski: Od strachu do sukcesu',
        description:
          'Bariery językowe w pracy programisty i skuteczne strategie nauki angielskiego dla specjalistów IT.',
        duration: '34 min',
        date: 'Wrzesień 2025',
        guest: 'Wiktoria Sitko',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'O dojrzewaniu zawodowym programisty',
        description:
          'Senior engineer o rozwoju zawodowym w IT — progresja kariery, praca z ego i strategiczny timing zmiany pracy.',
        duration: '46 min',
        date: 'Wrzesień 2025',
        guest: 'Wojciech Trawiński',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'Architektura frontendu: Co naprawdę ma znaczenie?',
        description:
          'Architektura frontendu ponad konkretnymi narzędziami — kluczowe decyzje, które kształtują charakterystykę systemu.',
        duration: '1:17:00',
        date: 'Październik 2024',
        guest: 'Tomasz Ducin',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'Co nowego w TypeScript? Zmiany w języku i nasze plany konferencyjne',
        description:
          'Live Q&A o nowościach w TypeScript oraz nadchodzących szkoleniach i planach konferencyjnych.',
        duration: '1:37:00',
        date: 'Sierpień 2024',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
      {
        title: 'No-code i Low-code - przyszłość tworzenia aplikacji?',
        description:
          'Potencjał platform no-code i low-code, ich ograniczenia oraz przyszłe zastosowania w web developmencie.',
        duration: '37 min',
        date: 'Czerwiec 2024',
        guest: 'Kamil Tarczyński',
        url: 'https://open.spotify.com/show/4qHUZJpeBK8Ij9e2wTVm2o',
      },
    ],
  },
];
