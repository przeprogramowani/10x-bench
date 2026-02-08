import type { Podcast } from '../types';

export const podcasts: Podcast[] = [
  {
    title: 'Przeprogramowani',
    description:
      'Podcast o programowaniu, technologii i rozwoju kariery w IT. Przemek i Marcin dzielą się doświadczeniami i rozmawiają z gośćmi z branży.',
    spotifyUrl: 'https://open.spotify.com/show/1M2x3bPmFjRGnNPjgKfTmE',
    appleUrl: 'https://podcasts.apple.com/pl/podcast/przeprogramowani/id1332896600',
    coverColor: '#6366f1',
    episodes: [
      {
        title: 'AI zmienia zasady gry w programowaniu',
        description: 'Jak sztuczna inteligencja rewolucjonizuje codzienną pracę programistów i co to oznacza dla przyszłości branży.',
        date: '2026-01-28',
        duration: '58 min',
        spotifyUrl: 'https://open.spotify.com/show/1M2x3bPmFjRGnNPjgKfTmE',
      },
      {
        title: 'Od juniora do seniora — ścieżka kariery w 2026',
        description: 'Praktyczne porady dotyczące rozwoju kariery programisty w dobie AI i zmieniającego się rynku pracy.',
        date: '2026-01-14',
        duration: '52 min',
        spotifyUrl: 'https://open.spotify.com/show/1M2x3bPmFjRGnNPjgKfTmE',
      },
      {
        title: 'TypeScript 6.0 — co nowego?',
        description: 'Przegląd najważniejszych nowości w TypeScript 6.0 i ich wpływ na codzienną pracę frontendowca.',
        date: '2025-12-17',
        duration: '45 min',
        spotifyUrl: 'https://open.spotify.com/show/1M2x3bPmFjRGnNPjgKfTmE',
      },
    ],
  },
  {
    title: 'Opanuj AI',
    description:
      'Podcast poświęcony sztucznej inteligencji w praktyce programistycznej. Narzędzia, techniki i strategie wdrażania AI w projektach.',
    spotifyUrl: 'https://open.spotify.com/show/opanuj-ai',
    appleUrl: 'https://podcasts.apple.com/pl/podcast/opanuj-ai/',
    coverColor: '#f59e0b',
    episodes: [
      {
        title: 'Claude Code — programowanie z terminala',
        description: 'Testujemy Claude Code i sprawdzamy, jak narzędzie sprawdza się w codziennej pracy programisty.',
        date: '2026-01-21',
        duration: '42 min',
        spotifyUrl: 'https://open.spotify.com/show/opanuj-ai',
      },
      {
        title: 'Cursor vs Windsurf — porównanie IDE z AI',
        description: 'Szczegółowe porównanie dwóch najpopularniejszych IDE ze wsparciem AI.',
        date: '2026-01-07',
        duration: '55 min',
        spotifyUrl: 'https://open.spotify.com/show/opanuj-ai',
      },
      {
        title: 'Agenci AI w praktyce',
        description: 'Jak budować i wykorzystywać agentów AI w projektach programistycznych.',
        date: '2025-12-10',
        duration: '48 min',
        spotifyUrl: 'https://open.spotify.com/show/opanuj-ai',
      },
    ],
  },
];
