import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C10",
        panel: "#12151B",
        border: "#232833",
        ink: "#F2EFE9",
        muted: "#8A93A3",
        amber: {
          DEFAULT: "#D98E4A",
          soft: "#E8B584",
        },
        teal: {
          DEFAULT: "#35D0C0",
          soft: "#7FE3D8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #D98E4A 0%, #35D0C0 100%)",
        "grain": "radial-gradient(circle at 1px 1px, rgba(242,239,233,0.05) 1px, transparent 0)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
