import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EventSupportButton } from "@/components/sections/EventSupportButton";
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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="section-shell grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rmec-gold/90">
            Upcoming consecration
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-gradient-gold sm:text-4xl">
            Apostolic Office Consecration &amp; Send-off Thanksgiving
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body-primary/85">
            Join us as we celebrate and commission{" "}
            <strong className="text-body-primary">{founderProfile.shortName}</strong>{" "}
            in this special apostolic consecration moment.
          </p>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div className="glass-panel p-4">
              <dt className="text-xs font-semibold uppercase tracking-widest text-rmec-gold/90">
                Date
              </dt>
              <dd className="mt-1 text-base font-semibold text-body-primary">
                14th April 2026
              </dd>
            </div>
            <div className="glass-panel p-4">
              <dt className="text-xs font-semibold uppercase tracking-widest text-rmec-gold/90">
                Time
              </dt>
              <dd className="mt-1 text-base font-semibold text-body-primary">
                From 2:00 PM
              </dd>
            </div>
            <div className="glass-panel p-4 sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-widest text-rmec-gold/90">
                Venue
              </dt>
              <dd className="mt-1 text-base font-semibold text-body-primary">
                Nuru Palace, Nakuru
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <EventSupportButton />
            <Link href="/contact" className="cta-secondary">
              Contact for support details
            </Link>
          </div>
        </div>

        <div className="glass-panel overflow-hidden">
          <Image
            src="/brand/founder-consecration-2026.png"
            alt="Apostolic office consecration and send-off thanksgiving poster for Vincent Prince Obonyo"
            width={1000}
            height={1600}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 460px"
            priority
          />
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-3xl">
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
      <div className="glass-panel mt-10 space-y-14 p-6 sm:p-8">
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
    </div>
  );
}
