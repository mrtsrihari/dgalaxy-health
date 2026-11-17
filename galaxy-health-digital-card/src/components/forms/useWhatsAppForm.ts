"use client";

import { useCallback, useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { formatIndianMobile, normaliseIndianMobile, openWhatsApp } from "@/lib/contact";

export type BaseValues = { name: string; mobile: string; interest: string; message: string };
type Errors = Partial<Record<keyof BaseValues, string>>;
export type Status = "idle" | "opening" | "done";

const MAX_MESSAGE = 500;

export function validate(v: BaseValues, e: Dictionary["errors"]): Errors {
  const errors: Errors = {};
  const name = v.name.trim();
  if (!name) errors.name = e.nameRequired;
  else if (name.replace(/[^\p{L}]/gu, "").length < 2) errors.name = e.nameInvalid;

  if (!v.mobile.trim()) errors.mobile = e.mobileRequired;
  else if (!normaliseIndianMobile(v.mobile)) errors.mobile = e.mobileInvalid;

  if (!v.interest) errors.interest = e.selectRequired;
  if (v.message.length > MAX_MESSAGE) errors.message = e.messageTooLong;
  return errors;
}

/**
 * Shared logic for both forms: controlled values, validation that updates
 * live after the first submit attempt, focus management, and the WhatsApp hand-off.
 */
export function useWhatsAppForm(opts: {
  idPrefix: string;
  errorsT: Dictionary["errors"];
  buildMessage: (v: BaseValues & { mobileFormatted: string }) => string;
}) {
  const { idPrefix, errorsT, buildMessage } = opts;
  const empty: BaseValues = { name: "", mobile: "", interest: "", message: "" };
  const [values, setValues] = useState<BaseValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [lastUrl, setLastUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = useCallback(
    (field: keyof BaseValues, value: string) => {
      const next = { ...values, [field]: value };
      setValues(next);
      if (attempted) setErrors(validate(next, errorsT));
    },
    [values, attempted, errorsT],
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAttempted(true);
    const errs = validate(values, errorsT);
    setErrors(errs);
    const firstInvalid = (["name", "mobile", "interest", "message"] as const).find((k) => errs[k]);
    if (firstInvalid) {
      document.getElementById(`${idPrefix}-${firstInvalid}`)?.focus();
      return;
    }
    setStatus("opening");
    const mobile = normaliseIndianMobile(values.mobile)!;
    // Must run synchronously in the submit gesture so popup blockers allow it.
    const url = openWhatsApp(buildMessage({ ...values, name: values.name.trim(), message: values.message.trim(), mobileFormatted: formatIndianMobile(mobile) }));
    setLastUrl(url);
    window.setTimeout(() => setStatus("done"), 450);
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setAttempted(false);
    setStatus("idle");
    setLastUrl(null);
    window.setTimeout(() => document.getElementById(`${idPrefix}-name`)?.focus(), 0);
  }

  const hasErrors = attempted && Object.keys(errors).length > 0;
  return { values, set, setValues, errors, hasErrors, status, lastUrl, onSubmit, reset, formRef, maxMessage: MAX_MESSAGE };
}
