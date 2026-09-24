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
          bg: "#f6f6f7",
          canvas: "#f9f9fb",
          surface: {
            DEFAULT: "#ffffff",
            muted: "#f8f9fa",
            subtle: "#f3f4f6",
            hover: "#f1f2f5",
            active: "#e9ebef",
          },
          border: {
            subtle: "rgba(0, 0, 0, 0.04)",
            DEFAULT: "rgba(0, 0, 0, 0.07)",
            strong: "rgba(0, 0, 0, 0.12)",
          },
          text: {
            primary: "#14151a",
            secondary: "#646876",
            muted: "#8e92a0",
            subtle: "#b5b8c3",
          },
          accent: {
            DEFAULT: "#6366f1",
            subtle: "rgba(99, 102, 241, 0.06)",
            border: "rgba(99, 102, 241, 0.18)",
            glow: "rgba(99, 102, 241, 0.12)",
          },
          ai: {
            DEFAULT: "#7c3aed",
            subtle: "rgba(124, 58, 237, 0.05)",
            border: "rgba(124, 58, 237, 0.16)",
            glow: "rgba(124, 58, 237, 0.1)",
          },
          emerald: {
            subtle: "rgba(16, 185, 129, 0.08)",
            border: "rgba(16, 185, 129, 0.2)",
            text: "#059669",
          },
          amber: {
            subtle: "rgba(245, 158, 11, 0.08)",
            border: "rgba(245, 158, 11, 0.2)",
            text: "#d97706",
          },
          rose: {
            subtle: "rgba(244, 63, 94, 0.08)",
            border: "rgba(244, 63, 94, 0.2)",
            text: "#e11d48",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        "orbit-sm": "8px",
        "orbit-md": "12px",
        "orbit-lg": "16px",
        "orbit-xl": "20px",
        "orbit-2xl": "24px",
        "orbit-3xl": "30px",
      },
      boxShadow: {
        "orbit-subtle": "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        "orbit-card": "0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        "orbit-card-hover": "0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.02)",
        "orbit-window": "0 24px 60px -12px rgba(15, 23, 42, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        "orbit-input": "0 10px 28px -6px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
