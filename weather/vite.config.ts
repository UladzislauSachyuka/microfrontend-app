import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federaion from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federaion({
      name: "weather", // specifies the name of the remote application
      filename: "remoteEntry.js", // // the entry file for the remote application, we will later reference this file to load the remote application
      exposes: { // // a list of components we want to expose from this module
        "./Weather": "./src/components/Weather/Weather.tsx"
      },
      shared: ["react"], // the dependencies and libraries we want to share between our applications
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
