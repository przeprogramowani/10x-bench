# Changelog

All notable changes to the Przeprogramowani.pl website will be documented in this file.

## [1.0.0] - 2026-02-10

### Added
- Initial release of Przeprogramowani.pl website
- Homepage with hero section and featured courses
- About Us page with team information and mission
- Podcast page with 10 recent episodes from two podcast series
- YouTube page with recent videos and categories
- Responsive navigation with mobile menu
- Footer with links to courses and social platforms
- React components: CourseCard, PodcastCard, VideoCard, TeamCard
- Real content from Przeprogramowani.pl including:
  - 3 featured courses (Opanuj Frontend, Opanuj TypeScript, 10xDevs)
  - 10 recent podcast episodes
  - 6 YouTube videos
  - Team member profiles (Przemek Smyrdek, Marcin Czarkowski)
- Tailwind CSS with custom color palette
- Inter font from Google Fonts
- 404 error page
- Cloudflare Pages deployment configuration
- SEO meta tags and descriptions
- Mobile-responsive design
- Static site generation for optimal performance

### Technical Details
- Built with Astro 4.16.18
- React 18.3.1 for interactive components
- Tailwind CSS 3.4.17 for styling
- TypeScript 5.7.2 for type safety
- Optimized for Cloudflare Pages deployment
- Static output for fast loading times

### Design
- Primary color scheme: Blue (#0ea5e9) to Dark Blue (#0c4a6e)
- Accent color scheme: Magenta (#d946ef) to Purple (#701a75)
- Gradient hero sections
- Card-based layouts
- Hover effects and transitions
- SVG icons from Heroicons
- Custom favicon with brand colors

### Content Structure
- All content stored in JSON format (`src/data/content.json`)
- Easy content updates without code changes
- Modular component architecture
- Reusable React components with TypeScript interfaces

### Deployment
- Cloudflare Pages ready
- Wrangler configuration included
- Git integration support
- Direct upload support
- Custom domain support
- Automatic builds on push
