/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        backgroundHeader: "#f9f8f6",
        btnBlack: "#252525",
      },
      animation: {
        hoverCard: "hoverCard 0.5s ease-in-out",
      },
      keyframes: {
        hoverCard: {
          "0% 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      height: {
        header: "65px",
      },
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
