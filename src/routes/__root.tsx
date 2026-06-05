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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { SmoothScroll } from "@/components/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--pearl)] px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow text-[color:var(--gold-dark)]">Page not found</p>
        <h1 className="mt-6 font-display text-7xl">404</h1>
        <p className="mt-4 text-sm text-[color:var(--muted-foreground)]">
          The page you're looking for has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--charcoal)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-[color:var(--pearl)]"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--pearl)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something didn't load</h1>
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
          Please try again in a moment.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-[color:var(--charcoal)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-[color:var(--pearl)]"
          >
            Try again
          </button>
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
      { title: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      {
        name: "description",
        content:
          "Luxury plastic surgery and aesthetic medicine in Yangon. Rhinoplasty, double eyelid, contouring and skin rejuvenation by experienced surgeons.",
      },
      { property: "og:title", content: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      { name: "twitter:title", content: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      {
        property: "og:description",
        content:
          "Luxury plastic surgery and aesthetic medicine in Yangon. Rhinoplasty, double eyelid, contouring and skin rejuvenation by experienced surgeons.",
      },
      {
        name: "twitter:description",
        content:
          "Luxury plastic surgery and aesthetic medicine in Yangon. Rhinoplasty, double eyelid, contouring and skin rejuvenation by experienced surgeons.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/471896d2-cc98-44ce-94d2-97dc7780755c/id-preview-b2ca3b88--a7c966a5-839c-416a-9b90-478c83fefb1a.lovable.app-1780158243154.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/471896d2-cc98-44ce-94d2-97dc7780755c/id-preview-b2ca3b88--a7c966a5-839c-416a-9b90-478c83fefb1a.lovable.app-1780158243154.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </QueryClientProvider>
  );
}
