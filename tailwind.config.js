/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00b3b3",
          // "primary": "#D7C0AE",

          // "secondary": "#967E76",
          "secondary": "#C48F56",

          "accent": "#9BABB8",

          "neutral": "#1d1424",

          "base-100": "#ffffff",

          "info": "#417dec",

          "success": "#29aa1b",

          "warning": "#f49d25",

          "error": "#e91c41",
          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};