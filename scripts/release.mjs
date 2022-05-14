import { execSync } from 'child_process'
import { $, fs } from 'zx'

const yunPkg = 'packages/hexo-theme-yun/package.json'
execSync(`npx bumpp ${yunPkg}`, { stdio: 'inherit' })

const { version } = await fs.readJSON(yunPkg)

await $`git add .`
await $`git commit -m "chore: release v${version}"`
await $`git tag v${version}`
await $`git push`
await $`git push origin --tags`
