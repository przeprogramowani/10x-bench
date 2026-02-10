export interface SocialLink {
  label: string;
  url: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

export interface OrganizationInfo {
  name: string;
  tagline: string;
  description: string;
  foundingDate?: string;
  founders: Founder[];
  socials: SocialLink[];
  contactEmail: string;
}

export interface MediaEntry {
  id: string;
  title: string;
  url: string;
  description: string;
  publishedAt: string;
  thumbnail?: string;
  duration?: string;
  source: "podcast" | "youtube";
}
