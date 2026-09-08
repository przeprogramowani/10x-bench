# VERIFICATION.md — samoweryfikacja próby (10xBench V2)

Start próby: 2026-09-08T07:29:49Z. Wszystkie czasy poniżej w UTC (polecenie `date -u`).
Katalog dowodów: `evidence/` (logi, JSON, zrzuty ekranu), surowe odpowiedzi źródeł: `research/`.
Środowisko: macOS (darwin), Node v22.14.0, npm 10.9.2.

## 1. Zainstalowane wersje i powtarzalna instalacja — UDANE

- `npm install --no-audit --no-fund` → exit 0, „added 292 packages in 7s” (2026-09-08 ~07:39Z).
  Log: `evidence/npm-install.log`. Lockfile: `package-lock.json` (commitowany w katalogu próby).
- `npm ls astro react react-dom tailwindcss @astrojs/cloudflare @astrojs/react wrangler --depth=0`
  → exit 0; wynik w `evidence/versions.log`:
  astro@7.3.1, react@19.2.8, react-dom@19.2.8, tailwindcss@4.3.3, @astrojs/cloudflare@14.3.0,
  @astrojs/react@6.0.5, wrangler@4.129.1. Zgodne z zapisem operatora (majory 7/19/4, bez prerelease).

## 2. Build produkcyjny — UDANE (po jednej poprawce)

- Pierwszy build (~07:42Z) exit 1: `UNRESOLVED_IMPORT ../layouts/Layout.astro` w
  `src/pages/podcast/index.astro` (błędna względna ścieżka). Log: `evidence/build.log` (nadpisany
  kolejnym udanym buildem; błąd widoczny też w historii poprawki pliku).
- `SITE_URL=http://localhost:8788 npm run build` → exit 0 (~07:43Z), log `evidence/build.log`.
- Build finalny po wszystkich zmianach źródłowych: `SITE_URL=http://localhost:8788 npm run build`
  → exit 0 o 07:51Z, log `evidence/build-final.log` („[build] Complete!”, „Server built in …”).
  Artefakty: `dist/client` (zasoby) + `dist/server` (Worker `entry.mjs`) +
  `dist/server/wrangler.json` (konfiguracja generowana przez adapter: main `entry.mjs`,
  assets `../client` binding `ASSETS`, KV `SESSION`, Images `IMAGES`, compatibility_date 2026-09-07).

## 3. Lokalny podgląd produkcyjny w runtime Workers — UDANE

- `npx wrangler dev --config dist/server/wrangler.json --port 8788` → „Ready on
  http://localhost:8788” (logi: `evidence/wrangler-dev.log`, po finalnym buildzie
  `evidence/wrangler-dev-final.log`). Serwer to workerd (runtime Workers), nie dev-server Astro.
- Kody odpowiedzi (curl, 07:52Z, log `evidence/routes-final.log`):
  `/` 200, `/o-nas` 200, `/podcast` 200, `/podcast/opanuj-ai` 200,
  `/podcast/przeprogramowani` 200, `/youtube` 200, `/kursy` 200.
  Wcześniej (~07:47Z, `evidence/routes-check.log`) dodatkowo warianty z ukośnikiem
  `/podcast/` 200 i `/kursy/` 200.
- Zasoby statyczne serwowane przez Workers: strony zawierają `/_astro/*.css|js` (widoczne w
  `evidence/page-*.html`); adapter wstrzyknął `_headers` z Cache-Control dla `/_astro/*`.

## 4. Research treści i mediów — UDANE

Dowody: `research/NOTES.md` (adresy + fakty + czas pobrania ~07:31–07:38Z) oraz surowe pliki:
`research/home.html`, `research/podcast.html`, `research/opanuj-ai.html`, `research/yt.html`,
`research/yt-feed.xml`, `research/rss-opanujai.xml`, `research/rss-przeprogramowani.xml`.
- Strona oficjalna i /o-nas: misja, wartości, 7 lat działalności, klienci; sylwetki założycieli
  (Przemek Smyrdek, Marcin Czarkowski) przepisane własnymi słowami ze źródła oficjalnego.
- Kursy z oficjalnymi adresami: 10xDevs https://10xdevs.pl, Opanuj Frontend
  https://www.opanujfrontend.pl, Opanuj TypeScript https://www.opanujtypescript.pl.
- Feed RSS podcastów rozwiązany przez publiczny iTunes Search API (media=podcast, country=PL):
  Opanuj.AI id 1690353799 → `https://anchor.fm/s/e2cb03d0/podcast/rss`; Przeprogramowani
  id 1471770526 → `https://anchor.fm/s/c72d808/podcast/rss`. Uwaga: legacy feed
  `https://anchor.fm/s/22544b7c/podcast/rss` linkowany z oficjalnej strony zwraca 404 „Not Found”
  (ograniczenie źródła, udokumentowane; użyto aktualnych feedów).
- YouTube: channelId `UCb2Y3vMeD6N4WDt5Acw7Arw` z `research/yt.html`; feed Atom pobrany (15 wpisów).
- Reguła 90 dni (okno od 2026-06-10): Opanuj.AI ma odcinki w oknie (03.09.2026, 05.08.2026,
  01.07.2026) → strona pokazuje 3; YouTube ma filmy w oknie (02.09, 31.08, 29.08.2026…) → 8;
  podcast Przeprogramowani nie publikował w oknie (najnowszy 25.09.2025) → zgodnie z P03
  pokazano 8 najnowszych dostępnych odcinków z rzeczywistymi datami + baner informacyjny.

