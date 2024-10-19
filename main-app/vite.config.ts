import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mainApp",
      remotes: {
        userList: "http://localhost:3002/assets/remoteEntry.js",
        weather: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
