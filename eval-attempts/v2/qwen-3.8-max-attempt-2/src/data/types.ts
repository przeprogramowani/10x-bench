export interface MediaItem {
  /** Stabilny identyfikator elementu (np. ID filmu YouTube lub adres odcinka). */
  id: string;
  title: string;
  /** Nazwa źródła, np. „Kanał YouTube Przeprogramowani". */
  sourceName: string;
  /** Adres źródła (kanał/podcast), z którego pochodzi element. */
  sourceUrl: string;
  /** Oryginalny adres konkretnego odcinka/filmu. */
  url: string;
  /** Data publikacji w ISO 8601 albo null, gdy źródło jej nie podaje. */
  publishedAt: string | null;
  description: string;
  /** Adres pliku multimedialnego (enclosure RSS) albo null. */
  enclosureUrl: string | null;
  /** Miniatura albo null. */
  thumbnail: string | null;
}

export type SourceStatus = 'fresh' | 'stale' | 'unavailable';

export interface SourceResult {
  key: string;
  sourceName: string;
  sourceUrl: string;
  feedUrl: string;
  /** fresh = pobrane na żywo; stale = dane z pamięci podręcznej; unavailable = brak danych. */
  status: SourceStatus;
  items: MediaItem[];
  /** Czas faktycznego pobrania danych (live lub cache) w ISO 8601 albo null. */
  fetchedAt: string | null;
  /** Czas ostatniej próby pobrania. */
  attemptedAt: string;
  /** Komunikat błędu, gdy pobieranie na żywo się nie powiodło. */
  error: string | null;
  /** Materiały spoza okna 90 dni — wybrane zgodnie z regułą „najnowsze dostępne". */
  outsideRecentWindow: boolean;
}
