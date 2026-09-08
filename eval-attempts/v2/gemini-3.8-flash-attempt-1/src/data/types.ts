export interface MediaItem {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  publishedDateFormatted: string;
  sourceName: string;
  sourceUrl: string;
  mediaType: 'podcast' | 'video';
  audioUrl?: string;
  embedUrl?: string;
  thumbnailUrl?: string;
  duration?: string;
}

export interface FeedResult {
  items: MediaItem[];
  sourceName: string;
  sourceUrl: string;
  fetchedAt: string;
  isFallback: boolean;
  status: 'live' | 'stale-cache' | 'error';
  errorMessage?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  badge?: string;
  highlights: string[];
  isFeatured?: boolean;
}

export interface FounderProfile {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  linkedinUrl: string;
  highlights: string[];
}
