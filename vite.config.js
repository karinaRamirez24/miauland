import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), svgr()],

  // Puente de React:
  server: {
    host: '0.0.0.0', // Permite acceso desde cualquier IP en la red local
    port: 5173,      // Asegúrate de usar el puerto correcto
  },
})