/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Syne", "sans-serif"], // para títulos
        body: ["Syne", "sans-serif"], // para corpo (também Syne)
      },
      fontWeight: {
        semibold: "600",
      },

      colors: {
        primary: "#7A1631", // vinho institucional
        primaryDark: "#561024", // vinho profundo
        primaryLight: "#A43C55", // vinho intermediário (hover/accents)
        neutralLight: "#F8F6F5", // fundo claro
        sand: "#E8E0D7", // areia (bordas/fundos alternados)
        neutralDark: "#1E1E1E", // texto principal
        slate: "#5C5C5C", // texto secundário
        goldAccent: "#C7A26A", // detalhe dourado quente
      },
    },
  },
  plugins: [],
};
