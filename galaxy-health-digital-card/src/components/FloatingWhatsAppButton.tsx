"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/lib/contact";

/** Appears once the hero (with its own WhatsApp button) scrolls out of view. */
export function FloatingWhatsAppButton({ label, greeting }: { label: string; greeting: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={whatsappHref(greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex h-14 items-center gap-2 rounded-full bg-whatsapp pr-4 pl-4 text-white shadow-[0_12px_30px_-10px_rgb(22_138_69/0.8)] ring-4 ring-white/70 transition-all duration-300 hover:bg-whatsapp-dark sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">{label}</span>
    </a>
  );
}
