import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/css-journey/',
  server: {
    port: 3000
  },
  plugins: [vue()]
});
