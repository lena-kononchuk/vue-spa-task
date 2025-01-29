/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        formular: ['Formular', 'sans-serif'],
        'greenwich-medium': ['Greenwich-Medium', 'Arial', 'sans-serif'],

      },
      padding: {
        mobile: '16px', 
        tablet: '40px', 
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        xs: '328px',
  
      },
    },
  },
  variants: {},
  plugins: [],
}

