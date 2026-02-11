import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({ imageService: 'compile' }),
  session: {
    driver: 'memory',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
