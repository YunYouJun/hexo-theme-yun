/* global hexo */

/**
 * AES 加密
 * @param {string} content
 * @param {string} password
 * @returns
 */
function encrypt(content, password) {
  const CryptoJS = require("crypto-js");
  return CryptoJS.AES.encrypt(content, password).toString();
}

hexo.extend.helper.register("aes", encrypt);
