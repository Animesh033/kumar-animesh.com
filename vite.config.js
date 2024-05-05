import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [/^node:.*/],
    },
  },
  plugins: [
    // inject({
    //   // => that should be first under plugins array
    //   $: "jquery",
    //   jQuery: "jquery",
    // }),
    react(),
  ],
});
