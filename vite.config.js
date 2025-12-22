import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // user pages(https://choyhns.github.io)는 base가 "/"가 맞음
  base: "/",
});
