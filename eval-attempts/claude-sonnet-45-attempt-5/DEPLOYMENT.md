# Wdrożenie na Cloudflare Pages

Ten dokument zawiera szczegółowe instrukcje wdrożenia strony Przeprogramowani.pl na Cloudflare Pages.

## Wymagania wstępne

- Konto Cloudflare (darmowe lub płatne)
- Repozytorium Git (GitHub, GitLab lub Bitbucket)
- Node.js 18+ zainstalowany lokalnie (do testów)

## Metoda 1: Automatyczne wdrożenie przez Git (Zalecane)

### Krok 1: Przygotowanie repozytorium

```bash
# Inicjalizacja git (jeśli jeszcze nie zrobione)
git init

# Dodanie plików
git add .

# Commit
git commit -m "Initial commit: Przeprogramowani.pl website"

# Połączenie z remote repository
git remote add origin https://github.com/twoja-nazwa/przeprogramowani.git
git push -u origin main
```

### Krok 2: Konfiguracja w Cloudflare Pages

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Wybierz **Pages** z menu bocznego
3. Kliknij **Create a project**
4. Wybierz **Connect to Git**
5. Autoryzuj Cloudflare do dostępu do swojego konta GitHub/GitLab
6. Wybierz repozytorium `przeprogramowani`
7. Skonfiguruj build settings:

   **Framework preset:** Astro
   
   **Build command:**
   ```
   npm run build
   ```
   
   **Build output directory:**
   ```
   dist
   ```
   
   **Root directory:** (pozostaw puste)
   
   **Environment variables:**
   ```
   NODE_VERSION=18
   ```

8. Kliknij **Save and Deploy**

### Krok 3: Czekaj na deployment

Cloudflare automatycznie:
- Zainstaluje dependencies
- Zbuduje projekt
- Wdroży na globalną sieć CDN
- Wygeneruje URL podglądu (np. `przeprogramowani-xyz.pages.dev`)

## Metoda 2: Wdrożenie przez Wrangler CLI

### Krok 1: Instalacja Wrangler

```bash
npm install -g wrangler
```

### Krok 2: Logowanie do Cloudflare

```bash
wrangler login
```

To otworzy przeglądarkę do autoryzacji.

### Krok 3: Build i Deploy

```bash
# Build projektu
npm run build

# Deploy na Cloudflare Pages
wrangler pages deploy dist --project-name=przeprogramowani
```

### Krok 4: Weryfikacja

Po deployu otrzymasz URL, np:
```
https://przeprogramowani.pages.dev
```

## Konfiguracja Custom Domain

### Dodanie własnej domeny

1. W Cloudflare Pages, przejdź do swojego projektu
2. Kliknij **Custom domains**
3. Kliknij **Set up a custom domain**
4. Wpisz swoją domenę: `przeprogramowani.pl`
5. Cloudflare automatycznie skonfiguruje DNS (jeśli domena jest w Cloudflare)

### Konfiguracja DNS (jeśli domena nie jest w Cloudflare)

Dodaj następujące rekordy DNS u swojego providera:

**Dla apex domain (przeprogramowani.pl):**
```
Type: CNAME
Name: @
Value: <twoj-projekt>.pages.dev
Proxy: Tak (jeśli dostępne)
```

**Dla www subdomain:**
```
Type: CNAME
Name: www
Value: <twoj-projekt>.pages.dev
Proxy: Tak (jeśli dostępne)
```

## Automatyczne deployments

Po konfiguracji Git integration, każdy push do brancha `main` automatycznie:
1. Triggeruje nowy build
2. Wdraża zmiany na produkcję
3. Generuje preview URL dla pull requestów

## Preview Deployments

Każdy Pull Request automatycznie otrzymuje unikalny URL podglądu:
```
https://<commit-hash>.<project-name>.pages.dev
```

To pozwala na testowanie zmian przed merge'em.

## Zmienne środowiskowe

Jeśli potrzebujesz zmiennych środowiskowych:

1. W Cloudflare Pages, przejdź do **Settings** → **Environment variables**
2. Dodaj zmienne dla Production i/lub Preview environments
3. Zmienne będą dostępne podczas buildu

Przykład:
```
Key: PUBLIC_API_URL
Value: https://api.przeprogramowani.pl
```

## Rollback do poprzedniej wersji

1. Przejdź do **Deployments** w Cloudflare Pages
2. Znajdź poprzedni poprawny deployment
3. Kliknij **⋮** → **Rollback to this deployment**

## Monitoring i Analytics

Cloudflare Pages oferuje:
- **Analytics** - statystyki ruchu, requests, bandwidth
- **Logs** - logi buildów i deploymentów
- **Real-time** - monitoring w czasie rzeczywistym

Dostępne w zakładce **Analytics** w projekcie.

## Optymalizacja wydajności

### Auto-minification

W Cloudflare:
1. Przejdź do **Speed** → **Optimization**
2. Włącz:
   - Auto Minify (HTML, CSS, JavaScript)
   - Brotli compression
   - Early Hints

### Caching

Cloudflare automatycznie cache'uje statyczne assety. Pliki są serwowane z najbliższego data center.

### Headers

Bezpieczeństwo i performance headers są już skonfigurowane w `public/_headers`:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Troubleshooting

### Build fails

**Problem:** Build kończy się błędem

**Rozwiązanie:**
1. Sprawdź logi buildu w Cloudflare Pages
2. Upewnij się, że Node.js version = 18+
3. Sprawdź czy wszystkie dependencies są w `package.json`
4. Testuj build lokalnie: `npm run build`

### 404 na stronie

**Problem:** Strona pokazuje 404

**Rozwiązanie:**
1. Sprawdź czy build output directory = `dist`
2. Sprawdź czy plik `public/_redirects` istnieje
3. Sprawdź w Cloudflare Pages → Functions czy routing jest poprawny

### Zmiany nie są widoczne

**Problem:** Po deploy zmiany nie są widoczne

**Rozwiązanie:**
1. Hard refresh w przeglądarce (Cmd+Shift+R lub Ctrl+Shift+R)
2. Wyczyść cache Cloudflare (Caching → Purge Everything)
3. Sprawdź czy deployment zakończył się sukcesem

## Koszty

Cloudflare Pages - Free tier includes:
- ✅ Unlimited requests
- ✅ Unlimited bandwidth
- ✅ 500 builds/month
- ✅ 1 concurrent build
- ✅ Automatic SSL certificates
- ✅ Global CDN

Dla większości projektów plan darmowy jest wystarczający.

## Support

W razie problemów:
- [Cloudflare Community](https://community.cloudflare.com/)
- [Cloudflare Discord](https://discord.gg/cloudflaredev)
- [Astro Discord](https://astro.build/chat)
- Email: kontakt@przeprogramowani.pl

## Następne kroki

Po wdrożeniu możesz:
1. ✅ Skonfigurować custom domain
2. ✅ Włączyć Web Analytics
3. ✅ Dodać monitoring uptime
4. ✅ Skonfigurować email forwarding
5. ✅ Włączyć Bot Fight Mode (ochrona przed botami)

---

Ostatnia aktualizacja: Luty 2026
