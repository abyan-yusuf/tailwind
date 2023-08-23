/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'image1': "url('/images/premium_photo-1678099940967-73fe30680949.jpeg')",
        'image2': "url('/images/photo-1591337676887-a217a6970a8a.avif')",
        'image3': "url('/images/smart-speaker-house-control-innovative-technology_53876-102338(1).png')"
      },
      padding: {
        '50': "200px",
        '54': "13.5rem",
        '108': "27rem"
      },
      borderWidth: {
        '1': "1px"
      }
    }
  },
  plugins: [],
}

