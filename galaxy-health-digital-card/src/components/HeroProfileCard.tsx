import Image from "next/image";
import { BriefcaseBusiness, Languages, MapPin, ShieldCheck } from "lucide-react";
import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { ContactActions } from "@/components/ContactActions";
import { HeroQR } from "@/components/HeroQR";

function Avatar({ alt }: { alt: string }) {
  const ring = "relative h-[4.5rem] w-[4.5rem] shrink-0 rounded-[1.35rem] p-[3px] sm:h-24 sm:w-24 sm:rounded-[1.6rem] bg-gradient-to-br from-accent-300/80 via-white/30 to-white/5";
  if (site.person.photo) {
    return (
      <div className={ring}>
        <Image
          src={site.person.photo}
          alt={alt}
          width={192}
          height={192}
          priority
          className="h-full w-full rounded-[1.15rem] object-cover sm:rounded-[1.4rem]"
        />
      </div>
    );
  }
  // Placeholder monogram until a professional photograph is supplied.
  return (
    <div className={ring} role="img" aria-label={alt}>
      <div className="flex h-full w-full items-center justify-center rounded-[1.15rem] bg-gradient-to-br from-navy-700 to-navy-900 text-2xl font-semibold tracking-tight text-white sm:rounded-[1.4rem] sm:text-3xl">
        {site.person.initials}
      </div>
    </div>
  );
}

export function HeroProfileCard({ t, lang }: { t: Dictionary; lang: Lang }) {
  const name = lang === "ta" && site.person.nameTa ? site.person.nameTa : site.person.name;
  const facts = [
    { icon: BriefcaseBusiness, text: t.hero.designation, strong: true },
    { icon: ShieldCheck, text: t.hero.company },
    { icon: MapPin, text: t.hero.location },
  ];
  return (
    <section id="top" aria-labelledby="hero-name" className="container-page pt-4 sm:pt-8 lg:pt-12">
      <div className="on-dark relative isolate overflow-hidden rounded-[1.75rem] bg-navy-950 text-white shadow-hero">
        {/* Decorative layers: soft light from top-right + fine grid, both very subtle */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-32 -z-10 h-96 w-96 rounded-full bg-accent-500/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-24 -z-10 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-center lg:gap-12 lg:p-12">
          <div className="animate-fade-up">
            <p className="eyebrow text-accent-300">{t.hero.eyebrow}</p>

            <div className="mt-4 flex items-center gap-4 sm:gap-5">
              <Avatar alt={t.hero.photoAlt} />
              <div className="min-w-0">
                <h1 id="hero-name" className="text-[1.6rem] leading-tight font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]">
                  {name}
                </h1>
                <p className="mt-1 inline-flex rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-accent-100 ring-1 ring-white/10">
                  {site.person.qualification}
                </p>
              </div>
            </div>

            <ul className="mt-5 grid gap-2 text-[0.95rem]">
              {facts.map(({ icon: Icon, text, strong }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                  <span className={strong ? "font-semibold text-white" : "text-navy-100"}>{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-navy-200 ta:text-[0.9rem]">{t.hero.intro}</p>

            <ContactActions t={t} lang={lang} />

            <ul className="mt-5 flex flex-wrap gap-2 text-xs text-navy-200" aria-label={t.about.credTitle}>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 ring-1 ring-white/10">
                <MapPin className="h-3.5 w-3.5 text-accent-300" aria-hidden="true" /> {t.hero.chipArea}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 ring-1 ring-white/10">
                <Languages className="h-3.5 w-3.5 text-accent-300" aria-hidden="true" /> {t.hero.chipLang}
              </li>
            </ul>
          </div>

          <aside className="hidden lg:block" aria-label={t.hero.scanTitle}>
            <HeroQR t={t.hero} lang={lang} />
          </aside>
        </div>
      </div>
    </section>
  );
}
