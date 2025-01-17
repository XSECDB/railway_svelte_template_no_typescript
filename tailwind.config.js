/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Helles Blau (Sie können diesen Hex-Wert anpassen)
      }
    },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3B82F6",
          "primary-focus": "#2563EB",
          "primary-content": "#ffffff",
          neutral: "#f3f4f6",
          "neutral-content": "#1f2937",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
        },
      },
    ],
  },
} 