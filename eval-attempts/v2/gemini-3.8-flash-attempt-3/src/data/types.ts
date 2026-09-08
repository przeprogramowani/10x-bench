export interface MediaItem {
  id: string;
  title: string;
  source: 'opanuj-ai' | 'przeprogramowani' | 'youtube';
  sourceName: string;
  publishedAt: string; // ISO string or 'nieznana'
  formattedDate: string;
  url: string; // Direct link to episode or video
  embedUrl?: string; // Embedded player iframe URL
  audioUrl?: string; // Direct MP3/audio stream URL
  description?: string;
  duration?: string;
  thumbnail?: string;
}

export interface SourceResult {
  items: MediaItem[];
  sourceUrl: string;
  sourceName: string;
  fetchedAt: string;
  status: 'live' | 'cached' | 'error';
  isFallback: boolean;
  errorMessage?: string;
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  badge?: string;
  highlights: string[];
  audience: string;
  priceInfo?: string;
  instructors: string[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  currentRole: string;
  experience: string;
  technologies: string[];
  linkedinUrl: string;
  avatarUrl: string;
}
