import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const envDir = join(__dirname, '..', '..')

// https://vitejs.dev/config/
export default defineConfig({
  envDir,
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3042',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
