# Przeprogramowani

Responsywna witryna w Astro 7, React 19 i Tailwind CSS 4. Statyczny build działa na Cloudflare Workers oraz Pages, bez backendu, kluczy API i płatnych integracji.

## Lokalnie

Wymagania: Node.js 22.12+ i npm.

```sh
npm ci
npm run dev
```

Astro wypisuje adres podglądu w terminalu. Gdy port jest zajęty, wybiera kolejny dostępny.

```sh
npm run check
npm run build
npm run preview
```

## Zawartość

- `/` — hero 10xDevs, kursy Opanuj Frontend i Opanuj TypeScript, publikacje, zespół i newsletter.
- `/o-nas/` — twórcy, podejście do edukacji i kontakt.
- `/podcast/` — Opanuj.AI oraz Przeprogramowani ft. Gość; wyszukiwanie, filtry i bezpośrednie linki do odcinków.
- `/youtube/` — najnowsze filmy; wyszukiwanie, filtry i odtwarzacz YouTube w dialogu.
- `/404.html` — własna strona błędu.

Elementy interaktywne to wyspy React. Treść i linki renderują się po stronie Astro. Font jest przechowywany lokalnie. YouTube ładuje się dopiero po wybraniu filmu, przez domenę `youtube-nocookie.com`. Newsletter prowadzi do oficjalnego Substacka; witryna nie przechowuje adresów email.

## Aktualizacja publikacji

Dane w `src/data/` są sprawdzonym snapshotem. Filmy pochodzą z oficjalnego feedu kanału YouTube, odcinki z oficjalnej strony podcastu. Data aktualizacji jest widoczna na podstronach. Publikacje nie aktualizują się samoczynnie w przeglądarce.

Wymagania dla odświeżania: Python 3.9+ i curl.

```sh
npm run refresh:content
npm run build
```

Skrypt pobiera dziewięć ostatnich filmów, miniatury oraz odcinki. Przy błędzie pobierania lub zmianie formatu źródła kończy się błędem, zachowując istniejące metadane. Kategorie filmów to lokalna klasyfikacja redakcyjna; możesz zmienić pole `category` w `src/data/videos.json`.

## Cloudflare Workers

`wrangler.jsonc` wskazuje na `dist` i obsługę własnej strony 404. Konfiguracja nie tworzy funkcji serwerowych ani fallbacku SPA.

```sh
npx wrangler login
npm run deploy
```

Przy integracji repozytorium w Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Node: `22`

## Cloudflare Pages

W panelu Pages połącz repozytorium, wybierz preset Astro, build command `npm run build` i katalog wyjściowy `dist`. Ustaw `NODE_VERSION=22`. Alternatywnie, dla istniejącego projektu Pages:

```sh
npm run deploy:pages
```

Przed wdrożeniem pod inną domeną zmień `site` w `astro.config.mjs` oraz adres sitemap w `public/robots.txt`. Publikacja wymaga konta Cloudflare. Projekt jest przygotowany do wdrożenia; ta implementacja nie została opublikowana.

## Źródła

Informacje i materiały sprawdzone 1 października 2026:

- [Przeprogramowani — działalność i newsletter](https://przeprogramowani.pl/)
- [Zespół i biografie](https://przeprogramowani.pl/o-nas)
- [Podcasty — odcinki, okładki i długość nagrań](https://przeprogramowani.pl/podcast)
- [Oficjalny feed YouTube — filmy i daty publikacji](https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw)
- [10xDevs](https://www.10xdevs.pl/)
- [Opanuj Frontend](https://www.opanujfrontend.pl/)
- [Opanuj TypeScript](https://www.opanujtypescript.pl/)
- [Dokumentacja wdrożeń Astro na Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)

Portrety i okładki należą do Przeprogramowanych; miniatury pochodzą z oficjalnych publikacji kanału. Ilustracje kursów i hero zostały wykonane dla tej witryny w SVG/CSS. Metadane SEO, Open Graph, JSON-LD, sitemap, robots.txt oraz nagłówki bezpieczeństwa są dołączone.
