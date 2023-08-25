/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#04051F",
        "custom-pink": "#CA80CB",
        "about-me-blue":"#5798BD",
        "heading-blue":"#00C2FF",
        "projects-purple":"#9B67F0"
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '109': ['109px','109px'], 
      },

    },
  },
  plugins: [],
};
