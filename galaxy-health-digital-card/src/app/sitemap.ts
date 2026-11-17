import type { MetadataRoute } from "next";
import { BUILD_SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!BUILD_SITE_URL) return [];
  return [
    { url: `${BUILD_SITE_URL}/`, alternates: { languages: { ta: `${BUILD_SITE_URL}/ta` } }, priority: 1 },
    { url: `${BUILD_SITE_URL}/ta`, alternates: { languages: { en: `${BUILD_SITE_URL}/` } }, priority: 0.9 },
  ];
}
