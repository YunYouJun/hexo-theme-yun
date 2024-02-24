import antfu from '@antfu/eslint-config'

export default antfu({
  globals: {
    hexo: true,
    CONFIG: 'off',
    anime: 'off',
    Yun: true,
    Pjax: true,
  },
  rules: {
    'no-console': 'off',
    'yaml/no-empty-mapping-value': 'off',
  },
  ignores: [
    'dist',
    'public',
    'db.json',
    'packages/hexo-theme-yun/source/js/**/*',
  ],
})
