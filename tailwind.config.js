/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#1F3EFF",
        navy: "#0A0F2F"
      },
      backgroundImage: {
        'bigints-gradient': 'linear-gradient(90deg,#1F3EFF 0%, #0A0F2F 100%)'
      }
    }
  },
  plugins: []
}

