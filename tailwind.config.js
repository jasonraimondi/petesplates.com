/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			margin: {
				DEFAULT: '0.5rem'
			},
			padding: {
				DEFAULT: '1rem'
			}
		}
	},
	plugins: []
};
