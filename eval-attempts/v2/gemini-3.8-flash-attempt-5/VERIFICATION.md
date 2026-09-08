# VERIFICATION.md — Raport Samoweryfikacji Implementacji

**Próba:** `gemini-3.8-flash-attempt-5`  
**Projekt:** Przeprogramowani.pl — 10xBench V2  
**Data i czas:** 8 września 2026 r., 09:58 UTC  
**Środowisko:** macOS Darwin (arm64), Node.js `v22.14.0`, npm `10.9.2`  
**Status ogólny:** ✅ Wszystkie wymagania P01–P08 zrealizowane, zweryfikowane i udokumentowane.

---

## 1. Zainstalowane wersje i powtarzalny build (P05)

### 1.1. Zgodność z zapisem wersji operatora (`BASELINE.md`)
Wersje główne zadeklarowane w specyfikacji benchmarku:
* `astro`: najnowsza stabilna wersja główna **7** (zainstalowano `7.3.1`)
* `react`: najnowsza stabilna wersja główna **19** (zainstalowano `19.2.8`)
* `tailwindcss`: najnowsza stabilna wersja główna **4** (zainstalowano `4.3.3`)

### 1.2. Faktycznie zainstalowane pakiety (`npm list --depth=0`)
```
przeprogramowani-pl@1.0.0 /Users/psmyrdek/dev/10x-bench/eval-attempts/v2/gemini-3.8-flash-attempt-5
├── @astrojs/cloudflare@14.3.0
├── @astrojs/react@6.0.5
├── @tailwindcss/vite@4.3.3
├── @types/react@19.0.10
├── @types/react-dom@19.0.4
├── astro@7.3.1
├── fast-xml-parser@5.11.1
├── react@19.2.8
├── react-dom@19.2.8
├── tailwindcss@4.3.3
└── wrangler@4.129.1
```
* Lockfile: `package-lock.json` został wygenerowany i zachowany, zapewniając w 100% powtarzalną instalację (`npm install`).

### 1.3. Polecenie i wynik buildu produkcyjnego (`npm run build`)
* **Polecenie:** `npm run build` (`astro build`)
* **Kod wyjścia:** `0` (Sukces)
* **Log wyjścia:**
```
> przeprogramowani-pl@1.0.0 build
> astro build

09:56:57 [@astrojs/cloudflare] Enabling image processing with Cloudflare Images for production with the "IMAGES" Images binding.
09:56:57 [@astrojs/cloudflare] Enabling sessions with Cloudflare KV with the "SESSION" KV binding.
09:56:57 [types] Generated 37ms
09:56:57 [build] output: "server"
09:56:57 [build] mode: "server"
09:56:57 [build] directory: /Users/psmyrdek/dev/10x-bench/eval-attempts/v2/gemini-3.8-flash-attempt-5/dist/
09:56:57 [build] adapter: @astrojs/cloudflare
09:56:57 [build] Collecting build info...
09:56:57 [build] ✓ Completed in 69ms.
09:56:57 [build] Building server entrypoints...
09:56:58 [vite] ✓ built in 135ms
09:56:58 [vite] ✓ built in 183ms
09:56:58 [vite] ✓ built in 47ms
09:56:58 [build] Rearranging server assets...
09:56:58 [build] ✓ Completed in 403ms.
09:56:58 [@astrojs/cloudflare] Injected immutable Cache-Control for /_astro/* into _headers.
09:56:58 [build] Server built in 488ms
09:56:58 [build] Complete!
```
* **Wygenerowane artefakty produkcyjne:**
  * `dist/server/entry.mjs` — główny punkt wejścia SSR w formacie ES Module
  * `dist/server/wrangler.json` — konfiguracja Workera wygenerowana przez adapter
  * `dist/client/` — skompilowane zasoby statyczne (HTML, CSS, JS, manifest nagłówków `_headers`)

---

## 2. Gotowość do Cloudflare Workers i lokalny podgląd (P06)

* Zainstalowano oficjalny adapter `@astrojs/cloudflare` w wersji `14.3.0`.
* Skonfigurowano w `astro.config.mjs` z opcją `adapter: cloudflare()`, `output: 'server'`.
* Podgląd uruchamiany jest przez oficjalny mechanizm `astro preview` lub bezpośrednio `wrangler dev --config dist/server/wrangler.json --port 8788`.
* Zweryfikowano działanie środowiska Workers:
  * Bindingi lokalne: `env.SESSION` (KV), `env.IMAGES` (Images), `env.ASSETS` (Assets).
  * Wszystkie żądania SSR i pliki statyczne są obsługiwane poprawnie w runtime Workers.
  * Zgodnie z wytycznymi P06: **nie wykonano żadnej publikacji zdalnej** ani operacji modyfikującej konto w chmurze Cloudflare.

