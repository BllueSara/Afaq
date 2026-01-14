/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2D5A27",
        "primary-dark": "#1e3c1a",
        "saudi-green": "#2D5A27",
        "secondary": "#8a8060",
        "accent": "#dca510",
        "accent-gold": "#C5A059",
        "accent-sand": "#e6e3db",
        "background-beige": "#F5F5DC",
        "beige-custom": "#F5F5DC",
        "background-light": "#f8f8f5",
        "background-dark": "#161d15",
        "surface": "#ffffff",
        "text-main": "#181611",
        "text-dark": "#131613",
        "text-light": "#f5f3f0",
        "text-muted": "#6e7f6c",
        "muted": "#8a8060"
      },
      fontFamily: {
        "arabic": ["Readex Pro", "sans-serif"],
        "display": ["IBM Plex Sans Arabic", "Plus Jakarta Sans", "sans-serif"],
        "body": ["IBM Plex Sans Arabic", "Plus Jakarta Sans", "sans-serif"],
        "sans": ["IBM Plex Sans Arabic", "Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        "soft": "0 4px 20px -2px rgba(45, 90, 39, 0.08)",
        "card": "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)",
        "elegant": "0 20px 40px -10px rgba(0,0,0,0.1)"
      }
    },
  },
  plugins: [],
}

