/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
        xls: "576px",
        xlsx: "992px"
      },
    },
  },
  plugins: [],
};
