/**
 * 解密
 */
export function decrypt(text: string, password: string) {
  return window.CryptoJS.AES.decrypt(text, password).toString(window.CryptoJS.enc.Utf8)
}

/**
 * 解密所有相册
 */
export function decryptAll() {
  const decryptPassword = document.getElementById('decrypt-password') as HTMLInputElement
  const password = decryptPassword.value
  const decryptContainer = document.getElementById('decryptContainer')
  const lightgallery = document.getElementById('lightgallery')
  if (password) {
    const photos = document.querySelectorAll('.photo-list-item') as NodeListOf<HTMLImageElement>
    const testSrc = decrypt(photos[0].dataset.src, password)
    if (testSrc.startsWith('http') || testSrc.startsWith('/')) {
      decryptContainer.style.display = 'none'
      lightgallery.style.display = 'flex'
      photos.forEach((photo) => {
        const src = decrypt(photo.dataset.src, password)
        photo.dataset.src = src
        const img = photo.querySelector('.photo-list-cover') as HTMLImageElement
        const caption = decrypt(img.alt, password)
        const desc = decrypt(img.title, password)
        photo.dataset.subHtml = `<h4>${caption}</h4><p>${desc}</p>`
        img.src = src
        img.alt = caption
        img.title = desc
        photo.querySelector('figcaption').innerText = caption
      })
    }
    else {
      // eslint-disable-next-line no-alert
      alert('Decrypt Error!')
      window.location.reload()
    }
  }
}

/**
 * 添加解密按钮事件
 */
export function initGalleryDecrypt() {
  const decryptButton = document.getElementById('decryptButton')
  if (decryptButton) {
    decryptButton.onclick = decryptAll
    document
      .getElementById('decrypt-password')
      .addEventListener('keydown', (e) => {
        if (e.key === 'Enter')
          decryptAll()
      })
  }
}

document.addEventListener('DOMContentLoaded', initGalleryDecrypt)
document.addEventListener('pjax:success', initGalleryDecrypt)
