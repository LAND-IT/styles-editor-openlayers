import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/styleEditor.tsx'),
            name: 'OpenLayers Style Editor',
            fileName: 'openlayers-style-editor',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                },
            },
        },
    },
});
