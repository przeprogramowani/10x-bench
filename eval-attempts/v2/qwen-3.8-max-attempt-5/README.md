# Przeprogramowani.pl — implementacja (10xBench V2)

Statyczna witryna prezentująca projekt Przeprogramowani: strona główna z hero kursu
10xDevs, O nas, katalog podcastów, strony podcastów Opanuj.AI i Przeprogramowani,
YouTube oraz kursy. Kod aplikacji znajduje się w `site/`.

## Stack (zgodny z zapisem operatora w BASELINE.md)

| Pakiet | Wersja zainstalowana |
| --- | --- |
| astro | 7.3.1 |
| react / react-dom | 19.2.8 |
| tailwindcss (+ @tailwindcss/vite) | 4.3.3 |
| @astrojs/cloudflare | 14.3.0 (peer: astro ^7.2.0, wrangler ^4.125.0) |
| @astrojs/react | 6.0.5 |
| wrangler | 4.129.1 (devDependency) |

Lockfile: `site/package-lock.json` (powtarzalna instalacja przez `npm ci`).

## Polecenia

Wszystkie polecenia uruchamiamy z katalogu `site/` (Node 22, npm 10 — sprawdzone na Node v22.14.0).

```bash
# 1. Instalacja zależności (powtarzalna, z lockfile)
npm ci

# 2. Build produkcyjny (dane mediów pobierane server-side podczas buildu)
npm run build
# Opcjonalnie z własnym adresem kanonicznym witryny:
SITE_URL=https://twoja-domena.example npm run build

# 3. Lokalny podgląd produkcyjny w runtime Cloudflare Workers (workerd via wrangler dev)
npm run preview
# = npx wrangler dev --config dist/client/wrangler.json --port 8795
# Strona: http://localhost:8795/ (wymagane trasy: /, /o-nas, /podcast,
# /podcast/opanuj-ai, /podcast/przeprogramowani, /youtube, /kursy)
```

## Cloudflare Workers — konfiguracja i przyszłe wdrożenie

- Adapter `@astrojs/cloudflare@14.3.0` jest zainstalowany i aktywny w `site/astro.config.mjs`
  (`adapter: cloudflare()`, `output: 'static'` — pobieranie danych podczas buildu jest
  wprost dopuszczone przez zadanie).
- Build generuje kompletną konfigurację Workers w `dist/client/wrangler.json`
  (assets: `dist/client`, obsługa tras zgodna z `html_handling: drop-trailing-slash`
  złączone z korzenia projektu przez `site/wrangler.jsonc`).
- **Wdrożenie na Cloudflare Workers (NIE było wykonywane w tej próbie — zakaz publikacji):**

  ```bash
  npm run build
  npx wrangler deploy --config dist/client/wrangler.json
  ```

  Wymaga konta Cloudflare i poświadczeń (`CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`
  lub `wrangler login`). Docelowa platforma to **Cloudflare Workers** (nie Cloudflare Pages).

### Zmienne środowiskowe

| Zmienna | Działanie |
| --- | --- |
| `SITE_URL` | Adres kanoniczny witryny używany w `<link rel="canonical">` i Open Graph (domyślnie `http://localhost:8788`; w tej próbie build wykonano z `SITE_URL=http://localhost:8795`). |
| `FORCE_SOURCE_FAILURE` | Test odporności: `all` albo lista id źródeł po przecinku (`youtube`, `opanujai`, `przeprogramowani`). Wymusza awarię pobierania danego źródła podczas buildu; strona wyświetla dane z pamięci podręcznej z oznaczeniem nieaktualności. |

### Bindingi

Aplikacja nie wymaga żadnych bindingów (KV, R2, D1 itd.) ani sekretów — wszystkie strony
są prerenderowane, a dane mediów pobierane podczas buildu. Konfiguracja generowana przez
wranglera może zawierać domyślne sekcje podglądu (`previews.kv_namespaces`, `previews.images`),
które służą wyłącznie lokalnemu `wrangler dev` i nie są używane przez kod aplikacji.

## Źródła danych (moduły server-side)

Logika pobierania znajduje się w `site/src/lib/sources.ts` (fetch z timeoutem 10 s,
walidacja struktury, normalizacja do `MediaItem`/`SourceResult`). Komponenty prezentacyjne
wyświetlają wyłącznie otrzymane dane strukturalne.

| Źródło | Feed | Strona źródła |
| --- | --- | --- |
| YouTube (kanał Przeprogramowani) | `https://www.youtube.com/feeds/videos.xml?channel_id=UCb2Y3vMeD6N4WDt5Acw7Arw` | https://www.youtube.com/@przeprogramowani |
| Podcast Opanuj.AI | `https://anchor.fm/s/e2cb03d0/podcast/rss` | https://podcasters.spotify.com/pod/show/opanujai |
| Podcast Przeprogramowani | `https://anchor.fm/s/c72d808/podcast/rss` | https://podcasters.spotify.com/pod/show/przeprogramowani |

Kolejność działania przy buildzie: pobranie live → w razie timeoutu/błędu HTTP/nieprawidłowej
odpowiedzi fallback do zweryfikowanych snapshotów w `site/src/data/cache/*.json`
(oznaczenie „dane z pamięci podręcznej, mogą być nieaktualne" + link do źródła) → gdyby
snapshot też nie istniał, komunikat o niedostępności z linkiem do źródła. Żadna awaria
pojedynczego źródła nie przerywa buildu ani nie wyłącza strony.

Reguła 90 dni: pokazywane są materiały z 90 dni przed startem próby; jeśli źródło nic
w tym oknie nie opublikowało (podcast Przeprogramowani — ostatni odcinek 25.09.2025),
wyświetlane są najnowsze dostępne pozycje z rzeczywistymi datami oraz stosowną informacją.

Dowody researchu (adresy, czasy pobrania, fakty, surowe odpowiedzi): `research/NOTES.md`
i pliki w `research/`.

## Weryfikacja UI

`site/scripts/verify-ui.mjs` — automatyczne sprawdzenie widoków 390 px i 1440 px
(brak poziomego overflow), nawigacji mobilnej (mysz + klawiatura, Escape, aria-expanded),
widoczności fokusa, obecności odtwarzaczy audio/iframe oraz linków do konkretnych
odcinków/filmów; zapisuje zrzuty ekranu. Wymaga `playwright` i działającego podglądu:

```bash
node scripts/verify-ui.mjs http://localhost:8795
```

Pełny raport samoweryfikacji: `VERIFICATION.md` w katalogu próby.
