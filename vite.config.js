import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path" // Import path module
import { fileURLToPath } from "url"

// https://vitejs.dev/config/
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up the '@' alias to point to the 'src' directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
