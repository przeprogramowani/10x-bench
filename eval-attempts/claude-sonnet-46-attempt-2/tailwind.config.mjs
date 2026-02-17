/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00d084',
          'green-dark': '#00a86b',
          pink: '#e30f75',
          purple: '#b90fe3',
          blue: '#3691ff',
        },
        dark: {
          900: '#080808',
          800: '#0f0f0f',
          700: '#161616',
          600: '#1e1e1e',
          500: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-frontend': 'linear-gradient(135deg, #e30f75, #b90fe3)',
        'gradient-typescript': 'linear-gradient(135deg, #3691ff, #0052cc)',
        'gradient-10x': 'linear-gradient(135deg, #00d084, #0052cc)',
      },
    },
  },
  plugins: [],
};
