/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", //240,86,199
        primaryDark: "#58E6D9", //80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
        circularDirk:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        circularDirkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        circularDirkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightXl:
          "repeating-radial-gradient(rgba(0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        circularDirkXl:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        shadow:
          " rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
      },
    },
    screens: {
      xs: { min: "479px" },
      sm: { min: "639px" },
      md: { min: "767px" },
      lg: { min: "1023px" },
      xl: { min: "1279px" },
      "2xl": { min: "1535px" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
