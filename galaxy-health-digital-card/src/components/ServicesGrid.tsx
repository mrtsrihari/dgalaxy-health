import { ArrowRight, Building2, HeartPulse, UserRoundPlus, Users, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { EnquireLink } from "@/components/EnquireLink";

type Key = keyof Dictionary["services"]["items"];
const services: { key: Key; icon: LucideIcon }[] = [
  { key: "health", icon: HeartPulse },
  { key: "family", icon: Users },
  { key: "corporate", icon: Building2 },
  { key: "agent", icon: UserRoundPlus },
];

const linkCls =
  "mt-5 inline-flex items-center gap-1.5 self-start rounded-lg text-sm font-semibold text-accent-700 transition group-hover:gap-2.5 hover:text-accent-600";

export function ServicesGrid({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="container-page py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 id="services-title" className="section-title">{t.title}</h2>
        <p className="mt-3 text-navy-600">{t.intro}</p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ key, icon: Icon }) => {
          const item = t.items[key];
          const isAgent = key === "agent";
          return (
            <li key={key}>
              <article
                className={`group flex h-full flex-col rounded-2xl border bg-white p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-card-hover sm:p-6 ${
                  isAgent ? "border-navy-200 bg-gradient-to-b from-white to-navy-50/70" : "border-navy-100"
                }`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${
                    isAgent ? "bg-navy-950 text-white ring-navy-900" : "bg-accent-50 text-accent-600 ring-accent-100"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{item.desc}</p>
                {isAgent ? (
                  <a href="#join" className={linkCls}>
                    {t.joinCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">: {item.title}</span>
                  </a>
                ) : (
                  <EnquireLink interest={key} className={linkCls}>
                    {t.enquire} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">: {item.title}</span>
                  </EnquireLink>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
