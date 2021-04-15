import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ComponentsPlugin from 'vite-plugin-components'
import { componentResolver } from '@chakra-ui/vue-auto-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ComponentsPlugin({
      customComponentResolvers: [componentResolver],
    }),
  ]
})
