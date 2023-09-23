/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        primaryinit: 'rgb(186, 138, 73)',
				primaryfinal: 'rgb(252, 244, 165)',
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
