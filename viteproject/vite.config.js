import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/models/*', // Assuming your .gltf/.glb files are inside the 'public/models' directory
          dest: 'models'
        }
      ]
    })
  ]
})
