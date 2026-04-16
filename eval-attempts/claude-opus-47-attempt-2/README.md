# Przeprogramowani.pl

Nowoczesna strona projektu **Przeprogramowani** — kursy, podcast, YouTube i program 10xDevs.

Stack: **Astro 5** · **React 19** · **Tailwind CSS 3** · **Cloudflare Pages**

## Szybki start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy na Cloudflare Pages

### Opcja A — CLI (Wrangler)

```bash
npm run build
npx wrangler pages deploy ./dist --project-name=przeprogramowani
```

### Opcja B — Git integration

W panelu Cloudflare Pages połącz repo i ustaw:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `app`
- **Node.js version:** `20`

## Struktura

```
app/
├─ src/
│  ├─ components/   # Navigation, Hero, Cards, CoursesGrid (React)
│  ├─ data/         # site, courses, podcast, youtube, team
│  ├─ layouts/      # Layout.astro
│  ├─ pages/        # index, o-nas, podcast, youtube, 404, sitemap
│  └─ styles/       # global.css (Tailwind)
├─ public/          # favicon, og image, _headers, _redirects, robots.txt
├─ astro.config.mjs
├─ tailwind.config.mjs
└─ wrangler.toml
```

## Strony

- `/` — Strona główna z hero (10xDevs 3.0) i gridem kursów
- `/o-nas` — O projekcie, zespół, partnerzy
- `/podcast` — Ostatnie odcinki Przeprogramowani + Opanuj.AI
- `/youtube` — Ostatnie filmy z kanału YouTube
