/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--color-bg)",
          surface: "var(--color-surface)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        accent: "var(--color-accent)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        }
      }
    },
  },
  plugins: [],
}
