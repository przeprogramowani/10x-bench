# Przeprogramowani.pl - Website

Nowoczesna, responsywna strona projektu Przeprogramowani.pl zbudowana w technologii Astro, React i Tailwind CSS.

## Funkcje

- **Strona główna** - Hero z 10xDevs, sekcja kursów, newsletter
- **O nas** - Informacje o zespole i misji
- **Podcast** - Lista odcinków Opanuj.AI i Przeprogramowani ft. Gość
- **YouTube** - Najnowsze filmy i playlisty
- **Kursy** - 10xDevs, Opanuj Frontend, Opanuj TypeScript

## Stack technologiczny

- [Astro](https://astro.build/) - Framework do budowania stron statycznych
- [React](https://react.dev/) - Komponenty interaktywne
- [Tailwind CSS](https://tailwindcss.com/) - Stylowanie
- [Lucide React](https://lucide.dev/) - Ikony
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting

## Wymagania

- Node.js 20+
- npm 10+

## Instalacja

```bash
npm install
```

## Development

```bash
npm run dev
```

Strona będzie dostępna pod adresem `http://localhost:4321`

## Build

```bash
npm run build
```

## Deployment na Cloudflare Pages

### Opcja 1: Automatyczny deployment (rekomendowane)

1. Połącz repozytorium GitHub z Cloudflare Pages
2. Skonfiguruj build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 20

### Opcja 2: Wrangler CLI

```bash
# Zainstaluj Wrangler
npm install -g wrangler

# Zaloguj się do Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

## Struktura projektu

```
przeprogramowani-website/
├── src/
│   ├── components/     # Komponenty React
│   ├── layouts/        # Layouty Astro
│   ├── pages/          # Strony
│   └── styles/         # Style CSS
├── public/             # Pliki statyczne
├── astro.config.mjs    # Konfiguracja Astro
├── tailwind.config.mjs # Konfiguracja Tailwind
└── wrangler.toml       # Konfiguracja Cloudflare
```

## Autorzy

- Przemek Smyrdek
- Marcin Czarkowski

## Licencja

Wszystkie prawa zastrzeżone © 2025 Przeprogramowani.pl
