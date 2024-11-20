/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        surface: 'var(--surface-color)',
        'shadow-dark': 'var(--shadow-dark)',
        'shadow-light': 'var(--shadow-light)',
      },
      boxShadow: {
        'neumorph': '8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)',
        'neumorph-inset': 'inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)',
      },
      borderRadius: {
        'neumorph': '20px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}