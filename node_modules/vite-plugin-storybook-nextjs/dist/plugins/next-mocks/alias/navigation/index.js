// src/plugins/next-mocks/alias/navigation/index.ts
import * as actual from "next/dist/client/components/navigation.js";
import { RedirectStatusCode } from "next/dist/client/components/redirect-status-code.js";
import { getRedirectError } from "next/dist/client/components/redirect.js";
import { NextjsRouterMocksNotAvailable } from "storybook/internal/preview-errors";
import { fn } from "storybook/test";
export * from "next/dist/client/components/navigation.js";
import {
  ReadonlyURLSearchParams,
  RedirectType,
  ServerInsertedHTMLContext
} from "next/dist/client/components/navigation.js";
var navigationAPI, createNavigation = (overrides) => {
  let navigationActions = {
    push: fn().mockName("next/navigation::useRouter().push"),
    replace: fn().mockName("next/navigation::useRouter().replace"),
    forward: fn().mockName("next/navigation::useRouter().forward"),
    back: fn().mockName("next/navigation::useRouter().back"),
    prefetch: fn().mockName("next/navigation::useRouter().prefetch"),
    refresh: fn().mockName("next/navigation::useRouter().refresh")
  };
  if (overrides)
    for (let key of Object.keys(navigationActions))
      key in overrides && (navigationActions[key] = fn((...args) => overrides[key](...args)).mockName(`useRouter().${key}`));
  return navigationAPI = navigationActions, navigationAPI;
}, getRouter = () => {
  if (!navigationAPI)
    throw new NextjsRouterMocksNotAvailable({
      importType: "next/navigation"
    });
  return navigationAPI;
}, forbidden2 = actual.forbidden, unauthorized2 = actual.unauthorized, unstable_isUnrecognizedActionError2 = actual.unstable_isUnrecognizedActionError, redirect = fn((url, type = "push") => {
  throw getRedirectError(url, type, RedirectStatusCode.SeeOther);
}).mockName("next/navigation::redirect"), permanentRedirect = fn(
  (url, type = "push") => {
    throw getRedirectError(url, type, RedirectStatusCode.SeeOther);
  }
).mockName("next/navigation::permanentRedirect"), useSearchParams2 = fn(actual.useSearchParams).mockName(
  "next/navigation::useSearchParams"
), usePathname2 = fn(actual.usePathname).mockName("next/navigation::usePathname"), useSelectedLayoutSegment2 = fn(actual.useSelectedLayoutSegment).mockName(
  "next/navigation::useSelectedLayoutSegment"
), useSelectedLayoutSegments2 = fn(actual.useSelectedLayoutSegments).mockName(
  "next/navigation::useSelectedLayoutSegments"
), useRouter2 = fn(actual.useRouter).mockName("next/navigation::useRouter"), useServerInsertedHTML2 = fn(actual.useServerInsertedHTML).mockName(
  "next/navigation::useServerInsertedHTML"
), notFound2 = fn(actual.notFound).mockName("next/navigation::notFound"), unstable_rethrow2 = fn(actual.unstable_rethrow).mockName(
  "next/navigation::unstable_rethrow"
), useParams2 = fn(actual.useParams).mockName("next/navigation::useParams");
export {
  ReadonlyURLSearchParams,
  RedirectType,
  ServerInsertedHTMLContext,
  createNavigation,
  forbidden2 as forbidden,
  getRouter,
  notFound2 as notFound,
  permanentRedirect,
  redirect,
  unauthorized2 as unauthorized,
  unstable_isUnrecognizedActionError2 as unstable_isUnrecognizedActionError,
  unstable_rethrow2 as unstable_rethrow,
  useParams2 as useParams,
  usePathname2 as usePathname,
  useRouter2 as useRouter,
  useSearchParams2 as useSearchParams,
  useSelectedLayoutSegment2 as useSelectedLayoutSegment,
  useSelectedLayoutSegments2 as useSelectedLayoutSegments,
  useServerInsertedHTML2 as useServerInsertedHTML
};
