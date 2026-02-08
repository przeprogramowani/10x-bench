// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react()],
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  // Konfiguracja dla Cloudflare Pages
  adapter: undefined,
  site: 'https://przeprogramowani.pl',
  
  // Optymalizacja obrazów
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i3.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
});
