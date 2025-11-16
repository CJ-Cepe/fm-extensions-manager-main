import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/fm-extensions-manager-main/",
  server: {
    port: 3000, // optional: customize port
  },
});
