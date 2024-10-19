import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federaion from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federaion({
      name: "weather",
      filename: "remoteEntry.js",
      exposes: {
        "./Weather": "./src/components/Weather/Weather.tsx"
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
