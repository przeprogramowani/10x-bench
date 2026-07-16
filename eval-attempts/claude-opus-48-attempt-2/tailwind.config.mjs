/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — deep indigo/violet with a warm signal accent.
        ink: {
          950: '#0a0a12',
          900: '#0f0f1a',
          800: '#16162a',
          700: '#1e1e38',
          600: '#2a2a4a',
        },
        brand: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c6ccff',
          300: '#a3aaff',
          400: '#7f83fb',
          500: '#635bf2',
          600: '#5340d8',
          700: '#4531af',
          800: '#392c8c',
          900: '#322a70',
        },
        accent: {
          400: '#fbbf5c',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
