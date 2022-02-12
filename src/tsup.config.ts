import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['source'],
  splitting: true,
  sourcemap: false,
  // future to false
  clean: true,
  format: ['esm'],
  minify: true,
  outDir: '../source/js',
})
