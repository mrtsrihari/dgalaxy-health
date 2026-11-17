import { Phone } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";
import { CustomerEnquiryForm } from "@/components/CustomerEnquiryForm";

export function EnquirySection({ t }: { t: Dictionary }) {
  const e = t.enquiry;
  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="container-page py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 id="enquiry-title" className="section-title">{e.title}</h2>
          <p className="mt-3 text-navy-600">{e.intro}</p>

          <h3 className="mt-8 text-sm font-semibold text-navy-500">{e.nextTitle}</h3>
          <ol className="mt-3 space-y-3">
            {e.nextSteps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 text-sm text-navy-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-xs font-semibold text-accent-700 ring-1 ring-accent-100">
                  {i + 1}
                </span>
                <span className="pt-0.5">{s}</span>
              </li>
            ))}
          </ol>

          <a
            href={telHref}
            className="mt-8 hidden items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-card transition hover:border-navy-200 lg:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-white">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs text-navy-500">{t.footer.phone}</span>
              <span className="block font-semibold text-navy-950">{site.contact.phoneDisplay}</span>
            </span>
          </a>
        </div>
        <div className="lg:col-span-7">
          <CustomerEnquiryForm t={t} />
        </div>
      </div>
    </section>
  );
}
