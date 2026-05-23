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
        primary: "#3DED7A",
        bg: "#0A0A0A",
        surface: "#111111",
        "surface-elevated": "#1A1A1A",
        divider: "#222222",
        secondary: "#A1A1AA",
        muted: "#52525B",
      },
      fontFamily: {
        display: ["var(--font-geist)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "green-radial": "radial-gradient(ellipse at top right, rgba(61,237,122,0.15) 0%, transparent 70%)",
        "green-mesh": "radial-gradient(ellipse at 70% 20%, rgba(61,237,122,0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(61,237,122,0.06) 0%, transparent 50%)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ticker-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        ticker: "ticker 38s linear infinite",
        "ticker-reverse": "ticker-reverse 44s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
