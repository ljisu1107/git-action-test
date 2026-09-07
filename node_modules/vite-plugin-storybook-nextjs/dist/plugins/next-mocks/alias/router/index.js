// src/plugins/next-mocks/alias/router/index.ts
import singletonRouter, * as originalRouter from "next/dist/client/router.js";
import { NextjsRouterMocksNotAvailable } from "storybook/internal/preview-errors";
import { fn } from "storybook/test";
export * from "next/dist/client/router";
import { Router } from "next/dist/client/router";
var defaultRouterState = {
  route: "/",
  asPath: "/",
  basePath: "/",
  pathname: "/",
  query: {},
  isFallback: !1,
  isLocaleDomain: !1,
  isReady: !0,
  isPreview: !1
}, routerAPI, createRouter = (overrides) => {
  let routerActions = {
    push: fn((..._args) => Promise.resolve(!0)).mockName("next/router::useRouter().push"),
    replace: fn((..._args) => Promise.resolve(!0)).mockName("next/router::useRouter().replace"),
    reload: fn((..._args) => {
    }).mockName("next/router::useRouter().reload"),
    back: fn((..._args) => {
    }).mockName("next/router::useRouter().back"),
    forward: fn(() => {
    }).mockName("next/router::useRouter().forward"),
    prefetch: fn((..._args) => Promise.resolve()).mockName("next/router::useRouter().prefetch"),
    beforePopState: fn((..._args) => {
    }).mockName(
      "next/router::useRouter().beforePopState"
    )
  }, routerEvents = {
    on: fn((..._args) => {
    }).mockName("next/router::useRouter().events.on"),
    off: fn((..._args) => {
    }).mockName("next/router::useRouter().events.off"),
    emit: fn((..._args) => {
    }).mockName("next/router::useRouter().events.emit")
  };
  if (overrides)
    for (let key of Object.keys(routerActions))
      key in overrides && (routerActions[key] = fn((...args) => overrides[key](...args)).mockName(`useRouter().${key}`));
  if (overrides?.events)
    for (let key of Object.keys(routerEvents))
      key in routerEvents && (routerEvents[key] = fn((...args) => overrides.events[key](...args)).mockName(`useRouter().events.${key}`));
  routerAPI = {
    ...defaultRouterState,
    ...overrides,
    ...routerActions,
    // @ts-expect-error TODO improve typings
    events: routerEvents
  }, singletonRouter.router = routerAPI;
  for (let cb of singletonRouter.readyCallbacks)
    cb();
  return singletonRouter.readyCallbacks = [], routerAPI;
}, getRouter = () => {
  if (!routerAPI)
    throw new NextjsRouterMocksNotAvailable({
      importType: "next/router"
    });
  return routerAPI;
}, router_default = singletonRouter, useRouter2 = fn(originalRouter.useRouter).mockName(
  "next/router::useRouter"
), withRouter2 = fn(originalRouter.withRouter).mockName("next/router::withRouter");
export {
  Router,
  createRouter,
  router_default as default,
  getRouter,
  useRouter2 as useRouter,
  withRouter2 as withRouter
};
