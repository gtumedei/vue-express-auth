import tailwind from "@tailwindcss/vite"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwind()],
  server: {
    // In dev, reindirizza al backend le richieste che iniziano con /api
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
})
