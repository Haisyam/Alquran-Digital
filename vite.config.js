import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Mendengarkan pada semua alamat IP
    port: 5173, // Port default Vite (bisa diganti jika diperlukan)
    strictPort: true, // Memastikan port tidak berubah secara otomatis
    open: false, // Tidak membuka browser secara otomatis
    allowedHosts: ["react.haisyam.xyz"],
  },
});
