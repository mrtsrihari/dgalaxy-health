"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Globe, MoreVertical, Phone } from "lucide-react";
import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { ShareButton } from "@/components/ShareButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";

type Link = { href: string; label: string };

export function MobileMenu({
  links,
  t,
  lang,
  tLang,
  share,
}: {
  links: Link[];
  t: Dictionary["nav"];
  lang: Lang;
  tLang: Dictionary["lang"];
  share: Dictionary["share"];
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-dropdown"
        aria-label={open ? t.close : t.menu}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-800 ring-1 ring-navy-200/70 transition hover:bg-navy-100 ${
          open ? "bg-navy-100 text-navy-950 ring-navy-300" : ""
        }`}
      >
        <MoreVertical className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Only show when clicked */}
      {open && (
        <>
          {/* Backdrop overlay for outside clicks */}
          <div
            className="fixed inset-0 z-40 bg-navy-950/20 backdrop-blur-xs"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown menu anchored right under the three-dot button */}
          <div
            id="menu-dropdown"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.menu}
            className="absolute right-0 top-full mt-2 z-50 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-navy-100 bg-white p-4 shadow-card-hover"
          >
            {/* Language Switcher */}
            <div className="rounded-xl bg-navy-50/80 p-2.5 ring-1 ring-navy-100">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600">
                  <Globe className="h-3.5 w-3.5 text-accent-600" aria-hidden="true" />
                  <span>{tLang.label}</span>
                </div>
                <LanguageSwitcher current={lang} label={tLang.label} />
              </div>
            </div>

            {/* Navigation links */}
            <nav aria-label={t.primary} className="mt-3">
              <ul className="space-y-0.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition hover:bg-navy-50 hover:text-navy-950"
                    >
                      <span>{l.label}</span>
                      <ChevronRight className="h-4 w-4 text-navy-400" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer action buttons */}
            <div className="mt-3 border-t border-navy-100 pt-3 grid grid-cols-2 gap-2">
              <ShareButton lang={lang} t={share} variant="row" className="justify-center text-xs py-2 ring-1 ring-navy-200" />
              <a
                href={telHref}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-navy-950 px-2 py-2 text-xs font-semibold text-white transition hover:bg-navy-900"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">{site.contact.phoneDisplay}</span>
                <span aria-hidden="true">{site.contact.phoneDisplay.replace("+91 ", "")}</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
