import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import checker from 'vite-plugin-checker'
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  build: {
    outDir: '../public',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [
    tailwindcss(),
    react(),
    checker({
      typescript: true,
    }),
    imagetools(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
})
