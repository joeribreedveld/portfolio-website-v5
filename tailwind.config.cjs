/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      colors: {
        bgSecondary: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
