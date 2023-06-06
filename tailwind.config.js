/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D7C0AE",

          "secondary": "#967E76",

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