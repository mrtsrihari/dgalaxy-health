import { getDictionary, type Lang } from "@/i18n/dictionaries";
import { site } from "@/config/site";
import { BUILD_SITE_URL } from "@/lib/site-url";
import { Header } from "@/components/Header";
import { HeroProfileCard } from "@/components/HeroProfileCard";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutSection } from "@/components/AboutSection";
import { EnquirySection } from "@/components/EnquirySection";
import { AgentSection } from "@/components/AgentSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

function jsonLd(lang: Lang) {
  const t = getDictionary(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.person.name,
    jobTitle: t.hero.designation,
    hasCredential: site.person.qualification,
    worksFor: { "@type": "Organization", name: site.brand.name },
    telephone: site.contact.phoneE164,
    address: { "@type": "PostalAddress", addressLocality: site.location.city, addressRegion: site.location.state, addressCountry: "IN" },
    areaServed: `${site.location.city}, ${site.location.state}`,
    knowsLanguage: ["ta", "en"],
    ...(BUILD_SITE_URL ? { url: lang === "en" ? BUILD_SITE_URL : `${BUILD_SITE_URL}/ta` } : {}),
  };
}

export function CardPage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />
      <Header t={t} lang={lang} />
      <main id="main" tabIndex={-1} className="overflow-x-clip focus:outline-none">
        <HeroProfileCard t={t} lang={lang} />
        <ServicesGrid t={t.services} />
        <AboutSection t={t.about} designation={t.hero.designation} />
        <EnquirySection t={t} />
        <AgentSection t={t} />
        <LocationSection t={t.location} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />
      <FloatingWhatsAppButton label={t.floating.label} greeting={t.hero.whatsappGreeting} />
    </>
  );
}
