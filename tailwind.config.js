/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#7e6bd1",
        skybrand: "#6ea0c9",
        orangebrand: "#f2994a",
        lilac: "#d9c7ff",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
