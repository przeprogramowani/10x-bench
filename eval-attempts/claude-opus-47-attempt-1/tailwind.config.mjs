/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070C',
          900: '#0B0B14',
          800: '#12121F',
          700: '#1B1B2E',
          600: '#2A2A45',
        },
        brand: {
          50: '#F2EEFF',
          100: '#E2D9FF',
          200: '#C3B0FF',
          300: '#A486FF',
          400: '#8A63FF',
          500: '#6E44FF',
          600: '#5A32E6',
          700: '#4624B8',
          800: '#321A85',
          900: '#1F1154',
        },
        accent: {
          50: '#FFF6E5',
          100: '#FFE6B8',
          200: '#FFD48A',
          300: '#FFC15C',
          400: '#FFAE2E',
          500: '#FF9A00',
          600: '#E67E00',
          700: '#B85F00',
          800: '#8A4500',
          900: '#5C2D00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 50% 0%, rgba(110, 68, 255, 0.18), transparent 60%)',
        'hero-glow':
          'radial-gradient(60% 50% at 50% 30%, rgba(110, 68, 255, 0.35), transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(255, 154, 0, 0.25), transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 80px -10px rgba(110, 68, 255, 0.4)',
        card: '0 20px 40px -20px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
