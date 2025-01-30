import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: "https://jason-bunn.github.io/react-mpd/",
  plugins: [react()],
})
