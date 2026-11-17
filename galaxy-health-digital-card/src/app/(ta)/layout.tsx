import type { ReactNode } from "react";
import { RootDocument } from "@/components/RootDocument";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata("ta");

export default function TamilLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="ta">{children}</RootDocument>;
}
