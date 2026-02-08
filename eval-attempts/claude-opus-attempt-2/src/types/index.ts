export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  social: {
    youtube: string;
    spotify: string;
    applePodcasts: string;
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  price: string;
  originalPrice?: string;
  ctaUrl: string;
  ctaLabel: string;
  color: string;
  modules: CourseModule[];
  testimonials: Testimonial[];
  features: string[];
  nextEdition?: string;
  studentsCount?: string;
}

export interface CourseModule {
  title: string;
  description: string;
  topics: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface PodcastEpisode {
  number: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  spotifyUrl: string;
  applePodcastsUrl: string;
  youtubeUrl?: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  duration: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article';
}
