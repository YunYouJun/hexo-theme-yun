const fs = require("fs");

/**
 * 读取指定文件
 * @param {string} filePath
 */
function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function write(filePath, content) {
  return fs.writeFileSync(filePath, content);
}

module.exports = {
  read,
  write,
};
