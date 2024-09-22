/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      averia: ['Averia Serif Libre', 'serif'],
    },
    container:{
        center: true,
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: "5rem", "2xl": "6rem",
        },
    }
  },
  plugins: [],
}

