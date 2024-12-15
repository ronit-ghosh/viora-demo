/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7800ff',
      },
    },
  },
  plugins: [
    // Use dynamic import for the plugin
    import('@tailwindcss/typography').then(m => m.default)
  ],
};