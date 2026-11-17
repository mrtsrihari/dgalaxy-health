/**
 * Public base URL resolved at build time (see next.config.ts).
 * Empty string when unknown (e.g. local dev without NEXT_PUBLIC_SITE_URL).
 */
export const BUILD_SITE_URL: string = process.env.NEXT_PUBLIC_RESOLVED_SITE_URL ?? "";

/** Base URL for server-side metadata. Falls back to Next's default. */
export function metadataBase(): URL | undefined {
  return BUILD_SITE_URL ? new URL(BUILD_SITE_URL) : undefined;
}

/**
 * Client-side: the URL people should land on when scanning / sharing.
 * Prefers the configured production URL, otherwise the current origin,
 * so preview or local builds still produce a working code.
 */
export function resolveClientBaseUrl(): string {
  if (BUILD_SITE_URL) return BUILD_SITE_URL;
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function isLocalHost(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local");
  } catch {
    return false;
  }
}
