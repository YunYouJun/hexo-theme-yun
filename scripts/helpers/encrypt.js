hexo.extend.helper.register("aes", function(content, password) {
  const CryptoJS = require("crypto-js");
  return CryptoJS.AES.encrypt(content, password).toString();
});
