/** @type {import('tailwindcss').Config} */
export default {

	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Inter', 'sans-serif'],
			},
			colors: {
        yellow: "#CFA615",
        black: "#181717",
        pink: "#F2A8FF",
        blue: "#C0DCF6",
        grey: "#D9D9D9",
        spanishGrey: "#9D9393",
        green: "#C4F6C0",
        lightBlue: "#F2FAFF",
        lightGrey: "#F2F2F2",
        darkGrey: "#EAEAEA",
        orange: "#D0A716",
        orangeHover: "#BF9601",
        lightBlack: '#0A0A0A',
      },
      backgroundImage: {
        hero: "url('./assets/hero.webp')",
        important: "url('./assets/important.webp')",
        error: "url('./assets/error.webp')",
      },
    },
  },
  plugins: [],
};
