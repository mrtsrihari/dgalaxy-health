import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { ShareButton } from "@/components/ShareButton";
import { MobileMenu } from "@/components/MobileMenu";

export function navLinks(t: Dictionary["nav"]) {
  return [
    { href: "#services", label: t.services },
    { href: "#about", label: t.about },
    { href: "#enquiry", label: t.enquiry },
    { href: "#join", label: t.join },
    { href: "#location", label: t.location },
  ];
}

export function Header({ t, lang }: { t: Dictionary; lang: Lang }) {
  const links = navLinks(t.nav);
  const [first, ...rest] = site.brand.name.split(" ");
  return (
    <header className="sticky top-0 z-40 border-b border-navy-100/80 bg-white/80 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950 focus:shadow-card"
      >
        {t.nav.skip}
      </a>
      <div className="container-page relative flex h-16 items-center justify-between gap-3">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 rounded-lg" aria-label={site.brand.name}>
          <BrandMark className="h-9 w-9 shrink-0" />
          <span className="flex flex-col leading-none" aria-hidden="true">
            <span className="text-[0.95rem] font-bold tracking-tight text-navy-950">{first}</span>
            <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.16em] text-navy-500 uppercase">{rest.join(" ")}</span>
          </span>
        </a>

        <nav aria-label={t.nav.primary} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-navy-600 transition hover:bg-navy-100/70 hover:text-navy-950"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ShareButton lang={lang} t={t.share} variant="icon" />
          <MobileMenu links={links} t={t.nav} lang={lang} tLang={t.lang} share={t.share} />
        </div>
      </div>
    </header>
  );
}
