/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme("colors"),
        "cold": "radial-gradient(circle, rgba(102,153,204,1) 32%, rgba(240,248,255,1) 91%)"
      })
    }
    
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

