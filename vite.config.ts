import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

type AppLibrary = 'MUI' | 'React' | undefined
const appLibrary: AppLibrary = 'MUI'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'library-resolver',
      resolveId(source) {
        return source.replace(/Library/, appLibrary)
      },
    },
  ],
})
