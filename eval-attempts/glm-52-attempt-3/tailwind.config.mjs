/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcdaff',
          300: '#8ec2ff',
          400: '#599fff',
          500: '#3279ff',
          600: '#1c57f5',
          700: '#1542e1',
          800: '#1837b6',
          900: '#19348f',
          950: '#142057',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d8e2',
          300: '#aeb6c8',
          400: '#828ead',
          500: '#647093',
          600: '#505978',
          700: '#414861',
          800: '#383e52',
          900: '#323645',
          950: '#21232d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
