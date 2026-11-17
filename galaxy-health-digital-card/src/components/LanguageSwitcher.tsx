"use client";

import { langPath, type Lang } from "@/i18n/dictionaries";

const options: { lang: Lang; label: string; short: string }[] = [
  { lang: "en", label: "English", short: "EN" },
  { lang: "ta", label: "தமிழ்", short: "தமிழ்" },
];

/**
 * Segmented EN / தமிழ் toggle. Plain links (works without JS); with JS the
 * current section anchor is kept, so switching language doesn't lose your place.
 */
export function LanguageSwitcher({ current, label, tone = "light" }: { current: Lang; label: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex items-center rounded-full p-0.5 text-[0.8rem] font-semibold ${
        dark ? "bg-white/10 ring-1 ring-white/15" : "bg-navy-100/70 ring-1 ring-navy-200/60"
      }`}
    >
      {options.map((o) => {
        const active = o.lang === current;
        return (
          <a
            key={o.lang}
            href={langPath[o.lang]}
            lang={o.lang}
            hrefLang={o.lang}
            aria-current={active ? "page" : undefined}
            aria-label={o.label}
            onClick={(e) => {
              if (active) {
                e.preventDefault();
                return;
              }
              const hash = window.location.hash;
              if (hash) {
                e.preventDefault();
                window.location.assign(langPath[o.lang] + hash);
              }
            }}
            className={`inline-flex h-8 min-w-11 items-center justify-center rounded-full px-3 transition ${
              active
                ? dark
                  ? "bg-white text-navy-950 shadow-sm"
                  : "bg-white text-navy-950 shadow-sm ring-1 ring-navy-200/70"
                : dark
                  ? "text-white/75 hover:text-white"
                  : "text-navy-600 hover:text-navy-950"
            }`}
          >
            {o.short}
          </a>
        );
      })}
    </div>
  );
}
