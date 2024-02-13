import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        main: "Roboto, sans-serif", // Adds a new `font-main` class
        nav: "Bebas Neue, sans-serif",
        signature: "Protest Guerrilla, sans-serif",
        "main-header": "Arvo, sans-serif",
        "about-me-header": "Caveat, curisve",
        "about-me-body": "K2D, sans-serif",
      },
      colors: {
        "primary-txt": "var(--clr-font-primary)",
        "secondary-txt": "var(--clr-font-secondary)",
        "primary-bg": "var(--clr-bg)",
        "secondary-bg": "var(--clr-bg-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
