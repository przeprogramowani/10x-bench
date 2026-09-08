export interface MediaItem {
  id: string;
  title: string;
  source: 'opanuj-ai' | 'przeprogramowani-podcast' | 'youtube';
  sourceName: string;
  publishedAt: string; // ISO date or "nieznana"
  publishedDateDisplay: string; // Polish readable date or "nieznana"
  url: string; // Direct link to episode / video
  audioUrl?: string; // Direct audio file URL for HTML5 audio
  embedUrl?: string; // Provider embed URL (e.g. YouTube iframe or Spotify iframe)
  description?: string;
  duration?: string;
  thumbnailUrl?: string;
}

export interface FetchResult<T = MediaItem[]> {
  items: T;
  sourceUrl: string;
  fetchedAt: string;
  status: 'live' | 'cached' | 'error';
  isFallback: boolean;
  message?: string;
  error?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  url: string;
  tag: string;
  isFeatured?: boolean;
}

export interface FounderItem {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  linkedInUrl: string;
}
