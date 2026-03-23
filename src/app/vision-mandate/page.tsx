import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { corePurpose, mandate, site, vision } from "@/content/rmec";

export const metadata: Metadata = {
  title: "Vision & Mandate",
  description: `${site.name} apostolic vision, mandate, and core purpose.`,
  openGraph: {
    title: `Vision & Mandate | ${site.name}`,
    description: vision.conference,
  },
};

export default function VisionMandatePage() {
  const visionParagraphs = vision.long.split(/\n\n+/).filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rmec-gold/90">
          {site.name}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-gradient-gold sm:text-5xl">
          Apostolic vision & mandate
        </h1>
        <p className="mt-4 text-lg text-body-primary/85">{vision.tagline}</p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3 space-y-10">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-rmec-gold-light">
              Apostolic vision statement
            </h2>
            <div className="mt-4 max-w-prose space-y-4 text-muted leading-relaxed">
              {visionParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="glass-panel p-6 sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-body-primary">
              Short version (conferences & banners)
            </h2>
            <p className="mt-3 max-w-prose text-body-primary/85 leading-relaxed">
              {vision.conference}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-rmec-gold-light">
              Apostolic mandate
            </h2>
            <div className="mt-4 max-w-prose space-y-4 text-muted leading-relaxed">
              {mandate.intro.split(/\n\n+/).filter(Boolean).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-rmec-gold-light">
              {mandate.areasTitle}
            </h2>
            <p className="mt-3 max-w-prose text-muted">{mandate.areasIntro}</p>
            <ol className="mt-6 space-y-6">
              {mandate.areas.map((a, i) => (
                <li key={a.title} className="flex gap-4">
                  <span className="font-serif text-2xl font-bold text-rmec-gold/60">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-body-primary">{a.title}</h3>
                    <p className="mt-2 max-w-prose text-sm text-muted leading-relaxed">
                      {a.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="glass-panel border-rmec-gold/25 bg-surface-dim p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-rmec-gold-light">
              Core purpose
            </h2>
            <p className="mt-4 max-w-prose text-body-primary/90 leading-relaxed">
              {corePurpose}
            </p>
            <p className="mt-6 max-w-prose border-l-2 border-rmec-gold/50 pl-4 text-sm italic text-body-primary/80">
              {site.apostolicDeclaration}
            </p>
          </section>

          <Link
            href="/pillars"
            className="inline-flex text-sm font-semibold text-rmec-gold hover:text-rmec-gold-light"
          >
            View the seven pillars of influence →
          </Link>
        </div>

        <aside className="lg:col-span-2">
          <div className="sticky top-24 space-y-6">
            <div className="glass-panel overflow-hidden">
              <Image
                src="/brand/rmec-official-logo.png"
                alt="RMEC International official logo"
                width={640}
                height={900}
                className="h-auto w-full object-contain bg-surface-panel p-6"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
            <p className="text-center text-xs uppercase tracking-widest text-body-primary/50">
              {site.ribbonGoals}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
