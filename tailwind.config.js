/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-800": "#1E40AF",
        "blue-600": "#2563EB",
        blue: "#3b82f6",
        accent: "#6487E3",
      },
    },
  },
  plugins: [],
};
