import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ['lucide-react']
    }
  }
});
