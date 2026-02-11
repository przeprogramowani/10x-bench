export interface PodcastEpisode {
  title: string;
  description: string;
  number: number;
  date: string;
  url: string;
}

export interface PodcastSeries {
  id: string;
  title: string;
  description: string;
  episodeCount: number;
  spotifyUrl: string;
  applePodcastsUrl?: string;
  episodes: PodcastEpisode[];
}

export const podcastSeries: PodcastSeries[] = [
  {
    id: 'przeprogramowani',
    title: 'Przeprogramowani',
    description:
      'Główny podcast o programowaniu, karierze w IT i technologiach. Prowadzony przez Przemka Smyrdka i Marcina Czarkowskiego od 2017 roku.',
    episodeCount: 98,
    spotifyUrl: 'https://open.spotify.com/show/4qFnFETxOBbcoMHuFNBXwh',
    applePodcastsUrl: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1324295557',
    episodes: [
      {
        title: 'AI w codziennej pracy programisty',
        description: 'Jak narzędzia AI zmieniają workflow developerów i co to oznacza dla przyszłości zawodu.',
        number: 98,
        date: '2026-01-15',
        url: 'https://open.spotify.com/show/4qFnFETxOBbcoMHuFNBXwh',
      },
      {
        title: 'Jak uczyć się programowania w 2026',
        description: 'Sprawdzone strategie nauki, zasoby i podejście do budowania kariery w IT.',
        number: 97,
        date: '2026-01-01',
        url: 'https://open.spotify.com/show/4qFnFETxOBbcoMHuFNBXwh',
      },
      {
        title: 'Code review — dobre praktyki',
        description: 'Jak robić skuteczne code review, które pomaga zespołowi rosnąć.',
        number: 96,
        date: '2025-12-15',
        url: 'https://open.spotify.com/show/4qFnFETxOBbcoMHuFNBXwh',
      },
      {
        title: 'Architektura frontend aplikacji',
        description: 'Wzorce architektoniczne, state management i organizacja kodu w dużych projektach.',
        number: 95,
        date: '2025-12-01',
        url: 'https://open.spotify.com/show/4qFnFETxOBbcoMHuFNBXwh',
      },
      {
        title: 'Praca zdalna — po 5 latach',
        description: 'Refleksje na temat pracy zdalnej, hybrydowej i powrotu do biur.',
        number: 94,
        date: '2025-11-15',
        url: 'https://open.spotify.com/show/4qFnFETxOBbcoMHuFNBXwh',
      },
      {
        title: 'TypeScript 6.0 — co nowego?',
        description: 'Przegląd najważniejszych zmian w TypeScript 6.0 i ich wpływu na projekty.',
        number: 93,
        date: '2025-11-01',
        url: 'https://open.spotify.com/show/4qFnFETxOBbcoMHuFNBXwh',
      },
    ],
  },
  {
    id: 'opanuj-ai',
    title: 'Opanuj AI Podcast',
    description:
      'Podcast poświęcony sztucznej inteligencji w kontekście programowania. Narzędzia, techniki i strategie.',
    episodeCount: 24,
    spotifyUrl: 'https://open.spotify.com/show/opanuj-ai-podcast',
    episodes: [
      {
        title: 'Claude Code — nowy standard AI coding',
        description: 'Recenzja Claude Code i porównanie z innymi narzędziami do AI-assisted development.',
        number: 24,
        date: '2026-01-20',
        url: 'https://open.spotify.com/show/opanuj-ai-podcast',
      },
      {
        title: 'Agenci AI w praktyce',
        description: 'Jak budować efektywnych agentów AI na potrzeby automatyzacji procesów developerskich.',
        number: 23,
        date: '2026-01-05',
        url: 'https://open.spotify.com/show/opanuj-ai-podcast',
      },
      {
        title: 'Prompt engineering dla programistów',
        description: 'Zaawansowane techniki promptowania dla lepszego kodu generowanego przez AI.',
        number: 22,
        date: '2025-12-20',
        url: 'https://open.spotify.com/show/opanuj-ai-podcast',
      },
      {
        title: 'RAG w aplikacjach webowych',
        description: 'Retrieval Augmented Generation — implementacja w kontekście aplikacji webowych.',
        number: 21,
        date: '2025-12-05',
        url: 'https://open.spotify.com/show/opanuj-ai-podcast',
      },
      {
        title: 'LLM-y lokalne vs chmura',
        description: 'Porównanie lokalnych modeli z rozwiązaniami chmurowymi — koszty, wydajność, prywatność.',
        number: 20,
        date: '2025-11-20',
        url: 'https://open.spotify.com/show/opanuj-ai-podcast',
      },
      {
        title: 'GitHub Copilot vs Cursor vs Claude',
        description: 'Kompleksowe porównanie trzech najpopularniejszych asystentów AI dla programistów.',
        number: 19,
        date: '2025-11-05',
        url: 'https://open.spotify.com/show/opanuj-ai-podcast',
      },
    ],
  },
];
