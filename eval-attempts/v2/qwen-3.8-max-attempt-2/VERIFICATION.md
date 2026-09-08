# VERIFICATION.md — samoweryfikacja próby (P08)

Start próby (operator): **2026-09-08T07:29:49Z**. Wszystkie sprawdzenia wykonano 2026-09-08 między ~07:31 a ~08:10 UTC (czasy lokalne w logach: CEST = UTC+2). Katalog próby: `eval-attempts/v2/qwen-3.8-max-attempt-2`.

Legenda: ✅ udane · ❌ nieudane · ⚠️ częściowe/ograniczone · 🚫 niewykonane (z przyczyn).

## 1. Zainstalowane wersje i build (P05)

- ✅ `npm install` (07:31–07:32 UTC, exit 0) — `package-lock.json` zapisany (powtarzalna instalacja: `npm ci`).
  Ostrzeżenie (niebłędne): `EBADENGINE undici@8.10.2` wymaga node >=22.19.0, środowisko ma 22.14.0 — nie wpłynęło na build ani preview.
- ✅ Faktycznie zainstalowane wersje (`npm ls --depth=0`, exit 0; zrzut: `evidence/logs/installed-versions.txt`):
  - `astro@7.3.1` (major 7 = zapis operatora, bez prerelease)
  - `react@19.2.8`, `react-dom@19.2.8` (major 19)
  - `tailwindcss@4.3.3`, `@tailwindcss/vite@4.3.3` (major 4)
  - `@astrojs/react@6.0.5`, `@astrojs/cloudflare@14.3.0` (peer `astro ^7.2.0` ✓), `wrangler@4.129.1` (peer `^4.125.0` ✓)
- ✅ **Build produkcyjny finalny**: `npm run build` 08:04:16 UTC, **exit 0**, „7 page(s) built", „Complete!". Log: `evidence/logs/build-final.log`.
  - Wszystkie 3 źródła pobrane na żywo podczas buildu: `[data] youtube: OK, 15 elementów…6 wyświetlanych`, `[data] opanuj-ai: OK, 53…3 wyświetlanych`, `[data] przeprogramowani-podcast: OK, 98…6 wyświetlanych (poza oknem 90 dni — najnowsze dostępne)`.
- ⚠️ Znane ograniczenie środowiska próby: proces buildu działa w sandboxie (`cwd=/bundle`) bez prawa zapisu poza `dist/` i bez dziedziczenia niektórych zmiennych env, dlatego odświeżanie cache w buildzie jest best-effort (warning), a kanoniczną ścieżką zapisu `data/cache/*.json` jest `npm run seed-cache` (shell). Nie wpływa na wynik buildu ani na dane stron.
- Historia buildów: `evidence/logs/build-01..04.log` (w tym ❌ build-03: błąd parsera JSON — samotny surrogat po `slice()` opisu; naprawione przez `stripLoneSurrogates`, patrz build-04 ✅).

## 2. Lokalny podgląd Workers i wymagane adresy (P01/P06)

- ✅ `npx wrangler dev --config dist/client/wrangler.json --port 8794 --ip 127.0.0.1` (08:02 UTC) — runtime workerd, „Ready on http://127.0.0.1:8794", bindingi dev `SESSION` (KV) i `IMAGES` emulowane lokalnie. Log: `evidence/logs/wrangler-dev-8794.log`.
- ✅ Wszystkie 7 wymaganych adresów — kody HTTP (pełny zapis: `evidence/logs/content-check.log`):

| Adres | direct | z przekierowaniem | z końcowym `/` |
| --- | --- | --- | --- |
| `/` | 200 | 200 | 307→200* |
| `/o-nas` | 307→200 | 200 | 200 |
| `/podcast` | 307→200 | 200 | 200 |
| `/podcast/opanuj-ai` | 307→200 | 200 | 200 |
| `/podcast/przeprogramowani` | 307→200 | 200 | 200 |
| `/youtube` | 307→200 | 200 | 200 |
| `/kursy` | 307→200 | 200 | 200 |

  *`//` nie jest wymagane; `/` bez ukośnika zwraca 200, wariant `http://host//` to artefakt konkatenacji w skrypcie. 307 to standardowe przekierowanie assetów Workers do formy katalogowej (`/o-nas/`) — po podążeniu za przekierowaniem każda strona zwraca 200 i właściwy HTML.
