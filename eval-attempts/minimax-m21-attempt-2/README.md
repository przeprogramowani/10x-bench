# Przeprogramowani.pl Website

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana na Astro, React i Tailwind CSS.

## Struktura projektu

```
src/
├── components/          # Komponenty React
│   ├── Header.tsx        # Nawigacja
│   ├── Footer.tsx        # Stopka
│   ├── Hero.tsx          # Sekcja hero z 10xDevs
│   ├── PodcastSection.tsx # Podcasty
│   ├── YouTubeSection.tsx # YouTube
│   ├── CoursesSection.tsx # Kursy
│   ├── AboutSection.tsx  # O nas
│   └── Newsletter.tsx     # Newsletter
├── layouts/
│   └── Layout.astro      # Główny layout
├── pages/
│   ├── index.astro        # Strona główna
│   ├── o-nas.astro       # O nas
│   ├── podcast.astro     # Podcast
│   └── youtube.astro     # YouTube
└── styles/
    └── global.css        # Style Tailwind

public/
├── favicon.svg           # Ikona strony
└── grid.svg              # Tło grid

wrangler.toml             # Konfiguracja Cloudflare
astro.config.mjs          # Konfiguracja Astro
tailwind.config.mjs       # Konfiguracja Tailwind
```

## Instalacja

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment na Cloudflare

```bash
npm run build
npx wrangler deploy
```

Lub skonfiguruj GitHub Actions do automatycznego deploymentu.

## Kursy

- **10xDevs** - Programowanie z AI
- **Opanuj Frontend: AI Edition** - Nowoczesny frontend z React 19
- **Opanuj TypeScript** - Zaawansowany TypeScript

## Podcasty

- **Opanuj.AI Podcast** - Techniczny podcast o LLM
- **Przeprogramowani ft. Gość** - Rozmowy dla głodnych wiedzy

## Licencja

MIT
