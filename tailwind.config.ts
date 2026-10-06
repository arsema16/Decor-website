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
        dark: {
          950: "#070708",
          900: "#0c0c0e",
          850: "#121215",
          800: "#18181d",
          750: "#202026",
          700: "#2a2a32",
          600: "#3d3d47",
        },
        ochre: {
          300: "#86efac",
          400: "#4ade80",
          500: "#16a34a",
          600: "#15803d",
          700: "#166534",
        },
        sand: {
          100: "#f0fdf4",
          200: "#dcfce7",
          300: "#bbf7d0",
          400: "#86efac",
          500: "#4ade80",
          600: "#22c55e",
        },
        gold: {
          300: "#bbf7d0",
          400: "#86efac",
          500: "#22c55e",
          600: "#16a34a",
        },
        cream: {
          50: "#0c0c0e",
          100: "#141418",
          200: "#1c1c22",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        editorial: ["'Bodoni Moda'", "'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        italiana: ["'Italiana'", "'Cormorant Garamond'", "Georgia", "serif"],
        script: ["'Alex Brush'", "'Great Vibes'", "cursive"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
