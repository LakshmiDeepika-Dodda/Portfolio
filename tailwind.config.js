/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        mint: '#64ffda',
        lightGray: '#ccd6f6',
      },
      fontFamily: {
        code: ['Fira Code', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
