import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd())
  const prox = {
    target: process.env.VITE_API_URL,
    changeOrigin: true,
    secure: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api/message/send': prox,
        '/api/projects/get': prox,
        '/api/skills/get': prox,
      },
    },
  }
})
