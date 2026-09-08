export interface MediaItem {
  id: string;
  title: string;
  sourceName: string;
  sourceUrl: string;
  itemUrl: string;
  publishedAt: string | null;
  publishedLabel: string;
  audioUrl?: string;
  videoId?: string;
  description?: string;
}

export interface SourceBlock {
  fetchedAt: string;
  requestedUrl: string;
  items: MediaItem[];
}

export interface CacheFile {
  generatedAt: string;
  sources: Record<string, SourceBlock>;
}

export type SourceStatus = 'fresh' | 'stale' | 'error';

export interface SourceResult {
  status: SourceStatus;
  fetchedAt: string | null;
  requestedUrl: string;
  sourceName: string;
  sourceUrl: string;
  items: MediaItem[];
  error?: string;
}
