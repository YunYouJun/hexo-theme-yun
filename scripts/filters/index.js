hexo.extend.filter.register("template_locals", function(locals) {
  locals.yun_version = require("../../package.json").version;
  return locals;
});

// img lazyload
hexo.extend.filter.register("after_post_render", function(data) {
  if (hexo.theme.config.lazyload && hexo.theme.config.lazyload.enable) {
    data.content = data.content.replace(
      /<img(\s*?)src="(.*?)"(.*?)>/gi,
      (str, p1, p2, p3) => {
        return str.replace(p3, `${p3} loading="lazy"`);
      }
    );
  }
  return data;
});
