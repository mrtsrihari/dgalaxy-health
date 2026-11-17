import { ArrowUpRight, Building2, MapPin, Navigation, Phone } from "lucide-react";
import type { Dictionary, Lang } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";

export function LocationSection({ t, lang }: { t: Dictionary["location"]; lang: Lang }) {
  const address = site.location.officeAddress?.[lang];
  return (
    <section id="location" aria-labelledby="location-title" className="container-page py-14 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="flex flex-col lg:col-span-2">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="location-title" className="section-title">{t.title}</h2>
          <p className="mt-3 text-navy-600">{t.intro}</p>

          <dl className="mt-6 divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-card">
            <div className="flex gap-3 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
              <div>
                <dt className="text-xs font-medium text-navy-500">{t.city.split(",")[0]}</dt>
                <dd className="text-sm font-semibold text-navy-950">{t.city}</dd>
              </div>
            </div>
            <div className="flex gap-3 p-4">
              <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
              <div>
                <dt className="text-xs font-medium text-navy-500">{t.areaLabel}</dt>
                <dd className="text-sm font-semibold text-navy-950">{t.areaValue}</dd>
              </div>
            </div>
            <div className="flex gap-3 p-4">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
              <div>
                <dt className="text-xs font-medium text-navy-500">{t.addressLabel}</dt>
                <dd className="text-sm font-semibold text-navy-950">{address ?? t.addressPending}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-4 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2">
            <a
              href={site.location.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn h-12 bg-navy-950 text-white hover:bg-navy-800"
            >
              {t.openMaps} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={telHref} className="btn h-12 bg-white text-navy-950 ring-1 ring-navy-200 hover:bg-navy-50">
              <Phone className="h-4 w-4" aria-hidden="true" /> {t.callToMeet}
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-navy-100 bg-navy-100 shadow-card lg:col-span-3">
          <iframe
            src={site.location.mapEmbedUrl}
            title={t.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-[4/3] h-full min-h-[18rem] w-full border-0 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
