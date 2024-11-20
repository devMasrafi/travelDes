/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: "320px",
      md: "640px",
      lg: "768px",
      xl: "1140px",
      '2xl': "1280px",
    },
    fontFamily: {
      'fontRoboto': ['"Roboto", sans-serif;']
    },
    extend: {
      colors: {
        mainCol: "#EC8305",
        orrangeCol: "#F26F55",
        grayCol: "#24292F",

      },
    },
  },
  plugins: [],
};
