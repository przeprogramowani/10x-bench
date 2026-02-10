# Quick Start Guide

Get the Przeprogramowani.pl website running in under 5 minutes!

## Prerequisites

- Node.js 18.x or higher
- npm (comes with Node.js)

## Installation

### 1. Navigate to Project Directory

```bash
cd claude-sonnet-45-attempt-2
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Astro 4.16.18
- React 18.3.1
- Tailwind CSS 3.4.17
- TypeScript 5.7.2
- And all required dependencies

Installation takes approximately 30-60 seconds.

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at:
```
http://localhost:4321
```

Your browser should automatically open to this URL.

## What You'll See

### Homepage (/)
- Hero section with tagline
- 3 featured course cards
- Statistics section
- Links to podcast and YouTube

### Other Pages
- **/o-nas** - About Us page with team info
- **/podcast** - Podcast episodes
- **/youtube** - YouTube videos

## Making Changes

### Update Content

Edit `src/data/content.json` to modify:
- Podcast episodes
- YouTube videos
- Course information
- Team members
- About section

The dev server will automatically reload.

### Update Styling

Edit Tailwind classes in:
- `src/pages/*.astro` - Page content
- `src/components/*.tsx` - React components
- `src/layouts/Layout.astro` - Layout and navigation

Changes appear instantly with hot module replacement.

### Add a New Page

1. Create a new file in `src/pages/` (e.g., `blog.astro`)
2. Add your content using the Layout component
3. Update navigation in `src/layouts/Layout.astro`

## Build for Production

```bash
npm run build
```

This creates an optimized static site in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

View the production build locally at `http://localhost:4321`

## Deploy to Cloudflare Pages

### Option 1: Drag and Drop

1. Build the site: `npm run build`
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Pages** → **Create a project**
4. Choose **Direct Upload**
5. Upload the `dist` folder
6. Done! Your site is live.

### Option 2: Wrangler CLI

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name przeprogramowani
```

## Troubleshooting

### Port Already in Use

If port 4321 is in use:
```bash
npm run dev -- --port 3000
```

### Build Errors

Clear the cache and rebuild:
```bash
rm -rf node_modules dist .astro
npm install
npm run build
```

### TypeScript Errors

Ensure TypeScript is properly installed:
```bash
npm install --save-dev typescript
```

## Next Steps

- Read [README.md](./README.md) for detailed documentation
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options
- Review [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for architecture overview

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## Support

For help:
- Check [Astro Documentation](https://docs.astro.build/)
- Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Review [React Documentation](https://react.dev/)

---

**That's it!** You now have a fully functional Przeprogramowani.pl website running locally. 🚀
