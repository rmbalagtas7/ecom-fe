import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Backend URL
        changeOrigin: true,
        secure: false, // Set to false if using self-signed HTTPS certificates
        //rewrite: (path) => path.replace(/^\/api/, ""), // Removes `/api` prefix
      },
    },
  },
});