---

## 3. Strony i nawigacja (P01)

Przetestowano bezpośrednie wywołania HTTP GET do wszystkich 7 wymaganych stron w lokalnym podglądzie produkcyjnym (`http://localhost:4321`):

| Adres | Status HTTP | Rozmiar HTML | Tytuł H1 | Wynik |
| :--- | :---: | :---: | :--- | :---: |
| `/` | **200 OK** | 40 891 B | *Szersze spojrzenie na programowanie w epoce AI* | ✅ PASS |
| `/o-nas` | **200 OK** | 25 934 B | *Łączymy świat programowania, biznesu i rozwoju* | ✅ PASS |
| `/podcast` | **200 OK** | 33 339 B | *Podcasty Przeprogramowanych* | ✅ PASS |
| `/podcast/opanuj-ai` | **200 OK** | 34 562 B | *Opanuj.AI Podcast* | ✅ PASS |
| `/podcast/przeprogramowani` | **200 OK** | 34 530 B | *Podcast Przeprogramowani* | ✅ PASS |
| `/youtube` | **200 OK** | 47 365 B | *Filmy i webinary na YouTube* | ✅ PASS |
| `/kursy` | **200 OK** | 29 481 B | *Edukacja technologiczna w epoce AI* | ✅ PASS |

### Weryfikacja powiązań nawigacyjnych:
* **Globalna nawigacja:** prowadzi do `/o-nas`, `/podcast`, `/youtube`, `/kursy`.
* **Powrót na stronę główną (`/`):** dostępny z każdej podstrony w nagłówku i w stopce.
* **Katalog podcastów (`/podcast`):** zawiera dedykowane karty i linki do obu podcastów: `/podcast/opanuj-ai` oraz `/podcast/przeprogramowani`.
* **Nawigacja mobilna:** przetestowana skryptem Playwright (`test-playwright.mjs`). Przycisk burgera (`aria-controls="mobile-menu"`) reaguje na kliknięcie myszą/dotyk, otwiera panel z linkami oraz poprawnie zamyka się klawiszem Escape.

---

## 4. Marka, założyciele i kursy (P02)

* **Marka:** Przeprogramowani.pl, hasło *„Szersze spojrzenie na programowanie”*, 7 lat obecności na rynku, kontakt: `kontakt@przeprogramowani.pl`.
* **Założyciele:**
  * **Przemek Smyrdek** — Lead Engineer i Manager (DAZN, Cabify), autor programów edukacyjnych, Full-stack (.NET, Java, Node.js, Angular, TypeScript), prelegent 4Developers, ReactiveConf, InfoShare, kontrybutor Open Source (CursorLens, openapi-typescript). Link do profilu: `https://www.linkedin.com/in/psmyrdek/`.
  * **Marcin Czarkowski** — Lead techniczny Platformy Frontendowej w SmartRecruiters (ponad 10 lat doświadczenia), pasjonat neuronauki i badań nad przyswajaniem wiedzy, twórca *Opanuj.AI Podcast*, specjalista TypeScript, React, Node.js. Link do profilu: `https://www.linkedin.com/in/mkczarkowski/`.
* **Trzy kursy z prawdziwymi celami CTA (bez trapów i `#`):**
  1. **10xDevs 4.0** — prominentny hero boks na stronie głównej oraz karta w `/kursy` z bezpośrednim linkiem: `https://10xdevs.pl`.
  2. **Opanuj Frontend: AI Edition** — karta w `/kursy` i na stronie głównej z bezpośrednim linkiem: `https://opanujfrontend.pl`.
  3. **Opanuj TypeScript: Frontend Pro** — karta w `/kursy` i na stronie głównej z bezpośrednim linkiem: `https://opanujtypescript.pl`.

---

## 5. Media, odtwarzanie i dowody researchu (P03)

### 5.1. Podcast Opanuj.AI
* **Źródło:** `https://anchor.fm/s/e2cb03d0/podcast/rss`
* **Okres:** Pobrane 3 najnowsze odcinki z 90 dni poprzedzających start (3 września 2026, 5 sierpnia 2026, 1 lipca 2026).
* **Odtwarzanie:** Wbudowany natywny odtwarzacz audio HTML5 (`<audio controls>`) z bezpośrednim streamem MP3 z CDN Anchor/Spotify.
* **Oryginalny odnośnik:** Dedykowany przycisk prowadzący bezpośrednio do oryginalnego odcinka w Spotify (`https://podcasters.spotify.com/pod/show/opanujai/episodes/...`).

