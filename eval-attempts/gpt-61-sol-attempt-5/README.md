# Przeprogramowani.pl

Responsywna strona w Astro 7, React 19 i Tailwind CSS 4. Astro generuje statyczny HTML; React obsługuje menu mobilne, wyszukiwanie i filtry materiałów. Fonty są hostowane lokalnie. Nie wymaga bazy danych, kluczy API ani serwera Node na produkcji.

## Lokalnie

Wymagany Node.js 22.12+.

```sh
npm ci
npm run dev
```

Domyślny adres: http://localhost:4321. Dostępne strony: `/`, `/o-nas/`, `/podcast/`, `/youtube/`, `/404.html`.

```sh
npm run check
npm run build
npm run preview
```

## Cloudflare Workers — statyczne zasoby

Konfiguracja `wrangler.jsonc` jest gotowa. Po zalogowaniu do właściwego konta Cloudflare:

```sh
npx wrangler login
npm run deploy
```

Wrangler opublikuje zawartość `dist` jako statyczne zasoby. Nie jest potrzebny adapter SSR. W integracji Git Cloudflare Workers ustaw build `npm run build`, deploy `npx wrangler deploy` i katalog projektu jako root directory.

## Cloudflare Pages — alternatywa

W panelu Pages: preset Astro, build `npm run build`, output `dist`, Node 22.12+. Przy imporcie monorepo ustaw root na ten katalog projektu.

Możesz także opublikować przez CLI:

```sh
npm run deploy:pages
```

Wymaga istniejącego projektu Pages `przeprogramowani` na Twoim koncie; nazwę możesz zmienić w `package.json`.

Źródła: [Astro na Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/), [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).

## Treść

Zweryfikowano 1 października 2026 na oficjalnych stronach:

- https://przeprogramowani.pl/ — filmy, newsletter, działalność.
- https://przeprogramowani.pl/o-nas — biografie oraz zdjęcia twórców.
- https://przeprogramowani.pl/podcast — ostatnie odcinki obu podcastów, okładki, linki.
- https://10xdevs.pl/ — 10xDevs 4.0 i liczba absolwentów.
- https://opanujfrontend.pl/ — zakres szkolenia.
- https://opanujtypescript.pl/ — TypeScript z Reactem, praktyczne zadania i dostęp.

`src/data/content.json` jest sprawdzonym snapshotem 6 filmów i 12 odcinków. Materiały wyświetlane są w kolejności oficjalnej strony, podcasty według serii. Podstrony pokazują datę aktualizacji. Miniatury pobierane są z YouTube i oficjalnego CDN podcastów. Odtwarzanie odbywa się na platformie źródłowej; nie wstawiamy automatycznie iframe ani trackerów. Newsletter prowadzi do prawdziwego formularza Substack.

Aby odświeżyć listę przed kolejnym wdrożeniem:

```sh
npm run refresh:content
npm run check
npm run build
```

Skrypt zapisuje obie listy atomowo po walidacji; jeśli źródło jest niedostępne lub zmieni się HTML, zachowuje poprzednie dane i zwraca błąd. Zwykły build nie zależy od dostępności stron zewnętrznych. Automatyzując aktualizacje, uruchamiaj refresh jako osobny krok przed buildem i kontroluj wynik.

Przy zmianie domeny zaktualizuj `site` w `astro.config.mjs` oraz `public/robots.txt`. Sitemap, canonical, metadane Open Graph, favicon, strona 404 i nagłówki cache są uwzględnione. Ten projekt przygotowano do wdrożenia; publikacja na koncie Cloudflare nie została wykonana.
