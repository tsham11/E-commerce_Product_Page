import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/E-commerce_Product_Page/",
  plugins: [react()],
});
