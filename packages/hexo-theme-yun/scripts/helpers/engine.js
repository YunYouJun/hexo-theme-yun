/* global hexo */

"use strict";

hexo.extend.helper.register("hexo_env", function(type) {
  return this.env[type];
});

hexo.extend.helper.register("yun_env", function(type) {
  const env = require("../../package.json");
  return env[type];
});
