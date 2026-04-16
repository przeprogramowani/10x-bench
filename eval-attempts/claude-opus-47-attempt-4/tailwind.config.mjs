/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f2ff',
          100: '#e2e6ff',
          200: '#c5cafe',
          300: '#a0a5fc',
          400: '#7b7ff7',
          500: '#5f5def',
          600: '#4a41e0',
          700: '#3d32c2',
          800: '#332c9c',
          900: '#2c297c',
          950: '#1a1647',
        },
        accent: {
          400: '#ff8a4c',
          500: '#ff6b1f',
          600: '#ea530a',
        },
        ink: {
          50: '#f7f7f9',
          100: '#eeeef2',
          200: '#d6d6e0',
          300: '#b0b0c1',
          400: '#7e7e95',
          500: '#565672',
          600: '#3c3c56',
          700: '#2a2a42',
          800: '#1b1b32',
          900: '#121225',
          950: '#09091a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse at 20% 0%, rgba(95,93,239,0.35), transparent 60%), radial-gradient(ellipse at 80% 10%, rgba(255,107,31,0.25), transparent 55%)',
      },
      boxShadow: {
        glow: '0 10px 40px -10px rgba(95,93,239,0.5)',
        'glow-accent': '0 10px 40px -10px rgba(255,107,31,0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
