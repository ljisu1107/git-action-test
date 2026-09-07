// src/plugins/next-image/alias/next-legacy-image.tsx
import * as _NextLegacyImageNamespace from "next/legacy/image";
import { defaultLoader } from "sb-original/default-loader";
import { ImageContext } from "sb-original/image-context";
import React from "next/dist/compiled/react";
var _rawLegacy = _NextLegacyImageNamespace.default, OriginalNextLegacyImage = typeof _rawLegacy == "object" && _rawLegacy !== null && "__esModule" in _rawLegacy ? _rawLegacy.default : _rawLegacy;
function NextLegacyImage({ loader, ...props }) {
  let imageParameters = React.useContext(ImageContext);
  return React.createElement(OriginalNextLegacyImage, { ...imageParameters, ...props, loader: loader ?? defaultLoader });
}
var next_legacy_image_default = NextLegacyImage;
export {
  next_legacy_image_default as default
};
