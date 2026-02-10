# Wdrożenie na Cloudflare Pages

Ten dokument opisuje proces wdrażania strony Przeprogramowani.pl na Cloudflare Pages.

## Metoda 1: Dashboard Cloudflare (Zalecana)

### Krok 1: Przygotowanie repozytorium

1. Upewnij się, że projekt jest w repozytorium Git (GitHub, GitLab lub Bitbucket)
2. Wypchaj wszystkie zmiany do repozytorium:
```bash
git add .
git commit -m "Initial commit - Przeprogramowani website"
git push origin main
```

### Krok 2: Konfiguracja w Cloudflare

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Przejdź do **Workers & Pages**
3. Kliknij **Create application**
4. Wybierz zakładkę **Pages**
5. Kliknij **Connect to Git**

### Krok 3: Połączenie repozytorium

1. Wybierz swojego dostawcę Git (GitHub/GitLab/Bitbucket)
2. Autoryzuj Cloudflare do dostępu do repozytorium
3. Wybierz repozytorium z projektem
4. Kliknij **Begin setup**

### Krok 4: Konfiguracja build

Wprowadź następujące ustawienia:

- **Production branch:** `main` (lub `master`)
- **Framework preset:** `Astro`
- **Build command:** `npm run build`
- **Build output directory:** `dist`

Pozostaw pozostałe ustawienia domyślne.

### Krok 5: Zmienne środowiskowe (opcjonalne)

Jeśli używasz zmiennych środowiskowych, dodaj je w sekcji **Environment variables**:
- `NODE_VERSION`: `20` (lub nowsza)

### Krok 6: Deploy

1. Kliknij **Save and Deploy**
2. Cloudflare automatycznie:
   - Sklonuje repozytorium
   - Zainstaluje zależności
   - Zbuduje projekt
   - Wdroży na globalną sieć CDN

### Krok 7: Konfiguracja domeny (opcjonalne)

Po wdrożeniu możesz skonfigurować własną domenę:
1. Przejdź do zakładki **Custom domains**
2. Kliknij **Set up a domain**
3. Wprowadź swoją domenę (np. `przeprogramowani.pl`)
4. Postępuj zgodnie z instrukcjami, aby dodać rekord DNS

## Metoda 2: Wrangler CLI

### Instalacja Wrangler

```bash
npm install -g wrangler
```

### Logowanie

```bash
wrangler login
```

### Deploy

```bash
# Zbuduj projekt
npm run build

# Wdróż do Cloudflare Pages
wrangler pages deploy dist --project-name=przeprogramowani
```

### Konfiguracja ciągłego wdrażania

Aby skonfigurować automatyczne wdrożenia przy każdym push:

1. Utwórz plik `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    name: Deploy to Cloudflare Pages
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Publish to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: przeprogramowani
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

2. Dodaj secrets do GitHub:
   - `CLOUDFLARE_API_TOKEN`: Token API z Cloudflare
   - `CLOUDFLARE_ACCOUNT_ID`: ID konta Cloudflare

## Metoda 3: Manual Upload

Jeśli nie chcesz używać Git:

```bash
# Zbuduj projekt
npm run build

# Przejdź do Cloudflare Dashboard > Workers & Pages
# Kliknij "Upload assets"
# Przeciągnij folder dist/ lub wybierz pliki
```

## Weryfikacja wdrożenia

Po wdrożeniu sprawdź:

1. **Strona główna:** https://twoj-projekt.pages.dev
2. **Strona O nas:** https://twoj-projekt.pages.dev/o-nas
3. **Podcast:** https://twoj-projekt.pages.dev/podcast
4. **YouTube:** https://twoj-projekt.pages.dev/youtube

## Konfiguracja zaawansowana

### Headers

Utwórz plik `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

### Redirects

Plik `public/_redirects` już istnieje w projekcie:

```
/*/ /:splat 301
```

### Custom 404

Utwórz `src/pages/404.astro` dla niestandardowej strony błędu.

## Monitorowanie

1. Przejdź do **Analytics** w Cloudflare Dashboard
2. Zobacz statystyki ruchu, wydajności i błędów
3. Skonfiguruj alerty dla problemów z dostępnością

## Rollback

Jeśli coś pójdzie nie tak:

1. Przejdź do **Deployments** w Cloudflare Dashboard
2. Znajdź poprzednie wdrożenie
3. Kliknij **Rollback to this deployment**

## Optymalizacja

### Edge Caching

Cloudflare automatycznie cache'uje statyczne zasoby. Dla dodatkowej optymalizacji:

1. Użyj **Rocket Loader** dla JavaScript
2. Włącz **Auto Minify** dla HTML/CSS/JS
3. Użyj **Mirage** dla optymalizacji obrazów

### Performance

Projekt jest już zoptymalizowany:
- ✅ Statyczne generowanie stron (SSG)
- ✅ Minifikacja CSS/JS
- ✅ Lazy loading obrazów
- ✅ Optymalizacja fontów
- ✅ Tree-shaking

## Rozwiązywanie problemów

### Build fails

Jeśli build się nie powiedzie:
1. Sprawdź logi w Cloudflare Dashboard
2. Upewnij się, że `npm run build` działa lokalnie
3. Sprawdź wersję Node.js (powinna być 18+)

### 404 na podstronach

Jeśli podstrony pokazują 404:
1. Sprawdź, czy `output: 'static'` w `astro.config.mjs`
2. Zweryfikuj strukturę katalogów w `dist/`

### Problemy z domeną

Jeśli własna domena nie działa:
1. Sprawdź konfigurację DNS
2. Upewnij się, że rekord CNAME wskazuje na `<projekt>.pages.dev`
3. Poczekaj do 24h na propagację DNS

## Wsparcie

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Community](https://community.cloudflare.com/)

## Koszt

Cloudflare Pages oferuje:
- **Darmowy plan:**
  - Nieograniczona przepustowość
  - 500 buildów miesięcznie
  - Globalny CDN
  - SSL/HTTPS

- **Pro plan ($20/miesiąc):**
  - Wszystko z darmowego planu
  - Priorytetowa obsługa
  - Zaawansowana analityka

## Podsumowanie

Strona Przeprogramowani.pl jest w pełni gotowa do wdrożenia na Cloudflare Pages. Wystarczy:

1. Wypchać kod do Git
2. Połączyć repozytorium z Cloudflare Pages
3. Kliknąć "Deploy"

Cloudflare automatycznie zbuduje i wdroży stronę na globalną sieć CDN, zapewniając:
- ⚡ Szybkie ładowanie na całym świecie
- 🔒 Bezpłatne SSL
- 🚀 Automatyczne buildy przy każdym push
- 📊 Analytics i monitoring
- 💰 Darmowy hosting
