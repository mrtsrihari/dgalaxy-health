import type { Metadata, Viewport } from "next";
import { getDictionary, type Lang } from "@/i18n/dictionaries";
import { metadataBase } from "@/lib/site-url";

export function buildMetadata(lang: Lang): Metadata {
  const t = getDictionary(lang);
  return {
    metadataBase: metadataBase(),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: "M. Thirumalairaja · Digital Card",
    alternates: {
      canonical: lang === "en" ? "/" : "/ta",
      languages: { en: "/", ta: "/ta", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      title: t.meta.title,
      description: t.meta.description,
      url: lang === "en" ? "/" : "/ta",
      locale: lang === "en" ? "en_IN" : "ta_IN",
      alternateLocale: lang === "en" ? ["ta_IN"] : ["en_IN"],
      siteName: "Galaxy Health Insurance · M. Thirumalairaja",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
    formatDetection: { telephone: true },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#081329",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
