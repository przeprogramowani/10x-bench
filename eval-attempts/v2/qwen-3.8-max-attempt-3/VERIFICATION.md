# VERIFICATION.md — samoweryfikacja próby (10xBench V2)

Start próby: 2026-09-08T07:29:49Z. Wszystkie czasy poniżej w UTC (logi Astro/wrangler w czasie lokalnym CEST = UTC+2).
Katalog próby: `eval-attempts/v2/qwen-3.8-max-attempt-3`. Dowody: `evidence/`, `research/`.

## 1. Zainstalowane wersje i build (P05)

- Polecenie: `npm ls astro react react-dom tailwindcss @astrojs/cloudflare @astrojs/react wrangler fast-xml-parser --depth=0` (~07:58Z, exit 0) — wynik: `evidence/installed-versions.txt`.
  - **astro 7.3.1** (major 7 ✓), **react 19.2.8 / react-dom 19.2.8** (major 19 ✓), **tailwindcss 4.3.3** + `@tailwindcss/vite` 4.3.3 (major 4 ✓), `@astrojs/cloudflare` 14.3.0, `@astrojs/react` 6.0.5, `wrangler` 4.129.1, `fast-xml-parser` 5.11.1. Wszystkie wersje stabilne, zgodne z zapisem operatora w `BASELINE.md` (2026-09-08T07:29:49Z).
  - Lockfile `package-lock.json` zapisany; **`npm ci` uruchomione (08:04:10Z, exit 0, log `evidence/npm-ci.log`, „found 0 vulnerabilities") — powtarzalna instalacja potwierdzona**. Finalny build po `npm ci`: `npm run build` (08:04:19Z, exit 0, log `evidence/build-final.log`, 7 stron, wszystkie źródła `fresh`).
- Polecenie: `npm run build` (07:58:35Z–07:58:37Z CEST w logu, exit 0) — log: `evidence/build-fresh.log`.
  - Obserwacje: `output: "static"`, `adapter: @astrojs/cloudflare`, **7 page(s) built**, `Complete!`. Wszystkie 3 źródła danych pobrane z sieci ze statusem `fresh` (linie `[data]` w logu).
  - Artefakty: `dist/client/` (7 stron `index.html`, `_astro/*`, `favicon.svg`, wygenerowany `dist/client/wrangler.json` z bindingami `SESSION` KV i `IMAGES`, `assets.directory: "."`).

## 2. Lokalny podgląd Workers i wymagane adresy (P01, P06)

- Polecenie: `npx wrangler dev --port 8787` z katalogu projektu (restart po finalnym buildzie, ~08:05Z; log: `evidence/wrangler-dev.log`) — `⎔ Starting local server... Ready on http://localhost:8787`, runtime workerd, bindingi `SESSION` (KV, local), `IMAGES` (local). Wrangler rozpoznał wygenerowaną konfigurację przez `.wrangler/deploy/config.json` → `dist/client/wrangler.json`.
- Polecenie: pętla `curl` po 13 adresach (08:06Z, exit 0) — wynik: `evidence/routes-check.txt`:

  | Adres | direct | po przekierowaniach |
  | --- | --- | --- |
  | `/` | 200 | 200 |
  | `/o-nas` | 307 | 200 |
  | `/podcast` | 307 | 200 |
  | `/podcast/opanuj-ai` | 307 | 200 |
  | `/podcast/przeprogramowani` | 307 | 200 |
  | `/youtube` | 307 | 200 |
  | `/kursy` | 307 | 200 |
  | `/o-nas/`, `/podcast/`, `/podcast/opanuj-ai/`, `/podcast/przeprogramowani/`, `/youtube/`, `/kursy/` | 200 | 200 |

  Uwaga: warianty bez ukośnika zwracają `307 → wersja z ukośnikiem → 200` (standardowe `html_handling: auto-trailing-slash` Cloudflare Assets). Próba wymuszenia 200 dla obu wariantów przez duplikat `o-nas.html` nie powiodła się (Assets i tak 307) — duplikat usunięty. Prompt dopuszcza końcowe ukośniki; każda ze stron jest osiągalna pod wymaganym adresem i zwraca właściwy HTML.
- Sprawdzenie HTML w przeglądarce (sekcja 6) potwierdziło HTTP 200 (po przekierowaniu) i pełną treść wszystkich 7 stron.

## 3. Research treści (P02, P03) — `research/`

- Pobrania 07:31–07:40Z (curl, exit 0). Szczegóły, adresy i fakty: **`research/RESEARCH.md`**; surowe odpowiedzi: `research/*.html|xml|json`.
- Kluczowe ustalenia: opisy działalności i sylwetki założycieli z https://przeprogramowani.pl/o-nas (w tym rzeczywiste linki LinkedIn `psmyrdek`, `mkczarkowski`); trzy kursy z prawdziwymi adresami (10xdevs.pl, opanujfrontend.pl, opanujtypescript.pl); feedy: Opanuj.AI `anchor.fm/s/e2cb03d0/podcast/rss`, Przeprogramowani `anchor.fm/s/c72d808/podcast/rss`, YouTube `channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw` (zweryfikowany przez `og:url` na @Przeprogramowani).
- Snapshoty feedów z czasem pobrania zapisane także w `src/data/cache/*.json` (pole `fetchedAt` + `sourceUrl`) — generowane `npm run refresh-cache` (07:39Z, exit 0, log w historii sesji: 53/98/15 elementów).

## 4. Media: odnośniki, odtwarzanie, okno 90 dni (P03)

- Okno 90 dni od startu próby (od ~2026-06-10): **Opanuj.AI** — 3 odcinki (2026-09-03, 2026-08-05, 2026-07-01; `datetime` w `evidence/served-opanuj-ai.html`); **YouTube** — 8 filmów (2026-09-02 … 2026-07-03). **Podcast Przeprogramowani** — brak publikacji w oknie (ostatni 2025-09-25), więc zgodnie z zasadą pokazano 8 najnowszych dostępnych odcinków z rzeczywistymi datami 2024–2025.
- Każdy element ma: tytuł, identyfikację źródła (badge z nazwą), datę publikacji (lub oznaczenie „data nieznana"), oryginalny link odcinka/filmu (Spotify for Podcasters / youtube.com/watch?v=…) — widoczne w HTML (`evidence/served-opanuj-ai.html`, `browser-check.json` → `itemLinks`: 7/17/14 linków do konkretnych materiałów).
- Odtwarzanie audio (kontrolowane, playwright-core + systemowy Chrome, 08:00Z, exit 0): `audio.load()` na `/podcast/opanuj-ai/` → **`loadedmetadata` OK, duration 5550.68 s** z pliku MP3 anchor.fm/cloudfront (`evidence/browser-check.json` → `audioPlayback.ok: true`). Natywne `<audio controls>` przy każdym odcinku (3 i 8 sztuk na stronach podcastów).
- YouTube: osadzone odtwarzacze `youtube-nocookie.com/embed/<id>` (8 iframe na `/youtube/`, `youtubeEmbed.embedPresent: true`) + niezależny link „Otwórz film na YouTube" przy każdym filmie. Embed nie był testowany odtwarzaniem kliknięciem (polityka dostawcy w iframe) — sam fakt osadzenia potwierdzony obecnością iframe z poprawnym `src`; dostawca nie zwrócił odmowy osadzenia.

## 5. Kontrolowana awaria źródła (P04)

- Polecenie (07:57:49Z, exit 0): `SOURCE_URL_OPANUJ_AI="https://nieistniejacy-host-awaria.invalid/feed.xml" SOURCE_URL_YOUTUBE="https://10.255.255.1/videos.xml" FETCH_TIMEOUT_MS=4000 npx astro build --outDir dist-fail` — log: `evidence/failure-build.log`.
- Obserwacje (linie `[data]` w logu):
  - `opanuj-ai`: błąd DNS (`reference = hm2mm82…`) → **„używam pamięci podręcznej"**, build kontynuowany;
  - `youtube`: **timeout** (`The operation was aborted` po 4 s) → pamięć podręczna;
  - `przeprogramowani-podcast` (bez nadpisania): **nadal `fresh` z sieci** — awaria jednego źródła nie wpływa na inne ani na całą stronę;
  - wszystkie 7 stron zbudowane, `Complete!`, exit 0.
- Artefakty HTML z buildu awaryjnego: `evidence/failure-opanuj-ai-stale.html` (komunikat „Dane z pamięci podręcznej — mogą być nieaktualne", przyczyna, data snapshotu, link do źródła + zachowane odcinki z cache), `evidence/failure-youtube-stale.html` (analogicznie, filmy z cache z linkami watch?v=), `evidence/failure-test-podcast-fresh.html` (trzecie źródło świeże mimo awarii dwóch).
- Ścieżka działająca (fresh) sprawdzona w buildach 07:46Z i 07:58Z (`evidence/build-fresh.log`) — statusy `fresh` z realnymi adresami feedów.
- Architektura: pobieranie wyłącznie server-side w dedykowanych modułach `src/data/{sources,parse,index}.ts` (fetch+timeout → walidacja → normalizacja do `MediaItem[]`); strony/komponenty tylko prezentują `SourceResult`. Brak pobierania feedów w przeglądarce i brak wyłącznie ręcznych list. `dist-fail` usunięto po skopiowaniu dowodów.

## 6. Widoki 390/1440, nawigacja, fokus, SEO (P01, P07)

- Polecenie: `node scripts/browser-check.cjs` (playwright-core + channel `chrome`, headless; finalny przebieg 08:07Z, exit 0) — pełny wynik: `evidence/browser-check.json`, log `evidence/browser-check.log`.
- Dla **wszystkich 7 tras**: `status 200` (po przekierowaniu), **dokładnie jeden H1**, `lang="pl"`, **brak poziomego przewijania** przy 1440×900 i 390×844 (`overflowX: false`, `mobile.overflowX: false`), nawigacja globalna zawiera O nas / Podcasty / YouTube / Kursy (`navLinks: true`) i link do strony głównej (`homeLink: true`) — spójnie na każdej stronie.
- Nawigacja mobilna (390 px, `/`): otwarcie myszą `opened: true`; zamknięcie klawiszem **Escape** `closedAfterEsc: true` (fokus wraca na przycisk); otwarcie klawiaturą (focus + Enter) `openedViaKeyboard: true`; po otwarciu fokus na pierwszym linku (`firstLinkFocused: "O nas"`); kliknięcie linku nawiguje do `/o-nas/` (`mobileNavClickNavigatedTo`). Przycisk ma `aria-expanded`/`aria-controls`/`aria-label`. Dotyk: viewport `hasTouch: true`, kliknięcia symulowane jako zdarzenia pointer (elementy mają ≥44 px pola kliknięcia).
- Zrzuty ekranu: `evidence/desktop-1440-home.png`, `desktop-1440_podcast_opanuj-ai.png`, `desktop-1440_youtube.png`, `desktop-1440-youtube-embeds.png`, `mobile-390-home.png`, `mobile-390-home-menu-open.png`, `mobile-390-home-menu-keyboard.png`.
- SEO (dane z `browser-check.json`): każda strona ma **własny tytuł** i **meta description** (brak braków: `descriptions missing: []`), **canonical** oparty na `SITE_URL` (domyślnie `http://localhost:8787`, konfigurowalny w `astro.config.mjs`), komplet **og:title/og:description/og:url** (`og missing: []`) zgodny z treścią strony; `lang="pl"` w dokumencie.
- Fokus klawiatury: globalna reguła `:focus-visible` (outline akcentowy) w `src/styles/global.css`; skip-link „Przejdź do treści"; etykiety: `aria-label` na odtwarzaczach audio („Odtwarzacz odcinka: <tytuł>"), `title` na iframe YouTube, `alt`/`aria-hidden` na elementach dekoracyjnych. Obrazy treściowe nie występują (karty mediów są tekstowe + odtwarzacze).

## 7. Podsumowanie statusów sprawdzeń

| Obszar | Status |
| --- | --- |
| Build produkcyjny (7 stron, adapter CF) | ✅ wykonane, exit 0 |
| Lokalny runtime Workers (`wrangler dev`, workerd) | ✅ wykonane, 7/7 tras osiągalnych (200 bezpośrednio lub po 307) |
| Wersje zależnośći zgodne z BASELINE.md | ✅ astro 7.3.1 / react 19.2.8 / tailwind 4.3.3 |
| Research + dowody | ✅ `research/RESEARCH.md` + surowe pliki |
| Media: wybór z 90 dni / fallback najnowszych | ✅ (Przeprogramowani: brak publikacji w oknie → najnowsze z realnymi datami) |
| Odtwarzanie audio | ✅ metadata + duration rzeczywistego pliku MP3 |
| Osadzanie YouTube | ✅ iframes youtube-nocookie + linki; odtwarzanie kliknięciem w embedzie nietestowane |
| Kontrolowana awaria (DNS + timeout + źródło zdrowe) | ✅ build exit 0, stale-notice w HTML, dowody zapisane |
| Widoki 390/1440, brak overflow | ✅ headless Chrome, zrzuty w `evidence/` |
| SEO (H1/title/description/canonical/OG/lang) | ✅ automatyczne sprawdzenie wszystkich 7 tras |
| Powtarzalność `npm ci` | ✅ exit 0 (`evidence/npm-ci.log`), build po `npm ci` exit 0 |
| Publikacja zdalna | ❌ celowo niewykonana (zakaz w zadaniu) |

## Ograniczenia i znane uwagi

- Strony bez końcowego ukośnika zwracają 307 (zachowanie Cloudflare Assets), treść właściwa pod wariantem z ukośnikiem; canonical wskazuje wariant z ukośnikiem.
- Odtwarzanie embedów YouTube nie było klikane w teście automatycznym (potwierdzona obecność poprawnych iframe i linków); audio podcastów przetestowane przez rzeczywiste `loadedmetadata`.
- `npm ci` + finalny build + pełny przegląd tras i sprawdzenia przeglądarkowe wykonano na finalnym stanie kodu (08:04–08:07Z); wcześniejsze przebiegi (07:46–08:01Z) dały identyczne wyniki.
- Testy wykonano headless (systemowy Chrome); subiektywna ocena wizualna na podstawie zrzutów w `evidence/`.
- Podcast Przeprogramowani nie opublikował nic w oknie 90 dni przed startem próby — zgodnie z zasadami P03 pokazano najnowsze dostępne odcinki z rzeczywistymi datami (2024–2025).
