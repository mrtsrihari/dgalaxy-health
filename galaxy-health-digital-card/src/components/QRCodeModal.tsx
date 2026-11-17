"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Copy, Download, LoaderCircle, Share2, X, CircleAlert } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { isLocalHost } from "@/lib/site-url";
import { useToast, Toast } from "@/components/ui/Toast";

export type QRCodeModalHandle = { open: () => void };

const FILE_NAME = "thirumalairaja-galaxy-health-qr.png";

type Props = { url: string | null; t: Dictionary["qr"]; designation: string };

export const QRCodeModal = forwardRef<QRCodeModalHandle, Props>(function QRCodeModal({ url, t, designation }, ref) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const { toast, show } = useToast();

  useImperativeHandle(ref, () => ({ open: () => dialogRef.current?.showModal() }), []);

  function getCanvas() {
    return canvasWrapRef.current?.querySelector("canvas") ?? null;
  }

  function download() {
    const canvas = getCanvas();
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = FILE_NAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    show(t.downloaded);
  }

  async function shareImage() {
    const canvas = getCanvas();
    if (!canvas || !url) return;
    const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/png"));
    if (blob && typeof navigator.share === "function") {
      const file = new File([blob], FILE_NAME, { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: site.person.name, text: url });
          return;
        } catch (err) {
          if (err instanceof DOMException && err.name === "AbortError") return;
        }
      }
    }
    download();
    show(t.shareFailed);
  }

  async function copy() {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      show(t.copied);
    } catch {
      show(url, "error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="qr-title"
      aria-describedby="qr-desc"
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
      className="m-auto w-[min(92vw,24rem)] rounded-3xl bg-white p-0 text-navy-950 shadow-hero backdrop:bg-navy-950/60 open:animate-fade-up"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="qr-title" className="text-lg font-semibold">{t.title}</h2>
            <p id="qr-desc" className="mt-1 text-sm text-navy-600">{t.description}</p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="-mt-1 -mr-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy-500 hover:bg-navy-50 hover:text-navy-950"
            aria-label={t.close}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 rounded-2xl border border-navy-100 bg-navy-50/60 p-5">
          <div ref={canvasWrapRef} className="mx-auto flex aspect-square w-full max-w-[15rem] items-center justify-center rounded-xl bg-white p-3 shadow-card">
            {url ? (
              <QRCodeCanvas
                value={url}
                size={480}
                level="M"
                marginSize={2}
                fgColor="#081329"
                bgColor="#ffffff"
                className="h-full w-full"
                role="img"
                aria-label={`QR code: ${url}`}
              />
            ) : (
              <span className="flex items-center gap-2 text-sm text-navy-500">
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> {t.loading}
              </span>
            )}
          </div>
          <p className="mt-4 text-center text-sm font-semibold">{site.person.name}</p>
          <p className="text-center text-xs text-navy-500">{designation} · {site.brand.name}</p>
          {url && <p className="mt-2 truncate text-center text-xs text-accent-700" title={url}>{url.replace(/^https?:\/\//, "")}</p>}
        </div>

        {url && isLocalHost(url) && (
          <p className="mt-3 flex gap-2 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-900 ring-1 ring-amber-200">
            <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {t.localNote}
          </p>
        )}

        <div className="mt-5 grid grid-cols-3 gap-2">
          <button type="button" onClick={download} disabled={!url} className="btn h-auto flex-col gap-1 bg-navy-950 py-3 text-xs text-white hover:bg-navy-800">
            <Download className="h-4 w-4" aria-hidden="true" /> {t.download}
          </button>
          <button type="button" onClick={shareImage} disabled={!url} className="btn h-auto flex-col gap-1 py-3 text-xs text-navy-900 ring-1 ring-navy-200 hover:bg-navy-50">
            <Share2 className="h-4 w-4" aria-hidden="true" /> {t.shareImage}
          </button>
          <button type="button" onClick={copy} disabled={!url} className="btn h-auto flex-col gap-1 py-3 text-xs text-navy-900 ring-1 ring-navy-200 hover:bg-navy-50">
            <Copy className="h-4 w-4" aria-hidden="true" /> {t.copyLink}
          </button>
        </div>
      </div>
      <Toast toast={toast} />
    </dialog>
  );
});
