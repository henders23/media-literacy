import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the built folder works from any LMS subdirectory (BUILD.md §11)
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
