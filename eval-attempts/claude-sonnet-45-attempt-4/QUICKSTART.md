# 🚀 Quick Start Guide

Szybki przewodnik uruchomienia projektu Przeprogramowani.pl

## Wymagania

- **Node.js** 18+ (zalecane 20+)
- **npm** 9+ lub **pnpm** 8+
- Konto **Cloudflare** (tylko do deploymentu)

## Instalacja i uruchomienie (3 kroki)

### 1. Instalacja zależności

```bash
npm install
```

### 2. Uruchomienie dev servera

```bash
npm run dev
```

Strona będzie dostępna pod adresem: **http://localhost:4321**

### 3. Build produkcyjny

```bash
npm run build
```

Output: `./dist/` folder

## Szybki test

Po uruchomieniu `npm run dev`, otwórz w przeglądarce:

- **Strona główna**: http://localhost:4321
- **O nas**: http://localhost:4321/about
- **Podcast**: http://localhost:4321/podcast
- **YouTube**: http://localhost:4321/youtube

## Edycja treści

### Zmiana kursów
```bash
# Edytuj plik
src/data/courses.json
```

### Dodanie odcinka podcastu
```bash
# Edytuj plik
src/data/podcasts.json

# Format:
{
  "id": "unique-id",
  "title": "Tytuł odcinka",
  "series": "Opanuj.AI Podcast",
  "duration": "01:23:04",
  "description": "Opis",
  "url": "https://...",
  "date": "2026-02-10"
}
```

### Dodanie filmu YouTube
```bash
# Edytuj plik
src/data/videos.json
```

## Deployment na Cloudflare

### Opcja 1: Dashboard (najszybsza)

1. Zaloguj się: https://dash.cloudflare.com
2. Pages → Create project
3. Connect Git repo
4. Settings:
   - Build: `npm run build`
   - Output: `dist`
   - Framework: Astro
5. Deploy!

### Opcja 2: CLI

```bash
# Instalacja Wrangler
npm install -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy dist
```

## Debugowanie

### Port zajęty?
```bash
# Sprawdź co używa portu 4321
lsof -i :4321

# Użyj innego portu
npm run dev -- --port 3000
```

### Build nie działa?
```bash
# Wyczyść cache
rm -rf node_modules .astro dist

# Reinstaluj
npm install

# Build ponownie
npm run build
```

### TypeScript errors?
```bash
# Check TypeScript
npx astro check

# Fix auto-fixable issues
npx astro check --fix
```

## Struktura plików (uproszczona)

```
przeprogramowani-website/
├── src/
│   ├── components/        # React components
│   ├── data/             # JSON data
│   ├── layouts/          # Astro layouts
│   ├── pages/            # Routes (index, about, podcast, youtube)
│   └── styles/           # Global CSS
├── public/               # Static files
├── astro.config.mjs      # Astro config
├── package.json          # Dependencies
└── wrangler.toml         # Cloudflare config
```

## Komendy

| Komenda | Opis |
|---------|------|
| `npm install` | Instalacja dependencies |
| `npm run dev` | Dev server (port 4321) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run astro check` | TypeScript check |

## Porady

### Szybsza instalacja
```bash
# Użyj pnpm (2-3x szybciej)
pnpm install
pnpm dev
```

### Auto-reload
Dev server automatycznie przeładuje stronę przy zmianach w:
- `.astro` files
- `.tsx` components
- `.json` data
- `.css` styles

### VS Code extensions
Zalecane rozszerzenia (już w `.vscode/extensions.json`):
- Astro
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

## Pomoc

- **Astro docs**: https://docs.astro.build
- **Tailwind docs**: https://tailwindcss.com/docs
- **React docs**: https://react.dev

## Problemy?

1. Sprawdź Node version: `node -v` (powinno być ≥18)
2. Sprawdź npm version: `npm -v` (powinno być ≥9)
3. Wyczyść cache: `rm -rf node_modules .astro dist && npm install`
4. Check build: `npm run build`

---

**Gotowe!** Teraz możesz edytować stronę i wdrożyć ją na Cloudflare Pages 🚀
