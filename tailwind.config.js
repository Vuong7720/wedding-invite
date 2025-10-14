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
    },
  },
  plugins: [],
}
