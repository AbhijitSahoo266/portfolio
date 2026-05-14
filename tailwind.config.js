/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3c4682",
        secondary: "#081b29",
        lightText: "#ededed",
      },

      borderColor: {
        primary: "#3c4682",
      },
    },
  },
  plugins: [],
}