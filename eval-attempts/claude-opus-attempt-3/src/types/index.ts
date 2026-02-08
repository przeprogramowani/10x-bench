export interface Course {
  slug: string;
  title: string;
  description: string;
  badge?: string;
  price?: string;
  url: string;
  features: string[];
  modules?: CourseModule[];
  stats?: { label: string; value: string }[];
  color: string;
}

export interface CourseModule {
  title: string;
  description: string;
  lessons: string[];
}

export interface Podcast {
  title: string;
  description: string;
  spotifyUrl: string;
  appleUrl: string;
  coverColor: string;
  episodes: Episode[];
}

export interface Episode {
  title: string;
  description: string;
  date: string;
  duration: string;
  spotifyUrl: string;
  appleUrl?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnailUrl: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Partner {
  name: string;
  logoUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}
