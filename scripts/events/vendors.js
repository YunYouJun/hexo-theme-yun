const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const vendorsFile = fs.readFileSync(path.join(__dirname, '../../_vendors.yml'));
const vendors = yaml.safeLoad(vendorsFile);

module.exports = (hexo) => {
  hexo.theme.config.vendors = vendors;
}
