import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="stamp text-oxide">Dossier not located</p>
        <h1 className="mt-4 font-display text-5xl font-black tracking-tight">404</h1>
        <p className="mt-3 text-sm text-ink-soft">
          No entry exists at this reference. Return to the partner index.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-xl bg-ink px-4 py-2.5 text-sm font-bold text-paper"
        >
          Back to index
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="stamp text-oxide">Retrieval failed</p>
        <h1 className="mt-4 font-display text-3xl font-black tracking-tight">
          This page didn&rsquo;t load
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          Something went wrong on our end. Try again or return to the index.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-xl bg-ink px-4 py-2.5 text-sm font-bold text-paper"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-xl bg-card px-4 py-2.5 text-sm font-bold ring-1 ring-rule"
          >
            Index
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Meridian — India Bilateral Atlas" },
      {
        name: "description",
        content:
          "India's bilateral relations, structured: macro indicators, pre- and post-1947 timelines, and seven core pillars for every partner state.",
      },
      { property: "og:title", content: "Meridian — India Bilateral Atlas" },
      {
        property: "og:description",
        content: "India's bilateral relations, structured country by country.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,500;0,700;0,900;1,500&family=Courier+Prime:wght@400;700&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent as never,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-block h-7 w-7 rounded-md bg-oxide ring-1 ring-paper/20" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Meridian — India Bilateral Atlas
          </span>
        </Link>
        <div className="hidden items-center gap-5 text-sm sm:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-paper/60 transition-colors hover:text-saffron"
            activeProps={{ className: "text-saffron" }}
          >
            Index
          </Link>
          <Link
            to="/method"
            className="text-paper/60 transition-colors hover:text-saffron"
            activeProps={{ className: "text-saffron" }}
          >
            Method
          </Link>
          <span className="stamp-box text-saffron">Open source record</span>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-rule bg-ink px-5 py-8 text-paper/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-sm font-semibold text-paper">
          Meridian · India Bilateral Atlas
        </span>
        <span className="stamp">Reference point: New Delhi · Rev 0.4</span>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen selection:bg-saffron/50">
        <SiteHeader />
        {/* Required: nested routes render here. */}
        <Outlet />
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
