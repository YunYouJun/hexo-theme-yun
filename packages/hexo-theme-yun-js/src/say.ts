import { isHome } from './utils'

/**
 * 显示一句话
 */
export function say(content: string, author?: string, from?: string) {
  const sayContent = document.querySelector('#say-content') as HTMLElement
  const sayAuthor = document.querySelector('#say-author') as HTMLElement
  const sayFrom = document.querySelector('#say-from') as HTMLElement
  sayContent.innerText = content
  if (author)
    sayAuthor.innerText = author
  if (from)
    sayFrom.innerText = `「${from}」`
}

/**
 * 获取在线 API
 */
export function fetchApiToSay() {
  if (window.CONFIG.say.api) {
    fetch(window.CONFIG.say.api)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            if (window.CONFIG.say.hitokoto) {
              say(data.hitokoto, data.from_who, data.from)
            }
            else {
              const sentence = data[Math.floor(Math.random() * data.length)]
              if (sentence.content)
                say(sentence.content, sentence.author, sentence.from)

              else
                say(sentence)
            }
          })
        }
        else {
          throw new Error(
            `${window.CONFIG.say.api}, HTTP error, status = ${res.status}`,
          )
        }
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

document.addEventListener('DOMContentLoaded', fetchApiToSay)
document.addEventListener('pjax:success', () => {
  if (isHome())
    fetchApiToSay()
})
