import type { Metadata } from "next";
import Link from "next/link";
import {
  founderJourneySections,
  founderProfile,
} from "@/content/founder-journey";
import { site } from "@/content/rmec";

export const metadata: Metadata = {
  title: "Founder",
  description: `${founderProfile.fullName} — ${founderProfile.tagline}`,
  openGraph: {
    title: `Founder | ${site.name}`,
    description: founderProfile.tagline,
  },
};

export default function FounderPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rmec-gold/90">
        Leadership
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-gradient-gold sm:text-5xl">
        {founderProfile.fullName}
      </h1>
      <p className="mt-2 text-lg font-medium text-rmec-gold">
        {founderProfile.title}
      </p>
      <p className="mt-6 text-base font-medium leading-relaxed text-body-primary/90">
        {founderProfile.tagline}
      </p>
      <div className="mt-10 space-y-14">
        {founderJourneySections.map((section) => (
          <section key={section.id} aria-labelledby={`founder-${section.id}`}>
            <h2
              id={`founder-${section.id}`}
              className="font-serif text-2xl font-semibold text-body-primary sm:text-3xl"
            >
              {section.heading}
            </h2>
            <div className="mt-6 space-y-8">
              {section.subsections.map((sub, i) => (
                <div key={i}>
                  {sub.subheading ? (
                    <h3 className="font-serif text-lg font-semibold text-rmec-gold-light sm:text-xl">
                      {sub.subheading}
                    </h3>
                  ) : null}
                  <div
                    className={
                      sub.subheading
                        ? "mt-4 space-y-4"
                        : "mt-0 space-y-4"
                    }
                  >
                    {sub.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-muted sm:text-base"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  {sub.list?.length ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body-primary/90 sm:text-base">
                      {sub.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-14 flex flex-col gap-3 border-t border-border-subtle pt-10 sm:flex-row sm:flex-wrap">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-rmec-gold hover:text-rmec-gold-light"
        >
          ← Back to home
        </Link>
        <Link
          href="/vision-mandate"
          className="inline-flex text-sm font-semibold text-rmec-gold hover:text-rmec-gold-light"
        >
          Vision &amp; mandate →
        </Link>
      </div>
    </div>
  );
}
