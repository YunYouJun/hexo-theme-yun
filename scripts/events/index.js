hexo.on("generateBefore", () => {
  // Merge config.
  require("./config")(hexo);
});
