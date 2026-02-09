import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['react', 'react-dom', 'react/jsx-runtime']
    }
  }
});
