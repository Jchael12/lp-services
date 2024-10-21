/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  flyonui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [require("flyonui"), require("flyonui/plugin")],
};
