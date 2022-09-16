/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'

],
  theme: {
    extend: {
      
      backgroundImage: {
        galaxy: "url('/public/assets/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(50.86deg, #9572FC 35.08%, #43E7AD 50.94%, #E1D55D 44.57%)',
        'game-gradient':'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
        
      }
    },
  },
  plugins: [],
}
