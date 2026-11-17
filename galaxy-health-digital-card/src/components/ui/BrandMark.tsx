import Image from "next/image";
import { site } from "@/config/site";

/**
 * Brand mark. Shows the official logo when `site.brand.logo` is set;
 * otherwise a neutral placeholder (a shield with an orbit line) so the
 * header never looks broken. Replace with the official logo before launch.
 */
export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  if (site.brand.logo) {
    return (
      <Image
        src={site.brand.logo}
        alt={site.brand.name}
        width={48}
        height={48}
        className={`rounded-lg object-contain ${className}`}
        priority
      />
    );
  }
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#182d52" />
          <stop offset="1" stopColor="#081329" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#bm-g)" />
      <path d="M20 8.5 29 12v7.2c0 6-3.9 10.4-9 12.3-5.1-1.9-9-6.3-9-12.3V12l9-3.5Z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <ellipse cx="20" cy="20" rx="12.5" ry="4.2" fill="none" stroke="#8eb3ff" strokeWidth="1.3" transform="rotate(-24 20 20)" />
      <circle cx="30.4" cy="15.6" r="1.7" fill="#8eb3ff" />
    </svg>
  );
}
