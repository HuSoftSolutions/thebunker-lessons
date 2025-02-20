import type { Config } from "tailwindcss";

export default {
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

        primary: "#c22027",
        secondary: "#6c6c6c",
      },
      fontFamily: {
        aller: ["Aller", "sans-serif"], // Add 'Aller' to Tailwind's fontFamily
      },
    },
  },
  plugins: [],
} satisfies Config;
