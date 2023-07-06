import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
    },
  },
  build: {
    outDir: "build", // 1.指定打包输出的目录名，默认是dist（相对于 项目根目录)
    assetsDir: "static", // 2.指定静态资源存放目录（相对于build.outDir）, 默认是assets
  },
  base: "/my-app/", // 3.开发或生产环境引入资源的前缀
});
