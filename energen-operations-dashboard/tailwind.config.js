export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'energen-blue': '#1E40AF',
        'energen-orange': '#EA580C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Inter for body text
        heading: ['Termina', 'sans-serif'], // Termina for headings
      },
    },
  },
  plugins: [],
}
