# Przeprogramowani.pl - Strona projektu

Nowoczesna i responsywna strona projektu Przeprogramowani.pl zbudowana z użyciem Astro, React i Tailwind CSS.

## Opis projektu

Strona prezentuje działalność Przeprogramowani.pl - platformy edukacyjnej oferującej szersze spojrzenie na programowanie. Zawiera informacje o kursach, podcastach, filmach YouTube i innych treściach edukacyjnych.

## Technologie

- **Astro 5** - Nowoczesny framework do tworzenia stron statycznych
- **React 19** - Interaktywne komponenty UI
- **Tailwind CSS 3** - Stylowanie i responsywność
- **TypeScript** - Typowanie i bezpieczeństwo kodu

## Struktura projektu

```
/
├── public/              # Pliki statyczne (favicon, obrazy)
├── src/
│   ├── components/      # Komponenty React i Astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── CourseCard.tsx
│   │   ├── PodcastEpisodeCard.tsx
│   │   └── VideoCard.tsx
│   ├── layouts/
│   │   └── Layout.astro  # Główny layout strony
│   ├── pages/           # Strony aplikacji
│   │   ├── index.astro  # Strona główna
│   │   ├── o-nas.astro  # O nas
│   │   ├── podcast.astro # Podcast
│   │   └── youtube.astro # YouTube
│   └── styles/
│       └── global.css   # Globalne style
├── astro.config.mjs     # Konfiguracja Astro
├── tailwind.config.mjs  # Konfiguracja Tailwind
└── package.json
```

## Instalacja

1. Sklonuj repozytorium lub pobierz pliki projektu

2. Zainstaluj zależności:
```bash
npm install
```

## Uruchomienie

### Tryb deweloperski

```bash
npm run dev
```

Strona będzie dostępna pod adresem: `http://localhost:4321`

### Build produkcyjny

```bash
npm run build
```

Pliki do wdrożenia znajdą się w katalogu `dist/`

### Podgląd wersji produkcyjnej

```bash
npm run preview
```

## Wdrożenie na Cloudflare Pages

Projekt jest gotowy do wdrożenia na Cloudflare Pages:

1. **Przez Cloudflare Dashboard:**
   - Zaloguj się do Cloudflare Dashboard
   - Przejdź do Workers & Pages > Create application > Pages > Connect to Git
   - Wybierz repozytorium
   - Ustaw build command: `npm run build`
   - Ustaw build output directory: `dist`
   - Kliknij "Save and Deploy"

2. **Przez Wrangler CLI:**
```bash
npm install -g wrangler
wrangler pages deploy dist
```

## Funkcjonalności

### Strona główna
- Hero sekcja z opisem projektu
- Karty kursów: Opanuj Frontend, Opanuj TypeScript, 10xDevs
- Statystyki projektu
- Sekcje prowadzące do podcastu i YouTube
- Call-to-action do newslettera

### Strona O nas
- Opis misji Przeprogramowani
- Prezentacja założycieli: Przemek Smyrdek i Marcin Czarkowski
- Timeline historii projektu
- Wartości i podejście do edukacji
- Formularz kontaktowy

### Strona Podcast
- Lista najnowszych odcinków podcastu
- Opisy dwóch serii: Opanuj.AI Podcast i Przeprogramowani ft. Gość
- Linki do Spotify i Apple Podcasts
- Statystyki podcastu

### Strona YouTube
- Grid najnowszych filmów
- Tematy omawiane na kanale
- Informacje o historii kanału
- Link do subskrypcji

## Responsywność

Strona jest w pełni responsywna i dostosowana do:
- Urządzeń mobilnych (320px+)
- Tabletów (768px+)
- Desktopów (1024px+)
- Szerokich ekranów (1280px+)

## SEO

- Semantyczny HTML5
- Meta tagi dla każdej strony
- Open Graph tags (gotowe do rozszerzenia)
- Sitemap (generowany automatycznie przez Astro)
- Dostępność ARIA

## Optymalizacja

- Lazy loading obrazów
- Optymalizacja fontów (Google Fonts)
- Minifikacja CSS i JS w buildzie
- Statyczne generowanie stron (SSG)
- Szybkie ładowanie dzięki Astro

## Personalizacja

### Zmiana kolorów
Edytuj plik `tailwind.config.mjs` - sekcja `colors`:
```javascript
primary: {
  // Twoje kolory
}
```

### Dodawanie treści
- Kursy: edytuj `src/pages/index.astro`
- Odcinki podcastu: edytuj `src/pages/podcast.astro`
- Filmy YouTube: edytuj `src/pages/youtube.astro`

### Dodawanie stron
Utwórz nowy plik `.astro` w katalogu `src/pages/`

## Wsparcie przeglądarek

- Chrome (ostatnie 2 wersje)
- Firefox (ostatnie 2 wersje)
- Safari (ostatnie 2 wersje)
- Edge (ostatnie 2 wersje)

## Licencja

Wszystkie prawa zastrzeżone © 2025 Przeprogramowani

## Kontakt

- Email: kontakt@przeprogramowani.pl
- Website: https://przeprogramowani.pl
- GitHub: https://github.com/przeprogramowani

## Informacje o autorze wdrożenia

Strona została stworzona jako część projektu 10xBench - benchmarku porównującego różne modele AI w kontekście "vibe coding" (tworzenia pełnofunkcjonalnej strony w jednym podejściu).

**Model:** Claude Sonnet 4.5
**Attempt:** 3
**Stack:** Astro 5 + React 19 + Tailwind CSS 3
**Data:** 2026-02-10
