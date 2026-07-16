import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Statyczny build gotowy do wdrożenia na Cloudflare Pages
// (katalog ./dist, patrz wrangler.toml)
export default defineConfig({
  site: 'https://przeprogramowani.pl',
  output: 'static',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});
