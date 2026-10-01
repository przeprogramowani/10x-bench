# Przeprogramowani.pl

Responsywna strona w Astro 7, React 19 i Tailwind CSS 4. Statyczne generowanie stron, lokalne fonty, wyspy React dla menu, filtrów i wyszukiwania. Bez bazy danych ani sekretów.

## Lokalnie

Wymagany Node.js 22.12+.

```sh
npm ci
npm run dev
```

Adres: http://localhost:4321. Podstrony: `/o-nas/`, `/podcast/`, `/youtube/`. Kursy i newsletter prowadzą do oficjalnych serwisów. Filmy i odcinki otwierają oryginalne materiały w nowej karcie.

```sh
npm run check
npm run build
npm run preview
```

## Cloudflare Workers (Static Assets)

Repozytorium zawiera `wrangler.jsonc`. Projekt generuje katalog `dist` i nie potrzebuje adaptera SSR. Wrangler obsługuje adresy podstron i własną stronę 404.

```sh
npx wrangler login
npm run deploy
```

W Cloudflare Workers Builds ustaw komendę budowania `npm run build` i wdrożenia `npx wrangler deploy`. Przed podpięciem innej domeny zmień `site` w `astro.config.mjs` i adres mapy witryny w `public/robots.txt`.

## Cloudflare Pages

Można również wdrożyć ten sam statyczny katalog w Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22.12 lub nowszy (np. `NODE_VERSION=22`)

Dla wdrożenia z CLI utwórz projekt `przeprogramowani` na swoim koncie, a następnie uruchom `npm run deploy:pages`. Publikacja wymaga zalogowanego konta Cloudflare; projekt nie został opublikowany w ramach przygotowania.

## Aktualizacja filmów i podcastów

`src/data/media.json` zawiera katalog pobrany z oficjalnego serwisu 1 października 2026: 6 filmów i 12 odcinków. Wyświetlana data pozwala odróżnić ostatni zapis od danych aktualizowanych na żywo.

```sh
npm run content:update
npm run check
npm run build
```

Skrypt wymaga `curl`, pobiera publiczne strony główną i podcastową, sprawdza kompletność i zapisuje katalog atomowo. Przy błędzie zachowuje poprzednią wersję. Build działa także bez sieci. Aby publikować świeże odcinki, uruchom aktualizację przed kolejnym wdrożeniem; można dołączyć ją do własnego pipeline'u. Miniatury filmów pochodzą z YouTube. Fotografie autorów pobrano z oficjalnej strony i zapisano lokalnie.

## Źródła treści

- [Projekt i katalog YouTube](https://przeprogramowani.pl/)
- [Autorzy i działalność](https://przeprogramowani.pl/o-nas)
- [Oficjalny katalog podcastów](https://przeprogramowani.pl/podcast)
- [10xDevs — program i liczba absolwentów](https://10xdevs.pl/)
- [Opanuj Frontend](https://opanujfrontend.pl/)
- [Opanuj TypeScript](https://opanujtypescript.pl/)
- [Przeprogramowany Newsletter](https://przeprogramowani.substack.com/)
- [Cloudflare: statyczne zasoby](https://developers.cloudflare.com/workers/static-assets/)

Treści i zdjęcia opisują rzeczywistych autorów. Nie dodano fikcyjnych opinii, cen, dat zapisów ani formularza, który pozorowałby subskrypcję. Grafiki hero, kursów i podcastów są nowymi ilustracjami zbudowanymi w SVG/CSS. Strona nie ładuje odtwarzaczy ani analityki stron trzecich.

## Weryfikacja

Sprawdzono `npm run check` (bez błędów i ostrzeżeń), `npm run build` oraz `wrangler deploy --dry-run`. Podgląd statycznego builda zwraca 200 dla wszystkich czterech podstron, mapy witryny i robots.txt oraz 404 dla nieistniejącego adresu. W przeglądarce sprawdzono menu mobilne, filtry materiałów, wyszukiwanie, pustą listę i reset oraz widoki 320, 390, 768 i 1280 px. Nie przeprowadzono publikacji na koncie Cloudflare.
