"use client";

import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { CircleAlert, ChevronDown } from "lucide-react";

type Base = { id: string; label: string; error?: string; hint?: string; optionalLabel?: string };

function Label({ id, label, optionalLabel }: Pick<Base, "id" | "label" | "optionalLabel">) {
  return (
    <label htmlFor={id} className="field-label">
      {label}
      {optionalLabel && <span className="ml-1.5 text-xs font-normal text-navy-400">({optionalLabel})</span>}
    </label>
  );
}

function Feedback({ id, error, hint }: Pick<Base, "id" | "error" | "hint">) {
  if (error) {
    return (
      <p id={`${id}-error`} className="field-error">
        <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {error}
      </p>
    );
  }
  return hint ? <p id={`${id}-hint`} className="mt-1.5 text-xs text-navy-500">{hint}</p> : null;
}

function describedBy(id: string, error?: string, hint?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}

export function TextField({ id, label, error, hint, optionalLabel, ...rest }: Base & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label id={id} label={label} optionalLabel={optionalLabel} />
      <input id={id} name={id} className="field" aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, error, hint)} {...rest} />
      <Feedback id={id} error={error} hint={hint} />
    </div>
  );
}

export function SelectField({
  id, label, error, hint, optionalLabel, placeholder, options, ...rest
}: Base & { placeholder: string; options: { value: string; label: string }[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <Label id={id} label={label} optionalLabel={optionalLabel} />
      <div className="relative">
        <select
          id={id}
          name={id}
          className="field appearance-none pr-10"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, hint)}
          {...rest}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-navy-400" aria-hidden="true" />
      </div>
      <Feedback id={id} error={error} hint={hint} />
    </div>
  );
}

export function TextAreaField({ id, label, error, hint, optionalLabel, ...rest }: Base & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <Label id={id} label={label} optionalLabel={optionalLabel} />
      <textarea id={id} name={id} className="field min-h-28 resize-y" aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, error, hint)} {...rest} />
      <Feedback id={id} error={error} hint={hint} />
    </div>
  );
}
