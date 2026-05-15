import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        accent:      "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "bolt-yellow": "var(--bolt-yellow)",
        bg:          "var(--bg)",
        "bg-secondary": "var(--bg-secondary)",
        surface:     "var(--surface)",
        border:      "var(--border)",
        text:        "var(--text)",
        "text-muted": "var(--text-muted)",
      },
    },
  },
  plugins: [],
};
export default config;
