# Przeprogramowani.pl - Oficjalna strona internetowa

Nowoczesna, responsywna strona internetowa projektu Przeprogramowani.pl zbudowana z wykorzystaniem Astro, React i Tailwind CSS.

## 🚀 O projekcie

Przeprogramowani.pl to polska platforma edukacyjna oferująca **szersze spojrzenie na programowanie**. Strona prezentuje:

- **10xDevs 3.0** - szkolenie z programowania z wykorzystaniem generatywnej AI
- **Opanuj Frontend** - kompleksowy kurs frontend developera (AI Edition)
- **Opanuj TypeScript** - zaawansowane szkolenie TypeScript 5 & React 19
- **Podcast** - regularne odcinki o technologiach, AI i rozwoju kariery
- **YouTube** - tutoriale, porównania narzędzi i analizy technologii

## 🛠️ Stack technologiczny

- **[Astro 5](https://astro.build/)** - Framework do budowy szybkich stron
- **[React 19](https://react.dev/)** - Biblioteka UI dla interaktywnych komponentów
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)** - Adapter dla Cloudflare Pages/Workers

## 📁 Struktura projektu

```
/
├── public/              # Pliki statyczne (favicon, obrazy)
├── src/
│   ├── assets/         # Zasoby do przetworzenia przez Astro
│   ├── components/     # Komponenty React
│   │   ├── CourseCard.tsx
│   │   ├── PodcastCard.tsx
│   │   └── VideoCard.tsx
│   ├── data/           # Dane JSON (kursy, podcasty, filmy)
│   │   ├── courses.json
│   │   ├── podcasts.json
│   │   └── videos.json
│   ├── layouts/        # Layouty Astro
│   │   └── Layout.astro
│   ├── pages/          # Strony (routing)
│   │   ├── index.astro    # Strona główna
│   │   ├── about.astro    # O nas
│   │   ├── podcast.astro  # Podcast
│   │   └── youtube.astro  # YouTube
│   └── styles/         # Style globalne
│       └── global.css
├── astro.config.mjs    # Konfiguracja Astro
├── tailwind.config.mjs # Konfiguracja Tailwind
├── tsconfig.json       # Konfiguracja TypeScript
├── wrangler.toml       # Konfiguracja Cloudflare
└── package.json
```

## 🧞 Komendy

Wszystkie komendy uruchamiane z głównego katalogu projektu:

| Komenda              | Akcja                                             |
| :------------------- | :------------------------------------------------ |
| `npm install`        | Instalacja zależności                             |
| `npm run dev`        | Uruchomienie dev server na `localhost:4321`       |
| `npm run build`      | Build produkcyjny do `./dist/`                    |
| `npm run preview`    | Podgląd buildu przed wdrożeniem                   |
| `npm run astro ...`  | Uruchomienie komend Astro CLI                     |

## 🚢 Wdrożenie

Projekt jest gotowy do wdrożenia na **Cloudflare Pages**.

### Szybkie wdrożenie

1. **Cloudflare Dashboard:**
   - Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Przejdź do Pages → Create a project
   - Połącz repozytorium Git
   - Build command: `npm run build`
   - Build output: `dist`
   - Framework: `Astro`

2. **Wrangler CLI:**
   ```bash
   npm install -g wrangler
   wrangler login
   npm run build
   wrangler pages deploy dist
   ```

Szczegółowe instrukcje wdrożenia znajdziesz w [DEPLOY.md](./DEPLOY.md).

## ✨ Funkcje

### Responsywny design
- Mobile-first approach
- Hamburger menu na urządzeniach mobilnych
- Responsywne karty i siatki
- Optymalizacja dla wszystkich rozmiarów ekranów

### Optymalizacja wydajności
- Server-side rendering (SSR) z Astro
- Partial hydration - React tylko tam gdzie potrzeba
- Optymalizowane obrazy i zasoby
- Minimalna wielkość bundla

### SEO friendly
- Semantyczny HTML
- Meta tagi dla każdej strony
- Open Graph tags
- Structured data

### Dostępność
- ARIA labels
- Keyboard navigation
- Screen reader support
- Semantic HTML

## 🎨 Personalizacja

### Zmiana treści

Edytuj pliki JSON w `src/data/`:
- `courses.json` - kursy i szkolenia
- `podcasts.json` - odcinki podcastu
- `videos.json` - filmy z YouTube

### Zmiana stylów

Tailwind CSS używa utility classes. Główne kolory:
- Niebieski: `blue-500`, `blue-600`, `blue-700`
- Purpurowy: `purple-500`, `purple-600`, `purple-700`
- Różowy: `pink-500`, `pink-600`
- Czerwony: `red-500`, `red-600` (YouTube)

### Dodawanie nowych stron

1. Utwórz nowy plik `.astro` w `src/pages/`
2. Użyj layoutu: `import Layout from '../layouts/Layout.astro'`
3. Strona będzie automatycznie dostępna pod adresem odpowiadającym nazwie pliku

## 🤝 Współpraca

Projekt stworzony dla:
- **Przemek Smyrdek** - [LinkedIn](https://linkedin.com/in/psmyrdek)
- **Marcin Czarkowski** - [LinkedIn](https://linkedin.com/in/mkczarkowski)

## 📝 Licencja

© 2017-2026 Przeprogramowani.pl. Wszystkie prawa zastrzeżone.

## 🔗 Linki

- [Przeprogramowani.pl](https://przeprogramowani.pl)
- [10xDevs.pl](https://10xdevs.pl)
- [10xRules.ai](https://10xrules.ai)
- [Podcast - Spotify](https://creators.spotify.com/pod/profile/przeprogramowani)
- [Podcast - Apple Podcasts](https://podcasts.apple.com/pl/podcast/przeprogramowani/id1471770526)
- [YouTube](https://youtube.com/@przeprogramowani)
- [Instagram](https://instagram.com/przeprogramowani)
- [Facebook](https://facebook.com/przeprogramowani)

## 💬 Kontakt

kontakt@przeprogramowani.pl

---

**Zbudowano z ❤️ używając Astro, React i Tailwind CSS**
