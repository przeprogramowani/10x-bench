# Szybki start

Rozpocznij pracę z projektem w 3 prostych krokach.

## 1. Instalacja

```bash
# Sklonuj repozytorium (lub rozpakuj archiwum)
cd przeprogramowani-website

# Zainstaluj zależności
npm install
```

## 2. Uruchomienie lokalnie

```bash
# Uruchom serwer deweloperski
npm run dev
```

Strona będzie dostępna pod adresem: **http://localhost:4321**

## 3. Build produkcyjny

```bash
# Zbuduj projekt
npm run build

# Podgląd buildu
npm run preview
```

## Wdrożenie na Cloudflare Pages

### Opcja A: Przez dashboard (łatwiejsza)

1. Push code do GitHub/GitLab
2. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Pages → Create a project → Connect to Git
4. Wybierz repo i ustaw:
   - Build command: `npm run build`
   - Build output: `dist`
5. Deploy!

### Opcja B: Przez CLI (szybsza)

```bash
# Zainstaluj Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
npm run build
wrangler pages deploy dist --project-name=przeprogramowani
```

## Struktura katalogów

```
.
├── src/
│   ├── components/     # Komponenty React
│   ├── layouts/        # Layouty Astro
│   ├── pages/          # Strony (routing)
│   └── styles/         # Global CSS
├── public/             # Statyczne pliki
└── dist/               # Build output (generowany)
```

## Customizacja

### Zmiana treści

**Odcinki podcastu:**
`src/components/Podcast.tsx` → edytuj array `episodes`

**Filmy YouTube:**
`src/components/YouTube.tsx` → edytuj array `videos`

**Informacje o kursach:**
`src/components/Courses.tsx` → edytuj array `courses`

### Zmiana kolorów

`src/layouts/Layout.astro` → edytuj CSS variables:
```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
}
```

## Dalsze kroki

- 📖 Przeczytaj [README.md](README.md) dla pełnej dokumentacji
- 🚀 Zobacz [DEPLOYMENT.md](DEPLOYMENT.md) dla szczegółów wdrożenia
- ⚡ Sprawdź [FEATURES.md](FEATURES.md) dla listy funkcji

## Potrzebujesz pomocy?

- Email: kontakt@przeprogramowani.pl
- Dokumentacja Astro: https://docs.astro.build
- Cloudflare Pages: https://developers.cloudflare.com/pages

---

**Miłego kodowania! 🚀**
