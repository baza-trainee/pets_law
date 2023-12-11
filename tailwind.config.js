/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Inter', 'sans-serif'],
			},
			colors: {
				yellow: '#CFA615',
				black: '#181717',
				pink: '#F2A8FF',
				blue: '#C0DCF6',
				grey: '#D9D9D9',
				green: '#C4F6C0',
			},
			backgroundImage: {
				hero: "url('./assets/hero.webp')",
				error: "url('./assets/error.webp')"
			},
		},
	},
	plugins: [],
};
