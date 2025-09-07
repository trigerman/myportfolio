import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// IMPORTANT: set base to your repo name when deploying to GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/myportfolio/'
})
