hexo.extend.filter.register("template_locals", function(locals) {
  locals.yun_version = require("../../package.json").version;
  return locals;
});
