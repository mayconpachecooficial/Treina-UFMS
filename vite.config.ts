import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/src/data/")) return "banco-questoes";
          if (id.includes("/node_modules/")) return "bibliotecas";
        },
      },
    },
  },
});
