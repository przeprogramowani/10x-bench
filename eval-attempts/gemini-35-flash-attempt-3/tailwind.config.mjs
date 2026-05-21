/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',
          card: '#161D30',
          accent: '#00F2FE', // Neon blue/cyan
          purple: '#9B51E0', // Deep purple
          yellow: '#FFD000', // Yellow accent from Przeprogramowani Logo
          green: '#10B981', // Emerald green
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0B0F19 0%, #111827 50%, #0F172A 100%)',
        'neon-gradient': 'linear-gradient(90deg, #00F2FE 0%, #4FACFE 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
      }
    },
  },
  plugins: [],
}
