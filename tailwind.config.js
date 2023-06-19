/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "src/styles.css",
  "styles.css"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

