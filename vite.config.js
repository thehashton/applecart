import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        fs: {
            strict: false, // This ensures that static files outside of Vite's root directory can be served
        },
    },
});
