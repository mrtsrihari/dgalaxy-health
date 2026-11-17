"use client";

import { QRCodeSVG } from "qrcode.react";
import { LoaderCircle, ScanLine } from "lucide-react";
import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { usePageUrl } from "@/lib/use-page-url";

/** Desktop-only: lets someone viewing on a laptop move the card to their phone. */
export function HeroQR({ t, lang }: { t: Dictionary["hero"]; lang: Lang }) {
  const url = usePageUrl(lang);
  return (
    <div className="flex flex-col items-center rounded-3xl bg-white/[0.07] p-6 text-center ring-1 ring-white/12 backdrop-blur-md">
      <div className="flex aspect-square w-full max-w-[11.5rem] items-center justify-center rounded-2xl bg-white p-3">
        {url ? (
          <QRCodeSVG value={url} size={200} level="M" marginSize={1} fgColor="#081329" className="h-full w-full" role="img" aria-label={`QR code: ${url}`} />
        ) : (
          <LoaderCircle className="h-5 w-5 animate-spin text-navy-400" aria-hidden="true" />
        )}
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
        <ScanLine className="h-4 w-4 text-accent-200" aria-hidden="true" />
        {t.scanTitle}
      </p>
      <p className="mt-1 text-xs text-navy-300">{t.scanHint}</p>
    </div>
  );
}
