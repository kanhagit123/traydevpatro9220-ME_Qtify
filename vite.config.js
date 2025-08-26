import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// QTify-specific Vite config
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // auto-open browser on dev start
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@pages': '/src/pages',
    },
  },
});
