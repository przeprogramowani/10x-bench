/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#d9e5ff',
          200: '#bcd1ff',
          300: '#8eb3ff',
          400: '#598aff',
          500: '#3163ff',
          600: '#1d40f5',
          700: '#1831d9',
          800: '#172cae',
          900: '#182c89',
          950: '#111a4f',
        },
        accent: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        ink: {
          50: '#f5f7fb',
          100: '#e9edf5',
          200: '#c9d1e1',
          300: '#97a4bd',
          400: '#6a7895',
          500: '#4a566f',
          600: '#343e56',
          700: '#252e44',
          800: '#161d31',
          900: '#0c1121',
          950: '#060916',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(49, 99, 255, 0.45)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
