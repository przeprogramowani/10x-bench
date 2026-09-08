export interface MediaItem {
  id: string;
  title: string;
  publishedAt: string; // ISO date or "nieznana"
  formattedDate: string; // e.g. "3 września 2026" or "Data nieznana"
  url: string; // Original direct episode/video URL
  source: 'youtube' | 'opanuj-ai' | 'przeprogramowani';
  sourceName: string;
  sourceUrl: string;
  thumbnailUrl?: string;
  duration?: string;
  description?: string;
  audioUrl?: string;
  embedUrl?: string;
  fetchedAt: string;
}

export interface DataSourceResult<T> {
  data: T;
  sourceUrl: string;
  fetchedAt: string;
  isStale: boolean;
  status: 'live' | 'stale_cache' | 'error';
  errorMessage?: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  url: string;
  badge: string;
  highlights: string[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
}
