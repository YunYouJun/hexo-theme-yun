const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = (hexo) => {
  // read _vendors.yml
  const vendorsFile = fs.readFileSync(
    path.join(__dirname, "../../_vendors.yml"),
    "utf-8"
  );
  hexo.theme.config.vendors = yaml.load(vendorsFile);

  // read /data folder and merge all data
  const dataFiles = fs.readdirSync(path.join(__dirname, "../../data"));
  dataFiles.forEach((file) => {
    const fileText = fs.readFileSync(
      path.join(__dirname, "../../data", file),
      "utf-8"
    );
    const fileData = yaml.load(fileText);
    hexo.theme.config = Object.assign(hexo.theme.config, fileData);
  });

  // set default config
  const aboutSite = path.resolve(process.cwd(), "source/about/site.md");
  hexo.theme.config.hasAboutSite = fs.existsSync(aboutSite);
};
