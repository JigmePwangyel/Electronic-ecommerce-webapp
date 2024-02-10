/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#E8FCFF",
        "primary-200": "#00E0C6",
        primary: "#009393",
        "primary-dark": "#016170",
        "light-blue": "#BFECFF",
        "gradient-start": "#A1D2FF",
        "gradient-end": "#00E0C6",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        "public-sans": ["Public Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
