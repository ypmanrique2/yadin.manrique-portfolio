import tailwindcss from '@tailwindcss/vite';

import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

const allowedDevHosts = new Set(['127.0.0.1:5173', 'localhost:5173']);

const devHostGuard = {
  name: 'dev-host-guard',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const host = req.headers.host?.toLowerCase();

      if (!host || !allowedDevHosts.has(host)) {
        res.statusCode = 403;
        res.end('Forbidden');
        return;
      }

      next();
    });
  }
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [devHostGuard, react(), tailwindcss()],
  base: '/yadin.manrique-portfolio/',
  server: {
    // Local-only development server; do not expose it on the network.
    host: '127.0.0.1',
    strictPort: true,
    cors: {
      origin: ['http://localhost:5173', 'http://127.0.0.1:5173']
    },
    ws: false,
    fs: {
      strict: true,
      allow: ['.']
    },
    // Sets generated development asset URLs; it is not a request-origin check.
    origin: 'http://localhost:5173',
  }
});
