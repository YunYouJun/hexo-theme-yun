const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = (hexo) => {
  // read _vendors.yml
  const vendorsFile = fs.readFileSync(
    path.join(__dirname, "../../_vendors.yml")
  );
  hexo.theme.config.vendors = yaml.safeLoad(vendorsFile);

  // read /data folder and merge all data
  const dataFiles = fs.readdirSync(path.join(__dirname, "../../data"));
  dataFiles.forEach((file) => {
    const fileText = fs.readFileSync(path.join(__dirname, "../../data", file));
    const fileData = yaml.safeLoad(fileText);
    hexo.theme.config = Object.assign(hexo.theme.config, fileData);
  });
};