- ✅ Zasoby: `/_astro/*.css` → 200, `/_astro/MobileNav.*.js` → 200.
- ✅ **Powtórzone na finalnym buildzie** (08:07:25 UTC, port 8795, log: `evidence/logs/routes-final-check.log`): 7/7 tras 200 (direct lub po 307 do formy z `/`), a `/youtube` ma status `fresh` z czasem pobrania 08:04 UTC (po przywróceniu `FORCE_FAIL=[]`).
- ✅ Snapshoty HTML wszystkich 7 stron z podglądu Workers: `evidence/pages/*.html`.
- ⚠️ Port 8787 był zajęty przez inny proces w środowisku, dlatego sprawdzenia wykonano na porcie 8793/8794; w README port jest parametrem polecenia.

## 3. Research, odnośniki i odtwarzanie (P02/P03)

- ✅ Research 07:31–07:40 UTC (curl): `przeprogramowani.pl`, `/o-nas`, `/podcast`, HTML kanału YouTube, iTunes Search API, 3 feedy. Dowody: `evidence/research.md` + zrzuty `evidence/research/*-snapshot.*` z czasami pobrania. Adresy feedów i czas pobrania zachowane też w `data/cache/*.json` (`fetchedAt`, `feedUrl`) i `src/data/sources.ts`.
- ✅ YouTube: channel_id `UCb2Y3vMeD6N4WDt5Acw7Arw` potwierdzony tytułem feedu „Przeprogramowani". Wyświetlane 6 filmów, najnowsze: 2026-09-02 (`cKU4jlaUnZc`), 2026-08-31 (`1agLBxJskps`) — w oknie 90 dni. Każdy element: tytuł, nazwa źródła, data, link `youtube.com/watch?v=…`, osadzony odtwarzacz iframe `youtube-nocookie.com/embed/…` (6 iframe w `evidence/pages/youtube.html`).
- ✅ Opanuj.AI Podcast (RSS `anchor.fm/s/e2cb03d0/podcast/rss`): 3 odcinki w oknie 90 dni (2026-09-03, 2026-08-05, 2026-07-01) — feed jest comiesięczny, więc to pełny wybór z okna. Każdy: tytuł, źródło, data, `<audio controls>` z enclosure MP3, niezależny link do odcinka na `podcasters.spotify.com` (3 elementy `<audio>` w snapshocie).
- ✅ Podcast Przeprogramowani (RSS `anchor.fm/s/c72d808/podcast/rss`): **brak publikacji w oknie 90 dni** (najnowszy odcinek 2025-09-25) — zgodnie z P03 wyświetlono 6 najnowszych dostępnych odcinków z rzeczywistymi datami + jawny komunikat „Źródło nie opublikowało nowych materiałów w ostatnich 90 dniach…" (obecny w snapshocie; reguła udokumentowana w `evidence/research.md`).
- ⚠️ Odtwarzanie: zaimplementowane (natywne `<audio controls preload="none">` z URL-i enclosure z feedu; YouTube iframe). **Nie odtwarzano dźwięku/wideo w prawdziwej przeglądarce** — w środowisku próby brak narzędzia browserowego; brak zrzutów ekranu odtwarzacza. Pliki enclosure i embedy pochodzą z oficjalnych feedów/API dostawców; komponent audio ma obsługę błędu (`onError` → komunikat + zachowany link).
- ✅ Treść: sylwetki założycieli, opisy kursów i podcastów przepisane/zweryfikowane względem oficjalnych stron (fakty i cytaty w `evidence/research.md`); brak zmyślonych danych, brak CTA z `href="#"` (sprawdzenie: `grep -c 'href="#"' evidence/pages/*.html` → 0 we wszystkich).

## 4. Widoki desktop/mobile (P07)

