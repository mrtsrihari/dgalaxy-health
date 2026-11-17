import type { NextConfig } from "next";

/**
 * The public site URL is resolved at build time so the QR code, vCard and
 * SEO metadata always point at the real deployment — never at localhost.
 *
 * Priority:
 *  1. NEXT_PUBLIC_SITE_URL (set this once you have a custom domain)
 *  2. VERCEL_PROJECT_PRODUCTION_URL (provided automatically by Vercel)
 *  3. Empty → the browser falls back to window.location.origin at runtime
 */
const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_RESOLVED_SITE_URL: resolvedSiteUrl.replace(/\/$/, ""),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
