import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// next.config.js
const isProd = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isProd ? "/vishalkamdi" : "/",
  build: {
    // assetsDir: isProd ? "/vishalkamdi" : "/",
  }

})
