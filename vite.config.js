import tailwindcss from '@tailwindcss/vite';

import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/yadin.manrique-portfolio/',
  server: {
    // Security mitigations for OWASP/ASVS compliance
    // Prevents arbitrary file read via WebSocket (GHSA-p9ff-h696-f583)
    ws: false,
    // Enforce strict filesystem access control (defense-in-depth)
    fs: {
      strict: true,
      allow: ['.']
    }
  }
});
