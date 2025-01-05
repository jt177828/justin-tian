/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e3e8f2',
        'alt': '#64748B',
        'background': '#09090B',
        'primary': '#6e48c8',
        'secondary': '#1f417d',
        'accent': '#3470d9',
       },
      fontFamily: {
        'ibm': ['IBM Plex Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

