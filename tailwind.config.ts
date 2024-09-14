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
        brown: "B99470",
        text_main: "#333333",
        text_secondary: "#4E342E",
        link: "001F3F",
      },
    },
  },
  plugins: [],
};
export default config;
