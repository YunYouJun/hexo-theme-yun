/**
 * 解密
 * @param {string} text
 * @param {string} password
 * @returns
 */
function decrypt(text, password) {
  return CryptoJS.AES.decrypt(text, password).toString(CryptoJS.enc.Utf8);
}

/**
 * 解密所有相册
 */
function decryptAll() {
  const password = document.getElementById("decrypt-password").value;
  if (password) {
    const photos = document.querySelectorAll(".photo-list-item");
    const testSrc = decrypt(photos[0].dataset.src, password);
    if (testSrc.startsWith("http") || testSrc.startsWith("/")) {
      decryptContainer.style.display = "none";
      lightgallery.style.display = "flex";
      photos.forEach((photo) => {
        const src = decrypt(photo.dataset.src, password);
        photo.dataset.src = src;
        const img = photo.querySelector(".photo-list-cover");
        const caption = decrypt(img.alt, password);
        const desc = decrypt(img.title, password);
        photo.dataset.subHtml = `<h4>${caption}</h4><p>${desc}</p>`;
        img.src = src;
        img.alt = caption;
        img.title = desc;
        photo.querySelector("figcaption").innerText = caption;
      });
    } else {
      alert("Decrypt Error!");
      window.location.reload();
    }
  }
}

/**
 * 添加解密按钮事件
 */
function initGalleryDecrypt() {
  if (decryptButton) {
    decryptButton.onclick = decryptAll;
    document
      .getElementById("decrypt-password")
      .addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          decryptAll();
        }
      });
  }
}

document.addEventListener("DOMContentLoaded", initGalleryDecrypt);
document.addEventListener("pjax:success", initGalleryDecrypt);
