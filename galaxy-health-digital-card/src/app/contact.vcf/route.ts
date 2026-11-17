import { buildVCard } from "@/lib/contact";
import { BUILD_SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";

/** Downloadable contact card. Served as a real file so iOS and Android both open "Add contact". */
export function GET() {
  return new Response(buildVCard(BUILD_SITE_URL), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="M-Thirumalairaja.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
