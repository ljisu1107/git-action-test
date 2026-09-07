import "../../_browser-chunks/chunk-UAWMPV5J.js";

// src/export-mocks/link/index.tsx
import React from "react";
import { fn } from "storybook/test";
var linkAction = fn().mockName("next/link::Link"), removeTrailingSlash = (route) => route.endsWith("/") && route.length > 1 ? route.slice(0, -1) : route, parsePath = (path) => {
  let hashIndex = path.indexOf("#"), queryIndex = path.indexOf("?"), hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
  return hasQuery || hashIndex > -1 ? {
    pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
    query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
    hash: hashIndex > -1 ? path.slice(hashIndex) : ""
  } : { pathname: path, query: "", hash: "" };
}, normalizePathTrailingSlash = (path) => {
  if (!path.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
    return path;
  let { pathname, query, hash } = parsePath(path);
  return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(pathname) ? `${removeTrailingSlash(pathname)}${query}${hash}` : `${pathname.endsWith("/") ? pathname : `${pathname}/`}${query}${hash}` : `${removeTrailingSlash(pathname)}${query}${hash}`;
}, MockLink = React.forwardRef(function({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  passHref,
  legacyBehavior,
  locale,
  onClick,
  children,
  ...rest
}, ref) {
  let resolvedHref = as ?? href, rawHref = typeof resolvedHref == "object" ? `${resolvedHref.pathname || ""}${resolvedHref.query ? "?" + new URLSearchParams(resolvedHref.query).toString() : ""}${resolvedHref.hash || ""}` : resolvedHref, hrefString = typeof rawHref == "string" ? normalizePathTrailingSlash(rawHref) : rawHref, navigate = (e) => {
    e.defaultPrevented || (e.preventDefault(), linkAction(hrefString, { replace, scroll, shallow, prefetch, locale }));
  }, handleClick = (e) => {
    onClick?.(e), navigate(e);
  };
  if (legacyBehavior) {
    let child = React.Children.only(children), childProps = {
      ref,
      onClick: (e) => {
        child.props && typeof child.props.onClick == "function" && child.props.onClick(e), navigate(e);
      },
      ...rest
    };
    return (passHref || child.type === "a" && !("href" in (child.props || {}))) && (childProps.href = hrefString), React.cloneElement(child, childProps);
  }
  return React.createElement("a", { ref, href: hrefString, onClick: handleClick, ...rest }, children);
});
MockLink.displayName = "NextLink";
var link_default = MockLink;
var useLinkStatus = fn(() => ({ pending: !1 })).mockName(
  "next/link::useLinkStatus"
);
export {
  MockLink as Link,
  link_default as default,
  useLinkStatus
};
