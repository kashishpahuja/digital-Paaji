/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'wave-height': '60px', // Adjust if needed
      },
      fontFamily:{
        'bungee-inline': ['Bungee Inline', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      translate: {
        'full': '100%',
        '-full': '28%',
      },
    },
  },
  plugins: [],
}