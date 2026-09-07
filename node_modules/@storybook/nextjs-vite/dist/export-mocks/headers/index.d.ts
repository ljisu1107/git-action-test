import { t as Mock } from "../../chunk-Crpg_HiB.js";
import { draftMode as draftMode$1 } from "next/dist/server/request/draft-mode.js";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers.js";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies/index.js";
export * from "next/dist/server/request/headers.js";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/export-mocks/headers/headers.d.ts
declare class HeadersAdapterMock extends HeadersAdapter {
  constructor();
  append: Mock<(name: string, value: string) => void>;
  delete: Mock<(name: string) => void>;
  get: Mock<(name: string) => string | null>;
  has: Mock<(name: string) => boolean>;
  set: Mock<(name: string, value: string) => void>;
  forEach: Mock<(callbackfn: (value: string, name: string, parent: Headers) => void, thisArg?: any) => void>;
  entries: Mock<() => HeadersIterator<[string, string]>>;
  keys: Mock<() => HeadersIterator<string>>;
  values: Mock<() => HeadersIterator<string>>;
}
declare function headers(): HeadersAdapterMock;
declare namespace headers {
  var mockRestore: () => void;
}
//#endregion
//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/export-mocks/headers/cookies.d.ts
declare class RequestCookiesMock extends RequestCookies {
  get: Mock<(...args: [name: string] | [import("next/dist/compiled/@edge-runtime/cookies/index.js").RequestCookie]) => import("next/dist/compiled/@edge-runtime/cookies/index.js").RequestCookie | undefined>;
  getAll: Mock<(...args: [name: string] | [import("next/dist/compiled/@edge-runtime/cookies/index.js").RequestCookie] | []) => import("next/dist/compiled/@edge-runtime/cookies/index.js").RequestCookie[]>;
  has: Mock<(name: string) => boolean>;
  set: Mock<(...args: [key: string, value: string] | [options: import("next/dist/compiled/@edge-runtime/cookies/index.js").RequestCookie]) => this>;
  delete: Mock<(names: string | string[]) => boolean | boolean[]>;
}
declare const cookies: Mock<() => RequestCookiesMock>;
//#endregion
//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/export-mocks/headers/index.d.ts
declare const draftMode: Mock<typeof draftMode$1>;
//#endregion
export { cookies, draftMode, headers };