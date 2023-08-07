/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode:"class",
  theme: {  
    extend: {
      colors:{
        'orange':"#f7922d"
      }
    },
    screens: {
      'sm': {'max':'840px'},
      'md': {'max':'900px'},
      'lg': {'max':'1024px'}
 
    },
  },
 plugins: [
  require('tailwindcss-debug-screens'),
]
}