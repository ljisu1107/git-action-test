// src/plugins/next-mocks/alias/headers/index.ts
import { draftMode as originalDraftMode } from "next/dist/server/request/draft-mode";
import * as headersModule from "next/dist/server/request/headers";
import { fn as fn3 } from "storybook/test";

// src/plugins/next-mocks/alias/headers/headers.ts
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers.js";
import { fn } from "storybook/test";
var HeadersAdapterMock = class extends HeadersAdapter {
  constructor() {
    super({});
    this.append = fn(super.append.bind(this)).mockName("next/headers::headers().append");
    this.delete = fn(super.delete.bind(this)).mockName("next/headers::headers().delete");
    this.get = fn(super.get.bind(this)).mockName("next/headers::headers().get");
    this.has = fn(super.has.bind(this)).mockName("next/headers::headers().has");
    this.set = fn(super.set.bind(this)).mockName("next/headers::headers().set");
    this.forEach = fn(super.forEach.bind(this)).mockName("next/headers::headers().forEach");
    this.entries = fn(super.entries.bind(this)).mockName("next/headers::headers().entries");
    this.keys = fn(super.keys.bind(this)).mockName("next/headers::headers().keys");
    this.values = fn(super.values.bind(this)).mockName("next/headers::headers().values");
  }
}, headersAdapterMock, headers = () => (headersAdapterMock || (headersAdapterMock = new HeadersAdapterMock()), headersAdapterMock);
headers.mockRestore = () => {
  headersAdapterMock = new HeadersAdapterMock();
};

// src/plugins/next-mocks/alias/headers/cookies.ts
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies/index.js";
import { fn as fn2 } from "storybook/test";
var RequestCookiesMock = class extends RequestCookies {
  constructor() {
    super(...arguments);
    this.get = fn2(super.get.bind(this)).mockName("next/headers::cookies().get");
    this.getAll = fn2(super.getAll.bind(this)).mockName("next/headers::cookies().getAll");
    this.has = fn2(super.has.bind(this)).mockName("next/headers::cookies().has");
    this.set = fn2(super.set.bind(this)).mockName("next/headers::cookies().set");
    this.delete = fn2(super.delete.bind(this)).mockName("next/headers::cookies().delete");
  }
}, requestCookiesMock, cookies = fn2(() => (requestCookiesMock || (requestCookiesMock = new RequestCookiesMock(headers())), requestCookiesMock)).mockName("next/headers::cookies()"), originalRestore = cookies.mockRestore.bind(null);
cookies.mockRestore = () => {
  originalRestore(), headers.mockRestore(), requestCookiesMock = new RequestCookiesMock(headers());
};

// src/plugins/next-mocks/alias/headers/index.ts
var draftMode2 = fn3(
  // draftMode lived on the headers module in older Next versions
  originalDraftMode ?? headersModule.draftMode
).mockName("draftMode");
export {
  cookies,
  draftMode2 as draftMode,
  headers
};
