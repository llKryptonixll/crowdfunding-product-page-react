/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moderate_cyan: "hsl(176, 50%, 47%)",
        dark_cyan: "hsl(176, 72%, 28%)",
        black: "hsl(0, 0%, 0%)", 
        dark_gray: "hsl(0, 0%, 48%)",
      },
      keyframes: {
        scaleY: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: 0 },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: 1 },
        },
        scaleY_Reverse: {
          '0%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: 0 },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: 1 },
        }
      },
      animation: {
        scaleY: 'scaleY 500ms ease-in',
        scaleY_Reverse: 'scaleY 500ms ease-in',
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"]
      }
    },
  },
  plugins: [

  ],
}