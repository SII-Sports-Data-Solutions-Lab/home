// vite.config.ts - New file

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// Get the repository name from package.json homepage
const getBase = () => {
  const { homepage } = require('./package.json');
  if (homepage) {
    // Extract the path from a URL like https://pages.github.iu.edu/SII-Sports-Data-Solutions-Lab/LDA-TreadBike-Sentiment
    const url = new URL(homepage);
    const pathSegments = url.pathname.split('/').filter(Boolean);
    if (pathSegments.length >= 2) {
      return `/${pathSegments[0]}/${pathSegments[1]}/`;
    }
  }
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? getBase() : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});