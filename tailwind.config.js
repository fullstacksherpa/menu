import { normalizePath } from 'vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'main': 'hsl(210, 36%, 96%)',
      },
    },
  },
  plugins: [],
}

