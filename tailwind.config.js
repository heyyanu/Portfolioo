/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        primary: {
          DEFAULT: "#3b82f6", // Electric Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Neon Purple
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#10b981", // Emerald
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#262626",
          foreground: "#a3a3a3",
        },
        border: "#262626",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
