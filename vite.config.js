import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // السماح بالوصول من جميع الشبكات
    port: 5173,
    strictPort: true,
    open: false
  }
});
