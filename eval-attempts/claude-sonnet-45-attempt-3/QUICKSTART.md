# Quick Start Guide

## 🚀 Szybki start (5 minut)

### 1. Instalacja

```bash
npm install
```

### 2. Uruchomienie w trybie deweloperskim

```bash
npm run dev
```

Otwórz: http://localhost:4321

### 3. Build produkcyjny

```bash
npm run build
```

### 4. Podgląd wersji produkcyjnej

```bash
npm run preview
```

## 📁 Struktura projektu

```
.
├── src/
│   ├── components/          # Komponenty React i Astro
│   ├── layouts/             # Layouty stron
│   ├── pages/               # Strony (routing automatyczny)
│   └── styles/              # Style globalne
├── public/                  # Pliki statyczne
├── dist/                    # Build output (generowany)
└── package.json
```

## 🎨 Główne strony

- **/** - Strona główna z kursami
- **/o-nas** - O Przeprogramowani
- **/podcast** - Odcinki podcastu
- **/youtube** - Filmy YouTube
- **/404** - Strona błędu

## 🛠️ Dostosowywanie

### Zmiana kolorów

Edytuj `tailwind.config.mjs`:

```javascript
colors: {
  primary: { /* twoje kolory */ }
}
```

### Dodawanie treści

- **Kursy:** `src/pages/index.astro`
- **Podcast:** `src/pages/podcast.astro`
- **YouTube:** `src/pages/youtube.astro`

### Nowa strona

Utwórz plik w `src/pages/`, np. `src/pages/kontakt.astro`

## 🚢 Deployment

### Cloudflare Pages (zalecane)

1. Push do Git
2. Połącz z Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`

Zobacz [DEPLOYMENT.md](DEPLOYMENT.md) dla szczegółów.

## ✅ Checklist przed deploymentem

- [ ] `npm run build` działa bez błędów
- [ ] Wszystkie linki działają
- [ ] Responsywność sprawdzona
- [ ] SEO meta tagi ustawione
- [ ] Obrazy zoptymalizowane
- [ ] Favicon ustawiony

## 📚 Dodatkowe zasoby

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 🐛 Troubleshooting

### Port zajęty

```bash
npm run dev -- --port 3000
```

### Cache problemy

```bash
rm -rf node_modules dist .astro
npm install
npm run build
```

### TypeScript błędy

```bash
npm run astro check
```

## 💡 Wskazówki

- Używaj `client:load` dla interaktywnych komponentów React
- Astro renderuje tylko to, co potrzebne (partial hydration)
- Obrazy umieszczaj w `public/` dla stałych assetów
- Komponenty `.astro` są renderowane na serwerze
- Komponenty `.tsx` są renderowane na kliencie

## 📞 Pomoc

Jeśli masz problemy:
1. Sprawdź logi budowania
2. Zweryfikuj wersję Node.js (18+)
3. Upewnij się, że wszystkie zależności są zainstalowane
4. Zobacz [README.md](README.md) dla pełnej dokumentacji
