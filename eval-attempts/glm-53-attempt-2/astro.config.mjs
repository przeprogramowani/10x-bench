import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  output: 'static',
  integrations: [react()],
  build: {
    inlineStylesheets: 'auto',
  },
});
