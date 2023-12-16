/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px", // mobile
      lg: "1920px", // desktop
    },
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
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
      },
      backgroundImage: {
        hero: "url('./assets/hero.webp')",
        heroMob: "url('./assets/hero-mob.webp')",
        important: "url('./assets/important.webp')",
        importantMob: "url('./assets/important-mob.jpg')",
        error: "url('./assets/error.webp')",
      },
    },
  },
  plugins: [],
};
