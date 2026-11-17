/**
 * ─────────────────────────────────────────────────────────────
 *  BUSINESS DETAILS — single source of truth.
 *  Everything a customer sees (phone, links, vCard, WhatsApp)
 *  is derived from this file. Edit here, not in components.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  brand: {
    name: "Galaxy Health Insurance",
    /**
     * Path to the official logo in /public (e.g. "/brand/galaxy-logo.svg").
     * Leave null to show the neutral placeholder mark.
     * Use the official logo only as permitted by the company's brand guidelines.
     */
    logo: "/brand/galaxy-logo.png" as string | null,
  },

  person: {
    name: "M. Thirumalairaja",
    /** Optional Tamil-script spelling of the name. Shown on the Tamil page when set. */
    nameTa: null as string | null,
    firstName: "Thirumalairaja",
    lastNameInitial: "M.",
    qualification: "M.Phil (CS)",
    /**
     * Professional photo in /public (e.g. "/profile.jpg", square, ≥ 600×600).
     * Leave null to show the monogram placeholder.
     */
    photo: "/profile.jpg" as string | null,
    initials: "MT",
  },

  contact: {
    phoneDisplay: "+91 94433 66128",
    phoneE164: "+919443366128",
    /** WhatsApp number: country code + number, digits only. */
    whatsapp: "919443366128",
    /** Optional business email. Leave null to hide. */
    email: null as string | null,
  },

  location: {
    city: "Salem",
    state: "Tamil Nadu",
    country: "India",
    /**
     * Exact office address. Leave null until confirmed — the site then
     * shows only the city and asks visitors to call for meeting details.
     */
    officeAddress: {
      en: "First Floor, SJ Tower, 19-A1, LIC Colony Road, Opposite New Bus Stand, Salem - 636004, Tamil Nadu",
      ta: "முதல் தளம், SJ டவர், 19-A1, LIC காலனி ரோடு, புதிய பேருந்து நிலையம் எதிரில், சேலம் - 636004, தமிழ்நாடு",
    } as { en: string; ta: string } | null,
    mapLinkUrl:
      process.env.NEXT_PUBLIC_OFFICE_MAP_URL ||
      "https://maps.app.goo.gl/RQuWcaZBjHH3EGwW7",
    mapEmbedUrl:
      process.env.NEXT_PUBLIC_OFFICE_MAP_EMBED_URL ||
      "https://www.google.com/maps?q=11.6704437,78.1421745&z=17&output=embed",
  },

  compliance: {
    /**
     * Regulatory line for the footer, exactly as supplied by the insurer's
     * compliance team (e.g. IRDAI registration number, CIN, registered office).
     * Leave null until it has been provided — never guess these values.
     */
    insurerRegulatoryText: null as { en: string; ta: string } | null,
  },
} as const;

export type Site = typeof site;
