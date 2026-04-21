# Przeprogramowani.pl - Nowoczesna strona projektu

Nowoczesna, responsywna strona internetowa projektu Przeprogramowani.pl zbudowana w technologii Astro, React i Tailwind CSS.

## 🚀 Stack technologiczny

- **Astro 6.x** - Statyczny generator stron
- **React 19** - Interaktywne komponenty UI
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **TypeScript** - Type safety

## 📁 Struktura projektu

```
przeprogramowani-website/
├── src/
│   ├── components/     # Komponenty React
│   ├── layouts/        # Layouty Astro
│   ├── pages/          # Strony Astro
│   └── styles/         # Globalne style CSS
├── public/             # Statyczne zasoby
├── dist/               # Katalog build (generowany)
└── wrangler.toml       # Konfiguracja Cloudflare
```

## 🛠️ Strony

- **Home** (`/`) - Hero z 10xDevs, statystyki, kursy, CTA
- **O nas** (`/o-nas`) - Informacje o zespole, historia, wartości
- **Kursy** (`/kursy`) - 10xDevs, Opanuj Frontend, Opanuj TypeScript
- **Podcast** (`/podcast`) - Ostatnie odcinki podcastu
- **YouTube** (`/youtube`) - Najnowsze filmy

## 🚀 Wdrożenie na Cloudflare Pages

### Opcja 1: Lokalne wdrożenie przez Wrangler

1. Zainstaluj Wrangler CLI (jeśli jeszcze nie masz):
```bash
npm install -g wrangler
```

2. Zaloguj się do Cloudflare:
```bash
wrangler login
```

3. Zbuduj projekt:
```bash
npm run build
```

4. Wdróż na Cloudflare Pages:
```bash
npm run deploy
```

### Opcja 2: Git Integration (zalecane)

1. Wypchnij kod na GitHub/GitLab
2. W panelu Cloudflare Pages utwórz nowy projekt
3. Połącz z repozytorium
4. Ustaw build command: `npm run build`
5. Ustaw output directory: `dist`
6. Kliknij "Save and Deploy"

## 🧞 Komendy

| Komenda | Opis |
|---------|------|
| `npm run dev` | Start serwera deweloperskiego |
| `npm run build` | Budowa produkcyjna |
| `npm run preview` | Podgląd buildu lokalnie |
| `npm run deploy` | Wdrożenie na Cloudflare Pages |

## 📄 Licencja

Projekt stworzony dla Przeprogramowani.pl
