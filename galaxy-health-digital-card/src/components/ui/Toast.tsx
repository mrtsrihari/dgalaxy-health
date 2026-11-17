"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CircleCheck, CircleAlert } from "lucide-react";

type ToastState = { message: string; tone: "success" | "error" } | null;

export function useToast(duration = 2600) {
  const [toast, setToast] = useState<ToastState>(null);
  const timer = useRef<number | undefined>(undefined);
  const show = useCallback(
    (message: string, tone: "success" | "error" = "success") => {
      window.clearTimeout(timer.current);
      setToast({ message, tone });
      timer.current = window.setTimeout(() => setToast(null), duration);
    },
    [duration],
  );
  useEffect(() => () => window.clearTimeout(timer.current), []);
  return { toast, show };
}

/** Polite live region — announced by screen readers, visible as a pill. */
export function Toast({ toast }: { toast: ToastState }) {
  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-24 z-[60] flex justify-center px-4">
      {toast && (
        <div className="animate-fade-up flex items-center gap-2 rounded-full bg-navy-950/95 px-4 py-2.5 text-sm font-medium text-white shadow-hero ring-1 ring-white/10">
          {toast.tone === "success" ? (
            <CircleCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
          ) : (
            <CircleAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          )}
          {toast.message}
        </div>
      )}
    </div>
  );
}
