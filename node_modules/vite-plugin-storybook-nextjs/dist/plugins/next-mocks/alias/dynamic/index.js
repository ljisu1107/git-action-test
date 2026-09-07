// src/plugins/next-mocks/alias/dynamic/index.tsx
import Loadable from "next/dist/shared/lib/loadable.shared-runtime.js";
import React from "react";
function convertModule(mod) {
  return { default: mod?.default || mod };
}
function noSSR() {
  throw new Error("noSSR is not implemented in Storybook");
}
function dynamic(dynamicOptions, options) {
  let loadableFn = Loadable?.default ?? Loadable, loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({ error, isLoading, pastDelay }) => {
      if (!pastDelay) return null;
      if (process.env.NODE_ENV !== "production") {
        if (isLoading)
          return null;
        if (error)
          return React.createElement("p", null, error.message, React.createElement("br", null), error.stack);
      }
      return null;
    }
  };
  dynamicOptions instanceof Promise ? loadableOptions.loader = () => dynamicOptions : typeof dynamicOptions == "function" ? loadableOptions.loader = dynamicOptions : typeof dynamicOptions == "object" && (loadableOptions = { ...loadableOptions, ...dynamicOptions }), loadableOptions = { ...loadableOptions, ...options };
  let loaderFn = loadableOptions.loader, loader = () => loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(() => null));
  return loadableOptions.loadableGenerated && (loadableOptions = {
    ...loadableOptions,
    ...loadableOptions.loadableGenerated
  }, delete loadableOptions.loadableGenerated), typeof loadableOptions.ssr == "boolean" && !loadableOptions.ssr && (delete loadableOptions.ssr, delete loadableOptions.webpack, delete loadableOptions.modules), loadableFn({ ...loadableOptions, loader });
}
export {
  dynamic as default,
  noSSR
};
