# Przeprogramowani.pl - Strona projektu

Nowoczesna i responsywna strona projektu Przeprogramowani.pl zbudowana z użyciem Astro, React i Tailwind CSS.

## 🚀 Stack technologiczny

- **Astro 5.x** - Static Site Generator
- **React 19** - Komponenty interaktywne
- **Tailwind CSS 4.x** - Styling
- **TypeScript** - Type safety

## 📁 Struktura projektu

```
.
├── src/
│   ├── components/     # Komponenty React
│   ├── layouts/        # Layouty Astro
│   ├── pages/          # Strony Astro
│   └── data/           # Dane (kursy, podcasty, filmy)
├── public/             # Pliki statyczne
├── astro.config.mjs    # Konfiguracja Astro
└── wrangler.toml       # Konfiguracja Cloudflare
```

## 🛠️ Strony

- `/` - Strona główna z hero, kursami, podcastami i YouTube
- `/o-nas` - Informacje o założycielach i misji
- `/podcast` - Wszystkie odcinki podcastów
- `/youtube` - Filmy z kanału YouTube

## 🚀 Deployment

Projekt jest skonfigurowany do deploymentu na Cloudflare Pages.

### Lokalny development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Deployment na Cloudflare

```bash
npx wrangler pages deploy dist
```

## 📝 Dane

Wszystkie dane (kursy, podcasty, filmy YouTube) znajdują się w pliku `src/data/siteData.ts`.

## 📄 Licencja

MIT
