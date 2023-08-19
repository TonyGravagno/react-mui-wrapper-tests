import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
var appLibrary = 'MUI';
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        {
            name: 'library-resolver',
            resolveId: function (source) {
                return source.replace(/Library/, appLibrary);
            },
        },
    ],
});
