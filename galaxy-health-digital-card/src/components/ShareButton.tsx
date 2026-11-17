"use client";

import { Share2 } from "lucide-react";
import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { shareOrCopy, usePageUrl } from "@/lib/use-page-url";
import { Toast, useToast } from "@/components/ui/Toast";

type Props = {
  lang: Lang;
  t: Dictionary["share"];
  variant?: "icon" | "tile" | "row";
  className?: string;
};

export function ShareButton({ lang, t, variant = "icon", className = "" }: Props) {
  const url = usePageUrl(lang);
  const { toast, show } = useToast();

  async function onShare() {
    if (!url) return;
    const result = await shareOrCopy({ title: t.title, text: t.text, url });
    if (result === "copied") show(t.copied);
    else if (result === "failed") show(t.failed, "error");
  }

  const styles = {
    icon: "inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-700 ring-1 ring-navy-200/70 transition hover:bg-navy-100 hover:text-navy-950",
    tile: "flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/[0.06] px-2 py-2.5 text-xs font-medium text-white ring-1 ring-white/12 transition hover:bg-white/[0.12] active:scale-[0.98]",
    row: "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-base font-medium text-navy-800 hover:bg-navy-50",
  }[variant];

  return (
    <>
      <button type="button" onClick={onShare} disabled={!url} className={`${styles} ${className}`} aria-label={variant === "icon" ? t.button : undefined}>
        <Share2 className={variant === "tile" ? "h-5 w-5 text-accent-200" : "h-[18px] w-[18px]"} aria-hidden="true" />
        {variant !== "icon" && <span className="leading-tight">{t.button}</span>}
      </button>
      <Toast toast={toast} />
    </>
  );
}
