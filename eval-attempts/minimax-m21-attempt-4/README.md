# Przeprogramowani.pl - Website

Nowoczesna, responsywna strona dla Przeprogramowani.pl zbudowana na Astro, React i Tailwind CSS.

## 🚀 Szybki start

```bash
# Instalacja zależności
npm install

# Development
npm run dev

# Build
npm run build

# Preview lokalny
npm run preview
```

## 📁 Struktura projektu

```
src/
├── components/     # Komponenty Astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Newsletter.astro
│   ├── YouTubeSection.astro
│   └── CoursesSection.astro
├── layouts/       # Szablony stron
│   └── Layout.astro
├── pages/         # Strony
│   ├── index.astro
│   ├── o-nas.astro
│   ├── podcast.astro
│   ├── youtube.astro
│   └── kursy.astro
└── styles/        # Style
    └── global.css
```

## ☁️ Deployment na Cloudflare Pages

### Opcja 1: Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy ./dist
```

### Opcja 2: GitHub Actions

Push kodu do repozytorium automatycznie uruchomi deployment.

1. Utwórz plik `.github/workflows/deploy.yml`
2. Skonfiguruj secrets w GitHub (CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID)

### Opcja 3: Cloudflare Dashboard

1. Wejdź na https://dash.cloudflare.com
2. Utwórz nowy Pages project
3. Podłącz repozytorium GitHub
4. Ustaw:
   - Build command: `npm run build`
   - Build output directory: `dist`

## 🎨 Stack technologiczny

- **Astro** - Generator statycznych stron
- **React** - Komponenty interaktywne
- **Tailwind CSS v4** - Style
- **TypeScript** - Type safety

## 📝 Licencja

MIT
