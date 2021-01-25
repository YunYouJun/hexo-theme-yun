const {
  injectContentBetweenTags,
  generateDemoSitesTable,
} = require("./generate-demo");
const markdown = require("./markdown");
const sites = require("../assets/sites.json");

const readmeFile = "README.md";
const content = markdown.read(readmeFile);
const demoSitesTable = generateDemoSitesTable(sites);
markdown.write(readmeFile, injectContentBetweenTags(content, demoSitesTable));
