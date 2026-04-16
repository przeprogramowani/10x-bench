/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bca7ff',
          400: '#9a75ff',
          500: '#7c3aed',
          600: '#6b28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0f72',
          950: '#22064a',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        ink: {
          900: '#0b0b14',
          800: '#111122',
          700: '#16162b',
          600: '#1f1f3a',
          500: '#2a2a4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'gradient-hero':
          'radial-gradient(1200px 600px at 20% 0%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(900px 500px at 80% 10%, rgba(34,211,238,0.25), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,58,237,0.3), 0 20px 60px -20px rgba(124,58,237,0.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
