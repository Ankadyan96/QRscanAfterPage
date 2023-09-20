/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
      extend: {
        colors: {
          custom: '#ECF0FC;',
          gradientRotate: {
            'custom-92': '92.9deg',
          }
        },
      },
      fontFamily: {
        'poppins': [ 'Poppins', 'sans-serif'],
        'montserrat': [ 'Montserrat', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'inter': ['inter', 'sans-serif']
      }
    },
    plugins: [],
  }
  
  
  
  