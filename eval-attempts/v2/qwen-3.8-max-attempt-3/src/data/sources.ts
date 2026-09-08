export type SourceId = 'opanuj-ai' | 'przeprogramowani-podcast' | 'youtube';

export interface MediaItem {
  id: string;
  source: SourceId;
  sourceName: string;
  title: string;
  /** Oryginalny adres konkretnego odcinka/filmu. */
  url: string;
  /** Data publikacji w ISO lub null, gdy źródło jej nie podaje. */
  publishedAt: string | null;
  /** Krótki opis (bez HTML). */
  description: string;
  /** Bezpośredni adres pliku audio (podcasty). */
  audioUrl?: string;
  /** ID filmu YouTube (kanał wideo). */
  videoId?: string;
  /** Adres miniatury, jeśli źródło ją podaje. */
  thumbnail?: string;
  duration?: string;
}

export type DataStatus = 'fresh' | 'stale' | 'unavailable';

export interface SourceResult {
  sourceId: SourceId;
  sourceName: string;
  /** Adres źródła danych (feed/API). */
  sourceUrl: string;
  /** Strona domowa źródła (dla linków awaryjnych). */
  homepage: string;
  status: DataStatus;
  /** Czas pobrania danych (sieć lub pamięć podręczna). */
  fetchedAt: string;
  items: MediaItem[];
  /** Komunikat błędu, jeśli pobieranie z sieci się nie powiodło. */
  error?: string;
}

export interface SourceDef {
  id: SourceId;
  name: string;
  kind: 'rss' | 'youtube-atom';
  url: string;
  homepage: string;
  description: string;
}

export const SOURCES: Record<SourceId, SourceDef> = {
  'opanuj-ai': {
    id: 'opanuj-ai',
    name: 'Opanuj.AI Podcast',
    kind: 'rss',
    url: 'https://anchor.fm/s/e2cb03d0/podcast/rss',
    homepage: 'https://podcasters.spotify.com/pod/show/opanujai',
    description:
      'Opanuj.AI to podcast z cyklicznym podsumowaniem nowinek technicznych ze świata AI. Prowadzą go Marcin Czarkowski i Przemek Smyrdek — każdy odcinek to szybki przegląd newsów oraz głębsze omówienie 2–3 najważniejszych tematów ostatniego miesiąca.',
  },
  'przeprogramowani-podcast': {
    id: 'przeprogramowani-podcast',
    name: 'Podcast Przeprogramowani',
    kind: 'rss',
    url: 'https://anchor.fm/s/c72d808/podcast/rss',
    homepage: 'https://podcasters.spotify.com/pod/show/przeprogramowani',
    description:
      'Przeprogramowani, czyli szersze spojrzenie na programowanie. Rozmowy o karierze, architekturze i rozwoju zawodowym programisty. Zapraszają Marcin Czarkowski i Przemek Smyrdek.',
  },
  youtube: {
    id: 'youtube',
    name: 'YouTube — Przeprogramowani',
    kind: 'youtube-atom',
    url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw',
    homepage: 'https://www.youtube.com/@Przeprogramowani',
    description:
      'Oficjalny kanał YouTube Przeprogramowani — filmy o nowoczesnym frontendzie, programowaniu z AI, TypeScript i rozwoju kariery.',
  },
};
