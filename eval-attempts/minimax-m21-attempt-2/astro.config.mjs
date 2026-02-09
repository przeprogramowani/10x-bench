import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  adapter: {
    name: 'cloudflare',
    async adapter() {
      const { getCloudflareAdapter } = await import('@astrojs/cloudflare');
      return getCloudflareAdapter({ imageService: 'cloudflare' });
    }
  },
  integrations: [react(), tailwind()]
});