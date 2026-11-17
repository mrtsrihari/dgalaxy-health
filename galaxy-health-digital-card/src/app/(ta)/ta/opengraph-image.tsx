import { ogSize, renderOgImage } from "@/lib/og";

export const dynamic = "force-static";
export const alt = "M. Thirumalairaja — Business Development Manager, Galaxy Health Insurance, Salem";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
