import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://przeprogramowani.pl',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: { enabled: true },
  }),
  vite: {
    ssr: {
      external: ['node:buffer', 'node:path', 'node:fs', 'node:os', 'node:crypto', 'node:stream'],
    },
  },
});
