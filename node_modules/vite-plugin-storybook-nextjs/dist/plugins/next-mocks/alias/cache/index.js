// src/plugins/next-mocks/alias/cache/index.ts
import { fn } from "storybook/test";
var revalidatePath = fn().mockName("next/cache::revalidatePath"), revalidateTag = fn().mockName("next/cache::revalidateTag"), updateTag = fn().mockName("next/cache::updateTag"), unstable_cache = fn().mockName("next/cache::unstable_cache").mockImplementation((cb) => cb), unstable_noStore = fn().mockName("next/cache::unstable_noStore"), refresh = fn().mockName("next/cache::refresh"), cacheLife = fn().mockName("next/cache::cacheLife"), cacheTag = fn().mockName("next/cache::cacheTag"), unstable_cacheLife = cacheLife, unstable_cacheTag = cacheTag, cacheExports = {
  unstable_cache,
  revalidateTag,
  revalidatePath,
  updateTag,
  refresh,
  unstable_noStore,
  cacheLife,
  cacheTag,
  unstable_cacheLife,
  unstable_cacheTag
}, cache_default = cacheExports;
export {
  cacheLife,
  cacheTag,
  cache_default as default,
  refresh,
  revalidatePath,
  revalidateTag,
  unstable_cache,
  unstable_cacheLife,
  unstable_cacheTag,
  unstable_noStore,
  updateTag
};
