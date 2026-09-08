export interface MediaItem {
  id: string;
  title: string;
  url: string;
  publishedAt: string | null;
  audioUrl: string | null;
  videoId: string | null;
  sourceName: string;
  sourceUrl: string;
}

export type SourceStatus = 'live' | 'stale' | 'unavailable';

export interface SourceResult {
  status: SourceStatus;
  items: MediaItem[];
  fetchedAt: string;
  sourceName: string;
  sourceUrl: string;
  error: string | null;
}

export interface Snapshot {
  sourceName: string;
  sourceUrl: string;
  fetchedAt: string;
  items: MediaItem[];
}
