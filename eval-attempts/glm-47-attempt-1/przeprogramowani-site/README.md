# Przeprogramowani.pl

Nowoczesna i responsywna strona dla Przeprogramowani.pl zbudowana z Astro, React i Tailwind CSS.

## Struktura strony

- **Strona główna** - Hero sekcja 10xDevs, karty kursów, sekcja 10xRules.ai, newsletter, partnerzy
- **O nas** - Informacje o założycielach Przeprogramowani
- **Podcast** - Ostatnie odcinki Opanuj.AI Podcast i Przeprogramowani ft. Gość
- **YouTube** - Ostatnie filmy z kanału Przeprogramowani
- **Kursy** - Przegląd wszystkich kursów (10xDevs, Opanuj Frontend, Opanuj TypeScript, Opanuj AI)

## Stack technologiczny

- **Astro 5.x** - Framework do budowania stron statycznych
- **React 19** - Biblioteka UI dla komponentów interaktywnych
- **Tailwind CSS 3.x** - Framework CSS do stylowania

## Instalacja i uruchomienie

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# Zbuduj wersję produkcyjną
npm run build

# Podgląd wersji produkcyjnej
npm run preview
```

## Wdrożenie na Cloudflare Pages

Projekt jest gotowy do wdrożenia na Cloudflare Pages:

1. Połącz swoje repozytorium GitHub z Cloudflare Pages
2. Ustaw polecenie budowania: `npm run build`
3. Ustaw katalog wyjściowy: `dist`
4. Wdróż!

Alternatywnie, skonfiguruj `_headers` i `_redirects` jeśli potrzebujesz.

## Struktura plików

```
przeprogramowani-site/
├── src/
│   ├── components/      # Komponenty React
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── CourseCard.tsx
│   │   ├── PodcastCard.tsx
│   │   ├── VideoCard.tsx
│   │   └── Newsletter.tsx
│   ├── layouts/         # Layouty Astro
│   │   └── Layout.astro
│   ├── pages/          # Strony Astro
│   │   ├── index.astro
│   │   ├── o-nas.astro
│   │   ├── podcast.astro
│   │   ├── youtube.astro
│   │   └── kursy.astro
│   └── styles/
│       └── global.css
├── public/             # Statyczne pliki
├── astro.config.mjs    # Konfiguracja Astro
├── tailwind.config.js  # Konfiguracja Tailwind
└── package.json
```
