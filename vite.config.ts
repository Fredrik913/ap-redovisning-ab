import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // Året då sidan byggdes. Används så att förrenderad HTML och React visar samma år vid hydrering
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
});
