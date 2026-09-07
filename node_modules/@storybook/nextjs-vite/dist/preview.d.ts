import { Addon_DecoratorFunction, LoaderFunction } from "storybook/internal/types";
import { ReactRenderer } from "@storybook/react";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/preview.d.ts
declare const decorators: Addon_DecoratorFunction<ReactRenderer>[];
declare const loaders: LoaderFunction<ReactRenderer>;
declare const parameters: {
  docs: {
    source: {
      excludeDecorators: boolean;
    };
  };
  react: {
    rootOptions: {
      onCaughtError(error: unknown): void;
    };
  };
};
//#endregion
export { decorators, loaders, parameters };