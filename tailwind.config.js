/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'light-gray': '#F9FAFB',
        'base-gray': '#f7f8fa',
        'cool-gray': '#3D5572',
        'deep-gray': '#FAFAFA',
        'pale-gray': '#F4F4F4',
        'steel-blue': '#50728C',
        'blue-gray': '#6f89a8',
        'deep-blue': '#41587B',
        'deep-ocean': '#3E5673',
        'stormy-blue': '#374151',
        'midnight-navy': '#2B3E57',
        'coral-red': '#DE4F46',
        'bright-red': '#FF0000',
      },
    },
  },
  plugins: [],
};
