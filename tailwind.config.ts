import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accentBlue: "#3B82F6",
        accentPurple: "#8B5CF6",
        accentCyan: "#22D3EE",
        surfaceDark: "#111827",
        borderDark: "#1F2937",
        lux: {
          ivory: "#faf8f5",
          pearl: "#f2ece4",
          champagne: "#dccfb8",
          gold: "#b8986d",
          frost: "#eef6ff",
          mist: "#c5daf0",
          sapphire: "#7eb3df",
          moonlight: "#a8c9ea",
          ink: "#07090e"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.35)",
        glowBlue: "0 0 0 1px rgba(59,130,246,0.28), 0 16px 50px rgba(59,130,246,0.22)",
        glowPurple: "0 0 0 1px rgba(139,92,246,0.24), 0 16px 50px rgba(139,92,246,0.2)"
      }
    }
  },
  plugins: []
};

export default config;
