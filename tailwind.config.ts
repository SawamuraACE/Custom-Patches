import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#C03800",
          red: "#A02E00",
          dark: "#1A1A1A",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #C03800 0%, #A02E00 100%)",
      },
    },
  },
  plugins: [],
};
export default config;