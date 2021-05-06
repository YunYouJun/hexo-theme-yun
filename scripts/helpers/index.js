/* global hexo */

/**
 * 是否为 url 链接
 * @param {string} path
 * @returns
 */
function isUrl(path) {
  return new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(
    path
  );
}

hexo.extend.helper.register("is_url", isUrl);

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

/**
 * 根据文章类型获取对应颜色及图标
 * @param {string} type
 * @returns
 */
function getPropertyByType(type = "link") {
  const { theme } = this;
  if (type in theme.types === false) {
    type = "link";
  }
  let typeColor = theme.types[type].color;
  let typeIcon = theme.types[type].icon;
  // 适配暗色主题
  if (typeColor === "black") {
    typeColor = "var(--hty-text-color)";
  }
  return {
    color: typeColor,
    icon: typeIcon,
  };
}

hexo.extend.helper.register("getPropertyByType", getPropertyByType);

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
