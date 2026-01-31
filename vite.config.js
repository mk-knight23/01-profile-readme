import { defineConfig } from 'vite';

export default defineConfig({
    base: '/01-portfolio-devtools/', // Matches repository name for GH Pages
    build: {
        outDir: 'dist',
    },
});
