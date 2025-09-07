import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/myportfolio/',   // IMPORTANT: must match your repo name
})
