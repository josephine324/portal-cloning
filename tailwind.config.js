/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        customGray: "#D5D5D5",
        customBlack: "#333333E6",
        customGreen: "#a18a4d",
        customGrey: "#F2F2F2",
        customColor: "#A18A4D",
        customblack: "#333333",
      },
      spacing: {
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
        112: "28rem", // 448px
        128: "32rem", // 512px
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
