# Przeprogramowani

Responsywna, polskojęzyczna strona w Astro 7, React 19 i Tailwind CSS 4. Statyczny build gotowy na Cloudflare Workers Static Assets lub Cloudflare Pages.

## Lokalnie

Wymagany Node.js 22.12+ (zalecany Node 22 LTS).

```sh
npm ci
npm run dev
```

Astro wypisuje adres podglądu; domyślnie używa portu 4321, a jeśli jest zajęty, wybiera następny wolny.

```sh
npm run check
npm run build
npm run preview
```

## Cloudflare Workers

Plik `wrangler.jsonc` wskazuje katalog `dist` i własną stronę 404. Nie są potrzebne baza danych, sekrety ani adapter SSR.

```sh
npx wrangler login
npm run deploy
```

W dashboardzie Cloudflare można podłączyć repozytorium do Workers Builds: polecenie budowania `npm run build`, polecenie wdrożenia `npx wrangler deploy`.

## Cloudflare Pages

Połącz repozytorium w Workers & Pages → Create → Pages. Ustaw:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22 (zmienna `NODE_VERSION=22`)
- Root directory: katalog tego projektu

Alternatywnie po utworzeniu projektu Pages o nazwie `przeprogramowani`:

```sh
npm run deploy:pages
```

Domena produkcyjna w metadanych, sitemapie i robots.txt domyślnie wynosi `https://przeprogramowani.pl`. Dla innej domeny ustaw `SITE_URL` na etapie budowania. Reguły nagłówków bezpieczeństwa i cache znajdują się w `public/_headers`.

## Treści i aktualizacja materiałów

`src/data/media.json` jest sprawdzonym snapshotem oficjalnych kanałów. Dane podcastu Opanuj.AI i YouTube pochodzą z publicznych feedów RSS; odcinki Przeprogramowani ft. Gość z oficjalnej strony podcastu. Nie jest wymagany klucz API. Odświeżaj dane przed wdrożeniem:

```sh
npm run refresh:media
npm run check
npm run build
```

Aktualizacja jest jawna i niezależna od builda: chwilowa awaria feedu nie blokuje budowania istniejącego snapshotu. Skrypt zapisuje dane dopiero po pobraniu wszystkich źródeł. Aby aktualizować stronę regularnie, uruchamiaj skrypt w swoim procesie CI przed buildem i wdrożeniem.

Podstrony: `/`, `/o-nas`, `/kursy`, `/podcast`, `/youtube`, własna strona 404. Wyszukiwanie, filtry, „pokaż więcej”, mobilne menu i odtwarzacze są komponentami React. Pozostałe treści powstają statycznie w Astro.

Odtwarzacz YouTube ładuje iframe z `youtube-nocookie.com` dopiero po kliknięciu materiału. Podcasty Opanuj.AI korzystają z natywnego odtwarzacza audio z oficjalnego RSS. Rozmowy z gośćmi prowadzą do konkretnych odcinków Spotify. Newsletter prowadzi do istniejącej publikacji Substack; strona nie zbiera adresów email i nie udaje zapisu.

## Źródła

Informacje i materiały zweryfikowano 1 października 2026. Lista źródeł i zakres ich wykorzystania są zapisane w [SOURCES.md](./SOURCES.md).

Projekt jest przygotowany do wdrożenia; samo utworzenie plików i sprawdzenie builda nie publikuje strony.
