# VERIFICATION.md — samoweryfikacja próby (2026-09-08)

Start próby: 2026-09-08T07:29:49Z (zapis operatora). Wszystkie czasy poniżej w UTC.
Środowisko: macOS (darwin), Node v22.14.0, npm 10.9.2.
Katalog projektu: `site/`; dowody: `evidence/`; research: `research/`.

Legenda statusów: ✅ udane · ❌ nieudane · ⛔ zablokowane zewnętrznie · ⬜ niewykonane.

## 1. Zależności i build (P05)

| Sprawdzenie | Polecenie | Czas | Wynik | Kod wyjścia | Dowód |
| --- | --- | --- | --- | --- | --- |
| Instalacja zależności | `npm install --no-audit --no-fund` (w `site/`) | 07:37 | ✅ 291 pakietów | 0 | `evidence/npm-install.log` |
| Powtarzalna instalacja z lockfile | `npm ci --no-audit --no-fund` | 07:58 | ✅ 292 pakietów w 4 s | 0 | `evidence/npm-ci.log`, `site/package-lock.json` |
| Zainstalowane wersje | `npm ls astro react react-dom tailwindcss @astrojs/react @astrojs/cloudflare @tailwindcss/vite wrangler` | 07:54 | ✅ astro 7.3.1, react/react-dom 19.2.8, tailwindcss 4.3.3 — dokładnie główne wersje z BASELINE.md, bez prerelease | 0 | `evidence/versions.log` |
| Build produkcyjny (finalny) | `SITE_URL=http://localhost:8795 npm run build` | 07:59 | ✅ „7 page(s) built", adapter @astrojs/cloudflare | 0 | `evidence/build.log` |
| Build z wymuszoną awarią źródła | `FORCE_SOURCE_FAILURE=youtube npm run build` | 07:53 | ✅ build przechodzi mimo awarii źródła | 0 | `evidence/failure-test-build.log` |

## 2. Lokalny podgląd Workers i wymagane trasy (P01/P06)

Serwer: `npx wrangler dev --config dist/client/wrangler.json --port 8795 --ip 127.0.0.1`
(runtime workerd; konfiguracja wygenerowana przez adapter + scalony `site/wrangler.jsonc`).

| Trasa | Status (bez przekierowania) | Z końcowym ukośnikiem |
| --- | --- | --- |
| `/` | 200 ✅ | — |
| `/o-nas` | 200 ✅ | `/o-nas/` → 307 → 200 ✅ |
| `/podcast` | 200 ✅ | 307 → 200 ✅ |
| `/podcast/opanuj-ai` | 200 ✅ | 307 → 200 ✅ |
| `/podcast/przeprogramowani` | 200 ✅ | 307 → 200 ✅ |
| `/youtube` | 200 ✅ | 307 → 200 ✅ |
| `/kursy` | 200 ✅ | 307 → 200 ✅ |
| asset `/_astro/*.css` | 200 ✅ | — |

Dowody: `evidence/routes-check.log` (ostateczne sprawdzenie 07:59:29Z), `evidence/wrangler-dev.log`.
Uwaga: `html_handling: drop-trailing-slash` — adresy z tabeli zadania zwracają 200 bezpośrednio,
warianty z ukośnikiem przekierowują 307 na formę bez ukośnika (200 po podążeniu).

Zdarzenia zewnętrzne (nie implementacja):
- ⛔ Port 8788 był zajęty przez obcy proces `workerd` (nie należący do tej próby), dlatego
  podgląd działa na porcie 8795; `SITE_URL` buildu ustawiono spójnie na `http://localhost:8795`.
- ⛔ O 07:46 obcy proces na maszynie wykonał `pkill -f "wrangler dev"`, co zabiło mój serwer
  podglądu; uruchomiłem go ponownie (widoczne w historii `evidence/wrangler-dev.log`).
