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

  // Cloudflare Pages configuration
  adapter: undefined,
  site: 'https://przeprogramowani.pl',
  base: '/',
  
  build: {
    format: 'directory'
  }
});