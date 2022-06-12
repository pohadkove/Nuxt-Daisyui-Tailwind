/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f7bbea",
        
"secondary": "#a8f7a3",
        
"accent": "#86d151",
        
"neutral": "#25222A",
        
"base-100": "#394C5B",
        
"info": "#A5DAE9",
        
"success": "#23BE9F",
        
"warning": "#F9BF10",
        
"error": "#EA7B95",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  