## 5. Odnośniki i odtwarzanie — UDANE (z ograniczeniami headless)

- `evidence/page-opanuj-ai.html`: 3 karty odcinków, 3 elementy `<audio controls>` z prawdziwymi
  plikami mp3 z enclosure feedu, linki do oryginałów
  (`podcasters.spotify.com/pod/show/opanujai/episodes/...`), baner „Dane pobrane na żywo”.
- `evidence/page-podcast-przeprogramowani.html`: 8 kart, 8 odtwarzaczy audio, daty `<time>`
  (25.09.2025, 10.09.2025, 10.10.2024…).
- `evidence/page-youtube.html`: 8 kart z iframe `youtube-nocookie.com/embed/<id>` + linki
  `watch?v=…`. Zrzut `evidence/screenshots/desktop-1440_youtube.png`: pierwszy embed załadował
  miniaturę i przycisk odtwarzania (dowód działania osadzenia); embedy poniżej progu przewinięcia
  mają `loading="lazy"`, więc na zrzucie fullPage są czarne — to zachowanie lazy-load, nie błąd;
  każdy materiał ma niezależny link „Otwórz oryginał”.
- Ograniczenie: w headless Chromium nie weryfikowano słyszalnego dźwięku (brak wyjścia audio);
  dowodem odtwarzania są poprawne elementy `<audio>`/iframe z prawdziwymi URL mediów.

## 6. Widoki desktop/mobile i nawigacja — UDANE

- `NODE_PATH=/Users/psmyrdek/dev/10x-bench/node_modules node scripts/ui-check.mjs` → exit 0
  (log `evidence/ui-check.log`, dane `evidence/ui-check.json`, 15 zrzutów w
  `evidence/screenshots/`). Dla 7 tras × 390 px i 1440 px: HTTP 200, brak poziomego przewijania
  (`scrollWidth <= innerWidth`), dokładnie 1 H1, brak niewidocznych przycisków.
- Nawigacja mobilna (390 px): otwarcie kliknięciem (4 linki), zamknięcie Escape, osiągnięcie
  przycisku klawiszem Tab (3. tab-stop) z widocznym fokusem (`outline`), otwarcie klawiszem Enter.
  Zrzut menu: `evidence/screenshots/mobile-390_nav-open.png`.
- Ocena wizualna wykonana przez operatora próby na zrzutach `mobile-390_.png` i
  `desktop-1440_youtube.png`: spójna typografia, kolory i kontrolki; hero z wyróżnionym kursem
  10xDevs i CTA; brak ucięć treści.

## 7. SEO — UDANE

- `evidence/ui-check.json`: dla każdej z 7 tras `lang="pl"`, unikalny `<title>`, unikalny meta
  description, `rel=canonical` = SITE_URL + ścieżka, `og:title`, `og:description`, `og:url`
  zgodne z treścią; po jednym H1. Zmienność `SITE_URL` potwierdzona buildem z
  `SITE_URL=http://localhost:8788` (canonical w HTML = `http://localhost:8788/…`).

## 8. Kontrolowana awaria źródła — UDANE

- Mechanizm: parametr `?fail=1` na stronach mediów wymusza w module `loader.ts` pominięcie
  pobrania na żywo (ścieżka identyczna jak przy prawdziwym błędzie fetch/timeout).
- `curl http://localhost:8788/youtube?fail=1` → HTTP 200; HTML (`evidence/fail-youtube.html`)
  zawiera baner „Źródło jest chwilowo niedostępne (Symulowana awaria źródła…)”, dane z pamięci
  podręcznej z 07:37Z oznaczone jako mogące być nieaktualne, 8 embedów i linki zachowane.
- Analogicznie `evidence/fail-opanuj-ai.html` (3 odtwarzacze audio z cache) i
  `evidence/fail-podcast-przeprogramowani.html` (8 odtwarzaczy). Strony nie zwracają błędu i nie
  pokazują fikcyjnych danych — snapshoty pochodzą z realnego pobrania (skrypt update-cache).
- Ścieżka „na żywo” potwierdzona osobno: baner „Dane pobrane na żywo ze źródła …” w
  `evidence/page-*.html` przy działającej sieci.

## 9. Ograniczenia i pozostałe uwagi

- Brak publikacji zdalnej — zgodnie z zakazem; gotowość Workers oceniana lokalnie.
- Feed `anchor.fm/s/22544b7c/...` z oficjalnej strony jest martwy (404) — użyto feedów
  rozwiązanych przez iTunes API; ograniczenie źródła, nie implementacji.
- Odtwarzanie dźwięku/wideo potwierdzone elementami odtwarzaczy i załadowanym embedem YT,
  nie nagraniem audio (headless).
- Playwright użyty wyłącznie jako narzędzie weryfikacyjne z istniejącego node_modules
  workspace’u (nie dodano go do zależności projektu).
- Serwer `wrangler dev` pozostawiony uruchomiony na porcie 8788 do chwili zamrożenia próby.
