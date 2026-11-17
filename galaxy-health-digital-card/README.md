# M. Thirumalairaja — Galaxy Health Insurance · Digital Visiting Card

A bilingual (English / தமிழ்) digital visiting card for **M. Thirumalairaja**, Business Development Manager, Galaxy Health Insurance, Salem.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Lucide icons and `qrcode.react`. Every page is statically generated, so it runs on Vercel's free Hobby plan with no server cost.

---

## 1. Design rationale (short)

| Decision | Why |
|---|---|
| **The hero *is* the card** | Someone who scans the QR code sees the name, role, company, city, **Call** and **WhatsApp** on the first screen (verified at 360 px) — the "understood in 5 seconds" goal. |
| **Action hierarchy** | Call (white, primary) → WhatsApp (green) → Save Contact / QR / Share (quiet tiles). After the hero scrolls away, a floating WhatsApp button takes over. |
| **Deep navy + one accent blue** | Calm, trustworthy financial-services look. Glass effects only on the hero tiles, desktop QR panel and sticky header. |
| **Separate URLs per language** (`/` English, `/ta` Tamil) | Each page is fully server-rendered in its own language with the correct `<html lang>`, `hreflang` tags and a shareable link. The language switch keeps your current section (e.g. `/ta#enquiry`). |
| **Forms hand off to WhatsApp** | There's no backend, so the site never claims an enquiry was "received". The success screen says the message is ready in WhatsApp and that the visitor still needs to tap **Send**. |
| **Desktop QR in the hero** | Someone viewing on a laptop can move the card to their phone in one scan. |
| **No invented content** | No testimonials, awards, policy benefits or office address. Policy details are described as "as stated in the policy wording". |

## 2. Project structure

```
src/
├── app/
│   ├── (en)/                 # English root layout (<html lang="en">)
│   │   ├── layout.tsx
│   │   ├── page.tsx          # → /
│   │   └── opengraph-image.tsx
│   ├── (ta)/                 # Tamil root layout (<html lang="ta">)
│   │   ├── layout.tsx
│   │   └── ta/page.tsx       # → /ta
│   ├── contact.vcf/route.ts  # → /contact.vcf (static vCard download)
│   ├── globals.css           # Tailwind v4 theme: colours, shadows, components
│   ├── icon.svg  robots.ts  sitemap.ts
├── components/
│   ├── Header.tsx  LanguageSwitcher.tsx  MobileMenu.tsx  ShareButton.tsx
│   ├── HeroProfileCard.tsx  ContactActions.tsx  QRCodeModal.tsx  HeroQR.tsx
│   ├── ServicesGrid.tsx  EnquireLink.tsx  AboutSection.tsx
│   ├── EnquirySection.tsx  CustomerEnquiryForm.tsx
│   ├── AgentSection.tsx    AgentRegistrationForm.tsx
│   ├── LocationSection.tsx  Footer.tsx  FloatingWhatsAppButton.tsx
│   ├── CardPage.tsx  RootDocument.tsx
│   ├── forms/  fields.tsx · useWhatsAppForm.ts · FormStates.tsx
│   └── ui/     BrandMark.tsx · WhatsAppIcon.tsx · Toast.tsx
├── config/site.ts            # ← ALL business details live here
├── i18n/dictionaries.ts      # ← ALL English + Tamil text lives here
└── lib/  contact.ts · site-url.ts · use-page-url.ts · metadata.ts · og.tsx
```

Server components render all the static content. Client components (`"use client"`) are used only where something is interactive: the language switch, menu, share, QR, forms and floating button.

## 3. Install and run locally

Requires **Node.js 20.9+** (Node 22 LTS recommended).

```bash
npm install
npm run dev          # http://localhost:3000
```

Production check:

```bash
npm run build
npm start
npm run typecheck    # optional
```

To test on your phone on the same Wi‑Fi, open `http://<your-computer-ip>:3000`. In local preview the QR modal shows a note that the code points to the local address. After deployment it uses the live URL automatically.

## 4. Deploy to Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to **vercel.com → Add New → Project**, import the repository and keep the defaults (Framework: Next.js). Click **Deploy**.
3. You get a URL like `https://thirumalairaja.vercel.app`. To choose the name, go to **Project → Settings → Domains** and edit the `.vercel.app` subdomain.
4. **Redeploy once after renaming the domain**, so the QR code, vCard and SEO tags pick up the new address.

