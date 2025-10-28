/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        winebrand: "#7A1631",
        "winebrand-light": "#A43C55",
        "winebrand-dark": "#561024",

        sand: "#F8F6F5",
        goldaccent: "#C2A55E",

        graytech: "#BDBDBD",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
