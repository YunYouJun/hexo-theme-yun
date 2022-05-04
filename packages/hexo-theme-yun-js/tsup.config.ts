import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  splitting: true,
  sourcemap: false,
  // future to false
  clean: true,
  format: ['esm'],
  minify: true,
  outDir: '../hexo-theme-yun/source/js',
})
