import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
      colors: {
        gray: {
          25: "#FAFAFA",
          50: "#E7E7E7",
          100: "#B6B6B6",
          200: "#929292",
          300: "#606060",
          400: "#414141",
          500: "#121212",
          600: "#101010",
          700: "#0D0D0D",
          800: "#0A0A0A",
          900: "#080808",
        },
      },
    },
  },
  plugins: [],
};
export default config;
