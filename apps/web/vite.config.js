import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Define a porta padrão para 3000
    open: true, // Abre o navegador automaticamente
  },
  // Como estamos num monorepo, é bom garantir que o Vite consiga
  // resolver os pacotes locais caso haja algum problema com o link do NPM
  resolve: {
    preserveSymlinks: true,
  },
});
