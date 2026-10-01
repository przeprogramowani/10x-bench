# Przeprogramowani

Responsywna strona w **Astro 7, React 19 i Tailwind CSS 4**. Statyczne strony są generowane podczas budowania; React obsługuje menu mobilne, wyszukiwanie i filtry. Fonty, portrety i miniatury są serwowane lokalnie. Strona nie wymaga kluczy API ani bazy danych.

## Uruchomienie

Wymagany Node.js **22.12+** (zalecany 22.22+) oraz npm.

```sh
npm ci
npm run dev
```

Adres i port podaje Astro po uruchomieniu; domyślnie `http://localhost:4321`.

```sh
npm run check
npm run build
npm run preview
```

## Zawartość

- `/` — 10xDevs w hero, trzy kursy, ostatnie publikacje, autorzy i newsletter.
- `/o-nas/` — Przemek Smyrdek, Marcin Czarkowski i podejście do edukacji.
- `/podcast/` — ostatnie odcinki Opanuj.AI i Przeprogramowani ft. Gość; filtry i wyszukiwanie.
- `/youtube/` — ostatnie filmy; filtry i wyszukiwanie.
- Strona 404, sitemap, robots.txt, canonical, Open Graph, lokalne fonty, obsługa ograniczonego ruchu i nawigacja klawiaturą.

Przyciski kursów prowadzą do oficjalnych stron programów. Newsletter prowadzi do istniejącego formularza Przeprogramowanych. Odcinki i filmy otwierają się na platformach źródłowych.

## Aktualizacja materiałów

Publikacje są zapisane w `src/data/content.json`. Domyślny build korzysta z zapisanego zestawu, dzięki czemu nie zależy od dostępności zewnętrznych serwisów. Aby pobrać aktualny zestaw:

```sh
npm run content:refresh
npm run build
```

Skrypt pobiera ostatnie filmy ze strony głównej Przeprogramowanych, odcinki ze strony podcastu i zapisuje ich miniatury lokalnie. Wymaga `curl`. Waliduje strukturę źródeł przed zastąpieniem pliku danych. Data aktualizacji jest widoczna na podstronach. Zmiany treści pojawiają się po ponownym zbudowaniu i wdrożeniu strony.

## Cloudflare Workers — statyczne zasoby

Gotowa konfiguracja znajduje się w `wrangler.jsonc`. Przed pierwszym wdrożeniem ustaw własną nazwę projektu w polu `name` i zaloguj się do swojego konta:

```sh
npx wrangler login
npm run deploy
```

Polecenie buduje stronę i publikuje katalog `dist` jako Cloudflare Workers Static Assets. Podłączenie domeny `przeprogramowani.pl` wykonaj w panelu Cloudflare. Projekt nie wymaga adaptera SSR.

## Alternatywnie: Cloudflare Pages

Po połączeniu repozytorium ustaw:

| Ustawienie | Wartość |
| --- | --- |
| Root directory | katalog tego projektu |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `22.22.0` |

Konfiguracja `wrangler.jsonc` dotyczy Workers. Dla Pages użyj powyższych ustawień w panelu, bez polecenia `wrangler deploy`.

Przy innej domenie zmień `site` w `astro.config.mjs` oraz adresy w `src/pages/robots.txt.ts` i `src/pages/sitemap.xml.ts`.

## Źródła

Treści sprawdzono 1 października 2026 roku. Tytuły, kolejność publikacji i adresy pochodzą z oficjalnej strony; opisy kursów i autorów zostały opracowane na podstawie poniższych źródeł:

- [Przeprogramowani — oferta i ostatnie filmy](https://przeprogramowani.pl/)
- [O nas — autorzy](https://przeprogramowani.pl/o-nas)
- [Podcast — ostatnie odcinki](https://przeprogramowani.pl/podcast)
- [10xDevs — program i liczba absolwentów](https://10xdevs.pl/)
- [Opanuj Frontend](https://opanujfrontend.pl/)
- [Opanuj TypeScript](https://opanujtypescript.pl/)
- [Cloudflare Workers — static assets](https://developers.cloudflare.com/workers/static-assets/)

Portrety oraz okładki pochodzą z zasobów podlinkowanych na oficjalnej stronie. Ilustracje kursów i hero powstały w CSS/SVG.
