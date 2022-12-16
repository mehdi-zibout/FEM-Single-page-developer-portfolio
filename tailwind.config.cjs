/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      pc: "1280px",
    },
    colors: {
      black: "#151515",
      green: "#4EE1A0",
      darkGrey: "#242424",
      grey: "#d9d9d9",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    fontSize: {
      xl: [
        "88px",
        { lineHeight: "88px", letterSpacing: "-2.5px", fontWeight: 700 },
      ],
      l: [
        "48px",
        { lineHeight: "56px", letterSpacing: "-1.5px", fontWeight: 700 },
      ],
      m: ["24px", { lineHeight: "32px", fontWeight: 700 }],
      body: ["18px", { lineHeight: "28px", fontWeight: 500 }],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
