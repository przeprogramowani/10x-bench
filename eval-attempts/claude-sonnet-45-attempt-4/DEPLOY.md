# Wdrożenie na Cloudflare Pages

Ten projekt jest skonfigurowany do wdrożenia na Cloudflare Pages.

## Opcje wdrożenia

### 1. Cloudflare Pages Dashboard (Zalecane)

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Przejdź do **Pages** w menu bocznym
3. Kliknij **Create a project**
4. Połącz swoje repozytorium Git (GitHub, GitLab)
5. Skonfiguruj build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (lub ścieżka do projektu)
   - **Framework preset**: `Astro`
6. Kliknij **Save and Deploy**

### 2. Wrangler CLI

```bash
# Zainstaluj Wrangler globalnie
npm install -g wrangler

# Zaloguj się do Cloudflare
wrangler login

# Zbuduj projekt
npm run build

# Deploy
wrangler pages deploy dist
```

### 3. GitHub Actions (CI/CD)

Utwórz `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: przeprogramowani-website
          directory: dist
```

## Zmienne środowiskowe

Jeśli potrzebujesz zmiennych środowiskowych:

1. W Cloudflare Dashboard, przejdź do swojego projektu Pages
2. Kliknij **Settings** → **Environment variables**
3. Dodaj wymagane zmienne dla środowisk Production i Preview

## Domena niestandardowa

1. W Cloudflare Dashboard, przejdź do swojego projektu Pages
2. Kliknij **Custom domains**
3. Dodaj swoją domenę (np. `przeprogramowani.pl`)
4. Cloudflare automatycznie skonfiguruje SSL

## Konfiguracja SSR

Projekt jest skonfigurowany z `output: 'server'` w `astro.config.mjs`, co oznacza:
- Obsługa server-side rendering
- Automatyczne wdrażanie jako Cloudflare Workers
- Wsparcie dla dynamicznych route'ów

Jeśli chcesz statycznego buildu (SSG), zmień w `astro.config.mjs`:

```js
export default defineConfig({
  output: 'static', // zamiast 'server'
  // ... reszta konfiguracji
});
```

## Preview Deployments

Cloudflare Pages automatycznie tworzy preview dla każdego pull requesta i brancha.
Każdy preview ma unikalny URL, np:
- `https://<commit-hash>.przeprogramowani-website.pages.dev`

## Troubleshooting

### Build nie działa
- Upewnij się, że `node_modules` nie są w repozytorium
- Sprawdź czy `package-lock.json` jest zaktualizowany
- Zweryfikuj wersję Node.js (zalecana 18+)

### 404 na podstronach
- Upewnij się, że `output: 'server'` jest w konfiguracji
- Sprawdź czy wszystkie ścieżki w linkach są poprawne

### Problemy z Tailwind
- Upewnij się, że `@import "tailwindcss";` jest w `src/styles/global.css`
- Sprawdź czy global.css jest zaimportowany w Layout.astro

## Monitoring

Cloudflare automatycznie dostarcza:
- Analytics ruchu
- Web Analytics
- Core Web Vitals
- Real User Monitoring (RUM)

Dostępne w Dashboard → Analytics
