const args = process.argv.slice(2)
const isDev = args.includes('--watch')
/* eslint-disable node/no-unpublished-require */
require('esbuild').build({
  entryPoints: ['source/index.ts'],
  bundle: true,
  minify: !isDev,
  outfile: '../source/js/hexo-theme-yun.js',
  target: ['es2018'],
  watch: isDev,
  format: 'esm',
  // sourcemap: true,
})
  // eslint-disable-next-line no-process-exit
  .catch(() => process.exit(1))
