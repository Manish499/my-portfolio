import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'my-react-app'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  plugins: [react()],
  server: {
    // enable host so the dev server is reachable on the network when needed
    host: true,
    // use polling-based file watching — more reliable on some Windows setups and network filesystems
    watch: {
      usePolling: true,
    },
    // keep HMR overlay enabled
    hmr: {
      overlay: true,
    },
  },
})
