/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryinit: 'rgb(186, 138, 73)',
				primaryfinal: 'rgb(252, 244, 165)',
			}
		},
	},
	plugins: [],
}
