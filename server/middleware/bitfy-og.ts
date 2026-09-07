const OG_IMAGE = "https://www.bitfy.com.ar/og.jpg?v=wordmark";

const OG_TAGS = [
  `<meta property="og:title" content="Bitfy">`,
  `<meta property="og:description" content="Tu presencia digital, sin vueltas.">`,
  `<meta property="og:url" content="https://www.bitfy.com.ar/">`,
  `<meta property="og:image" content="${OG_IMAGE}">`,
  `<meta property="og:image:secure_url" content="${OG_IMAGE}">`,
  `<meta property="og:image:width" content="1200">`,
  `<meta property="og:image:height" content="630">`,
  `<meta property="og:image:type" content="image/jpeg">`,
  `<meta property="og:image:alt" content="Bitfy">`,
  `<meta name="twitter:card" content="summary_large_image">`,
  `<meta name="twitter:image" content="${OG_IMAGE}">`,
].join("");

export default async function bitfyOgMiddleware(
  event: { url: URL; req: { method: string } },
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET") return next();

  const result = await next();
  if (!(result instanceof Response)) return result;

  const type = result.headers.get("content-type") ?? "";
  if (!type.includes("text/html") || !result.body) return result;

  let html = await result.text();
  html = html
    .replace(/<meta[^>]+property=["']og:image["'][^>]*>/gi, "")
    .replace(/<meta[^>]+property=["']og:image:secure_url["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']twitter:image["'][^>]*>/gi, "");

  const nextHtml = /<\/head>/i.test(html)
    ? html.replace(/<\/head>/i, `${OG_TAGS}</head>`)
    : `${OG_TAGS}${html}`;

  const headers = new Headers(result.headers);
  headers.delete("content-length");
  return new Response(nextHtml, {
    status: result.status,
    statusText: result.statusText,
    headers,
  });
}
