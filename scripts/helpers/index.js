/*global hexo*/

/**
 * 是否为 url 链接
 */
hexo.extend.helper.register("is_url", function(path) {
  return new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(
    path
  );
});

hexo.extend.helper.register("page_title", function(page) {
  const { __ } = this;

  if (page.type === "categories") {
    page.title = __("title.category");
  } else if (page.type === "tags") {
    page.title = __("title.tag");
  } else if (page.type === "albums") {
    page.title = __("title.album");
  }

  if (page.archive) {
    page.title = __("title.archive");
  } else if (page.category) {
    page.title = __("title.category") + " - " + page.category;
  } else if (page.tag) {
    page.title = __("title.tag") + " - " + page.tag;
  }
});

hexo.extend.helper.register("getPropertyByType", function(type) {
  const { theme } = this;
  let typeColor = theme.types.link.color;
  let typeIcon = theme.types.link.icon;
  if (type in theme.types) {
    typeColor = theme.types[type].color;
    typeIcon = theme.types[type].icon;
  }
  if (typeColor === "black") {
    typeColor = "var(--hty-text-color)";
  }
  return {
    color: typeColor,
    icon: typeIcon,
  };
});

/**
 * 获取默认语言
 * not used
 */
hexo.extend.helper.register("getLanguage", function() {
  const { config } = this;
  if (Array.isArray(config.language)) {
    return config.language[0];
  } else {
    return config.language;
  }
});
