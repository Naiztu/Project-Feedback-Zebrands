module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dis: "#848484",
        hov: "#5C5C5C",
        primary: { 50: "#231F20", 300: "#FFFFFF" },
        secondary: { 50: "#FF595A", 300: "#005CB9" },
        tertiary: {
          50: "#A2C7E2",
          100: "#FFB1B9",
          200: "#C7A0CE",
          300: "#F6DFA4",
          400: "#D5B49E",
          500: "#89DC65",
          600: "#61366E",
          700: "#004C45",
          800: "#FFCD00",
          900: "#95785E",
        },
        interaction: {
          50: "#FFC2C2",
          300: "#FF999A",
          500: "#6F94B9",
          700: "#6F94B9",
          900: "#005CB91A",
        },
        status: {
          50: "#2E7D32",
          300: "#FE9339",
          500: "#B00020",
          700: "#0039CB",
        },
        neutral: {
          50: "#FFFFFF",
          100: "#F8F9F9",
          200: "#F1F2F2",
          300: "#EEEEEE",
          400: "#D9D9D9",
          500: "#848484",
          600: "#5C5C5C",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