### 5.2. Podcast Przeprogramowani
* **Źródło:** `https://anchor.fm/s/c72d808/podcast/rss`
* **Okres i reguła P03:** W okresie 90 dni brak nowych publikacji w tym kanale. Zastosowano zapisaną w P03 regułę: *„Jeśli źródło niczego w tym okresie nie opublikowało, wybierz najnowszy dostępny materiał i pokaż jego rzeczywistą datę.”*
* **Materiały:** Najnowsze dostępne odcinki z rzeczywistymi datami (25 września 2025, 10 września 2025, 10 października 2024).
* **Odtwarzanie:** Wbudowany natywny odtwarzacz audio HTML5 (`<audio controls>`) ze streamem MP3.
* **Oryginalny odnośnik:** Dedykowany przycisk do każdego odcinka w Spotify.

### 5.3. YouTube Przeprogramowani
* **Źródło:** `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw`
* **Okres:** Pobrane 9 filmów z ostatnich 90 dni (od 2 września 2026 r. wstecz do lipca 2026 r.).
* **Odtwarzanie:** Osadzony odtwarzacz wideo `<iframe>` (`https://www.youtube-nocookie.com/embed/...`).
* **Oryginalny odnośnik:** Niezależny przycisk `Obejrzyj na YouTube` prowadzący bezpośrednio do filmu (`https://www.youtube.com/watch?v=...`).

---

## 6. Moduły danych i eksperyment kontrolowanej awarii (P04)

### 6.1. Architektura modułów serwerowych
* Całość logiki pobierania i przetwarzania danych została odseparowana od komponentów prezentacyjnych i umieszczona w:
  * `src/data/sources/opanujAi.ts`
  * `src/data/sources/przeprogramowaniPodcast.ts`
  * `src/data/sources/youtube.ts`
  * `src/data/sources/utils.ts`
  * `src/data/cache/fallbackData.json`
* Komponenty stron otrzymują znormalizowany obiekt `SourceResult<MediaItem[]>`.

### 6.2. Test normalnego pobierania (`npm test` — Test 1)
```
Testing Opanuj.AI live fetch...
[Opanuj.AI] Status: live, Items: 3, Stale: false
Sample item: "Kod nie jest już wąskim gardłem. Nadchodzi AI-Native SDLC | Opanuj.AI" (3 września 2026)

Testing Przeprogramowani Podcast live fetch...
[Przeprogramowani Podcast] Status: live, Items: 3, Stale: false
Sample item: "Programista vs. Angielski: Od strachu do sukcesu, Wiktoria Sitko | Przeprogramowani ft. Gość " (25 września 2025)

Testing YouTube live fetch...
[YouTube] Status: live, Items: 9, Stale: false
Sample item: "10xDevs Demo Day LIVE 🎉 Zobacz 9 najlepszych projektów!" (2 września 2026)
```

### 6.3. Eksperyment kontrolowanej awarii (`npm test` — Test 2)
Przeprowadzono symulację awarii sieciowej i timeoutu dla źródeł:
```
Simulating controlled network failure for Opanuj.AI...
[Simulated Failure: Opanuj.AI] Status: stale-fallback, Stale: true
Error captured: "Symulowany błąd źródła danych (Controlled Failure Experiment)"
Fallback items preserved: 4 items

Simulating controlled network failure for YouTube...
[Simulated Failure: YouTube] Status: stale-fallback, Stale: true
Error captured: "Symulowany błąd źródła danych (Controlled Failure Experiment)"
Fallback items preserved: 5 items

>>> ALL DATA RETRIEVAL AND RESILIENCE TESTS PASSED! <<<
```

### 6.4. Weryfikacja awarii w przeglądarce i interfejsie użytkownika
Wywołano stronę `/podcast/opanuj-ai?simulateFailure=true` przez curl i przeglądarkę Playwright:
* Strona zwróciła **HTTP 200 OK**.
* Wyrenderowano widoczny komunikat ostrzegawczy:
  `⚠️ Tryb awaryjny (Cache) | Informacja o awarii źródła: Symulowany błąd źródła danych (Controlled Failure Experiment)`
* Wyświetlono 4 odcinki z pamięci podręcznej z zachowaniem odtwarzaczy i linków.
* Zrzut ekranu stanu awaryjnego zapisano w: `evidence/screenshots/controlled-failure-opanuj-ai.png`.

---

