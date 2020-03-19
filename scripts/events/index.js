hexo.on("generateBefore", () => {
  // Merge config.
  console.log("merge config");
  require("./config")(hexo);
});
