import * as actual from "next/dist/client/components/navigation.js";
import { Mock } from "storybook/test";
export * from "next/dist/client/components/navigation.js";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/export-mocks/navigation/index.d.ts
declare const getRouter: () => {
  push: Mock;
  replace: Mock;
  forward: Mock;
  back: Mock;
  prefetch: Mock;
  refresh: Mock;
};
declare const redirect: Mock<(url: string, type?: actual.RedirectType) => never>;
declare const permanentRedirect: Mock<(url: string, type?: actual.RedirectType) => never>;
declare const useSearchParams: Mock<typeof actual.useSearchParams>;
declare const usePathname: Mock<typeof actual.usePathname>;
declare const useSelectedLayoutSegment: Mock<typeof actual.useSelectedLayoutSegment>;
declare const useSelectedLayoutSegments: Mock<typeof actual.useSelectedLayoutSegments>;
declare const useRouter: Mock<typeof actual.useRouter>;
declare const useServerInsertedHTML: Mock<typeof actual.useServerInsertedHTML>;
declare const notFound: Mock<typeof actual.notFound>;
interface Params {
  [key: string]: string | string[];
}
declare const useParams: Mock<() => Params>;
//#endregion
export { getRouter, notFound, permanentRedirect, redirect, useParams, usePathname, useRouter, useSearchParams, useSelectedLayoutSegment, useSelectedLayoutSegments, useServerInsertedHTML };