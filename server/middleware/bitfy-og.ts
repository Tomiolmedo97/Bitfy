const OG_IMAGE = "https://bitfy.vercel.app/og.jpg?v=autumn";
const OG_TAGS = [
  `<meta property="og:image" content="${OG_IMAGE}">`,
  `<meta property="og:image:width" content="1200">`,
  `<meta property="og:image:height" content="630">`,
  `<meta property="og:image:type" content="image/jpeg">`,
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

  const html = await result.text();
  if (html.includes('property="og:image"')) {
    return new Response(html, {
      status: result.status,
      statusText: result.statusText,
      headers: result.headers,
    });
  }

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
