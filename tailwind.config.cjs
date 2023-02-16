/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,mdx,svelte}'],
	theme: {
		extend: {},
	},
	plugins: [ require('@tailwindcss/typography')],
}
