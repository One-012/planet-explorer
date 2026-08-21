/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          sky: "#0284c7", // Xanh trời rực rỡ (giống banner YouTube)
          emerald: "#059669", // Xanh lá cây ngọc lục bảo (núi non)
          light: "#f4f8f6", // Nền sáng tự nhiên, dịu mắt
          card: "#ffffff", // Thẻ trắng tinh khôi
          dark: "#0f172a", // Màu chữ chính sắc nét
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
