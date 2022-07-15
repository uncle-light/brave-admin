/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.vue",
    "./src/components/*.vue",
    "./src/views/*.vue",
    "./src/views/**/*.vue",
    "./src/views/**/**/*.vue",
    "./src/layouts/**/**/*.vue",
    "./src/layouts/**/*.vue",
    "./index.html",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
