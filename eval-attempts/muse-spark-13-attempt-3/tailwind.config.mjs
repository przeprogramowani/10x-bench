/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A14',
        panel: '#121224',
        brand: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed'
        },
        accent: '#22d3ee'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
