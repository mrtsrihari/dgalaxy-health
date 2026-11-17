"use client";

import { useRef } from "react";
import { ContactRound, Phone, QrCode } from "lucide-react";
import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { telHref, whatsappHref } from "@/lib/contact";
import { usePageUrl } from "@/lib/use-page-url";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ShareButton } from "@/components/ShareButton";
import { QRCodeModal, type QRCodeModalHandle } from "@/components/QRCodeModal";

const tile =
  "flex min-h-[4.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl bg-white/[0.06] px-2 py-2.5 text-center text-xs font-medium text-white ring-1 ring-white/12 transition hover:bg-white/[0.12] active:scale-[0.98]";

export function ContactActions({ t, lang }: { t: Dictionary; lang: Lang }) {
  const qrRef = useRef<QRCodeModalHandle>(null);
  const url = usePageUrl(lang);

  return (
    <div className="mt-6 max-w-xl">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={telHref}
          className="btn h-12 bg-white text-[0.95rem] text-navy-950 shadow-[0_8px_20px_-8px_rgb(0_0_0/0.5)] hover:bg-accent-50"
        >
          <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
          {t.hero.call}
        </a>
        <a
          href={whatsappHref(t.hero.whatsappGreeting)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn h-12 bg-whatsapp text-[0.95rem] text-white shadow-[0_8px_20px_-8px_rgb(31_168_85/0.7)] hover:bg-whatsapp-dark"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          {t.hero.whatsapp}
        </a>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <a href="/contact.vcf" download="M-Thirumalairaja.vcf" type="text/vcard" className={tile}>
          <ContactRound className="h-5 w-5 text-accent-200" aria-hidden="true" />
          <span className="leading-tight">{t.hero.saveContact}</span>
        </a>
        <button type="button" onClick={() => qrRef.current?.open()} className={tile} aria-haspopup="dialog">
          <QrCode className="h-5 w-5 text-accent-200" aria-hidden="true" />
          <span className="leading-tight">{t.hero.qr}</span>
        </button>
        <ShareButton lang={lang} t={{ ...t.share, button: t.hero.share }} variant="tile" />
      </div>

      <QRCodeModal ref={qrRef} url={url} t={t.qr} designation={t.hero.designation} />
    </div>
  );
}
