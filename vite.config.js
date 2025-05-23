import {
  resolve
} from "path";

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  build: {
    lib: {
      entry: 'libs/index.js', // 你的入口文件
      name: 'quick-map-point',
    },
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['vue'],
    output: {
      // 为外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue'
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./example"),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/theme/index.less";`
      }
    }
  }
})