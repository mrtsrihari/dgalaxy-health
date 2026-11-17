"use client";

import { Info } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { TextAreaField, SelectField, TextField } from "@/components/forms/fields";
import { useWhatsAppForm } from "@/components/forms/useWhatsAppForm";
import { ErrorSummary, SubmitButton, SuccessPanel } from "@/components/forms/FormStates";

const P = "agent";

export function AgentRegistrationForm({ t }: { t: Dictionary }) {
  const { agent: a, form: f, wa } = t;
  const form = useWhatsAppForm({
    idPrefix: P,
    errorsT: t.errors,
    buildMessage: (v) => {
      const interest = a.interestOptions.find((o) => o.value === v.interest)?.label ?? v.interest;
      return [
        `*${wa.agentHeading}*`,
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
  const { values, set, errors } = form;

  return (
    <div className="rounded-3xl bg-white p-5 text-navy-950 shadow-hero sm:p-8">
      {form.status === "done" ? (
        <SuccessPanel t={f} url={form.lastUrl} onReset={form.reset} />
      ) : (
        <form onSubmit={form.onSubmit} noValidate aria-labelledby="join-title">
          <ErrorSummary show={form.hasErrors} text={f.errorSummary} />
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id={`${P}-name`} label={f.name} placeholder={f.namePh} autoComplete="name" required maxLength={80}
                value={values.name} onChange={(ev) => set("name", ev.target.value)} error={errors.name}
              />
              <TextField
                id={`${P}-mobile`} label={f.mobile} placeholder={f.mobilePh} type="tel" inputMode="tel" autoComplete="tel-national" required maxLength={16}
                value={values.mobile} onChange={(ev) => set("mobile", ev.target.value)} error={errors.mobile} hint={f.mobileHint}
              />
            </div>
            <SelectField
              id={`${P}-interest`} label={a.interest} placeholder={a.interestPh} options={a.interestOptions} required
              value={values.interest} onChange={(ev) => set("interest", ev.target.value)} error={errors.interest}
            />
            <TextAreaField
              id={`${P}-message`} label={f.message} optionalLabel={t.common.optional} placeholder={a.messagePh} rows={3}
              value={values.message} onChange={(ev) => set("message", ev.target.value)} error={errors.message}
            />
          </div>
          <p className="mt-5 flex items-start gap-2 rounded-xl bg-navy-50 px-3.5 py-3 text-xs leading-relaxed text-navy-600 ring-1 ring-navy-100">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" /> {a.note}
          </p>
          <div className="mt-5">
            <SubmitButton status={form.status} label={a.submit} openingLabel={f.opening} />
          </div>
        </form>
      )}
    </div>
  );
}
