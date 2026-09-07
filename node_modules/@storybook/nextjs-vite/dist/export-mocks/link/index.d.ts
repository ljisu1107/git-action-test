import { t as Mock } from "../../chunk-Crpg_HiB.js";
import React from "react";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/export-mocks/link/index.d.ts
declare const MockLink: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
declare const useLinkStatus: Mock<() => {
  pending: boolean;
}>;
//#endregion
export { MockLink as Link, MockLink as default, useLinkStatus };