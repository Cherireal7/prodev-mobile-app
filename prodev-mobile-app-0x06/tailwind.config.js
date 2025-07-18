/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")], // ✅ Correct placement
  theme: {
    extend: {},
  },
  plugins: [],
};
