import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light_green: "#C0C78C",
        green: "#A6B37D",
        light_yellow: "#FEFAE0",
        brown: "#B99470",
        title: "#557eaa",
        main: "#333333",
        secondary: "#4E342E",
        link: "#001F3F",
      },
      fontFamily: {
        title: ["var(--font-alegreya)", "serif"],
        text: ["var(--font-lora)", "serif"],
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-1000px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 0.5s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
