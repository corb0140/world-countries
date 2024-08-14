/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/bg.jpg')",
        "carousel-image": "url('/billie_bg.png')",
      },
      colors: {
        darkModeElements: `hsl(209, 23%, 22%)`,
        darkModeBg: `hsl(207, 26%, 17%)`,
        lightModeText: `hsl(200, 15%, 8%)`,
        lightModeInput: `hsl(0, 0%, 52%)`,
        lightModeBg: `hsl(0, 0%, 98%)`,
        white: `hsl(0, 0%, 100%)`,
      },
      screens: {
        xs: "375px",
        sm: "440px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        Nunito: ["Nunito sans", "sans-serif"],
      },
      fontSize: {
        homepageItems: "14px",
        detailsPage: "16px",
      },
    },
  },
  plugins: [],
};
