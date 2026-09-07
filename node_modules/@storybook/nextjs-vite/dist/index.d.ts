import { i as StorybookConfig, n as NextJsParameters, r as NextJsTypes, t as FrameworkOptions } from "./chunk-JU3BstJb.js";
import { AddonTypes, InferTypes, PreviewAddon } from "storybook/internal/csf";
import { Args, ComposedStoryFn, NamedOrDefaultProjectAnnotations, NormalizedProjectAnnotations, ProjectAnnotations, Store_CSFExports, StoriesWithPartialProps, StoryAnnotationsOrFn } from "storybook/internal/types";
import { Meta, ReactPreview, ReactRenderer, ReactTypes } from "@storybook/react";
export * from "@storybook/react";

//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/portable-stories.d.ts
/**
 * Function that sets the globalConfig of your storybook. The global config is the preview module of
 * your .storybook folder.
 *
 * It should be run a single time, so that your global config (e.g. decorators) is applied to your
 * stories when using `composeStories` or `composeStory`.
 *
 * Example:
 *
 * ```jsx
 * // setup-file.js
 * import { setProjectAnnotations } from '@storybook/nextjs-vite';
 * import projectAnnotations from './.storybook/preview';
 *
 * setProjectAnnotations(projectAnnotations);
 * ```
 *
 * @param projectAnnotations - E.g. (import projectAnnotations from '../.storybook/preview')
 */
declare function setProjectAnnotations(projectAnnotations: NamedOrDefaultProjectAnnotations<any> | NamedOrDefaultProjectAnnotations<any>[]): NormalizedProjectAnnotations<ReactRenderer>;
/**
 * Function that will receive a story along with meta (e.g. a default export from a .stories file)
 * and optionally projectAnnotations e.g. (import * from '../.storybook/preview) and will return a
 * composed component that has all args/parameters/decorators/etc combined and applied to it.
 *
 * It's very useful for reusing a story in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *
 * ```jsx
 * import { render } from '@testing-library/react';
 * import { composeStory } from '@storybook/nextjs-vite';
 * import Meta, { Primary as PrimaryStory } from './Button.stories';
 *
 * const Primary = composeStory(PrimaryStory, Meta);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 * ```
 *
 * @param story
 * @param componentAnnotations - E.g. (import Meta from './Button.stories')
 * @param [projectAnnotations] - E.g. (import * as projectAnnotations from '../.storybook/preview')
 *   this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 * @param [exportsName] - In case your story does not contain a name and you want it to have a name.
 */
declare function composeStory<TArgs extends Args = Args>(story: StoryAnnotationsOrFn<ReactRenderer, TArgs>, componentAnnotations: Meta<TArgs | any>, projectAnnotations?: ProjectAnnotations<ReactRenderer>, exportsName?: string): ComposedStoryFn<ReactRenderer, Partial<TArgs>>;
/**
 * Function that will receive a stories import (e.g. `import * as stories from './Button.stories'`)
 * and optionally projectAnnotations (e.g. `import * from '../.storybook/preview`) and will return
 * an object containing all the stories passed, but now as a composed component that has all
 * args/parameters/decorators/etc combined and applied to it.
 *
 * It's very useful for reusing stories in scenarios outside of Storybook like unit testing.
 *
 * Example:
 *
 * ```jsx
 * import { render } from '@testing-library/react';
 * import { composeStories } from '@storybook/nextjs-vite';
 * import * as stories from './Button.stories';
 *
 * const { Primary, Secondary } = composeStories(stories);
 *
 * test('renders primary button with Hello World', () => {
 *   const { getByText } = render(<Primary>Hello world</Primary>);
 *   expect(getByText(/Hello world/i)).not.toBeNull();
 * });
 * ```
 *
 * @param csfExports - E.g. (import * as stories from './Button.stories')
 * @param [projectAnnotations] - E.g. (import * as projectAnnotations from '../.storybook/preview')
 *   this can be applied automatically if you use `setProjectAnnotations` in your setup files.
 */
declare function composeStories<TModule extends Store_CSFExports<ReactRenderer, any>>(csfExports: TModule, projectAnnotations?: ProjectAnnotations<ReactRenderer>): Omit<StoriesWithPartialProps<ReactRenderer, TModule>, keyof Store_CSFExports>;
//#endregion
//#region code/frameworks/nextjs-vite/.dts-emit/code/frameworks/nextjs-vite/src/index.d.ts
declare function definePreview<Addons extends PreviewAddon<never>[]>(preview: {
  addons?: Addons;
} & ProjectAnnotations<ReactTypes & NextJsTypes & InferTypes<Addons>>): NextPreview<InferTypes<Addons>>;
interface NextPreview<T extends AddonTypes> extends ReactPreview<NextJsTypes & T> {}
//#endregion
export { FrameworkOptions, NextJsParameters, NextJsTypes, NextPreview, StorybookConfig, composeStories, composeStory, definePreview, setProjectAnnotations };