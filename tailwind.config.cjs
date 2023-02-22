/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    screens: {
      lg:'720px',
      
    },
    fontFamily: {
      font_outfit: [
        { fontFeatureSettings: '"Outfit-VariableFont_wght"' },
      ],
      font_play: [
        { fontFeatureSettings: '"Play-Regular"' },
      ],
    },
    extend: {
      backgroundImage: {
        'homebg': "url('../../../public/img/image/homebg.png')",
        'btn02': "url('../../../public/img/image/btn02.svg')",
        'chatbg': "url('../../../public/img/image/chatbg.svg')",
        'btnbg': "url('../../../public/img/image/bg-gradient.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),("tw-elements/dist/plugin"),('tailwind-scrollbar-hide')],
  variants: {
    scrollbar: ['rounded']}
});
