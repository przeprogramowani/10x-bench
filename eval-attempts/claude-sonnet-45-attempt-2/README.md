# Przeprogramowani.pl - Official Website

Modern, responsive website for Przeprogramowani.pl - a Polish programming education platform featuring courses, podcasts, and YouTube content.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Built with Astro, React, and TypeScript
- **Static Site**: Fast, SEO-friendly static site generation
- **Real Content**: Includes actual podcast episodes, course information, and team details
- **Cloudflare Ready**: Optimized for deployment on Cloudflare Pages

## Pages

- **Home (`/`)**: Hero section with featured courses (Opanuj Frontend, Opanuj TypeScript, 10xDevs), stats, and featured content
- **About Us (`/o-nas`)**: Team information, mission, partners, and what we do
- **Podcast (`/podcast`)**: Latest podcast episodes from both "Przeprogramowani ft. Gość" and "Opanuj.AI Podcast"
- **YouTube (`/youtube`)**: Recent videos, categories, and popular topics

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 4.x
- **UI Library**: [React](https://react.dev/) 18.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.x
- **Language**: TypeScript 5.x
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository or navigate to this directory:
```bash
cd claude-sonnet-45-attempt-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

Build the static site:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment on Cloudflare Pages

This project is optimized for deployment on Cloudflare Pages:

1. **Connect Repository**: Link your GitHub/GitLab repository to Cloudflare Pages

2. **Build Settings**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - Node version: 18 or higher

3. **Environment Variables**: None required

4. **Deploy**: Cloudflare will automatically build and deploy your site

### Manual Deployment to Cloudflare Pages

```bash
# Build the site
npm run build

# Install Wrangler CLI (if not installed)
npm install -g wrangler

# Deploy to Cloudflare Pages
wrangler pages deploy dist
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── CourseCard.tsx
│   │   ├── PodcastCard.tsx
│   │   ├── TeamCard.tsx
│   │   └── VideoCard.tsx
│   ├── data/           # Content data
│   │   └── content.json
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   └── pages/          # Route pages
│       ├── index.astro
│       ├── o-nas.astro
│       ├── podcast.astro
│       └── youtube.astro
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## Content Management

All content is stored in `src/data/content.json`:

- **podcasts**: List of recent podcast episodes
- **videos**: Recent YouTube videos
- **courses**: Course information (Opanuj Frontend, Opanuj TypeScript, 10xDevs)
- **team**: Team member profiles
- **about**: Company information and mission

To update content, edit this JSON file and rebuild the site.

## Customization

### Colors

The color scheme is defined in `tailwind.config.mjs`:
- Primary colors: Blue tones (from #0ea5e9 to #0c4a6e)
- Accent colors: Purple/Magenta tones (from #d946ef to #701a75)

### Typography

Using Inter font family from Google Fonts, configured in `Layout.astro`.

## Performance

- Static site generation for maximum performance
- Optimized images and assets
- Minimal JavaScript (only for interactive components)
- Tailwind CSS with PurgeCSS for minimal CSS bundle

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2017-2026 Przeprogramowani.pl. All rights reserved.

## Support

For questions about Przeprogramowani.pl:
- Website: [przeprogramowani.pl](https://przeprogramowani.pl)
- Podcast: [Apple Podcasts](https://podcasts.apple.com/us/podcast/przeprogramowani/id1471770526) | [Spotify](https://open.spotify.com/show/3yVvOAXSYq6sQB02w4A4wo)
- YouTube: [youtube.com/c/przeprogramowani](https://www.youtube.com/c/przeprogramowani)
