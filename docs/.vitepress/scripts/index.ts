import * as sites from '../assets/sites.json'
import {
  generateDemoSitesTable,
  injectContentBetweenTags,
} from './generate-demo'
import * as markdown from './markdown'

const readmeFile = 'README.md'
const content = markdown.read(readmeFile)
const demoSitesTable = generateDemoSitesTable(sites, 40)
markdown.write(readmeFile, injectContentBetweenTags(content, demoSitesTable))
