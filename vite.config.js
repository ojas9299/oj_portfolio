<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Oj-s_Portfolio/",
  define: {
    "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
  },
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> origin/main