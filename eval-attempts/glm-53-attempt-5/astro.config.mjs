import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  output: 'static',
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
});
