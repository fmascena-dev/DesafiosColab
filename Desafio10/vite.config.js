import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // Permite que o servidor aceite conexões externas
    port: 3000, // (Opcional) Define a porta que será usada
  },
});
