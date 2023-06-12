/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arab: url("./src/assets/arab3.ttf"),
      },
    },
  },
  plugins: [],
};
