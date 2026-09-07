// src/plugins/next-image/alias/next-image.tsx
import * as NextImageNamespace from "next/image";
import { defaultLoader } from "sb-original/default-loader";
import { ImageContext } from "sb-original/image-context";
import React from "next/dist/compiled/react";
var _raw = NextImageNamespace.default, OriginalNextImage = typeof _raw == "object" && _raw !== null && "__esModule" in _raw ? _raw.default : _raw, originalGetImageProps = NextImageNamespace.getImageProps ?? (typeof _raw == "object" && _raw !== null && "getImageProps" in _raw ? _raw.getImageProps : void 0), MockedNextImage = React.forwardRef(
  ({ loader, ...props }, ref) => {
    let imageParameters = React.useContext(ImageContext);
    return React.createElement(
      OriginalNextImage,
      {
        ref,
        ...imageParameters,
        ...props,
        loader: loader ?? defaultLoader
      }
    );
  }
);
MockedNextImage.displayName = "NextImage";
var getImageProps2 = (props) => originalGetImageProps?.({ loader: defaultLoader, ...props }), next_image_default = MockedNextImage;
export {
  next_image_default as default,
  getImageProps2 as getImageProps
};
