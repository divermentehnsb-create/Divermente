import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  root: 'src',
  publicDir: '../public',
  base: mode === 'production' ? '/Divermente/' : '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
}));
