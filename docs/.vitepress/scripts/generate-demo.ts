/**
 * 站点数据
 */
interface SiteData {
  name: string
  url: string
  avatar: string
  desc: string
}

/**
 * 在标签间插入内容
 * @param content 原内容
 * @param injectedContent 被插入的内容
 */
export function injectContentBetweenTags(
  content: string,
  injectedContent: string,
) {
  const namespace = 'demo-sites'
  const startTag = `<!-- ${namespace}:start -->`
  const endTag = `<!-- ${namespace}:end -->`

  const startIndex = content.indexOf(startTag)
  const endIndex = content.indexOf(endTag, startIndex)

  if (startIndex === -1 || endIndex === -1)
    return ''

  return [
    content.slice(0, startIndex + startTag.length),
    '\n<!-- prettier-ignore-start -->',
    '\n<!-- markdownlint-disable -->\n',
    injectedContent,
    '\n<!-- markdownlint-restore -->',
    '\n<!-- prettier-ignore-end -->\n',
    content.slice(endIndex),
  ].join('')
}

/**
 * 生成 Demo Site 模版
 * @param site
 */
export function generateDemoSite(site: SiteData) {
  if (!site) {
    site = {
      avatar: 'https://yun.yunyoujun.cn/favicon.svg',
      url: 'https://yun.yunyoujun.cn/demo/',
      name: '虚位以待',
      desc: '',
    }
  }
  return `<a href="${site.url}" target="_blank">
        <img width="80px" src="${site.avatar}" />
        <br />
        <sub title="${site.desc}">${site.name}</sub>
      </a>`
}

/**
 * 生成 Demo Sites 表格
 * @param sites
 * @param maxLength 最大长度
 */
export function generateDemoSitesTable(sites: SiteData[], maxLength = 40) {
  const length = maxLength < sites.length ? maxLength : sites.length

  let tableContent = ''
  const numOfRow = 8
  const totalRows = Math.ceil(length / numOfRow)
  for (let row = 0; row < totalRows; row++) {
    tableContent += '\n  <tr align="center">\n'
    for (let col = 0; col < numOfRow; col++) {
      const site = sites[row * numOfRow + col]
      tableContent += `    <td>
      ${generateDemoSite(site)}
    </td>\n`
    }
    tableContent += '  </tr>'
  }
  return `<table align="center">${tableContent}\n</table>`
}
