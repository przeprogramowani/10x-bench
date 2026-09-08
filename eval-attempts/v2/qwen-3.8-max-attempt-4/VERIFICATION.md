# VERIFICATION.md — samoweryfikacja próby

Start próby: 2026-09-08T07:29:49Z (zapis operatora). Wszystkie czasy poniżej w UTC.
Katalog próby: `eval-attempts/v2/qwen-3.8-max-attempt-4`.

Legenda: ✅ udane · ❌ nieudane · ⛔ niewykonane · ⚠️ ograniczenie zewnętrzne

## 1. Zależności i wersje (P05)

- ✅ `npm install` — exit 0, 291 pakietów, log: `evidence/npm-install.log` (07:31).
- ✅ `npm ls` (07:04:48… patrz `evidence/versions.log`, wykonano 08:04):
  astro **7.3.1**, react/react-dom **19.2.8**, tailwindcss **4.3.3**, @astrojs/cloudflare **14.3.0**,
  @astrojs/react **6.0.5**, wrangler **4.129.1**, @tailwindcss/vite **4.3.3** — zgodne z zapisem operatora (te same główne, stabilne, bez prerelease).
- ✅ `package-lock.json` obecny (sha256 zaczyna się od `1eaf28c0bc63abb0`); powtarzalna instalacja przez `npm ci`.
- ⚠️ Ostrzeżenie npm `EBADENGINE` dla jednego pakietu transytywnego (nie blokuje instalacji ani buildu).

## 2. Build produkcyjny (P01/P05/P06)

