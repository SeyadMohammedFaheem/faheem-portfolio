/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
        secondary: ['Syne', 'sans-serif'],


      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontSize: {
        '10xl': ['10rem', {
          lineHeight: '10rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
      },
      colors: {
        'secondary': '#222222',
        'primary': '#F8F8F8',
      },
    },
    plugins: [],
  }
}
