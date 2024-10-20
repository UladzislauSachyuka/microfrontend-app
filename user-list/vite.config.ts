import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "userList", // specifies the name of the remote application
      filename: "remoteEntry.js", // the entry file for the remote application, we will later reference this file to load the remote application
      exposes: { // a list of components we want to expose from this module
        "./UserList": "./src/components/UserList/UserList.tsx"
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
