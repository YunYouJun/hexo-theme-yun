import type { Theme } from "vitepress";
import { VPTheme } from "vitepress-theme-you";

import "uno.css";

const theme: Theme = Object.assign({}, VPTheme, {
  enhanceApp: ({ app }) => {
    // if (typeof window !== "undefined") {
    //   import("./modules/pwa");
    // }
  },
});

export default theme;
