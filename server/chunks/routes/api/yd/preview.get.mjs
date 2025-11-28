import { d as defineEventHandler, u as useRuntimeConfig, g as getQuery, c as createError, s as setResponseStatus, a as setHeader } from '../../../nitro/nitro.mjs';
import axios from 'axios';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:module';
import 'ipx';

const preview_get = defineEventHandler(async (event) => {
  var _a;
  const { YA_TOKEN } = useRuntimeConfig();
  const q = getQuery(event);
  const path = typeof q.path === "string" ? q.path : "";
  const size = typeof q.size === "string" ? q.size : "M";
  if (!path) {
    throw createError({ statusCode: 400, statusMessage: "Missing ?path=" });
  }
  const res = await axios.get(
    "https://cloud-api.yandex.net/v1/disk/resources",
    {
      params: { path, fields: "preview" },
      headers: { Authorization: `OAuth ${YA_TOKEN}` }
    }
  );
  console.log(res);
  let url = (_a = res.data) == null ? void 0 : _a.preview;
  if (url) {
    const u = new URL(url);
    u.searchParams.set("size", size);
    url = u.toString();
  }
  if (!url) {
    throw createError({
      statusCode: 404,
      statusMessage: "Preview not available"
    });
  }
  setResponseStatus(event, 302);
  setHeader(event, "Location", url);
  return "";
});

export { preview_get as default };
//# sourceMappingURL=preview.get.mjs.map
