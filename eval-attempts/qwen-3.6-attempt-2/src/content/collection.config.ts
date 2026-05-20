import { defineCollection, z } from 'astro:content';

const courses = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    longDescription: z.string(),
    features: z.array(z.string()),
    cta: z.string(),
    ctaLink: z.string(),
    icon: z.string(),
    gradient: z.string(),
  }),
});

const podcasts = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    series: z.enum(['opanuj-ai', 'przeprogramowani']),
    date: z.string(),
    duration: z.string(),
    description: z.string(),
    guest: z.string(),
  }),
});

const youtube = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    views: z.string(),
    duration: z.string(),
    description: z.string(),
    videoId: z.string(),
  }),
});

export const collections = { courses, podcasts, youtube };
