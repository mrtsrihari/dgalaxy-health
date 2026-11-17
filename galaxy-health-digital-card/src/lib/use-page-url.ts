"use client";

import { useEffect, useState } from "react";
import { langPath, type Lang } from "@/i18n/dictionaries";
import { resolveClientBaseUrl } from "@/lib/site-url";

/**
 * The public URL of the current language page.
 * Returns null during server render / first paint, then the real URL.
 */
export function usePageUrl(lang: Lang): string | null {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    const base = resolveClientBaseUrl();
    setUrl(lang === "en" ? `${base}/` : `${base}${langPath[lang]}`);
  }, [lang]);
  return url;
}

/** Native share sheet with clipboard fallback. */
export async function shareOrCopy(data: { title: string; text: string; url: string }): Promise<"shared" | "copied" | "cancelled" | "failed"> {
  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share(data);
      return "shared";
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return "cancelled";
      // fall through to clipboard
    }
  }
  try {
    await navigator.clipboard.writeText(data.url);
    return "copied";
  } catch {
    return "failed";
  }
}
