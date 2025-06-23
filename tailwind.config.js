/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "402px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1440px",
    },
    colors: {
      transparent: "transparent",
      black: {
        0: "#000000",
        4: "#1A1A1A0A",
        8: "#1A1A1A14",
        16: "#1A1A1A29",
        24: "#1A1A1A3D",
        32: "#1A1A1A52",
        54: "#1A1A1A8A",
        70: "#1A1A1AB2",
        100: "#262626",
      },
      white: {
        4: "#FFFFFF0A",
        8: "#FFFFFF14",
        16: "#FFFFFF29",
        24: "#FFFFFF3D",
        32: "#FFFFFF52",
        54: "#FFFFFF8A",
        87: "#FFFFFFDE",
        100: "#FFFFFF",
      },
      gray: {
        500: "#F4F3F1",
      },
      primary: {
        100: "#2F5B3C",
      },
      green: {
        8: "#49835414",
        100: "#498354",
      },
      red: {
        8: "#DE342B14",
        100: "#DE342B",
      },
    },
    boxShadow: {
      xs: "0px 0px 0px 1px #1A1A1A26",
      sm: "0px 4px 8px 0px #1A1A1A33",
      md: "0px 12px 32px 0px #1A1A1A3D",
      lg: "0px 24px 40px 0px #1A1A1A29",
    },
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    fontSize: {
      500: ["48px", { lineHeight: "58px" }],
      450: ["36px", { lineHeight: "44px" }],
      400: ["32px", { lineHeight: "40px" }],
      350: ["28px", { lineHeight: "36px" }],
      200: ["18px", { lineHeight: "27px" }],
      100: ["16px", { lineHeight: "27px" }],
    },
    fontWeight: {
      light: "400",
      normal: "500",
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [],
};