- ✅ `npm run build` (07:51, exit 0, log w terminalu sesji; wcześniejsza iteracja 07:48 ujawniła błąd konfiguracji Tailwind — patrz „Naprawione problemy"): `[build] Complete!`, `[build] Server built`, `[@astrojs/cloudflare] Injected immutable Cache-Control for /_astro/* into _headers`.
- ✅ Artefakty: `dist/server/entry.mjs` (worker main), `dist/server/wrangler.json` (generowana konfiguracja Workers: assets `../client`, binding `ASSETS`, compatibility_date 2026-09-07), `dist/client/` (zasoby).
- ✅ Tailwind kompiluje utility (grep `.max-w-6xl`, `.bg-ink-900`, `.text-accent-400` w `dist/client/_astro/Base.*.css` — po 1 trafieniu).

## 3. Lokalny podgląd Workers i wymagane adresy (P01/P06)

- ✅ `npx wrangler dev --config dist/server/wrangler.json --port 8801` → `Ready on http://localhost:8801` (log: `evidence/wrangler-dev.log`; wcześniejsza identyczna sesja na porcie 8790, log nadpisany).
- ✅ Wszystkie 7 wymaganych adresów: HTTP 200 + właściwy HTML (07:52, port 8790, ten sam build; log: `evidence/route-checks.log`, zapisy HTML: `evidence/pages/*.html`):
  `/` 200, `/o-nas` 200, `/podcast` 200, `/podcast/opanuj-ai` 200, `/podcast/przeprogramowani` 200, `/youtube` 200, `/kursy` 200.
  (Pierwszy przebieg 07:50 zwrócił 500 na 3 stronach SSR — przyczyna: usunięte w Astro v6+ `Astro.locals.runtime.env`; naprawione przez `cloudflare:workers` env w `src/lib/worker-env.ts`; po rebuild wszystkie 200.)
- ✅ Końcowe ukośniki: `/o-nas/`, `/podcast/`, `/podcast/opanuj-ai/`, `/podcast/przeprogramowani/`, `/youtube/`, `/kursy/` — wszystkie 200 (08:04).
- ✅ Nawigacja: header (React island `SiteHeader.tsx`, `client:load`) zawiera linki O nas / Podcasty / YouTube / Kursy + logo → `/`; hub `/podcast` linkuje obie strony podcastów; stopka linkuje wszystkie strony. Zweryfikowano w zapisanym HTML (`evidence/pages/index.html` itd.).
- ✅ Menu mobilne: przycisk `aria-expanded`/`aria-controls="mobile-menu"`, panel z linkami — obecny w SSR HTML; interaktywność po hydratacji React (klawiatura/mysz/dotyk: natywne `<button>`/`<a>`). ⛔ Kliknięcia w rzeczywistej przeglądarce niewykonane (brak przeglądarki headless w środowisku — patrz pkt 8).

## 4. Research i treści (P02/P03)

- ✅ Źródła pobrane `curl` 07:33–07:41 (wszystkie HTTP 200 poza nieaktualnym feedem `anchor.fm/s/22544b7c` → 404, udokumentowano): przeprogramowani.pl `/`, `/o-nas`, `/podcast`; opanuj.ai; strony show na podcasters.spotify.com; youtube.com/@przeprogramowani; 10xdevs.pl; opanujfrontend.pl; opanujtypescript.pl. Pełne fakty + URL-e: `evidence/research/NOTES.md`; surowe feedy: `evidence/research/feed-*.xml`; czas pobrania: `evidence/research/fetched-at.txt` (2026-09-08T07:41Z).
- ✅ Feedy rozwiązane dynamicznie: rssFeedUrl ze stron show Spotify → działające `anchor.fm/s/c72d808/podcast/rss` (98 odcinków) i `anchor.fm/s/e2cb03d0/podcast/rss` (53 odcinki); YouTube Atom `channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw` (15 filmów, canonical potwierdzony z kanału).
- ✅ Selekcja 90 dni (cutoff 2026-06-10, publikacje po starcie próby wykluczone):
  - Opanuj.AI: 3 odcinki w oknie (2026-09-03, 2026-08-05, 2026-07-01) — widoczne na stronie z `<time datetime>`.
  - YouTube: 6 filmów w oknie (2026-09-02 … 2026-08-11) — widoczne z `<time datetime>`.
  - Podcast Przeprogramowani: brak publikacji w oknie (ostatnia 2025-09-25) → zgodnie z P03 pokazano 5 najnowszych dostępnych z rzeczywistymi datami (2025-09-25, 2025-09-10, 2024-10-10, 2024-08-21, 2024-06-13).
- ✅ Każdy element: prawdziwy tytuł, identyfikacja źródła (badge + nazwa), data (lub „data nieznana"), oryginalny adres odcinka/filmu (linki `podcasters.spotify.com/.../episodes/...` i `youtube.com/watch?v=...`).
- ✅ Treści o marce/założycielach oparte na `/o-nas` i opanuj.ai (bez zmyślonych faktów; opisy sparafrazowane). Kursy: 3 prawdziwe odnośniki (10xdevs.pl, opanujfrontend.pl, opanujtypescript.pl) potwierdzone HTTP 200 i title/description ze stron produktowych.

## 5. Odtwarzanie (P03)

- ✅ Podcasty: `<audio controls preload="none" src="{enclosure}">` z feedu + niezależny link do odcinka. Kontrola pliku audio: 302 → 200 `content-type: audio/mpeg` (`evidence/audio-playback-check.log`, 08:04).
- ✅ YouTube: iframe `youtube-nocookie.com/embed/{videoId}` + niezależny link „Otwórz film na YouTube". Pod każdym odtwarzaczem informacja awaryjna z linkiem (na wypadek blokady osadzania przez dostawcę).
- ⛔ Odtworzenie dźwięku/wideo w rzeczywistej przeglądarce niewykonane (brak przeglądarki); dowód pośredni: poprawne URL-e, 200/audio-mpeg, standardowe embedy publicznych filmów.

## 6. Pobieranie danych i odporność (P04)

- ✅ Architektura: `src/lib/sources.ts` (fetch+timeout 6 s+walidacja+normalizacja+cache in-memory TTL 10 min), `src/lib/parse.ts` (parsery RSS/Atom), `scripts/fetch-cache.mjs` (snapshot build-time → `src/data/cache.json`, importowany przez moduł). Komponenty wyłącznie prezentują `MediaItem[]`/`SourceResult`. Pobieranie w przeglądarce: brak.
- ✅ Ścieżka live: strony SSR logują banner „Dane pobrane na żywo ze źródła 8 wrz 2026, 08:04 UTC (feed: …)" — `evidence/pages/youtube.html` i ponowny curl 08:04.
- ✅ Snapshot build-time: `evidence/fetch-cache.log` (07:47): `opanujai: OK 53`, `przeprogramowani: OK 98`, `youtube: OK 15` → `src/data/cache.json` (awarie: 0).
- ✅ **Kontrolowana awaria**: druga instancja `wrangler dev --port 8802 --inspector-port 9236 --var SIMULATE_SOURCE_FAILURE:all` (log: `evidence/wrangler-dev-failure.log`, Ready 08:03). Wynik (08:03–08:04):
  - `/podcast/opanuj-ai` → HTTP 200, banner: „Wyświetlane dane pochodzą z pamięci podręcznej (pobrano 8 wrz 2026, 07:51 UTC) i mogą być nieaktualne — źródło jest chwilowo niedostępne (Symulowana awaria źródła (SIMULATE_SOURCE_FAILURE))" + link do źródła + odcinki z cache (`evidence/pages/failure-opanuj-ai.html`).
  - `/podcast/przeprogramowani`, `/youtube` → HTTP 200, ten sam mechanizm stale (`evidence/pages/failure-*.html`, grep "pamięci podręcznej" = 1 w każdym).
  - Strony nie padają (brak 500), dane fikcyjne nie są prezentowane jako świeże.

## 7. Konfiguracja Workers (P06)

- ✅ Adapter oficjalny `@astrojs/cloudflare@14.3.0` zainstalowany i aktywny w `astro.config.mjs` (`adapter: cloudflare()`, `output: 'server'`).
- ✅ Konfiguracja generowana przez adapter: `dist/server/wrangler.json` (main `entry.mjs`, assets `../client` z bindingiem `ASSETS`) — spójna z wynikiem buildu i użyta do `wrangler dev`. Ręczny plik wrangler nie był potrzebny.
- ✅ Instrukcje w `README.md`: instalacja, build, podgląd lokalny, `wrangler deploy` (Workers, nie Pages), zmienne (`PUBLIC_SITE_URL`, `SIMULATE_SOURCE_FAILURE`) i bindingi.
- ✅ Brak publikacji: nie wykonano żadnego polecenia tworzącego zasoby zdalne (`deploy`/`login` nieużyte); brak poświadczeń Cloudflare.

## 8. Wygląd, dostępność, SEO (P07)

- ✅ SEO per strona (grep w `evidence/pages/*.html`, 07:52): `lang="pl"`, unikalny `<title>`, `meta description`, `rel="canonical"` i `og:title/og:url/og:description` oparte na konfigurowalnym `site` (`PUBLIC_SITE_URL`, domyślnie `http://localhost:8788` — widoczne w canonical; w deploy ustawić właściwy adres). Jeden `<h1>` na stronę (sprawdzone grep dla wszystkich 7).
- ✅ Fokus klawiatury: globalna reguła `:focus-visible` (outline akcentowy), skip-link „Przejdź do treści", semantyczne `aria-label`/`aria-current`/`aria-expanded`, `alt`/`title` dla iframe YouTube (`title={item.title}`), ozdobne SVG z `aria-hidden`.
- ✅ Zrzuty ekranu headless Chrome (`--headless=new`, `evidence/screenshots/`, 10:09–10:18):
  - `home-1440.png`, `youtube-1440.png`, `kursy-1440.png`, `failure-opanuj-ai-1440.png` — widok desktop: spójny layout, nawigacja ze stanem aktywnym, hero z wyróżnionym kursem 10xDevs i CTA, karty mediów z odtwarzaczami; brak poziomego przewijania i ucięć.
  - `home-500.png` — widok mobilny (najwęższy możliwy zrzut w tym środowisku): jedna kolumna, przycisk „Menu" w pełni widoczny i dostępny, hero i karty mieszczą się, teksty zawijają — brak ucięć.
  - ⚠️ Zrzuty `*-390.png`/`home-414.png` wyglądają na „ucięte", bo headless Chrome na macOS nie pozwala na okno węższe niż ~500 px i przycina zrzut do żądanego rozmiaru (porównanie 390/414/500: identyczny układ ~500 px, przycisk Menu widoczny w całości dopiero przy 500). To artefakt narzędzia zrzutów, nie układu strony; min-content treści (~340 px) mieści się w 390 px. Dodatkowo dodano ubezpieczenie `html,body{max-width:100%;overflow-x:clip}` (global.css), więc przewijanie poziome całej strony jest zablokowane także przy ewentualnym szerszym elemencie.
  - ⛔ Pomiar w rzeczywistej przeglądarce dokładnie przy 390 px oraz klikalne testy menu/odtwarzaczy — niewykonane (brak pełnej przeglądarki z automatyzacją; Playwright bez zainstalowanych binariów przeglądarki).

## 9. Podsumowanie stanu końcowego

- Build: ✅ exit 0. Podgląd Workers: ✅ (instancje na 8801/8802 uruchomione do weryfikacji; po niej zatrzymane — patrz `evidence/wrangler-dev*.log`).
- 7/7 tras: ✅ 200 z właściwym HTML (także z końcowym ukośnikiem).
- Znane ograniczenia: brak pomiarów wizualnych w przeglądarce (pkt 8); ostrzeżenie EBADENGINE (pkt 1); pierwotny feed RSS ze strony przeprogramowani.pl/podcast jest martwy (404) — użyto feedów rozwiązanych ze Spotify for Podcasters.
- Naprawione w trakcie: (1) Tailwind jako integracja zamiast pluginu Vite → brak utility w CSS (wykryte grep w dist, 07:50); (2) `Astro.locals.runtime.env` usunięte w Astro v6+ → 500 na stronach SSR (wykryte testem tras 07:50, naprawione `cloudflare:workers`).
