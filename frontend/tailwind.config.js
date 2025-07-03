/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#00695C", // Teal
        AccentColor: "#FFB74D", // Warm sand
        DarkGray: "#37474F",
        LightGray: "#ECEFF1",
        HoverColor: "#00897B",
      },
      fontFamily: {
        headline: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
