import { BriefcaseBusiness, GraduationCap, Languages, MapPin } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";

export function AboutSection({ t, designation }: { t: Dictionary["about"]; designation: string }) {
  const creds = [
    { icon: GraduationCap, label: t.credQualification, value: site.person.qualification },
    { icon: BriefcaseBusiness, label: t.credRole, value: designation },
    { icon: MapPin, label: t.credArea, value: t.credAreaValue },
    { icon: Languages, label: t.credLanguages, value: t.credLanguagesValue },
  ];
  return (
    <section id="about" aria-labelledby="about-title" className="border-y border-navy-100 bg-white">
      <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="about-title" className="section-title max-w-xl">{t.title}</h2>
          <div className="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-navy-700">
            {t.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>

          <h3 className="mt-10 text-sm font-semibold text-navy-500">{t.credTitle}</h3>
          <dl className="mt-3 grid gap-3 sm:grid-cols-2">
            {creds.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-navy-50/60 p-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-medium text-navy-500">{label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-navy-950">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-navy-50 p-6 ring-1 ring-navy-100 sm:p-8">
            <h3 className="text-lg font-semibold text-navy-950">{t.stepsTitle}</h3>
            <ol className="relative mt-6 space-y-6">
              <span aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-px bg-navy-200" />
              {t.steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-4">
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-accent-700 shadow-card ring-1 ring-navy-200">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-navy-950">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
