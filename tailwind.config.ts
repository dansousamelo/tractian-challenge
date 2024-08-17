import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-dark-tractian": "#023B78",
        "blue-darkest-tractian": "#17192D",
        "blue-tractian": "#2188FF",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        golos: ["var(--font-golos-text)", "sans-serif"],
        fascinate: ["var(--font-fascinate-inline)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
