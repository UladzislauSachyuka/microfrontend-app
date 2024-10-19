import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "userList",
      filename: "remoteEntry.js",
      exposes: {
        "./UserList": "./src/components/UserList/UserList.tsx"
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
