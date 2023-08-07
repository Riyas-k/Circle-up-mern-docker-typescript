import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ... other config options
  build: {
    rollupOptions: {
      external: [
        "/src/main.jsx", // Add the path to the import that is causing issues
      ],
    },
  },
  preview: {
    host: true,
    port: 5173,
  },
});
