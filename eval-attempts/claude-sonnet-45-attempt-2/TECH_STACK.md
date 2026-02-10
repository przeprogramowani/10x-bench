# Technology Stack

Complete list of technologies, libraries, and tools used in this project.

## Core Framework

### Astro 4.16.18
- **Purpose**: Static Site Generator
- **Why**: Fast, SEO-friendly, component-based architecture
- **Features Used**:
  - Static site generation (SSG)
  - Component islands
  - File-based routing
  - TypeScript support

## UI Libraries

### React 18.3.1
- **Purpose**: UI Component Library
- **Why**: Popular, well-documented, component reusability
- **Features Used**:
  - Functional components
  - TypeScript interfaces
  - Client-side hydration
  - Props and state management

### React DOM 18.3.1
- **Purpose**: React rendering
- **Why**: Required for React components in Astro
- **Features Used**: DOM manipulation and hydration

## Styling

### Tailwind CSS 3.4.17
- **Purpose**: Utility-first CSS Framework
- **Why**: Rapid development, consistent design, small bundle size
- **Features Used**:
  - Custom color palette
  - Responsive design utilities
  - Hover and transition effects
  - Grid and flexbox layouts
  - Custom configuration

## Language

### TypeScript 5.7.2
- **Purpose**: Typed JavaScript
- **Why**: Type safety, better IDE support, fewer runtime errors
- **Features Used**:
  - Interface definitions
  - Type checking
  - Strict mode
  - JSX/TSX support

## Integrations

### @astrojs/react 3.6.2
- **Purpose**: Astro + React Integration
- **Why**: Enables React components in Astro
- **Features Used**: Component rendering, client directives

### @astrojs/tailwind 5.1.2
- **Purpose**: Astro + Tailwind Integration
- **Why**: Seamless Tailwind integration with Astro
- **Features Used**: PostCSS processing, config merging

### @astrojs/check 0.9.4
- **Purpose**: Type checking for Astro files
- **Why**: Catch errors before build
- **Features Used**: Pre-build validation

## Development Tools

### @types/react 18.3.18
- **Purpose**: TypeScript definitions for React
- **Why**: Type safety for React components

### @types/react-dom 18.3.5
- **Purpose**: TypeScript definitions for React DOM
- **Why**: Type safety for React DOM operations

## Fonts

### Inter (Google Fonts)
- **Purpose**: Primary font family
- **Why**: Modern, readable, professional
- **Weights Used**: 300, 400, 500, 600, 700, 800, 900

## Icons

### Heroicons (SVG)
- **Purpose**: UI icons
- **Why**: Free, customizable, SVG-based (no external dependencies)
- **Icons Used**:
  - Play button
  - Menu
  - Checkmarks
  - Social icons
  - Navigation icons

## Build Tools

### Vite (via Astro)
- **Purpose**: Build tool and dev server
- **Why**: Fast HMR, optimized builds
- **Features Used**: Hot module replacement, bundling, optimization

## Deployment

### Wrangler (Optional)
- **Purpose**: Cloudflare CLI tool
- **Why**: Deploy to Cloudflare Pages from command line
- **Features Used**: Direct upload, git integration

## Configuration Files

### package.json
- npm scripts
- Dependencies management
- Project metadata

### astro.config.mjs
- Astro configuration
- Integration setup
- Output mode (static)

### tailwind.config.mjs
- Custom colors
- Font configuration
- Content paths

### tsconfig.json
- TypeScript compiler options
- Path resolution
- JSX configuration

### wrangler.toml
- Cloudflare Pages configuration
- Build output directory

## Performance Optimizations

### Built-in Optimizations
- **Static Site Generation**: Pre-rendered HTML
- **Code Splitting**: Automatic by Astro
- **CSS Purging**: Tailwind removes unused CSS
- **Lazy Loading**: Components load on demand
- **Asset Optimization**: Images and fonts optimized

### Cloudflare Pages Features
- **CDN**: Global edge network
- **HTTP/3**: Modern protocol support
- **Brotli Compression**: Smaller file sizes
- **Automatic Caching**: Static asset caching
- **DDoS Protection**: Built-in security

## Browser APIs

### Standard Web APIs
- **Fetch API**: Future use for dynamic content
- **IntersectionObserver**: Potential lazy loading
- **localStorage**: Future state persistence

## Content Format

### JSON
- **Purpose**: Content storage
- **Why**: Simple, portable, easy to edit
- **File**: src/data/content.json

## Version Control

### Git
- **Purpose**: Source control
- **Files**: .gitignore configured for Node.js projects

## Package Manager

### npm
- **Purpose**: Dependency management
- **Why**: Default Node.js package manager, reliable
- **Configuration**: .npmrc for optimization

## Development Environment

### Recommended
- **Node.js**: 18.x or higher
- **Editor**: VS Code (with Astro extension)
- **Terminal**: Any modern terminal

## Production Environment

### Cloudflare Pages
- **Hosting**: Static site hosting
- **CDN**: Global distribution
- **SSL**: Automatic HTTPS
- **DNS**: Cloudflare DNS integration
- **Analytics**: Built-in analytics available

## Not Used (But Could Be Added)

### Potential Future Additions
- **CMS**: Contentful, Sanity, or Strapi for content management
- **Analytics**: Google Analytics, Plausible, or Fathom
- **RSS**: Feed generation for podcast
- **Sitemap**: XML sitemap generation
- **Image CDN**: Cloudinary or Imgix for optimized images
- **Forms**: Formspree or Netlify Forms for contact
- **Testing**: Vitest for unit tests, Playwright for E2E
- **CI/CD**: GitHub Actions for automated deployments
- **Error Tracking**: Sentry for error monitoring
- **API Integration**: YouTube API, Podcast API

## License Compliance

All dependencies use permissive licenses (MIT, Apache 2.0, ISC) compatible with commercial use.

## Security

- **No Sensitive Data**: No API keys or secrets in codebase
- **Dependency Scanning**: Regular updates recommended
- **Static Output**: No server-side vulnerabilities
- **HTTPS Only**: Enforced by Cloudflare Pages

## Performance Metrics (Expected)

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: < 100KB (JS) + < 50KB (CSS)
- **Image Optimization**: WebP format recommended for future images

## Accessibility Compliance

- **WCAG 2.1**: Level AA targeted
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Where necessary
- **Keyboard Navigation**: Fully supported
- **Screen Readers**: Compatible

---

**Total Dependencies**: 11 (8 production + 3 development)
**Total Bundle Size**: ~60KB JS + ~30KB CSS (estimated after purge)
**Build Time**: ~5-10 seconds
**Development Start Time**: ~2-3 seconds
