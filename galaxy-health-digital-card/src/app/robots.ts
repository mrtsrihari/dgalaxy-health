import type { MetadataRoute } from "next";
import { BUILD_SITE_URL } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(BUILD_SITE_URL ? { sitemap: `${BUILD_SITE_URL}/sitemap.xml` } : {}),
  };
}
