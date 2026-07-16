# Przeprogramowani.pl — strona projektu

Nowoczesna, w pełni responsywna strona projektu **Przeprogramowani** zbudowana w Astro + React + Tailwind, gotowa do wdrożenia na **Cloudflare Pages**.

## Zawartość

- **Strona główna** (`/`) — hero z wyróżnionym kursem **10xDevs 4.0**, sekcja kursów (**Opanuj Frontend**, **Opanuj TypeScript**, **10xDevs**), zapowiedzi podcastu i YouTube.
- **O nas** (`/o-nas`) — misja, twórcy (Przemek Smyrdek, Marcin Czarkowski), wartości i zaufane firmy.
- **Podcast** (`/podcast`) — Opanuj.AI Podcast z ostatnimi odcinkami.
- **YouTube** (`/youtube`) — najnowsze filmy z kanału (pobrane z publicznego feedu RSS).

Treść pochodzi z publicznych kanałów marki (przeprogramowani.pl, opanujfrontend.pl, opanujtypescript.pl, 10xdevs.pl, kanał YouTube).

## Stack

- [Astro 5](https://astro.build) — statyczny generator stron (`output: 'static'`)
- [React 19](https://react.dev) — interaktywne wyspy (menu mobilne)
- [Tailwind CSS 3.4](https://tailwindcss.com) — styling
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — mapa strony + `robots.txt`

## Rozwój lokalny

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcyjny build → ./dist
npm run preview  # podgląd builda
```

## Wdrożenie na Cloudflare Pages

Projekt buduje statyczne pliki do `./dist` — nie wymaga adaptera SSR.

### Opcja A — dashboard (Git)

1. Wypchnij repozytorium na GitHub/GitLab.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Ustawienia builda:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy**.

Plik [`public/_headers`](public/_headers) ustawia nagłówki bezpieczeństwa oraz cache dla zasobów `/_astro/*`.

### Opcja B — Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name=przeprogramowani
```

## Personalizacja treści

Cała treść jest sterowana z jednego pliku:

```
src/data/site.ts   # marka, kursy, odcinki podcastu, filmy, twórcy
```

Zaktualizuj ten plik i uruchom `npm run build`, aby odświeżyć stronę.
