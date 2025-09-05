import { d as defineEventHandler, g as getQuery, c as createError } from '../../nitro/nitro.mjs';
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

const proxyImage = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const sizeUrl = query.sizeUrl;
  const response = await fetch(sizeUrl, {
    headers: {
      Authorization: `OAuth ${process.env.YA_TOKEN}`
      // Ваш токен
    }
  });
  console.log(process.env.YA_TOKEN);
  if (!response.ok) {
    throw createError({
      statusCode: response.status,
      message: "Failed to fetch preview"
    });
  }
  const arrayBuffer = await response.arrayBuffer();
  return new Response(arrayBuffer, {
    headers: { "Content-Type": "image/png" }
  });
});

export { proxyImage as default };
//# sourceMappingURL=proxy-image.mjs.map
