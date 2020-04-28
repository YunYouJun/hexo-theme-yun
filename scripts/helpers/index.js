hexo.extend.helper.register("is_url", function(path) {
  return new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(
    path
  );
});
