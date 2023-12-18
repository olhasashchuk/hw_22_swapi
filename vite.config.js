import { defineConfig } from 'vite';

export default  defineConfig( {
    root: 'src',
    base: '',
    build: {
        minify: true,
        cssMinify: true,
        outDir: '../dist'
    },
    server: {
        watch: {
            includes: ['src/**/main.js', 'src/**/main.scss']
        }
    }
})