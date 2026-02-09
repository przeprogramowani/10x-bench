# Przeprogramowani.pl

Nowoczesna i responsywna strona projektu Przeprogramowani.pl zbudowana w Astro, React i Tailwind CSS.

## Stack technologiczny

- **Framework**: Astro 5.x
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.x
- **Deployment**: Cloudflare Pages
- **Language**: TypeScript

## Struktura projektu

```
przeprogramowani.pl/
├── src/
│   ├── components/       # Komponenty React
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Courses.jsx
│   │   ├── Podcast.jsx
│   │   ├── YouTube.jsx
│   │   ├── About.jsx
│   │   └── Newsletter.jsx
│   ├── layouts/          # Szablony Astro
│   │   └── Layout.astro
│   ├── pages/            # Strony
│   │   ├── index.astro
│   │   └── o-nas.astro
│   └── styles/           # Style
│       └── global.css
├── public/               # Statyczne assety
│   └── favicon.svg
├── astro.config.mjs      # Konfiguracja Astro
├── tailwind.config.mjs   # Konfiguracja Tailwind
├── wrangler.toml         # Konfiguracja Cloudflare
└── package.json
```

## Instalacja

```bash
# Instalacja zależności
npm install

# Development server
npm run dev

# Build produkcyjny
npm run build

# Preview build
npm run preview
```

## Deployment na Cloudflare Pages

### Wymagania
- Konto na [Cloudflare](https://cloudflare.com)
- Zainstalowany [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-update/)

### Szybki deployment

1. **Zainstaluj Wrangler CLI** (jeśli nie masz):
   ```bash
   npm install -g wrangler
   ```

2. **Zaloguj się do Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   npm run build
   npx wrangler pages deploy ./dist
   ```

### Alternatywnie - przez dashboard Cloudflare

1. Zbuduj projekt: `npm run build`
2. Idź do [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Przejdź do **Pages** → **Create a project**
4. Wybierz **Direct upload**
5. Przeciągnij folder `dist` lub wybierz go ręcznie
6. Kliknij **Deploy site**

### Automatyczny deployment (GitHub Actions)

Utwórz plik `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: przeprogramowani-pl
          directory: dist
```

## Dostępne strony

- `/` - Strona główna (Hero, Kursy, Podcast, YouTube, O nas)
- `/o-nas` - Strona "O nas" (historia, misja, zespół)

## Główne sekcje

- **Hero** - Promocja kursu 10xDevs z wyróżnieniem statystyk
- **Kursy** - 10xDevs, Opanuj Frontend, Opanuj TypeScript
- **Podcast** - Lista najnowszych odcinków z linkami do Spotify
- **YouTube** - Najnowsze filmy z kanału
- **O nas** - Informacje o zespole i partnerach
- **Newsletter** - Sekcja zapisu do newslettera

## Dostosowanie

### Zmiana kolorów
Edytuj `tailwind.config.mjs`:
```js
colors: {
  main: '#e30f55',      // Główny kolor brandu
  turquoise: '#1ff1af', // Kolor akcentowy
}
```

### Zmiana czcionek
Edytuj `src/styles/global.css` i `tailwind.config.mjs`:
- Inter - dla tekstu
- Sora - dla nagłówków
- JetBrains Mono - dla kodu

## Środowisko produkcyjne

Strona jest zoptymalizowana pod kątem:
- Wydajności (Astro generuje statyczny HTML)
- SEO (meta tagi, JSON-LD, Open Graph)
- Dostępności (ARIA labels, semantic HTML)
- Responsive design (mobile-first)

## Licencja

© 2026 Przeprogramowani.pl - Wszelkie prawa zastrzeżone.
