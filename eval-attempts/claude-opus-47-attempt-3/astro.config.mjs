import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  site: 'https://przeprogramowani.pl',
  build: {
    inlineStylesheets: 'auto',
  },
});
