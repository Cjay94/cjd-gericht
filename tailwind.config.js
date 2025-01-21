/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cgolden: "#dcca87",
        cblack: "#0c0c0c",
        cgray: "#545454",
        ccrimson: "#f5efdb",
        cgrey: "#aaaaaa",
        cwhite: "#ffffff",
      },
      fontFamily: {
        cormorant: ["Cormorant Upright", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        resturantbg: "url('./assets/bg.png')",
      },
      animation: {
        'slide-bottom': 'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'slide-bottom': {
          '0%': {
            transform: 'translateY(-25%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        }
      },
    },
  },
  plugins: [],
}