/** @type {import('tailwindcss').Config} */
module.exports = {
  //...
  plugins: [require("daisyui")],
}
module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./views/*.ejs",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
