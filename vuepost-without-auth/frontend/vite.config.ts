import vue from "@vitejs/plugin-vue"
import autoprefixer from "autoprefixer"
import tailwind from "tailwindcss"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // Reindirizza al backend le richieste che iniziano con /api
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
})
