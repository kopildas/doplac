/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sub-border': '#E0E0E0',
        'custom-blue': 'rgba(47, 144, 137, 1)',
        'plus-border': 'rgba(224, 224, 224, 1)',
        'line': '#BBBBBB',
        'line2': 'rgba(187, 187, 187, 1)',
        'shadow-color-1': 'rgba(121, 121, 121, 0.08)',
      },
      fontFamily: {
        custom: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}