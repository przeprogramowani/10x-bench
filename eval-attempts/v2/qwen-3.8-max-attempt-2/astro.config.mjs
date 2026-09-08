import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// Konfigurowalny adres witryny (canonical/OG) — patrz README (zmienne środowiskowe).
const site = process.env.SITE_URL || 'https://przeprogramowani.pl';

export default defineConfig({
  site,
  output: 'static',
  adapter: cloudflare(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
