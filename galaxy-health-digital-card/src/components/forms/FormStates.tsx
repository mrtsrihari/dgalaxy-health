"use client";

import { useEffect, useRef } from "react";
import { CircleAlert, CircleCheck, ExternalLink, LoaderCircle, RotateCcw, Send } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import type { Status } from "./useWhatsAppForm";

export function ErrorSummary({ show, text }: { show: boolean; text: string }) {
  return (
    <div aria-live="assertive">
      {show && (
        <p className="mb-5 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-sm text-red-800 ring-1 ring-red-200">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {text}
        </p>
      )}
    </div>
  );
}

export function SubmitButton({ status, label, openingLabel }: { status: Status; label: string; openingLabel: string }) {
  const busy = status === "opening";
  return (
    <button type="submit" disabled={busy} aria-busy={busy} className="btn h-12 w-full bg-whatsapp text-[0.95rem] text-white hover:bg-whatsapp-dark sm:w-auto sm:px-6">
      {busy ? <LoaderCircle className="h-[18px] w-[18px] animate-spin" aria-hidden="true" /> : <WhatsAppIcon className="h-[18px] w-[18px]" />}
      {busy ? openingLabel : label}
      {!busy && <Send className="h-4 w-4 opacity-80" aria-hidden="true" />}
    </button>
  );
}

export function SuccessPanel({ t, url, onReset }: { t: Dictionary["form"]; url: string | null; onReset: () => void }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => headingRef.current?.focus(), []);
  return (
    <div role="status" className="animate-fade-up flex flex-col items-center py-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60">
        <CircleCheck className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 ref={headingRef} tabIndex={-1} className="mt-5 text-lg font-semibold text-navy-950 focus:outline-none">{t.successTitle}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-600">{t.successBody}</p>
      <div className="mt-6 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn h-11 bg-whatsapp text-white hover:bg-whatsapp-dark">
            <ExternalLink className="h-4 w-4" aria-hidden="true" /> {t.reopen}
          </a>
        )}
        <button type="button" onClick={onReset} className="btn h-11 text-navy-800 ring-1 ring-navy-200 hover:bg-navy-50">
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> {t.reset}
        </button>
      </div>
    </div>
  );
}
