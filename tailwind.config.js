/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cute: {
          rojo: "#be0f34",
          gris: "#6d6e65",
          azul: "#0072cf",
          amarillo: "#ffb60f",
          verde: "#66bc99",
          rojoClaro: "#c6d4e2"
        },
        rosado: {
          principal: "#D98299",
          claro: "#D9A3B1"
        },
        lavanda: {
          base: "#B7A4BF",
          profundo: "#6B5A73"
        },
        verde: {
          sage: "#A8BFB7",
          bosque: "#4A6B5C"
        },
        beige: {
          calido: "#F2E9D8"
        },
        gris: {
          carbon: "#3C3530"
        },
        sakura: {
          claro: "#F7CFE3",
          medio: "#E3A6C1",
          oscuro: "#C97A9E"
        }
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
        nunito: ["Nunito", "sans-serif"]
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" }
        },
        "scale-in-out": {
          "0%, 100%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(0.9)" }
        },
        movingBg: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' }
        }
      },
      animation: {
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        "scale-in-out": "scale-in-out 1.5s ease-in-out infinite",
        'moving-bg': 'movingBg 20s linear infinite'
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(border|text|hover:bg|bg)-(cute-rojo|cute-gris|cute-azul|cute-amarillo|cute-verde|cute-rojoClaro|rosado-principal|rosado-claro|lavanda-base|lavanda-profundo|verde-sage|verde-bosque|beige-calido|gris-carbon|sakura-claro|sakura-medio|sakura-oscuro|cottonSky|red|blue|green|yellow|purple|pink|indigo|cyan|teal|orange|lime|emerald|sky|violet|fuchsia|rose|amber|slate|gray|zinc|neutral|stone|kiana-claro)(-\d{1,3})?$/,
      variants: ['hover', 'focus'],
    },
    "bg-rosado-principal",
    "text-rosado-principal",
    "border-rosado-principal",
    "hover:bg-rosado-principal",
    "bg-lavanda-base",
    "text-lavanda-base",
    "border-lavanda-base",
    "hover:bg-lavanda-base",
    "bg-verde-sage",
    "text-verde-sage",
    "border-verde-sage",
    "hover:bg-verde-sage",
    "bg-beige-calido",
    "text-beige-calido",
    "border-beige-calido",
    "hover:bg-beige-calido",
  ],
}
