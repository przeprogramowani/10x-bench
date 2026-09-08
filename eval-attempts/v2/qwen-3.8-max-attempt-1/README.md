# Przeprogramowani.pl — serwis V2 (Astro 7 + React 19 + Tailwind 4, Cloudflare Workers)

Nieoficjalna, samodzielnie zbudowana prezentacja projektu Przeprogramowani (kursy, podcasty,
YouTube) w języku polskim. Dane mediów (odcinki podcastów i filmy) są pobierane **po stronie
serwera** z publicznych feedów RSS/Atom w dedykowanych modułach źródeł danych
(`src/lib/sources/`), z walidacją, normalizacją, pamięcią podręczną i stanami awaryjnymi.

## Wymagania

- Node.js 22+ (testowano na v22.14.0), npm 10+.
- Konto Cloudflare **nie jest potrzebne** do lokalnego podglądu; potrzebne tylko przy przyszłym wdrożeniu.

## Instalacja (powtarzalna)

```bash
npm ci          # instalacja dokładnie z package-lock.json
```

Zainstalowane główne wersje (zgodne z zapisem operatora z 2026-09-08): `astro@7.3.1`,
`react@19.2.8` / `react-dom@19.2.8`, `tailwindcss@4.3.3`, adapter `@astrojs/cloudflare@14.3.0`
(peer: astro ^7.2.0), `@astrojs/react@6.0.5`, `wrangler@4.129.1` (dev).

## Build produkcyjny

```bash
npm run build   # = astro build; wynik: dist/client (zasoby) + dist/server (Worker)
```

Adapter `@astrojs/cloudflare` jest skonfigurowany w `astro.config.mjs`
(`adapter: cloudflare({ platformProxy: { enabled: true } })`, `output: 'server'`).
Build generuje konfigurację Workers w `dist/server/wrangler.json` (main: `entry.mjs`,
assets: `../client` z bindingiem `ASSETS`, KV `SESSION`, Images `IMAGES`) — konfiguracja
generowana przez adapter, ręczny plik Wrangler nie jest wymagany.

## Lokalny podgląd produkcyjny w runtime Workers

```bash
npm run workers:dev
# = wrangler dev --config dist/server/wrangler.json --port 8788 (port dowolny)
```

Serwer Workers (workerd) serwuje wszystkie trasy SSR i zasoby statyczne:
`/`, `/o-nas`, `/podcast`, `/podcast/opanuj-ai`, `/podcast/przeprogramowani`, `/youtube`, `/kursy`.

Adres witryny (canonical/OG) ustawia zmienna środowiskowa `SITE_URL` podczas buildu,
np. `SITE_URL=https://przyklad.example npm run build` (domyślnie `http://localhost:8788`).

## Zmienne środowiskowe i bindingi

- `SITE_URL` — bazowy adres witryny do canonical/OG (tylko czas buildu).
- Bindingi tworzone automatycznie przez adapter: `ASSETS` (assets), `SESSION` (KV, sesje Astro),
  `IMAGES` (Cloudflare Images). Dodatkowe bindingi nie są wymagane.
- Pobieranie feedów odbywa się przez `fetch` w Workerze (brak dodatkowych sekretów/API keys).

## Przyszłe wdrożenie na Cloudflare Workers (nie wykonywano w tej próbie)

```bash
npx wrangler login          # jednorazowo, na maszynie wdrażającej
npx wrangler deploy --config dist/server/wrangler.json
```

Polecenie publikuje Worker `przeprogramowani-pl` z zasobami z `dist/client`. W tej próbie
**celowo nie publikowano** żadnych zasobów zdalnych.

## Źródła danych i odporność na awarie

Moduły: `src/lib/sources/fetchers.ts` (pobieranie + walidacja + normalizacja RSS/Atom),
`src/lib/sources/loader.ts` (timeout 6 s, pamięć podręczna 5 min, fallback do snapshotu
z `src/data/cache/*.json` z oznaczeniem „nieaktualne", stan `unavailable` z linkiem do źródła),
`src/lib/sources/xml.ts` (parser), `src/lib/sources/index.ts` (definicje źródeł).
Snapshoty build-time aktualizuje `node --experimental-strip-types scripts/update-cache.mjs`.

Feedy: Opanuj.AI `https://anchor.fm/s/e2cb03d0/podcast/rss`, Przeprogramowani
`https://anchor.fm/s/c72d808/podcast/rss`, YouTube
`https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`.

Kontrolowana awaria źródła (test): dodaj parametr `?fail=1` do adresu strony z mediami,
np. `http://localhost:8788/youtube?fail=1` — moduł pomija pobranie na żywo i serwuje
snapshot z banerem o nieaktualności; strona pozostaje w pełni użyteczna (HTTP 200).

## Testy i weryfikacja

- `node --experimental-strip-types scripts/update-cache.mjs` — odświeżenie snapshotów.
- `NODE_PATH=<ścieżka do node_modules z playwright> node scripts/ui-check.mjs` — kontrola
  tras, SEO, przewijania poziomego (390/1440 px), nawigacji mobilnej i zrzutów ekranu
  (playwright używany tylko jako narzędzie deweloperskie, nie jest zależnością projektu).
- Dowody i wyniki: katalog `evidence/` oraz `VERIFICATION.md`.
