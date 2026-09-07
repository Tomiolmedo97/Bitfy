import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Bitfy";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bitfy — Tu presencia digital, sin vueltas" },
      {
        name: "description",
        content:
          "Diseño y desarrollo web para emprendedores, profesionales y PyMEs. Sitios claros, rápidos de lanzar y pensados para generar consultas.",
      },
      { name: "theme-color", content: "#2C211C" },
      { property: "og:title", content: "Bitfy" },
      { property: "og:description", content: "Tu presencia digital, sin vueltas." },
      { property: "og:url", content: "https://www.bitfy.com.ar/" },
      { property: "og:image", content: "https://www.bitfy.com.ar/og.jpg?v=wordmark" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.bitfy.com.ar/og.jpg?v=wordmark" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@800&family=Sora:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration'in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);scrollTo(0,0);",
          }}
        />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
