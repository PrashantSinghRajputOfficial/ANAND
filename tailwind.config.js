/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          bg: '#020817',
          card: '#07111F',
          primary: '#07111F',
          accent: '#7B61FF',
          cyan: '#00D1FF',
          muted: '#8E9BAE',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
