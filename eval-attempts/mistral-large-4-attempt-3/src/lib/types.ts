export interface Video {
  id: string;
  title: string;
  url: string;
  published: string;
  description: string;
  thumbnail: string;
}

export interface Episode {
  title: string;
  url: string;
  published: string;
  duration: string;
  description: string;
}

export interface PodcastShowMeta {
  slug: string;
  name: string;
  tagline: string;
  listeners: string;
  rss: string;
  spotify: string;
  apple: string;
  google: string;
}

export interface PodcastShow extends PodcastShowMeta {
  cover: string;
  episodes: Episode[];
}

export interface Content {
  videos: Video[];
  shows: PodcastShow[];
  source: 'live' | 'snapshot';
  fetchedAt: string;
}
