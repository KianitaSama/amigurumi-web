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
        sakura: "#F7CFE3",
        cottonSky: "#A7D3E8"
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
        nunito: ["Nunito", "sans-serif"]
      },
      fontSize: {
        h1: "50px",
        h2: "32px",
        h3: "28px",
        body: "17px"
      }
    },
  },
  plugins: [],
}
