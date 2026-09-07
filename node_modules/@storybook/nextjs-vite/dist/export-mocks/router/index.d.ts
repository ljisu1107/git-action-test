import { Mock } from "storybook/test";
import * as originalRouter from "next/dist/client/router.js";
import singletonRouter from "next/dist/client/router.js";
export * from "next/dist/client/router.js";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/export-mocks/router/index.d.ts
declare const getRouter: () => {
  push: Mock;
  replace: Mock;
  reload: Mock;
  back: Mock;
  forward: Mock;
  prefetch: Mock;
  beforePopState: Mock;
  events: {
    on: Mock;
    off: Mock;
    emit: Mock;
  };
} & {
  route: string;
  asPath: string;
  basePath: string;
  pathname: string;
  query: {};
  isFallback: boolean;
  isLocaleDomain: boolean;
  isReady: boolean;
  isPreview: boolean;
};
declare const useRouter: Mock<typeof originalRouter.useRouter>;
declare const withRouter: Mock<typeof originalRouter.withRouter>;
//#endregion
export { singletonRouter as default, getRouter, useRouter, withRouter };