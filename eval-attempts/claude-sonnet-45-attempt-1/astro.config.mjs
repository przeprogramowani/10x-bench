import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  integrations: [react(), tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
