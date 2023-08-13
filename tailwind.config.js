/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  purge: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      script: ["Permanent Marker"],
    },
    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        maui: {
          50: "#fef9ec",
          100: "#fbeeca",
          200: "#f6dc91",
          300: "#f1c358",
          400: "#eead31",
          500: "#e68d1a",
          600: "#cb6a13",
          700: "#a94b14",
          800: "#8a3b16",
          900: "#713116",
          950: "#411707",
        },
        tan: {
          50: "#f9f7f7",
          100: "#f3eeed",
          200: "#e9e1df",
          300: "#d9cbc8",
          400: "#c9b5b1",
          500: "#ab8e88",
          600: "#93756f",
          700: "#7a605b",
          800: "#67514d",
          900: "#584744",
          950: "#2d2422",
        },
        maui: {
          50: "#f1f8f1",
          100: "#dfedde",
          200: "#bfdbbf",
          300: "#95c098",
          400: "#609966",
          500: "#46834f",
          600: "#34673c",
          700: "#295331",
          800: "#234229",
          900: "#1d3722",
          950: "#101e14",
        },
        alt: {
          50: "#f7f9ec",
          100: "#edf1d6",
          200: "#dce4b2",
          300: "#c3d284",
          400: "#aabe5d",
          500: "#8da33f",
          600: "#6e812f",
          700: "#556427",
          800: "#455024",
          900: "#3b4522",
          950: "#1e250e",
        },
      },
    },
  },
};
