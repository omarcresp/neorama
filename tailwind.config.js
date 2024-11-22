/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate180: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(359deg)" },
        },
      },
      colors: {
        primary: "#20094b",
        accent: "#fa69ff",
        highlight: "#d1e123",
        gold: "#debb67",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "rotate-180": "rotate180 32s linear infinite",
      },
    },
  },
  plugins: [],
};

