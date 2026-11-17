"use client";

import type { ReactNode } from "react";

export const INTEREST_EVENT = "card:select-interest";

/**
 * Anchor to the enquiry form that also pre-selects the insurance interest.
 * Without JavaScript it is still a working link to #enquiry.
 */
export function EnquireLink({ interest, className, children }: { interest: string; className?: string; children: ReactNode }) {
  return (
    <a
      href="#enquiry"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(INTEREST_EVENT, { detail: interest }))}
    >
      {children}
    </a>
  );
}
