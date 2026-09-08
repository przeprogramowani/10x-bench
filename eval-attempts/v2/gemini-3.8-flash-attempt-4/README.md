# Przeprogramowani.pl — Portal V2

Kompletna, nowoczesna i responsywna witryna projektu **Przeprogramowani.pl** zrealizowana w oparciu o Astro 7, React 19, Tailwind CSS 4 oraz oficjalny adapter `@astrojs/cloudflare` dedykowany dla środowiska **Cloudflare Workers**.

---

## 🚀 Technologie i wersje bazowe

Wszystkie pakiety są zgodne z baseline'em benchmarku (najnowsze wersje stabilne w chwili startu próby):

- **Astro**: `7.3.1` (major 7)
- **React**: `19.2.8` (major 19)
- **Tailwind CSS**: `4.3.3` (major 4)
- **@astrojs/cloudflare**: `14.3.0` (oficjalny adapter Cloudflare Workers)
- **@astrojs/react**: `6.0.5`
- **Wrangler**: `4.129.1` (lokalny runtime Cloudflare Workers `workerd`)
- **Fast-XML-Parser**: `5.11.1` (wydajny serwerowy parser kanałów RSS/Atom)

---

## 📂 Wymagane strony i struktura nawigacji (P01)

Każdy z poniższych adresów jest osobną stroną dostępną bezpośrednio (z obsługą końcowych ukośników):

1. `/` — Przedstawienie projektu, wyróżniony kurs 10xDevs 4.0 w hero z odnośnikiem do https://10xdevs.pl oraz zapowiedzi pozostałych sekcji.
2. `/o-nas` — Działalność i wartości Przeprogramowanych oraz autentyczne sylwetki Przemka Smyrdka i Marcina Czarkowskiego ze zweryfikowanymi linkami do LinkedIn.
3. `/podcast` — Główny katalog obu podcastów technologicznych z opisami i bezpośrednimi odnośnikami do ich stron.
4. `/podcast/opanuj-ai` — Podcast Opanuj.AI: opis formatu, najnowsze rzeczywiste odcinki (z okna 90 dni), wbudowane odtwarzanie audio oraz niezależne linki do Spotify/Podcasters.
5. `/podcast/przeprogramowani` — Podcast Przeprogramowani ft. Gość: opis formatu, najnowsze dostępne odcinki z rzeczywistymi datami emisji (zgodnie z regułą doboru P03), wbudowane odtwarzanie audio oraz linki do platformy.
6. `/youtube` — Najnowsze rzeczywiste filmy oficjalnego kanału YouTube Przeprogramowani, wbudowane odtwarzacze wideo (iframe) oraz bezpośrednie linki do YouTube.
7. `/kursy` — Wszystkie trzy oficjalne programy edukacyjne (10xDevs 4.0, Opanuj Frontend: AI Edition, Opanuj TypeScript) z opisami i rzeczywistymi odnośnikami.

---

## 🛠️ Polecenia uruchomienia i wytwarzania

### 1. Instalacja zależności
Instalacja powtarzalna z zatwierdzonego `package-lock.json`:
```bash
npm ci
# lub: npm install
```

### 2. Sprawdzenie poprawności typów
```bash
npm run check
# weryfikacja Astro Diagnostics: 0 errors, 0 warnings
```

### 3. Build produkcyjny
```bash
npm run build
# kompiluje artefakty do katalogu dist/ z konfiguracją Cloudflare Workers
```

### 4. Lokalny podgląd produkcyjny w runtime Cloudflare Workers
Projekt uruchamia się w lokalnym runtime Workers (`workerd`) za pośrednictwem narzędzia Wrangler:
```bash
# Uruchomienie lokalnego serwera Workers (domyślnie port 8888 lub 8787):
npx wrangler dev --port 8888 --ip 127.0.0.1
```
Wszystkie 7 tras zwraca kod HTTP 200 pod adresem `http://127.0.0.1:8888/`.

---

## ☁️ Architektura Cloudflare Workers i instrukcja przyszłego wdrożenia (P06)

Witryna została przygotowana do bezserwerowego uruchomienia na platformie **Cloudflare Workers** (a nie Cloudflare Pages).

### Konfiguracja adaptera
W `astro.config.mjs` zainstalowano i aktywowano adapter:
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  adapter: cloudflare(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### Plik konfiguracyjny Wrangler (`wrangler.json`)
W głównym katalogu projektu zdefiniowano konfigurację zgodną ze standardem Cloudflare Workers Static Assets:
```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "przeprogramowani-v2",
  "compatibility_date": "2026-09-07",
  "assets": {
    "directory": "./dist/client"
  },
  "observability": {
    "enabled": false
  }
}
```

### Wymagane zmienne środowiskowe i bindingi
- **`SESSION`**: Cloudflare KV Namespace (opcjonalny dla zaawansowanych sesji, domyślnie wspierany przez adapter).
- **`IMAGES`**: Cloudflare Images Binding (do optymalizacji obrazów w locie w runtime Workers).
- **Zmienne opcjonalne / testowe**:
  - `MOCK_FAIL_YOUTUBE`: ustawienie na `true` symuluje awarię źródła YouTube w celach testu odporności.
  - `MOCK_FAIL_OPANUJ_AI`: ustawienie na `true` symuluje awarię źródła Opanuj.AI.
  - `MOCK_FAIL_PRZEPROGRAMOWANI`: ustawienie na `true` symuluje awarię źródła Przeprogramowani Podcast.

### Przyszłe wdrożenie produkcyjne (poza benchmarkiem)
*Uwaga: W ramach zasad benchmarku 10xBench strona NIE jest wdrażana do publicznej chmury Cloudflare.*  
Gdyby użytkownik chciał dokonać przyszłego wdrożenia na swoje konto:
1. Zalogowanie w CLI: `npx wrangler login`
2. Publikacja Workera: `npx wrangler deploy`

---

## 🛡️ Odporność na awarie i moduły danych (P04)

Pobieranie danych zewnętrznych zostało w całości odseparowane od warstwy prezentacyjnej:
- `src/data/sources/youtube.ts`
- `src/data/sources/opanuj-ai.ts`
- `src/data/sources/przeprogramowani-podcast.ts`

Każdy moduł:
1. Pobiera dane po stronie serwera z oficjalnych kanałów Atom/RSS z limitem czasu (`AbortSignal.timeout(5000)`).
2. Waliduje strukturę XML i normalizuje dane do typu `MediaItem`.
3. Filtruje materiały zgodnie z oknem 90 dni (lub wybiera najnowsze dostępne, jeśli w 90 dniach brak publikacji).
4. **W przypadku awarii zewnętrznej (timeout, błąd HTTP, brak sieci):** moduł automatycznie przełącza się na zweryfikowaną pamięć podręczną (`src/data/cache/`), oznaczając rezultat jako `isStale: true` i `status: 'stale_cache'`, a komponent `MediaStatusBadge` wyświetla użytkownikowi jasną informację o trybie awaryjnym i bezpośredni link do źródła.

Szczegółowe logi i wyniki samoweryfikacji znajdują się w pliku `VERIFICATION.md` oraz katalogu `evidence/`.
