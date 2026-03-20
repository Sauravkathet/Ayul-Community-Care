import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

function resolvePort(value: string | undefined, fallback: number): number {
  if (!value) return fallback;

  const port = Number(value);
  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid port value: "${value}"`);
  }

  return port;
}

function resolveBasePath(value: string | undefined): string {
  if (!value || value === "/") return "/";

  const prefixed = value.startsWith("/") ? value : `/${value}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
}

const port = resolvePort(process.env.PORT ?? process.env.FRONTEND_PORT, 5173);
const apiPort = resolvePort(process.env.API_PORT, 3001);
const basePath = resolveBasePath(process.env.BASE_PATH);
const apiProxyTarget = process.env.API_PROXY_TARGET ?? `http://127.0.0.1:${apiPort}`;

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      "/api": {
        target: apiProxyTarget,
        changeOrigin: true,
      },
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
