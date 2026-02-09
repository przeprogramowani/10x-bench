# Przeprogramowani.pl Website

Modern and responsive website for Przeprogramowani.pl built with Astro, React, and Tailwind CSS, ready for deployment on Cloudflare.

## Features

- **Modern Design**: Clean, professional design with dark mode support
- **Responsive**: Fully responsive layout that works on all devices
- **Performance**: Optimized for speed and SEO
- **Cloudflare Ready**: Configured for deployment on Cloudflare Pages
- **Required Pages**: 
  - Home page with hero section featuring 10xDevs, Opanuj Frontend, and Opanuj TypeScript
  - About Us page
  - Podcast page with latest episodes
  - YouTube page with latest videos

## Tech Stack

- **Framework**: Astro 5.x
- **UI Components**: React 19
- **Styling**: Tailwind CSS 3.4
- **Deployment**: Cloudflare Pages

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Deploy to Cloudflare:
```bash
npm run deploy
```

## Project Structure

```
src/
├── layouts/          # Main layout component
├── pages/            # Page routes
│   ├── index.astro   # Home page
│   ├── o-nas.astro   # About Us page
│   ├── podcast.astro # Podcast page
│   └── youtube.astro # YouTube page
└── env.d.ts          # TypeScript declarations
```

## Deployment

This project is configured for Cloudflare Pages deployment. The `wrangler` adapter is included in the Astro configuration.

To deploy:
1. Make sure you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) installed
2. Run `npm run deploy`

The site will be automatically deployed to Cloudflare Pages.