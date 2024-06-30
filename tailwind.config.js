/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        'noise-after': {
          '0%': { clip: 'rect(26px, 9999px, 33px, 0)' },
          '5%': { clip: 'rect(140px, 9999px, 198px, 0)' },
          '10%': { clip: 'rect(184px, 9999px, 89px, 0)' },
          '15%': { clip: 'rect(121px, 9999px, 6px, 0)' },
          '20%': { clip: 'rect(181px, 9999px, 99px, 0)' },
          '25%': { clip: 'rect(154px, 9999px, 133px, 0)' },
          '30%': { clip: 'rect(134px, 9999px, 169px, 0)' },
          '35%': { clip: 'rect(26px, 9999px, 187px, 0)' },
          '40%': { clip: 'rect(147px, 9999px, 137px, 0)' },
          '45%': { clip: 'rect(31px, 9999px, 52px, 0)' },
          '50%': { clip: 'rect(191px, 9999px, 109px, 0)' },
          '55%': { clip: 'rect(74px, 9999px, 54px, 0)' },
          '60%': { clip: 'rect(145px, 9999px, 75px, 0)' },
          '65%': { clip: 'rect(153px, 9999px, 198px, 0)' },
          '70%': { clip: 'rect(99px, 9999px, 136px, 0)' },
          '75%': { clip: 'rect(118px, 9999px, 192px, 0)' },
          '80%': { clip: 'rect(1px, 9999px, 83px, 0)' },
          '85%': { clip: 'rect(145px, 9999px, 98px, 0)' },
          '90%': { clip: 'rect(121px, 9999px, 154px, 0)' },
          '95%': { clip: 'rect(156px, 9999px, 44px, 0)' },
          '100%': { clip: 'rect(67px, 9999px, 122px, 0)' },
        },
        'glitch-color': {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-3px) translateY(3px)' },
          '40%': { transform: 'translateX(-3px) translateY(-3px)' },
          '60%': { transform: 'translateX(3px) translateY(3px)' },
          '80%': { transform: 'translateX(3px) translateY(-3px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'noise-after': 'noise-after 1s infinite',
        'glitch-color': 'glitch-color 1s infinite',
      },
    },
      fontFamily:{
        comfortaa:['Comfortaa','cursive']
      }
    },
  plugins: [
    require('flowbite/plugin')
  ],
}

