/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      colors: {
        yellow: "#CFA615",
        yellowBg: "#FFAD00",
        black: "#181717",
        pink: "#F2A8FF",
        blue: "#C0DCF6",
        grey: "#D9D9D9",
        spanishGrey: "#9C9C9C",
        green: "#C4F6C0",
        lightBlue: "#F2FAFF",
        lightGrey: "#F2F2F2",
        darkGrey: "#EAEAEA",
        orange: "#D0A716",
        orangeHover: "#BF9601",
        lightBlack: "#0A0A0A",
      },
      backgroundImage: {
        hero: "url('./assets/hero.webp')",
        heroMob: "url('./assets/hero-mob.webp')",
        suggest: "url('./assets/suggest.webp')",
        important: "url('./assets/important.webp')",
        importantMob: "url('./assets/important-mob.jpg')",
        partners: "url('./assets/partners.webp')",
        partnersMobil: "url('./assets/partners_2.webp')",
        error: "url('./assets/error.webp')",
        errorMob: "url('./assets/error-mob.webp')",
        about: "url('./assets/about.webp')",
        story: "url('./assets/story.webp')"
      },

      keyframes: {
        fadeinLeft: {
          "0%": { left: "-100%", position: "relative" },
          "100%": { left: "0%", position: "relative" },
        },
        fadeinRight: {
          "0%": { right: "-100%", position: "relative" },
          "100%": { right: "0%", position: "relative" },
        },
      },
      animation: {
        fadeinLeft: "fadeinLeft 0.5s linear",
        fadeinRight: "fadeinRight 0.5s linear",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true })
  ],
};
