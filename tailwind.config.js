/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require("daisyui"),
  ],

  // Optional: DaisyUI settings
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
