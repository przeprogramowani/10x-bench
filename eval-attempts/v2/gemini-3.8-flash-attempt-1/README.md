# Przeprogramowani.pl — Nowoczesny Portal Społeczności i Edukacji Inżynierskiej

Kompletna, nowoczesna i w pełni responsywna implementacja portalu **Przeprogramowani.pl** zrealizowana w ramach benchmarku 10xBench V2. Strona łączy autentyczne treści, dedykowane moduły pobierania danych serwerowych z mechanizmami odporności (caching/resilience), zaawansowaną dostępność (a11y), pełne SEO oraz integrację z runtime **Cloudflare Workers**.

---

## 🛠️ Technologie i Wersje

Zgodnie z zamrożonym rejestrem wersji (BASELINE.md):
- **Astro**: `7.3.1` (major 7)
- **React**: `19.2.8` (major 19)
- **Tailwind CSS**: `4.3.3` (major 4, z `@tailwindcss/vite`)
- **Cloudflare Adapter**: `@astrojs/cloudflare` `14.3.0` (oficjalny adapter Cloudflare Workers)
- **XML / Atom Parser**: `fast-xml-parser` `5.11.1` (zero zależności, pełna kompatybilność z Workers)
- **Wrangler**: `4.129.1`

Zależności są utrwalone w `package.json` oraz powtarzalnym `package-lock.json`.

---

## 🧭 Dedykowane Strony i Architektura Tras

Każdy z poniższych adresów jest osobną, bezpośrednio dostępną stroną zwracającą HTTP 200 w runtime Cloudflare Workers:

| Trasa | Zawartość i Rola |
|---|---|
| `/` | Przedstawienie projektu, wyróżniony kurs **10xDevs 4.0** w hero z autentycznym linkiem do `https://10xdevs.pl` oraz zapowiedzi pozostałych stron. |
| `/o-nas` | Działalność i wartości Przeprogramowanych oraz sylwetki założycieli: **Przemka Smyrdka** i **Marcina Czarkowskiego**, zgodne z oficjalnymi źródłami. |
| `/podcast` | Katalog obu podcastów z opisami i odnośnikami do ich osobnych stron. |
| `/podcast/opanuj-ai` | **Opanuj.AI Podcast**: opis, najnowsze rzeczywiste odcinki z 90 dni, odtwarzacze audio MP3 oraz odnośniki do platformy źródłowej. |
| `/podcast/przeprogramowani` | **Podcast Przeprogramowani**: opis, najnowsze rzeczywiste odcinki (zgodnie z regułą doboru najnowszych materiałów z rzeczywistą datą), odtwarzacze audio MP3 oraz odnośniki. |
| `/youtube` | Oficjalny kanał **YouTube Przeprogramowani**: najnowsze filmy z 90 dni, responsywne osadzone odtwarzacze i niezależne linki do filmów. |
| `/kursy` | Trzy autorskie programy edukacyjne: **10xDevs 4.0** (`https://10xdevs.pl`), **Opanuj Frontend: AI Edition** (`https://www.opanujfrontend.pl`) oraz **Opanuj TypeScript** (`https://www.opanujtypescript.pl`). |

Globalna nawigacja (`Navbar.tsx` i `Footer.astro`) zapewnia dostęp do wszystkich podstron, menu wielopoziomowe dla podcastów, powrót na stronę główną z każdego miejsca oraz w pełni dostępną nawigację mobilną (mysz, dotyk, klawiatura z obsługą klawisza `Escape`).

---

## 🚀 Instrukcja Uruchomienia i Podglądu Lokalnego

### 1. Instalacja zależności
```bash
npm install
```

### 2. Uruchomienie deweloperskie
```bash
npm run dev
```
Domyślny adres: `http://localhost:4321`.

### 3. Zbudowanie wersji produkcyjnej
```bash
npm run build
```
Polecenie generuje zoptymalizowane artefakty produkcyjne pod kątem Cloudflare Workers w katalogu `dist/` (zarówno statyczne assety, jak i konfigurację `wrangler.json`).

