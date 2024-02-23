import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ReactivityTransform(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      dts:"src/auto-import.d.ts"
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    port:8080,
    open:true
  }
})
