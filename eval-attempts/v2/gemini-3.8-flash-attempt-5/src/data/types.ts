export interface MediaItem {
  id: string;
  title: string;
  publishedAt: string; // ISO date string or formatted date
  displayDate: string; // readable Polish date
  sourceUrl: string; // direct link to original episode/video
  mediaUrl?: string; // direct audio mp3 URL or video URL
  embedUrl?: string; // URL for embedded player
  thumbnail?: string;
  description?: string;
  duration?: string;
  isRecent90Days: boolean;
}

export interface SourceMetadata {
  id: 'opanuj-ai' | 'przeprogramowani-podcast' | 'youtube';
  name: string;
  feedUrl: string;
  homepageUrl: string;
  fetchedAt: string;
  status: 'live' | 'stale-fallback' | 'unavailable';
  isStale: boolean;
  error?: string;
  itemCount: number;
}

export interface SourceResult<T = MediaItem[]> {
  data: T;
  meta: SourceMetadata;
}

export interface Course {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  url: string;
  features: string[];
  featured?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin: string;
  highlights: string[];
}
