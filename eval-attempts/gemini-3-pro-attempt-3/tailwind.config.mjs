/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                brand: {
                    DEFAULT: '#FF0055', // Example brand color
                    dark: '#CC0044',
                }
            }
        },
	},
	plugins: [],
}
