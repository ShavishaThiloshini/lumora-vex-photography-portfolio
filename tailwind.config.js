/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        accent: "#D4AF37",
        muted: "#9A9A9A",
        bgPrimary: "#0B0B0B",
        bgSecondary: "#161616",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
