/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#202733",
        "dark-grayish-blue": "#313A48",
        "grayish-blue": "#4F5D74",
        "neon-green": "#53FFAA",
        "light-cyan": "#CEE3E9",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
