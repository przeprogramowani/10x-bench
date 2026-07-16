# Przeprogramowani.pl

Nowoczesna, responsywna strona projektu **Przeprogramowani** — edukacja technologiczna dla
ambitnych programistów w erze AI.

Zbudowana w **Astro + React + Tailwind CSS**, gotowa do wdrożenia na **Cloudflare Pages**.

## Strony

| Ścieżka     | Opis                                                                 |
| ----------- | ------------------------------------------------------------------- |
| `/`         | Strona główna — hero z 10xDevs, kursy, podcast i YouTube            |
| `/o-nas`    | O nas — historia, twórcy i wartości projektu                        |
| `/podcast`  | Najnowsze odcinki podcastu + linki do platform                      |
| `/youtube`  | Ostatnie filmy z interaktywnym odtwarzaczem (React)                 |

Sekcja kursów obejmuje **10xDevs 4.0** (w hero), **Opanuj Frontend: AI Edition** oraz
**Opanuj TypeScript**.

## Stack

- **Astro 5** — statyczny generator, output `static`
- **React 19** — komponenty interaktywne (menu mobilne, galeria YouTube z lightboxem)
- **Tailwind CSS 3.4** — stylowanie
- **@astrojs/sitemap** — automatyczna mapa strony

## Rozwój

```bash
npm install      # instalacja zależności
npm run dev      # serwer deweloperski (http://localhost:4321)
npm run build    # produkcyjny build do ./dist
npm run preview  # podgląd builda lokalnie
```

## Wdrożenie na Cloudflare Pages

Strona generuje statyczny output — idealny dla Cloudflare Pages.

**Przez dashboard Cloudflare:**

1. Połącz repozytorium w **Workers & Pages → Create → Pages**.
2. Ustaw:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Framework preset:** Astro
3. Deploy.

**Przez Wrangler (CLI):**

```bash
npm run build
npx wrangler pages deploy dist --project-name=przeprogramowani
```

Plik [`public/_headers`](public/_headers) dodaje nagłówki bezpieczeństwa i cache'owanie
zasobów — Cloudflare Pages odczytuje go automatycznie.

## Struktura danych

Cała treść (kursy, odcinki, filmy, twórcy) znajduje się w
[`src/data/site.ts`](src/data/site.ts). Identyfikatory filmów YouTube zostały zweryfikowane
przez YouTube oEmbed, aby uniknąć niedziałających osadzeń.

## Źródła treści

- [przeprogramowani.pl](https://przeprogramowani.pl) i [/o-nas](https://przeprogramowani.pl/o-nas)
- [10xdevs.pl](https://www.10xdevs.pl), [opanujfrontend.pl](https://opanujfrontend.pl),
  [opanujtypescript.pl](https://opanujtypescript.pl)
- Apple Podcasts / Spotify oraz kanał [YouTube](https://youtube.com/c/przeprogramowani)
