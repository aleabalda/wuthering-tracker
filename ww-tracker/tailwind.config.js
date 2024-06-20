/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tw: ["Titillium Web", "sans-serif"],
        twBold: ["Titillium Web Bold", "sans-serif"],
      },
      backgroundImage: {
        wwBg: ["url('/src/assets/images/wuthering_waves.jpg')"],
      },
      backgroundColor: {
        primary: "#2c2c2c",
        secondary: "#3c3c3c",
      },
    },
  },
  plugins: [],
};
