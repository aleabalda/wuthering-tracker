/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tw: ["Titillium Web", "sans-serif"],
        twBold: ["Titillium Web Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
