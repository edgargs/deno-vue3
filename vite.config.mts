import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'npm:vite@^4.0.4'
import vue from 'npm:@vitejs/plugin-vue@^4.0.0'

import 'npm:vue@^3.2.45'
import 'npm:vue-router@4'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
