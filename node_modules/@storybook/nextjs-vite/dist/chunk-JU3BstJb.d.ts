import { CompatibleString } from "storybook/internal/types";
import { BuilderOptions } from "@storybook/builder-vite";
import { StorybookConfig } from "@storybook/react-vite";
import { NextRouter } from "next/router";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/types.d.ts
type FrameworkName = CompatibleString<'@storybook/nextjs-vite'>;
type BuilderName = CompatibleString<'@storybook/builder-vite'>;
type FrameworkOptions = {
  /** The path to the Next.js configuration file. */nextConfigPath?: string;
  image?: {
    includeFiles?: string[];
    excludeFiles?: string[];
  };
  builder?: BuilderOptions;
};
type StorybookConfigFramework = {
  framework: FrameworkName | {
    name: FrameworkName;
    options: FrameworkOptions;
  };
  core?: StorybookConfig['core'] & {
    builder?: BuilderName | {
      name: BuilderName;
      options: BuilderOptions;
    };
  };
};
/** The interface for Storybook configuration in `main.ts` files. */
type StorybookConfig$1 = Omit<StorybookConfig, keyof StorybookConfigFramework> & StorybookConfigFramework;
interface NextJsParameters {
  /**
   * Next.js framework configuration
   *
   * @see https://storybook.js.org/docs/get-started/frameworks/nextjs-vite
   */
  nextjs?: {
    /**
     * Enable App Directory features If your story imports components that use next/navigation, you
     * need to set this parameter to true
     */
    appDirectory?: boolean;
    /**
     * Next.js navigation configuration when using `next/navigation`. Please note that it can only
     * be used in components/pages in the app directory.
     */
    navigation?: Partial<NextRouter>; /** Next.js router configuration */
    router?: Partial<NextRouter>;
  };
}
interface NextJsTypes {
  parameters: NextJsParameters;
}
//#endregion
export { StorybookConfig$1 as i, NextJsParameters as n, NextJsTypes as r, FrameworkOptions as t };