/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-blue": "#6E6FDF",
      beige: "#FFD2B8",
      pink: "#F355A7",
      "dim-gray": "#E4C5CF",
      transparent: "rgba(0,0,0,0)",
      black: "#000",
    },
    fontFamily: {
      stardom: ["stardom", "sans-serif"],
      satoshi: ["satoshi", "sans-serif"],
    },
    screens: {
      mobileS: "320px",
      mobileM: "375px",
      mobileL: "425px",
      tablet: "768px",
      laptop: "992px",
      laptopL: "1200px",
    },
    animation: {
      "spin-slow": "spin 12s linear infinite",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit,minmax(300px,1fr))",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
