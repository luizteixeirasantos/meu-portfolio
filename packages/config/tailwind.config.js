/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../apps/web/index.html",
    "../../apps/web/src/**/*.{js,jsx}",
    "../../packages/ui/src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Suporte para o tema Dark/Light via classe
  theme: {
    extend: {
      colors: {
        // Paleta Premium Dark
        background: {
          DEFAULT: "#050505", // Preto quase absoluto para profundidade
          light: "#FFFFFF",
        },
        surface: {
          DEFAULT: "#121212", // Elevação (cards, seções)
          hover: "#1A1A1A",
        },
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#E2E2E2", // Cinza metálico para detalhes
          muted: "#666666",
        }
      },
      fontFamily: {
        // Priorizando fontes elegantes e modernas
        sans: ["Inter", "System-ui", "sans-serif"],
        display: ["Calans", "Lexend", "sans-serif"], // Para títulos impactantes
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};