- 🚫 **Nie wykonano** pomiarów w przeglądarce przy 390 px i 1440 px (brak browser toolingu w środowisku; instalacja Playwright/Chromium przekraczała pozostały czas). Nie przedstawiam tego jako sprawdzonego wizualnie.
- ⚠️ Zamiast tego weryfikacja na poziomie kodu i HTML:
  - `meta viewport` obecny na wszystkich stronach (`evidence/pages/*.html`).
  - Layout: `max-w-6xl mx-auto px-4` (kontenery płynne), siatki `grid sm:/md:/lg:` (kolumny zwijają się na mobile), brak elementów o stałej szerokości >390 px; iframe YouTube w kontenerze aspect-ratio (`padding-top:56.25%`, `w-full`); długie URL-e: `break-all` w notice źródła.
  - Nawigacja mobilna: komponent React `MobileNav` (widoczny <768 px) — przycisk `aria-expanded`/`aria-controls`, zamykanie Escape, focus przenoszony do menu, `:focus-visible` z widocznym outlinem (globalny CSS). Działanie myszą/dotykiem/klawiaturą wynika z semantyki `<button>`+`onClick` i obsługi klawiatury — **nie klikane w prawdziwej przeglądarce w trakcie próby**.
  - Obrazy: strona nie używa `<img>` treściowych (miniatury YT są w iframe dostawcy; awatary to inicjały z `aria-hidden`), więc wymóg alt-tekstów jest spełniony przez brak obrazów dekoracyjnych bez a11y — ikony SVG mają `aria-hidden="true"`.

## 5. SEO (P07)

- ✅ Automatyczne sprawdzenie wszystkich 7 stron (skrypt w `evidence/logs/content-check.log`): każda strona ma **dokładnie 1 `<h1>`**, unikalny `<title>`, `meta description`, `rel="canonical"` oparty na `SITE_URL` (domyślnie `https://przeprogramowani.pl`; konfigurowalność potwierdzona buildem z `SITE_URL=https://envtest.example` → canonical `https://envtest.example/` w `dist/client/index.html`) oraz komplet `og:title/og:description/og:url/og:type/og:site_name/og:locale` zgodny z treścią strony. `<html lang="pl">` na wszystkich stronach.

## 6. Kontrolowana awaria źródła (P04)

- ✅ Eksperyment 08:03:51 UTC: `src/data/failure-injection.ts` → `FORCE_FAIL=['youtube']`, `npm run build` (exit 0, log: `evidence/failure-experiment/build-force-fail-youtube.log`).
  - Obserwacje (`evidence/failure-experiment/observations.log`, snapshot `youtube-page-stale.html`):
    - build nie przerwał się: `[data] youtube: Kontrolowana awaria… — sięgam do pamięci podręcznej`, `fallback na cache z 2026-09-08T07:57:31.625Z (6 elementów)`;
    - strona `/youtube` pokazała oznaczenie nieaktualności: „**Nieaktualne dane z pamięci podręcznej** … lista pochodzi z cache zapisanego 8 września 2026 07:57 UTC" + link do źródła;
    - linki do konkretnych filmów zachowane;
    - pozostałe źródła pobrane na żywo bez zmian (`opanuj-ai: OK`, `przeprogramowani-podcast: OK`) — awaria jednego źródła nie wyłączyła strony.
  - Po eksperymencie `FORCE_FAIL=[]` przywrócone i wykonano finalny czysty build (08:04:16 UTC, `evidence/logs/build-final.log`) — strona `/youtube` znów ze statusem `fresh` („Dane pobrane server-side 8 września 2026 08:04 UTC…").
- ✅ Ścieżka `unavailable` (brak cache + błąd) zaimplementowana w `loader.ts` i `SourceNotice.astro` (komunikat + link do źródła); nie była osobno uruchamiana buildem — stan cache istniał podczas eksperymentu (uczciwe ograniczenie).
- ⚠️ Mechanizm env (`FORCE_FAIL_SOURCES`, `SOURCE_URL_*`) działa dla procesu buildu uruchamianego normalnie; w sandboxie tego środowiska zmienne env nie docierały do procesu prerenderu, dlatego główną ścieżką eksperymentu był plik konfiguracyjny (udokumentowano w README).

## 7. Podsumowanie stanu końcowego

- Build: ✅ exit 0, 7 stron. Preview Workers: ✅ 7/7 tras 200 (po przekierowaniu do formy z `/`). Dane mediów: ✅ żywe z 3 źródeł, reguła 90 dni + fallback „najnowsze dostępne" zastosowana i oznaczona.
- Znane ograniczenia: brak przeglądarkowych testów wizualnych 390/1440 px i brak realnego odtworzenia mediów (pkt 3–4: 🚫/⚠️); sandbox buildu blokuje zapis cache w trakcie `astro build` (obsłużone przez `seed-cache`).
- Publikacja zdalna: nie wykonano (zgodnie z zakazem); nie użyto konta Cloudflare.
