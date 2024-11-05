import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,vue}"],
  theme: {
    extend: {},
  },
  plugins: [typography(), forms()],
} satisfies Config
