const CryptoJS = require("crypto-js");

hexo.extend.helper.register("aes", function(content, password) {
  return CryptoJS.AES.encrypt(content, password).toString();
});
