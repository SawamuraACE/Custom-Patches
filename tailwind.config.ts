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
          orange: "#FF4D15",
          red: "#D9280B",
          dark: "#1A1A1A",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #FF4D15 0%, #D9280B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;