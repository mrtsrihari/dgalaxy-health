"use client";

import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { TextAreaField, SelectField, TextField } from "@/components/forms/fields";
import { useWhatsAppForm } from "@/components/forms/useWhatsAppForm";
import { ErrorSummary, SubmitButton, SuccessPanel } from "@/components/forms/FormStates";
import { INTEREST_EVENT } from "@/components/EnquireLink";

const P = "enq";

export function CustomerEnquiryForm({ t }: { t: Dictionary }) {
  const { enquiry: e, form: f, wa } = t;
  const form = useWhatsAppForm({
    idPrefix: P,
    errorsT: t.errors,
    buildMessage: (v) => {
      const interest = e.interestOptions.find((o) => o.value === v.interest)?.label ?? v.interest;
      return [
        `*${wa.enquiryHeading}*`,
        "",
        `${wa.name}: ${v.name}`,
        `${wa.mobile}: ${v.mobileFormatted}`,
        `${wa.interest}: ${interest}`,
        v.message ? `${wa.message}: ${v.message}` : null,
        "",
        `— ${wa.footer}`,
      ].filter((l) => l !== null).join("\n");
    },
  });
  const { values, set, setValues, errors } = form;

  // Pre-select interest when a service card's "Enquire" link is used.
  useEffect(() => {
    const handler = (ev: Event) => {
      const interest = (ev as CustomEvent<string>).detail;
      if (!e.interestOptions.some((o) => o.value === interest)) return;
      setValues((prev) => ({ ...prev, interest }));
      window.setTimeout(() => document.getElementById(`${P}-name`)?.focus({ preventScroll: true }), 400);
    };
    window.addEventListener(INTEREST_EVENT, handler);
    return () => window.removeEventListener(INTEREST_EVENT, handler);
  }, [e.interestOptions, setValues]);

  return (
    <div className="rounded-3xl border border-navy-100 bg-white p-5 shadow-card sm:p-8">
      {form.status === "done" ? (
        <SuccessPanel t={f} url={form.lastUrl} onReset={form.reset} />
      ) : (
        <form ref={form.formRef} onSubmit={form.onSubmit} noValidate aria-labelledby="enquiry-title">
          <ErrorSummary show={form.hasErrors} text={f.errorSummary} />
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              id={`${P}-name`} label={f.name} placeholder={f.namePh} autoComplete="name" required maxLength={80}
              value={values.name} onChange={(ev) => set("name", ev.target.value)} error={errors.name}
            />
            <TextField
              id={`${P}-mobile`} label={f.mobile} placeholder={f.mobilePh} type="tel" inputMode="tel" autoComplete="tel-national" required maxLength={16}
              value={values.mobile} onChange={(ev) => set("mobile", ev.target.value)} error={errors.mobile} hint={f.mobileHint}
            />
            <div className="sm:col-span-2">
              <SelectField
                id={`${P}-interest`} label={e.interest} placeholder={e.interestPh} options={e.interestOptions} required
                value={values.interest} onChange={(ev) => set("interest", ev.target.value)} error={errors.interest}
              />
            </div>
            <div className="sm:col-span-2">
              <TextAreaField
                id={`${P}-message`} label={f.message} optionalLabel={t.common.optional} placeholder={e.messagePh} rows={4}
                value={values.message} onChange={(ev) => set("message", ev.target.value)} error={errors.message}
                hint={`${values.message.length}/${form.maxMessage}`}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-xs leading-relaxed text-navy-500 sm:max-w-xs">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy-400" aria-hidden="true" /> {f.privacy}
            </p>
            <SubmitButton status={form.status} label={e.submit} openingLabel={f.opening} />
          </div>
        </form>
      )}
    </div>
  );
}
