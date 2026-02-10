# Funkcje i technologie

## Główne funkcje

### 🎨 Responsywny design
- Pełna obsługa urządzeń mobilnych (320px+)
- Tablet-friendly layout (768px+)
- Desktop-optimized (1024px+)
- Hamburger menu dla małych ekranów
- Touch-friendly UI elements

### ⚡ Sekcja Hero
- Efektowny gradient background (blue → purple → cyan)
- Wyróżniona karta kursu 10xDevs 3.0
- Call-to-action buttons
- 3 kluczowe value propositions
- Glassmorphism effect

### 👥 O nas
- Informacje o projekcie i misji
- Profile twórców (Przemek, Marcin)
- Statystyki (7 lat, 15k+ społeczność)
- Grid layout z kursami i podcastami
- Gradient cards

### 🎙️ Podcast
- 6 najnowszych odcinków Opanuj.AI
- Czas trwania każdego odcinka
- Opisy tematyczne
- Linki do platform: Apple Podcasts, Spotify, WWW
- Badge dla typu podcastu

### 📺 YouTube
- 6 ostatnich filmów
- Placeholder thumbnails (gotowe do podmian)
- Hover effects z play button
- View counts
- Link do kanału YouTube
- Card hover animations

### 📚 Kursy
- 3 główne kursy:
  - Opanuj Frontend: AI Edition
  - Opanuj TypeScript
  - 10xDevs 3.0
- Features list dla każdego kursu
- Gradient backgrounds
- Badge system (Bestseller, Nowość, Popularne)
- CTA section z linkiem do newslettera

### 🔗 Footer
- 4-kolumnowy layout (desktop)
- Quick links (nawigacja)
- Links do kursów
- Social media icons (YouTube, Spotify, Instagram, Substack)
- Contact email
- Copyright notice
- Responsive grid

## Stack technologiczny

### Frontend Framework
- **Astro 5.17.1**
  - Static Site Generation (SSG)
  - Islands Architecture dla optymalnej wydajności
  - Built-in optimizations
  - Zero JS by default

### UI Library
- **React 19.2.4**
  - Komponenty interaktywne
  - Hooks (useState dla navigation)
  - Client directives (client:load, client:visible)
  - JSX/TSX syntax

### Styling
- **Tailwind CSS 4.1.18**
  - Utility-first CSS
  - Custom color palette
  - Responsive utilities
  - JIT (Just-In-Time) compilation
  - @tailwindcss/vite plugin

### TypeScript
- **Strict mode**
  - Type safety
  - Better IDE support
  - Catch errors at compile time
  - Better refactoring

## Optymalizacje wydajności

### Astro Islands
```typescript
<Navigation client:load />      // Ładuje natychmiast
<Hero client:load />            // Ładuje natychmiast
<About client:visible />        // Ładuje gdy widoczne
<Podcast client:visible />      // Ładuje gdy widoczne
<YouTube client:visible />      // Ładuje gdy widoczne
<Courses client:visible />      // Ładuje gdy widoczne
<Footer client:visible />       // Ładuje gdy widoczne
```

### Lazy loading
- Komponenty poniżej fold używają `client:visible`
- Obrazki mogą używać `loading="lazy"`
- Tylko niezbędny JS jest ładowany

### Bundle size
- Navigation: 2.29 kB (0.75 kB gzipped)
- Hero: 2.44 kB (0.97 kB gzipped)
- About: 3.27 kB (1.21 kB gzipped)
- Podcast: 3.66 kB (1.50 kB gzipped)
- YouTube: 3.86 kB (1.69 kB gzipped)
- Courses: 4.54 kB (1.94 kB gzipped)
- Footer: 6.01 kB (2.02 kB gzipped)
- **Total client JS: ~220 kB (65 kB gzipped)**

## Bezpieczeństwo

### HTTP Headers (public/_headers)
```
X-Frame-Options: DENY                               # Ochrona przed clickjacking
X-Content-Type-Options: nosniff                     # Prevent MIME sniffing
X-XSS-Protection: 1; mode=block                     # XSS protection
Referrer-Policy: strict-origin-when-cross-origin    # Privacy
Permissions-Policy: geolocation=(), microphone=(), camera=()  # Permissions
```

### External Links
- Wszystkie external links używają `rel="noopener noreferrer"`
- Target blank dla bezpieczeństwa
- HTTPS only links

## Accessibility

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic tags: `<nav>`, `<section>`, `<footer>`
- ARIA labels gdzie potrzebne

### Keyboard Navigation
- Wszystkie interaktywne elementy są focusable
- Tab order jest logiczny
- Mobile menu z keyboard support

### Color Contrast
- WCAG AA compliance
- Wysokie kontrasty tekstu
- Readable font sizes

## SEO

### Meta Tags
```html
<meta name="description" content="..." />
<meta name="viewport" content="width=device-width" />
<meta name="generator" content={Astro.generator} />
```

### Semantic Structure
- Proper heading hierarchy
- Descriptive link text
- Alt text ready (images używają placeholders)

### Performance
- Fast load times (static site)
- Minimal JS footprint
- Optimized assets

## Cloudflare Integration

### _redirects
```
/* /index.html 200
```
Zapewnia SPA-like routing

### wrangler.toml
```toml
name = "przeprogramowani"
compatibility_date = "2024-01-01"

[site]
bucket = "./dist"
```

### Edge Features
- Global CDN distribution
- Auto SSL certificates
- DDoS protection
- Analytics
- Automatic minification

## Design System

### Colors
```css
--color-primary: #3b82f6      /* Blue 500 */
--color-primary-dark: #2563eb /* Blue 600 */
--color-secondary: #8b5cf6    /* Purple 600 */
--color-accent: #06b6d4       /* Cyan 600 */
```

### Gradients
- `from-blue-600 via-purple-600 to-cyan-500` (Hero)
- `from-blue-600 to-cyan-500` (10xDevs)
- `from-purple-600 to-pink-500` (TypeScript)
- `from-cyan-500 to-blue-600` (Frontend)

### Typography
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
```

### Spacing
- Consistent padding: p-4, p-6, p-8
- Margins: mb-4, mb-6, mb-8, mb-12
- Gaps: gap-4, gap-6, gap-8

## Browser Support

✅ Chrome/Edge (last 2 versions)
✅ Firefox (last 2 versions)
✅ Safari (last 2 versions)
✅ Mobile Safari (iOS 14+)
✅ Chrome Mobile (Android 10+)

## Future Enhancements

Możliwe ulepszenia:
- [ ] Real YouTube API integration
- [ ] Real Podcast RSS feed integration
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Search functionality
- [ ] Newsletter signup form
- [ ] Course pricing tables
- [ ] Testimonials section
- [ ] FAQ section
- [ ] Multi-language support (EN/PL)

## Maintenance

### Updating content

**Podcast episodes:**
Edit `src/components/Podcast.tsx` - array `episodes`

**YouTube videos:**
Edit `src/components/YouTube.tsx` - array `videos`

**Course info:**
Edit `src/components/Courses.tsx` - array `courses`

### Updating styles

**Global styles:**
Edit `src/layouts/Layout.astro` - CSS variables

**Component styles:**
Edit individual component files - Tailwind classes

### Performance monitoring

Use Cloudflare Analytics:
- Page views
- Unique visitors
- Bandwidth usage
- Top pages
- Referrers
