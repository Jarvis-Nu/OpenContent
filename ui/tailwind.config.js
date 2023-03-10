/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#161719"
      },
      textColor: {
        "dark": "#202125",
        "ash": "#999999",
        "red": "#F23838"
      },
      borderColor: {
        "dark": "#D9D9D9"
      }
    },
  },
  plugins: [],
}