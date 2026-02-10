/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // your app folder
    "./components/**/*.{js,ts,jsx,tsx}" // your components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbbf24", // example custom color
        secondary: "#16a34a",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem", // example custom spacing
      },
    },
  },
  plugins: [],
};
