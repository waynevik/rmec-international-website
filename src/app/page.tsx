import type { Metadata } from "next";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { Hero } from "@/components/sections/Hero";
import { SixPillarsSection } from "@/components/sections/SixPillarsSection";
import { site } from "@/content/rmec";

export const metadata: Metadata = {
  title: "Home",
  description: site.taglineShort,
  openGraph: {
    title: `${site.name} — Home`,
    description: site.taglineShort,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SixPillarsSection />
      <FounderStrip />
    </>
  );
}