### 4. Lokalny podgląd produkcyjny w runtime Cloudflare Workers
```bash
npm run preview
# lub na dedykowanym porcie:
npx astro preview --port 4333
```
Adapter `@astrojs/cloudflare` automatycznie uruchamia podgląd oparty na runtime `workerd` (Cloudflare Workers), serwując nagłówki `cf-cache-status: HIT`.

Zatrzymanie podglądu działającego w tle:
```bash
npx astro preview stop
```

### 5. Samoweryfikacja całego projektu
W projekcie zawarty jest kompleksowy skrypt weryfikacyjny testujący build, nagłówki HTTP 200, brak overflow na 390px/1440px (Playwright), nawigację klawiaturą, SEO oraz eksperyment awarii źródła:
```bash
node scripts/verify-all.mjs
```

---

## ☁️ Gotowość do Wdrożenia na Cloudflare Workers

Projekt jest w pełni skonfigurowany pod **Cloudflare Workers** (a nie Cloudflare Pages). 

### Konfiguracja w `astro.config.mjs`
Adapter `@astrojs/cloudflare` jest zainstalowany i aktywny:
```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  adapter: cloudflare(),
  build: {
    format: 'file',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.SIMULATE_SOURCE_FAILURE': JSON.stringify(process.env.SIMULATE_SOURCE_FAILURE || ''),
    },
  },
});
```

### Wymagane Bindingi i Zmienne Środowiskowe w Cloudflare Workers
Podczas wdrożenia produkcyjnego adapter `@astrojs/cloudflare` korzysta z bindingów zdefiniowanych automatycznie lub w konfiguracji Wrangler:
1. **`SESSION` (KV Namespace)** — automatycznie rezerwowany binding KV do obsługi sesji i pamięci podręcznej.
2. **`IMAGES` (Images Binding)** — opcjonalny binding transformacji obrazów Cloudflare Images.

### Przyszłe wdrożenie produkcyjne (bez publikacji podczas benchmarku)
Aby w przyszłości wdrożyć aplikację na produkcyjnego Workera w Cloudflare:
```bash
# Zalogowanie do konta Cloudflare (wymaga uprawnień konta)
npx wrangler login

# Wdrożenie gotowych artefaktów na Cloudflare Workers
npx wrangler deploy --config dist/client/wrangler.json
```
*Uwaga: W ramach zasad benchmarku 10xBench żadne polecenia zdalnego wdrożenia nie były i nie powinny być uruchamiane.*

---

## 🛡️ Odporność Źródeł Danych i Obsługa Awarii (P04)

Pobieranie danych zewnętrznych odbywa się wyłącznie po stronie serwera w dedykowanych modułach:
- `src/data/opanuj-ai.ts` (RSS Opanuj.AI z `https://anchor.fm/s/e2cb03d0/podcast/rss`)
- `src/data/przeprogramowani-podcast.ts` (RSS Przeprogramowani z `https://anchor.fm/s/c72d808/podcast/rss`)
- `src/data/youtube.ts` (Atom Feed kanału `UCb2Y3vMeD6N4WDt5Acw7Arw`)

Każdy moduł implementuje:
1. **Limit czasu żądania (timeout)** — `AbortController` z limitem 7000 ms.
2. **Normalizację i walidację strukturalną** za pomocą `fast-xml-parser`.
3. **Automatyczny fallback** do lokalnej, zweryfikowanej pamięci podręcznej (`src/data/cache/`) w przypadku błędu sieci, nieprawidłowej odpowiedzi lub symulowanej awarii.
4. **Wskaźnik stanu w UI** (`ResilienceAlert.astro`), informujący użytkownika o prezentacji danych archiwalnych z zachowaniem bezpośredniego linku do źródła.
5. **Wsparcie dla kontrolowanej awarii** poprzez zmienną środowiskową `SIMULATE_SOURCE_FAILURE="opanuj-ai"`.
