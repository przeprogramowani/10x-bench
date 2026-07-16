# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu **Przeprogramowani** — *szersze spojrzenie na programowanie*.
Zbudowana w **Astro + React + Tailwind CSS**, gotowa do wdrożenia na **Cloudflare**.

## Strony

- **Start** (`/`) — hero z flagowym programem **10xDevs**, kursy, ostatnie odcinki podcastu i filmy, newsletter
- **O nas** (`/o-nas`) — misja, wartości, założyciele (Przemek Smyrdek, Marcin Czarkowski), zaufane firmy
- **Podcast** (`/podcast`) — ostatnie odcinki + linki do Spotify / Apple Podcasts / YouTube
- **YouTube** (`/youtube`) — najnowsze filmy z kanału (miniatury pobierane bezpośrednio z YouTube)

Sekcje kursów **Opanuj Frontend**, **Opanuj TypeScript** oraz **10xDevs** znajdują się na stronie głównej;
10xDevs jest dodatkowo wyeksponowany w hero.

## Stack

| Warstwa | Technologia |
| --- | --- |
| Framework | Astro 5 (`output: 'static'`) |
| UI / wyspy | React 19 (`@astrojs/react`) — `MobileNav`, `NewsletterForm` |
| Style | Tailwind CSS 3.4 (`@astrojs/tailwind`) |
| SEO | `@astrojs/sitemap`, Open Graph, JSON-LD, canonical |

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build produkcyjny

```bash
npm run build    # generuje statyczne pliki do ./dist
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare

Strona jest statyczna, więc działa bez adaptera. Dwie opcje:

### Cloudflare Pages (zalecane)

1. Połącz repozytorium w panelu Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `dist`

Framework preset: **Astro**. Plik `public/_headers` konfiguruje cache i nagłówki bezpieczeństwa.

### Wrangler (CLI)

Dołączony `wrangler.jsonc` wskazuje na katalog `./dist`:

```bash
npm run build
npx wrangler deploy
```

## Dane

Treść (kursy, odcinki, filmy, zespół) jest opisana w plikach w `src/data/`.
Miniatury filmów pochodzą z `i.ytimg.com`, a odcinki linkują do platform podcastowych.

## Źródła danych

Informacje o marce, odcinkach podcastu, filmach i kursach pochodzą z publicznych zasobów
Przeprogramowani: strony `przeprogramowani.pl`, `opanujfrontend.pl`, `opanujtypescript.pl`,
`10xdevs.pl`, kanałowego feedu RSS YouTube oraz Apple Podcasts.
