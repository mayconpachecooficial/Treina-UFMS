import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["tests/*.ui.test.tsx", "tests/study.test.ts"],
    fileParallelism: false,
    maxWorkers: 1,
  },
});