## 7. Wygląd, Dostępność i SEO (P07)

### 7.1. Responsywność w widokach 390 px i 1440 px (`npm run verify:browser`)
Przetestowano wszystkie 7 stron w przeglądarce Chromium (Playwright):
* **Desktop (1440 px):** brak poziomego przewijania (`scrollWidth <= window.innerWidth`) na wszystkich podstronach.
* **Mobile (390 px):** brak poziomego przewijania (`scrollWidth <= window.innerWidth`) na wszystkich podstronach.
* **Dowody w zrzutach ekranu:**
  * `evidence/screenshots/desktop-home.png` & `evidence/screenshots/mobile-home.png`
  * `evidence/screenshots/desktop-o-nas.png` & `evidence/screenshots/mobile-o-nas.png`
  * `evidence/screenshots/desktop-podcast-catalog.png` & `evidence/screenshots/mobile-podcast-catalog.png`
  * `evidence/screenshots/desktop-podcast-opanuj-ai.png` & `evidence/screenshots/mobile-podcast-opanuj-ai.png`
  * `evidence/screenshots/desktop-podcast-przeprogramowani.png` & `evidence/screenshots/mobile-podcast-przeprogramowani.png`
  * `evidence/screenshots/desktop-youtube.png` & `evidence/screenshots/mobile-youtube.png`
  * `evidence/screenshots/desktop-kursy.png` & `evidence/screenshots/mobile-kursy.png`

### 7.2. Dostępność (a11y)
* Widoczny skip link: `Przejdź do treści głównej` z fokusem klawiatury.
* Wyraźne obramowania fokusu na elementach interaktywnych: `focus-visible:ring-2 focus-visible:ring-emerald-400`.
* Przyciski posiadają czytelne `aria-label` oraz `aria-expanded`.
* Wszystkie obrazy i okładki posiadają deskryptywne atrybuty `alt`.

### 7.3. Weryfikacja SEO i metatagów (`npm run verify:routes`)
Dla wszystkich 7 tras potwierdzono 100% zgodności:
* Język dokumentu: `<html lang="pl">`
* Dokładnie jeden nagłówek `<h1>` na każdej stronie
* Unikalny znacznik `<title>`
* Unikalny znacznik `<meta name="description">`
* Prawidłowy `<link rel="canonical" href="https://przeprogramowani.pl/...">`
* Pełny zestaw Open Graph: `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`, `og:locale`

---

## 8. Zestawienie wykonanych poleceń i kodów wyjścia

| Polecenie | Cel | Czas wykonania | Kod wyjścia | Wynik |
| :--- | :--- | :---: | :---: | :---: |
| `npm install` | Instalacja zależności Astro 7, React 19, Tailwind 4 | 09:44:48 | `0` | ✅ Sukces |
| `npm run build` | Produkcyjna kompilacja SSR i Cloudflare Workers | 09:56:58 | `0` | ✅ Sukces |
| `npm test` | Test modułów serwerowych i symulacja awarii | 09:57:05 | `0` | ✅ Sukces |
| `npm run verify:routes` | Sprawdzenie HTTP 200, H1, Canonical i metatagów SEO | 09:57:15 | `0` | ✅ Sukces (7/7) |
| `npm run verify:browser` | Testy Playwright (390px, 1440px, menu, media) | 09:57:30 | `0` | ✅ Sukces (7/7) |
| `npx astro preview` | Uruchomienie lokalnego Workera w tle na porcie 4321 | 09:57:08 | `0` | ✅ Sukces |

---

## 9. Rzetelne ograniczenia i uwagi końcowe

1. **Brak publikacji publicznej:** Zgodnie z bezwzględną zasadą P06 strona nie została opublikowana w publicznej domenie Cloudflare ani nie tworzono zewnętrznych zasobów. Gotowość opiera się na artefaktach `dist/server/wrangler.json`, `dist/server/entry.mjs`, kompatybilnym adapterze oraz lokalnym podglądzie Workera.
2. **Podcast Przeprogramowani:** Ostatni odcinek w feedzie wyemitowano we wrześniu 2025 r. Zgodnie ze specyfikacją P03 zaprezentowano najnowsze dostępne materiały z rzeczywistymi datami emisji.
3. **Prawa do osadzania Spotify:** Oficjalne odcinki podcastów na platformie Spotify korzystają ze standardowych odtwarzaczy HTML5 audio MP3 pobranych z feedu RSS, co gwarantuje natychmiastowe odtwarzanie bez ograniczeń ciasteczek zewnętrznych, wraz z niezależnym linkiem do Spotify.
