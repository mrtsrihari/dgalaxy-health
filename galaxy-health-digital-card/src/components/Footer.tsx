import { Phone } from "lucide-react";
import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";
import { BrandMark } from "@/components/ui/BrandMark";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { navLinks } from "@/components/Header";

export function Footer({ t, lang }: { t: Dictionary; lang: Lang }) {
  const year = new Date().getFullYear();
  const regulatory = site.compliance.insurerRegulatoryText?.[lang];
  return (
    <footer className="on-dark bg-navy-950 pb-24 text-navy-200 sm:pb-10">
      <div className="container-page pt-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <span className="text-lg font-semibold text-white">{site.brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">{t.footer.tagline}</p>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold tracking-wider text-navy-400 uppercase ta:normal-case ta:tracking-normal">{t.footer.contactTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telHref} className="inline-flex items-center gap-2.5 text-white hover:text-accent-200">
                  <Phone className="h-4 w-4 text-accent-300" aria-hidden="true" />
                  <span><span className="sr-only">{t.footer.phone}: </span>{site.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={whatsappHref(t.hero.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-white hover:text-accent-200">
                  <WhatsAppIcon className="h-4 w-4 text-accent-300" />
                  <span>{t.footer.whatsapp}</span>
                </a>
              </li>
              {site.contact.email && (
                <li>
                  <a href={`mailto:${site.contact.email}`} className="text-white hover:text-accent-200">{site.contact.email}</a>
                </li>
              )}
              <li className="text-navy-300">{t.location.city}</li>
            </ul>
          </div>

          <nav aria-label={t.footer.linksTitle} className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-wider text-navy-400 uppercase ta:normal-case ta:tracking-normal">{t.footer.linksTitle}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm md:grid-cols-1">
              {navLinks(t.nav).map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="py-8">
          <h2 className="text-xs font-semibold tracking-wider text-navy-400 uppercase ta:normal-case ta:tracking-normal">{t.footer.disclaimerTitle}</h2>
          <p className="mt-3 text-xs leading-relaxed text-navy-300">{t.footer.disclaimer}</p>
          <p className="mt-3 text-xs leading-relaxed text-navy-300">{t.footer.independence}</p>
          {regulatory && <p className="mt-3 text-xs leading-relaxed text-navy-300">{regulatory}</p>}
        </div>

        <p className="border-t border-white/10 pt-6 text-xs text-navy-400">
          © {year} {site.person.name} · {site.brand.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
