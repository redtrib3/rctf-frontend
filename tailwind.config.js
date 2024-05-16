/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      anonymouspro: ['AnonymousPro', 'monospace']
    },
    extend: {
      keyframes: {
        fadeInAnimation: {
          '0%' : { opacity: '0' },
          '100%' : { opacity: '1' },
        },
        growDown: {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        'fadeIn' : 'fadeInAnimation ease .9s',
        'fadeIn-quick': 'fadeInAnimation ease-in-out 0.2s',
        'growDown': 'growDown ease-in-out 300ms',
      }
    },
  },
  plugins: [],
}

