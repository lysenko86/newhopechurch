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
        100: "#1A1A1A",
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
      primary: {
        100: "#1FABE7",
        104: "#1FABE70A",
        108: "#1FABE714",
        200: "#34C2FF",
        300: "#009FE3",
      },
      secondary: {
        54: "#3435648A",
        100: "#343564",
      },
      green: {
        8: "#49835414",
        100: "#498354",
        150: "#34C759",
      },
      red: {
        8: "#DE342B14",
        100: "#DE342B",
      },
      brown: {
        8: "#B45E2214",
        100: "#B45E22",
      },
      magenta: {
        8: "#9722B414",
        100: "#9722B4",
      },
      orange: {
        8: "#DF700014",
        100: "#F07A03",
      },
      darkGray: "#444444",
      middleGray: "#757575",
      lightGray: "#EBECF1",
    },
    boxShadow: {
      // xs: "box-shadow: 0px 3px 1px 0px #0000000F; box-shadow: 0px 3px 8px 0px #00000026; box-shadow: 0px 0px 0px 1px #0000000A;",
      xs: "0px 0px 0px 1px #1A1A1A26",
      sm: "0px 4px 8px 0px #1A1A1A33",
      md: "0px 12px 32px 0px #1A1A1A3D",
      lg: "0px 24px 40px 0px #1A1A1A29",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    fontSize: {
      900: ["72px", { lineHeight: "108px" }],
      800: ["56px", { lineHeight: "84px" }],
      700: ["40px", { lineHeight: "60px" }],
      600: ["32px", { lineHeight: "48px" }],
      500: ["24px", { lineHeight: "36px" }],
      400: ["20px", { lineHeight: "32px" }],
      300: ["16px", { lineHeight: "24px" }],
      200: ["14px", { lineHeight: "20px" }],
      100: [
        "12px",
        {
          lineHeight: "16px",
          letterSpacing: "0.4px",
        },
      ],
      90: ["10px", { lineHeight: "14px" }],
      button: ["14px", { lineHeight: "24px", fontWeight: "700" }],
    },
    fontWeight: {
      light: "400",
      normal: "500",
      bold: "700",
    },
  },
  plugins: [],
};
