/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      boxShadow: {
        'solid': '4px 4px 0px rgba(56, 50, 42, 1)',
      },
      colors: {
        choco: '#38322a',
        lemon: '#f5ae56',
        vitamin: '#ed775b',
        mint: '#028e87',
        cream: '#f3e7d7',
      },
    },
  },
  plugins: [],
}
