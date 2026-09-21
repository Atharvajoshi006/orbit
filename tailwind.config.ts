import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orbit: {
          bg: "#090a0d",
          surface: {
            DEFAULT: "#111318",
            muted: "#0d0f13",
            subtle: "#151820",
            hover: "#1a1e27",
            active: "#202531",
          },
          border: {
            subtle: "rgba(255, 255, 255, 0.06)",
            DEFAULT: "rgba(255, 255, 255, 0.1)",
            strong: "rgba(255, 255, 255, 0.16)",
          },
          text: {
            primary: "#f3f4f6",
            secondary: "#9ca3af",
            muted: "#6b7280",
            subtle: "#4b5563",
          },
          accent: {
            DEFAULT: "#38bdf8",
            subtle: "rgba(56, 189, 248, 0.08)",
            border: "rgba(56, 189, 248, 0.25)",
            glow: "rgba(56, 189, 248, 0.15)",
          },
          ai: {
            DEFAULT: "#818cf8",
            subtle: "rgba(129, 140, 248, 0.08)",
            border: "rgba(129, 140, 248, 0.2)",
            glow: "rgba(129, 140, 248, 0.15)",
          },
          emerald: {
            subtle: "rgba(52, 211, 153, 0.08)",
            border: "rgba(52, 211, 153, 0.25)",
            text: "#34d399",
          },
          amber: {
            subtle: "rgba(251, 191, 36, 0.08)",
            border: "rgba(251, 191, 36, 0.25)",
            text: "#fbbf24",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        "orbit-sm": "6px",
        "orbit-md": "10px",
        "orbit-lg": "14px",
        "orbit-xl": "18px",
      },
      boxShadow: {
        "orbit-subtle": "0 1px 2px 0 rgba(0, 0, 0, 0.35)",
        "orbit-card": "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.4)",
        "orbit-glow": "0 0 24px -4px rgba(56, 189, 248, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
