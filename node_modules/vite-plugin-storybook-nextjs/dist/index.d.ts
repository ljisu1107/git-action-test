import { PluginOption } from "vite";
import { FilterPattern } from "@rollup/pluginutils";

//#region code/lib/vite-plugin-storybook-nextjs/.dts-emit/code/lib/vite-plugin-storybook-nextjs/src/plugins/next-image/plugin.d.ts
type NextImagePluginOptions = {
  includeFiles?: FilterPattern;
  excludeFiles?: FilterPattern;
};
//#endregion
//#region code/lib/vite-plugin-storybook-nextjs/.dts-emit/code/lib/vite-plugin-storybook-nextjs/src/index.d.ts
type PluginOptions = {
  /**
   * Provide the path to your Next.js project directory
   * @default process.cwd()
   */
  dir?: string;
  /**
   * Control which image files are handled by the next-image plugin.
   * @see https://github.com/storybookjs/storybook/blob/next/code/lib/vite-plugin-storybook-nextjs/README.md#faq-includingexcluding-images
   */
  image?: NextImagePluginOptions;
};
declare function VitePlugin({
  dir,
  image
}?: PluginOptions): PluginOption[];
//#endregion
export { PluginOptions, VitePlugin as default };