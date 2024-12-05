/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        salones: {
          "primary": "#ab4141",
          "neutral": "#e0e4f9",
          "base-100": "#f1f3fd"
        },
      }
    ],
  },
}

