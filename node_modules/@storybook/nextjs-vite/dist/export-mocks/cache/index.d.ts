import { t as Mock } from "../../chunk-Crpg_HiB.js";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/export-mocks/cache/index.d.ts
declare const revalidatePath: Mock<(...args: any[]) => any>;
declare const revalidateTag: Mock<(...args: any[]) => any>;
declare const updateTag: Mock<(...args: any[]) => any>;
declare const unstable_cache: Mock<(...args: any[]) => any>;
declare const unstable_noStore: Mock<(...args: any[]) => any>;
declare const refresh: Mock<(...args: any[]) => any>;
declare const cacheLife: Mock<(...args: any[]) => any>;
declare const cacheTag: Mock<(...args: any[]) => any>;
declare const unstable_cacheLife: Mock<(...args: any[]) => any>;
declare const unstable_cacheTag: Mock<(...args: any[]) => any>;
declare const cacheExports: {
  unstable_cache: Mock<(...args: any[]) => any>;
  revalidateTag: Mock<(...args: any[]) => any>;
  revalidatePath: Mock<(...args: any[]) => any>;
  updateTag: Mock<(...args: any[]) => any>;
  refresh: Mock<(...args: any[]) => any>;
  unstable_noStore: Mock<(...args: any[]) => any>;
  cacheLife: Mock<(...args: any[]) => any>;
  cacheTag: Mock<(...args: any[]) => any>;
  unstable_cacheLife: Mock<(...args: any[]) => any>;
  unstable_cacheTag: Mock<(...args: any[]) => any>;
};
//#endregion
export { cacheLife, cacheTag, cacheExports as default, refresh, revalidatePath, revalidateTag, unstable_cache, unstable_cacheLife, unstable_cacheTag, unstable_noStore, updateTag };