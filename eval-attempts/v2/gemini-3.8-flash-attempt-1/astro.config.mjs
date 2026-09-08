import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://przeprogramowani.pl',
  adapter: cloudflare(),
  build: {
    format: 'file',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.SIMULATE_SOURCE_FAILURE': JSON.stringify(process.env.SIMULATE_SOURCE_FAILURE || ''),
    },
  },
});
