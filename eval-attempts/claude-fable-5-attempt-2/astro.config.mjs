import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Static output — gotowe do wdrożenia na Cloudflare Pages (serwowanie katalogu dist/)
export default defineConfig({
  output: 'static',
  site: 'https://przeprogramowani.pl',
  integrations: [react(), tailwind()],
});
