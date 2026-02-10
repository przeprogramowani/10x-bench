# Przeprogramowani.pl - Oficjalna strona projektu

Nowoczesna i responsywna strona internetowa projektu Przeprogramowani.pl zbudowana z wykorzystaniem Astro, React i Tailwind CSS.

## Funkcje

- **Responsywny design** - pełna obsługa urządzeń mobilnych, tabletów i desktopów
- **Sekcja Hero** - z wyróżnionym kursem 10xDevs 3.0
- **O nas** - informacje o projekcie, twórcach i misji
- **Podcast** - najnowsze odcinki podcastów Opanuj.AI i Przeprogramowani ft. Gość
- **YouTube** - najnowsze filmy z kanału YouTube
- **Kursy** - prezentacja kursów: Opanuj Frontend, Opanuj TypeScript, 10xDevs
- **Nawigacja mobilna** - hamburger menu dla małych ekranów
- **Optymalizacja wydajności** - lazy loading komponentów z Astro

## Stack technologiczny

- **Astro 5.x** - framework do budowania statycznych stron
- **React 19** - komponenty UI
- **Tailwind CSS 4.x** - stylowanie
- **TypeScript** - typowanie

## Instalacja i uruchomienie

### Wymagania

- Node.js 18+
- npm lub pnpm

### Instalacja zależności

```bash
npm install
```

### Uruchomienie serwera deweloperskiego

```bash
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:4321`

### Build produkcyjny

```bash
npm run build
```

Zbudowana strona znajdzie się w katalogu `dist/`

### Podgląd buildu produkcyjnego

```bash
npm run preview
```

## Wdrożenie na Cloudflare Pages

### Metoda 1: Przez dashboard Cloudflare

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Przejdź do sekcji **Pages**
3. Kliknij **Create a project**
4. Połącz swoje repozytorium Git (GitHub, GitLab)
5. Skonfiguruj build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 lub nowsza
6. Kliknij **Save and Deploy**

### Metoda 2: Przez Wrangler CLI

```bash
# Zainstaluj Wrangler
npm install -g wrangler

# Zbuduj projekt
npm run build

# Wdróż na Cloudflare Pages
wrangler pages deploy dist
```

## Struktura projektu

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Podcast.tsx
│   │   ├── YouTube.tsx
│   │   ├── Courses.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Customizacja

### Zmiana kolorów

Kolory są zdefiniowane w `src/layouts/Layout.astro`:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
}
```

## Licencja

© 2026 Przeprogramowani. Wszystkie prawa zastrzeżone.

## Kontakt

kontakt@przeprogramowani.pl