**How the QR and vCard URL is chosen:**
- If `NEXT_PUBLIC_SITE_URL` is set, that URL is used.
- Otherwise, on Vercel, the project's production domain is used (from `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel provides automatically).
- Otherwise, the browser's current address is used.

Nothing is hard-coded to localhost.

When you add a custom domain later, set **`NEXT_PUBLIC_SITE_URL`** under Project → Settings → Environment Variables (for example `https://thirumalairaja.in`) and redeploy.

Optional environment variables are listed in `.env.example`.

## 5. Editing content

- **Phone, name, photo, logo, address, map, compliance text:** `src/config/site.ts`
- **Any English or Tamil wording:** `src/i18n/dictionaries.ts`. Both languages share one TypeScript type, so a missing Tamil string fails the build.
- **Colours and typography:** the `@theme` block in `src/app/globals.css`

## 6. ⚠️ Replace or confirm before production

| # | Item | Where | Current state |
|---|---|---|---|
| 1 | **Professional photograph** (square, ≥ 600×600, neutral background) | Put it at `public/profile.jpg`, then set `person.photo: "/profile.jpg"` | "MT" monogram placeholder |
| 2 | **Official Galaxy Health Insurance logo**, plus written permission / brand guidelines for using it | `public/brand/…`, then set `brand.logo` | Neutral placeholder mark |
| 3 | **Office address** (English + Tamil) | `location.officeAddress` | Hidden. The site asks visitors to call to arrange a meeting. |
| 4 | **Google Maps link and embed for the office** | `NEXT_PUBLIC_OFFICE_MAP_URL`, `NEXT_PUBLIC_OFFICE_MAP_EMBED_URL` (or `site.ts`) | Shows Salem city |
| 5 | **Regulatory footer text** (IRDAI registration no., CIN, registered office, as supplied by the insurer's compliance team) | `compliance.insurerRegulatoryText` | Hidden until provided |
| 6 | **Compliance review of all wording and the disclaimer.** Many insurers require marketing material to be pre-approved. | `dictionaries.ts` | Generic, conservative IRDAI-style wording |
| 7 | **Tamil spelling of the name**, if he prefers it on the Tamil page | `person.nameTa` | English spelling on both pages |
| 8 | **Native-speaker proofread of the Tamil text** | `dictionaries.ts` (`ta`) | Written carefully, but not yet reviewed by a native speaker |
| 9 | **Business email** (optional) | `contact.email` | Hidden |
| 10 | **Confirm the phone/WhatsApp number** +91 94433 66128 | `contact` | As supplied |
| 11 | **Final domain** | Vercel → Domains (+ `NEXT_PUBLIC_SITE_URL` if custom) | Uses the Vercel subdomain automatically |
| 12 | **Exact official company name** for the disclaimer (e.g. "Galaxy Health Insurance Company Limited") | `brand.name` / footer text | "Galaxy Health Insurance" |

## 7. What was tested

- `next build` passes with no TypeScript errors; all routes are static.
- Widths 360, 390, 430, 768 and 1280 px in English and Tamil: no horizontal overflow and no console errors.
- Validation messages in both languages. The first invalid field gets focus. Errors update live after the first submit attempt.
- Indian mobile numbers are normalised (`+91 98765-43210` → `+91 98765 43210`). Numbers that don't start with 6–9 are rejected.
- WhatsApp messages open `wa.me/919443366128` with a formatted, prefilled message. A service card's "Enquire" link pre-selects that interest in the form.
- `/contact.vcf` returns a valid vCard 3.0 (`text/vcard`, CRLF line endings) that downloads as `M-Thirumalairaja.vcf`.
- The QR code was decoded and matches the page URL. QR PNG download works. Share falls back to copying the link.
- QR dialog: Esc closes it, focus is trapped while open, and clicking the backdrop closes it. Mobile menu: Esc closes it and focus returns to the menu button.
- Switching language keeps the section anchor (`/#services` → `/ta#services`).

**Not tested here — please check on real devices:** the iOS and Android "Add contact" flow, the WhatsApp app hand-off, the native share sheet, and the live Google Maps embed (the test environment has no internet access).
