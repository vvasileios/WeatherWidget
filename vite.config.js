import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "/src"),
      "@shared": path.resolve(__dirname, "/src/components/shared"),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
