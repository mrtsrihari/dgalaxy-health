import type { ReactNode } from "react";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/noto-sans-tamil";
import "@/app/globals.css";
import type { Lang } from "@/i18n/dictionaries";

/** Shared <html>/<body> for both language root layouts. */
export function RootDocument({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} dir="ltr">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