- ❌→✅ Pierwsze uruchomienie `wrangler dev` po przebudowaniu `dist` zakończyło się błędem
  stanu emulacji bindingu Images („Directory named images:storage not found") — znany problem
  wranglera; restart serwera rozwiązał problem, finalna weryfikacja tras przeszła.

## 3. Research (P02/P03)

| Sprawdzenie | Czas | Wynik | Dowód |
| --- | --- | --- | --- |
| Oficjalna strona przeprogramowani.pl | 07:31 | ✅ HTTP 200, treść zapisana | `research/przeprogramowani-pl.html` |
| Strona kursów: 10xdevs.pl, opanujfrontend.pl, opanujtypescript.pl, opanuj.ai | 07:33 | ✅ wszystkie HTTP 200 | `research/NOTES.md` (sekcja Course URLs) |
| Sylwetki założycieli (opanuj.ai → „nasz zespół") | 07:38 | ✅ Przemek Smyrdek (Co-Founder, Engineering Manager; DAZN, Cabify) i Marcin Czarkowski (Co-Founder, Lead Software Engineer; SmartRecruiters) | `research/opanuj-ai.html`, `research/NOTES.md` |
| Kanał YouTube + identyfikator | 07:31 | ✅ `UCb2Y3vMeD6N4WDt5Acw7Arw` (canonical strony kanału) | `research/youtube-channel.html` |
| Feed YouTube RSS | 07:32 | ✅ 15 entry, najnowszy 2026-09-02 | `research/youtube-feed.xml` |
| Feed Opanuj.AI (RSS, odkryty przez iTunes Search API) | 07:33 | ✅ 53 itemy, najnowszy 2026-09-03 | `research/feed-opanujai.xml`, `research/itunes-opanujai.json` |
| Feed podcastu Przeprogramowani (iTunes Search API) | 07:34 | ✅ 98 itemów, najnowszy 2025-09-25 (poza oknem 90 dni — patrz niżej) | `research/feed-przeprogramowani.xml`, `research/itunes-search2.json` |
| Martwy feed legacy `anchor.fm/s/22544b7c` z witryny | 07:32 | ✅ zdiagnozowany 404, nieużywany | `research/NOTES.md` |

Adresy źródeł i czasy pobrania zachowane w `research/NOTES.md` oraz w snapshotach
`site/src/data/cache/*.json` (pole `fetchedAt`), a adresy feedów także w `site/src/lib/sources.ts`.

## 4. Media: zawartość, odnośniki, odtwarzanie (P03)

Sprawdzenia HTML serwowanego przez Workers (`evidence/content-check.log`, 07:49) oraz
w headless Chromium (`evidence/ui-verification.json`, 07:56; skrypt `site/scripts/verify-ui.mjs`):

| Źródło | Wybór | Odtwarzanie | Linki indywidualne |
| --- | --- | --- | --- |
| Opanuj.AI | ✅ 3 odcinki z okna 90 dni (03.09.2026, 05.08.2026, 01.07.2026), status „live" | ✅ 3× `<audio controls>`; **realne odtwarzanie potwierdzone**: `play()` → `playing=true, currentTime=2.42 s, readyState=4`; CDN audio odpowiada (302 → plik) | ✅ 3 unikalne linki do konkretnych odcinków (podcasters.spotify.com/.../episodes/...) |
| Przeprogramowani (podcast) | ✅ źródło nie opublikowało nic w oknie 90 dni → 3 najnowsze odcinki z rzeczywistymi datami (25.09.2025 itd.) + widoczna informacja na stronie („nie opublikowało nowych materiałów w ciągu ostatnich 90 dni") | ✅ 3× `<audio controls>` z enclosure feedu | ✅ 3 unikalne linki do odcinków |
| YouTube | ✅ 6 filmów z okna 90 dni (02.09.2026 …), status „live" | ✅ 6× osadzony iframe `youtube-nocookie.com/embed/<id>`; strona embedu zwraca HTTP 200 (sprawdzone dla `cKU4jlaUnZc`) | ✅ 6 unikalnych linków `youtube.com/watch?v=...` |

Każdy element ma tytuł, identyfikację źródła, datę (lub „data publikacji nieznana" przy braku)
i niezależny od odtwarzacza link „Otwórz oryginał". Atrapy `href="#"`: 0 (sprawdzone grepem).

Ograniczenie (uczciwie): odtwarzanie wideo **wewnątrz** iframe YouTube nie było weryfikowane
interaktywnie w headless (cross-origin + autoplay policy); zweryfikowano obecność poprawnych
embedów, HTTP 200 strony embedu oraz realne odtwarzanie audio podcastu.

## 5. Źródła danych i odporność (P04)

- ✅ Pobieranie wyłącznie server-side w dedykowanym module `site/src/lib/sources.ts`
  (fetch + timeout 10 s przez `AbortSignal.timeout`, walidacja struktury — brak `<item>`/`<entry>`
  lub brak tytułu/linku rzucana jako błąd, normalizacja do `MediaItem`/`SourceResult`).
  Komponenty (`.astro`) tylko prezentują dane. W przeglądarce nie ma żadnego pobierania feedów.
- ✅ Ścieżka live: build 07:59 pobrał wszystkie 3 źródła — na stronach znacznik
  „Dane pobrane na żywo" z adresem feedu i datą (sprawdzone grepem po HTML z Workers).
- ✅ Kontrolowana awaria (07:53): `FORCE_SOURCE_FAILURE=youtube npm run build`
  → build exit 0, log `[sources] youtube: pobieranie nieudane (Kontrolowana awaria źródła...)
  — używam pamięci podręcznej`; strona `/youtube` wyświetla 6 pozycji ze snapshotu cache
  z oznaczeniem „Źródło było niedostępne podczas budowania … dane z pamięci podręcznej —
  mogą być nieaktualne (stan z …)" i linkiem do źródła; pozostałe źródła bez zmian („live").
  Dowody: `evidence/failure-test-build.log`, `evidence/failure-test-html.log`.
  Pierwsza próba testu (07:50) ❌ nie zadziałała, bo `process.env` jest pusty w sandboxie
  workerd podczas prerenderu — poprawiono przez build-time `define` w `astro.config.mjs`;
  udany powtórzony test udokumentowany powyżej.
- ✅ Ścieżka „unavailable" (brak cache) zaimplementowana w module i komponencie
  `SourceStatus.astro`; ⬜ nie testowana end-to-end osobnym buildem (wymagałoby usunięcia
  snapshotów) — logika wspólna z przetestowaną ścieżką błędu.

## 6. Wygląd, dostępność, SEO (P07)

Automatyczne sprawdzenia headless Chromium (`evidence/ui-verification.json`, zrzuty w
`evidence/screenshots/` — 15 plików):

- ✅ Brak poziomego przewijania na **wszystkich 7 trasach** przy 390 px i 1440 px
  (`scrollWidth == clientWidth` w każdym pomiarze).
- ✅ Nawigacja mobilna: przycisk widoczny, klik otwiera (`aria-expanded=true`, 5 linków),
  Escape zamyka (`aria-expanded=false`, menu usuwane z DOM), pierwszy link prowadzi do `/o-nas`;
  obsługa myszy i klawiatury; zdarzenia touch zarejestrowane (click/touchstart outside-close).
- ✅ Fokus klawiatury: na sfokusowanym przycisku menu `outline: 3px solid` (globalny
  `:focus-visible` w `global.css`).
- ✅ SEO (każda z 7 tras, `evidence/seo-check.log`): dokładnie 1× `<h1>`, unikalny `<title>`,
  meta description, `rel=canonical` z konfigurowalnego `SITE_URL` (build z
  `SITE_URL=http://localhost:8795`), komplet `og:title/og:description/og:url` (po 1 na trasę),
  `<html lang="pl">`.
- ✅ Alternatywy/etykiety: iframe'y mają `title`, przycisk menu `aria-label` + `aria-controls`,
  link „skip to content", `aria-label` na linkach „Otwórz oryginał"; strona nie użyuje obrazów
  dekoracyjnych wymagających `alt` (jedyna grafika to ikona SVG z `aria-hidden="true"`).
- ⬜ Ostateczna akceptacja wizualna przez człowieka (spójność UI) — poza możliwościami próby;
  zrzuty ekranu desktop/mobile wszystkich tras dostarczone jako podstawa do tej oceny.
  Wizualna inspekcja zrzutów przez autora próby (08:03): `mobile-390_home.png` (hero 10xDevs,
  menu hamburger, brak ucięć) i `desktop-1440_youtube.png` (osadzone odtwarzacze YouTube
  renderują miniatury i przycisk odtwarzania, spójna typografia i nawigacja) — układ spójny.

## 7. Workers readiness (P06)

- ✅ Adapter `@astrojs/cloudflare@14.3.0` zainstalowany (peer `astro ^7.2.0` spełniony przez 7.3.1)
  i aktywny w `site/astro.config.mjs`; build loguje „adapter: @astrojs/cloudflare".
- ✅ Wygenerowana konfiguracja `dist/client/wrangler.json` (assets=`dist/client`,
  `html_handling: drop-trailing-slash` z `site/wrangler.jsonc`); podgląd lokalny działa
  w runtime workerd (sekcja 2).
- ✅ README (korzeń próby) zawiera polecenia instalacji/buildu/podglądu/wdrożenia
  (`wrangler deploy --config dist/client/wrangler.json`), zmienne (`SITE_URL`,
  `FORCE_SOURCE_FAILURE`) i informację o bindingach (brak wymaganych); wskazuje Workers, nie Pages.
- ✅ Zakaz publikacji zachowany: nie wykonano żadnego polecenia tworzącego zasoby zdalne
  (tylko `wrangler dev` lokalnie).

## 8. Podsumowanie stanu końcowego

- Build finalny: ✅ exit 0 (07:59:10Z), 7 stron.
- Podgląd Workers na `http://localhost:8795`: ✅ wszystkie 7 wymaganych tras 200 (07:59:29Z),
  serwer pozostawiony uruchomiony (pid 29916).
- Znane ograniczenia: (1) brak interaktywnej weryfikacji odtwarzania wideo w iframe YouTube
  w headless; (2) ścieżka „unavailable bez cache" nieprzetestowana end-to-end; (3) akceptacja
  wizualna człowieka niewykonana (dostarczono zrzuty); (4) port 8788 zajęty przez obcy proces —
  podgląd na 8795; (5) podcast Przeprogramowani nie ma publikacji w oknie 90 dni — pokazano
  najnowsze materiały z rzeczywistymi datami zgodnie z regułą zadania.
