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
        light_green: "#e1f8eb",
        green: "#A6B37D",
        light_yellow: "#FEFAE0",
        brown: "#B99470",
        title: "#557eaa",
        main: "#333333",
        secondary: "#4E342E",
        link: "#001F3F",
        head: "#005C7E",
      },
      fontFamily: {
        title: ["var(--font-alegreya)", "serif"],
        text: ["var(--font-lora)", "serif"],
      },
      backgroundImage: {
        "header-gradient":
          "linear-gradient(to right, #004457, #194d5d,#36515c,#36515c,#69615d,#69615d, #44555c,#36525c)",
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
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 0.5s forwards",
        "spin-wheel": "rotate 2s linear infinite",
      },
      transitionTimingFunction: {
        order: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
  ],
};
export default config;
