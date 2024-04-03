/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        backgroundHeader: "#f9f8f6",
        btnBlack: "#252525"
      },
      animation: {
        hoverBottom: 'hoverBottom 1s ease-in-out infinite'
      },
      keyframes: {
        hoverBottom: {
          '0%': {transform: '-translate-x-full'},
          '100%' : {transform: 'translate-x-full'}
        }
      }
    },
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
};
