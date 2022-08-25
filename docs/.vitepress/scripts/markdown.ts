import * as fs from 'fs'

/**
 * 读取指定文件
 * @param filePath
 */
export function read(filePath: string) {
  return fs.readFileSync(filePath, 'utf8')
}

export function write(filePath: string, content: string) {
  return fs.writeFileSync(filePath, content)
}
