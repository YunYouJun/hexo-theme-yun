import { Theme } from "vitepress";
import "vitepress-theme-you/css";
import YouTheme from "vitepress-theme-you";

import "uno.css";

const theme: Theme = {
  ...YouTheme,
  enhanceApp: ({ app }) => {
    if (typeof window !== "undefined") {
      import("./modules/pwa");
    }
  },
};

export default theme;
