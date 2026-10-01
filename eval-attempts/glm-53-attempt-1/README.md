# Przeprogramowani.pl

Nowoczesna i responsywna strona projektu [Przeprogramowani.pl](https://przeprogramowani.pl) — szersze spojrzenie na programowanie.

## Stack

- [Astro 5](https://astro.build) — statyczny site generator (`output: 'static'`)
- [React 19](https://react.dev) — komponenty interaktywne
- [Tailwind CSS 3](https://tailwindcss.com) — stylowanie
- TypeScript

## Struktura

```
src/
├── components/   # Komponenty React (Header, Footer, karty kursów/filmów/odcinków)
├── data/site.ts  # Treści: kursy, podcasty, filmy, założyciele, marki
├── layouts/      # BaseLayout.astro (SEO, fonty, nawigacja)
├── pages/        # / , /o-nas , /podcast , /youtube
└── styles/       # global.css (design system)
```

## Uruchomienie

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # buduje do ./dist
npm run preview   # podgląd produkcyjnej wersji
```

## Wdrożenie na Cloudflare

Strona jest w pełni statyczna i gotowa do wdrożenia na **Cloudflare Pages**.

### Opcja 1: Wrangler CLI

```bash
npm run deploy
# odpowiednik: astro build && wrangler pages deploy dist
```

### Opcja 2: Połączenie repo (Cloudflare Dashboard)

1. W Cloudflare Dashboard przejdź do **Workers & Pages → Create → Pages → Connect to Git**.
2. Wybierz repozytorium i ustaw:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Deploy — Cloudflare automatycznie wykryje konfigurację z `wrangler.jsonc`.

Plik `public/_headers` dodaje nagłówki bezpieczeństwa oraz agresywne
cache'owanie zbudowanych zasobów (`/_astro/*`).
