import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que o servidor aceite conexões externas
    port: 3000, // (Opcional) Define a porta que será usada
  }
})
