import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({
      // Use default server entry provided by TanStack Start instead of
      // custom `server` entry which can cause 404s on Vercel/Nitro runtimes.
    }),
    nitro(),
    tailwindcss(),
    react(),
  ],
});