hexo.extend.filter.register('template_locals', (locals) => {
  locals.yun_version = require('../../package.json').version
  return locals
})

hexo.extend.filter.register('after_post_render', (data) => {
  // img lazyload
  if (hexo.theme.config.lazyload && hexo.theme.config.lazyload.enable) {
    data.content = data.content.replace(/<img(.+?)>/gi, (str, p1) => {
      return str.replace(p1, `${p1} loading="lazy"`)
    })
  }
  return data
})
