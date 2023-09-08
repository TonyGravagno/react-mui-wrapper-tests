import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';

type AppLibrary = 'MUI' | 'React' | undefined
const appLibrary: AppLibrary = 'MUI'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'library-resolver',
      resolveId(source, importer) {
        const original = source;
        const replaced = source.replace(/@DynLibName/, appLibrary);

        if (replaced !== original) {
          // If the importer is provided and the source is relative, resolve the full path
          if (importer && source.startsWith('.')) {
            const fullPath = path.resolve(path.dirname(importer), replaced) + '.tsx';
//            this.warn(`From  : ${original}`);
//            this.warn(`To    : ${fullPath}`);
            return fullPath;
          }

//          this.warn(`From: ${original}`);
//          this.warn(`To  : ${replaced}`);
          return replaced;
        }
        return null;
      },
    },
  ],
});
