# Przeprogramowani.pl — Website

Nowoczesna i responsywna strona projektu Przeprogramowani.pl zbudowana w stacku **Astro + React + Tailwind CSS**, gotowa do wdrożenia na **Cloudflare Pages**.

## Struktura

```
src/
├── layouts/
│   └── Layout.astro          # Główny layout (nav, footer, head)
├── components/
│   ├── MobileMenu.tsx         # Responsywne menu mobilne (React)
│   ├── YouTubeVideos.tsx      # Komponent listy filmów z YouTube (React)
│   └── PodcastEpisodes.tsx    # Komponent listy odcinków podcastu (React)
├── pages/
│   ├── index.astro            # Strona główna (hero 10xDevs, kursy, filmy/podcasty, newsletter)
│   ├── o-nas.astro            # O nas — zespół, misja, partnerzy
│   ├── podcast.astro          # Podcasty — Opanuj.AI Podcast + Przeprogramowani ft. Gość
│   └── youtube.astro          # YouTube — ostatnie filmy
└── styles/
    └── global.css             # Tailwind v4 z niestandardowym theme
```

## Strony i sekcje

| Strona | Zawartość |
|--------|-----------|
| `/` | Hero z **10xDevs 4.0**, partnerzy, kursy (Opanuj Frontend, Opanuj TypeScript, Opanuj AI), filmy YouTube, podcasty, newsletter |
| `/o-nas` | Zespół (Przemek Smyrdek, Marcin Czarkowski), misja, partnerzy |
| `/podcast` | Opanuj.AI Podcast (4000+ słuchaczy), Przeprogramowani ft. Gość (3800+), platformy |
| `/youtube` | Ostatnie filmy z kanału YouTube |

## Rozwój

```bash
npm run dev        # Serwer deweloperski
npm run build      # Budowanie na produkcję
npm run preview    # Podgląd zbudowanej wersji
```

## Wdrożenie na Cloudflare

Strona używa `@astrojs/cloudflare` adapter. Do wdrożenia:

1. Podłącz repozytorium do **Cloudflare Pages**
2. Ustaw framework: **Astro**
3. Build command: `npm run build`
4. Output directory: `dist/client`

Lub przez wrangler CLI:

```bash
npx wrangler pages deploy dist/client
```
