# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu **Przeprogramowani** — _szersze spojrzenie na programowanie_.
Zbudowana w **Astro + React + Tailwind CSS**, gotowa do wdrożenia na **Cloudflare Pages**.

## Co znajdziesz na stronie

- **Strona główna** — hero z ekspozycją programów **10xDevs**, **Opanuj Frontend** i **Opanuj TypeScript**, statystyki, zajawki podcastu i YouTube oraz zapis do newslettera.
- **O nas** (`/o-nas`) — misja, wartości, sylwetki prowadzących (Marcin Czarkowski, Przemek Smyrdek) i klienci.
- **Podcast** (`/podcast`) — ostatnie odcinki podcastu z linkami do Spotify i Apple Podcasts.
- **YouTube** (`/youtube`) — najnowsze filmy z interaktywnym odtwarzaczem (lightbox, embed `youtube-nocookie`).

Treści (odcinki podcastu, filmy, opisy kursów) pochodzą z publicznych kanałów projektu i są utrzymywane w plikach w `src/data/`.

## Stack technologiczny

| Warstwa      | Technologia                          |
| ------------ | ------------------------------------ |
| Framework    | [Astro](https://astro.build) (`output: 'static'`) |
| Interakcje   | React 18 (wyspy: nawigacja mobilna, siatka wideo z lightboxem) |
| Style        | Tailwind CSS 3                        |
| Hosting      | Cloudflare Pages                     |

## Rozwój lokalny

```bash
npm install      # instalacja zależności
npm run dev      # serwer deweloperski → http://localhost:4321
npm run build    # build produkcyjny do ./dist
npm run preview  # podgląd builda produkcyjnego
```

Wymagany Node.js 18+ (rekomendowane 20/22).

## Wdrożenie na Cloudflare Pages

Strona buduje się do statycznych plików w katalogu `dist/` — idealne dla Cloudflare Pages.

### Wariant A — z panelu Cloudflare (Git)

1. Wypchnij repozytorium do GitHub/GitLab.
2. W panelu **Cloudflare → Workers & Pages → Create → Pages → Connect to Git**.
3. Ustaw parametry builda:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Zapisz i wdróż. Każdy push automatycznie odświeży stronę.

### Wariant B — z linii poleceń (Wrangler)

```bash
npm run build
npx wrangler pages deploy dist --project-name=przeprogramowani
```

### Dodatkowe pliki dla Cloudflare

- `public/_headers` — nagłówki bezpieczeństwa i cache (aplikacja obsługiwana natywnie przez Pages).
- `public/robots.txt` + `/sitemap.xml` — SEO.

## Struktura projektu

```
src/
├── components/     # Header (React), Footer, karty, siatka wideo (React), ikony
├── data/           # treści: site, team, podcast, videos
├── layouts/        # Layout.astro (SEO, meta, OG, JSON-LD)
├── pages/          # index, o-nas, podcast, youtube, 404, sitemap.xml
└── styles/         # global.css (Tailwind + komponenty)
public/             # favicon, og image, robots, _headers
```

## Aktualizacja treści

- **Odcinki podcastu** → `src/data/podcast.ts`
- **Filmy YouTube** → `src/data/videos.ts`
- **Kursy / statystyki / social** → `src/data/site.ts`
- **Prowadzący** → `src/data/team.ts`

Po zmianach uruchom `npm run build` — dane są renderowane statycznie w czasie builda.
