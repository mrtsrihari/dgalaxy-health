import { site } from "@/config/site";

export const telHref = `tel:${site.contact.phoneE164}`;

export function whatsappHref(text?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * Normalises an Indian mobile number typed in any common format
 * (+91 98765 43210, 098765-43210, 9876543210) to 10 digits.
 * Returns null if it is not a valid Indian mobile number.
 */
export function normaliseIndianMobile(input: string): string | null {
  let digits = input.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export function formatIndianMobile(tenDigits: string): string {
  return `+91 ${tenDigits.slice(0, 5)} ${tenDigits.slice(5)}`;
}

/**
 * Opens WhatsApp in a new tab (desktop) or the app (mobile).
 * Must be called synchronously inside a user gesture to avoid popup blockers.
 */
export function openWhatsApp(text: string): string {
  const url = whatsappHref(text);
  const win = window.open(url, "_blank");
  if (win) {
    win.opener = null;
  } else {
    window.location.href = url;
  }
  return url;
}

/** vCard 3.0 escaping for text values. */
function esc(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function buildVCard(siteUrl: string): string {
  const { person, contact, location, brand } = site;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(person.firstName)};${esc(person.lastNameInitial)};;;`,
    `FN:${esc(person.name)}`,
    `ORG:${esc(brand.name)}`,
    "TITLE:Business Development Manager",
    `TEL;TYPE=CELL,VOICE:${contact.phoneE164}`,
    contact.email ? `EMAIL;TYPE=WORK,INTERNET:${contact.email}` : null,
    `ADR;TYPE=WORK:;;;${esc(location.city)};${esc(location.state)};;${esc(location.country)}`,
    siteUrl ? `URL:${siteUrl}` : null,
    `NOTE:${esc(`${person.qualification} · Business Development Manager · ${brand.name} · Serving ${location.city} and surrounding districts. WhatsApp: ${contact.phoneDisplay}`)}`,
    "END:VCARD",
  ].filter(Boolean);
  // vCard requires CRLF line endings.
  return lines.join("\r\n") + "\r\n";
}
