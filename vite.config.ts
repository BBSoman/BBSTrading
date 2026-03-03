import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyPublicPlugin() {
  return {
    name: 'copy-public-without-copies',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(publicDir)) return;
      const entries = fs.readdirSync(publicDir);
      entries.forEach(entry => {
        if (entry.includes(' copy.') || entry.includes(' copy)')) return;
        const src = path.join(publicDir, entry);
        const dest = path.join(distDir, entry);
        try {
          fs.copyFileSync(src, dest);
        } catch {
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), copyPublicPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    copyPublicDir: false,
  }
});
