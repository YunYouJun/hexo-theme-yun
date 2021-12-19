import path from "path";
import Components from "unplugin-vue-components/vite";
import { VitePWA } from "vite-plugin-pwa";

import { defaultConfig } from "./node_modules/vitepress-theme-you/src/config";

import type { UserConfig } from "vite";

defaultConfig.plugins = defaultConfig.plugins.concat([
  Components({
    dirs: [path.resolve(__dirname, ".vitepress/theme/components")],
    extensions: ["vue", "ts"],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: true,
  }),

  VitePWA({
    registerType: "autoUpdate",
  }),
]);

const viteConfig: UserConfig = {
  resolve: {
    alias: {
      "~/": `${(path.resolve(__dirname), ".vitepress")}/`,
    },
  },
  optimizeDeps: {
    include: ["dayjs"],
  },
};

const config = Object.assign(defaultConfig, viteConfig);

export default config;
