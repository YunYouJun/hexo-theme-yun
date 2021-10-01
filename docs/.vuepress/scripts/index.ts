import {
  injectContentBetweenTags,
  generateDemoSitesTable,
} from "./generate-demo";
import * as markdown from "./markdown";
import * as sites from "../assets/sites.json";

const readmeFile = "README.md";
const content = markdown.read(readmeFile);
const demoSitesTable = generateDemoSitesTable(sites, 40);
markdown.write(readmeFile, injectContentBetweenTags(content, demoSitesTable));
