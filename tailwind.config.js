/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1e2021',
        orange: 'rgba(255,130,130,1)',
        pinky2: 'rgba(225,120,237,1)',
        'pinky2-hover': 'rgb(208, 145, 214)',
    },
    },
  },
  plugins: [],
}

