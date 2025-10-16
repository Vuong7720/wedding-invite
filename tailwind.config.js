/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sang trọng & cổ điển
        playfair: ['"Playfair Display"', 'serif'],
        merriweather: ['"Merriweather"', 'serif'],
        lora: ['"Lora"', 'serif'],

        // Viết tay & lãng mạn
        dancing: ['"Dancing Script"', 'cursive'],
        vibes: ['"Great Vibes"', 'cursive'],
        pacifico: ['"Pacifico"', 'cursive'],

        // Hiện đại & thanh lịch
        poppins: ['"Poppins"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        comic: ['"Comic Neue"', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite', // Nhảy chậm
        'beat': 'beat 1s infinite alternate', // Tim đập
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        'beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
