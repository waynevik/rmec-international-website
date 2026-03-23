import Link from "next/link";
import { sixPillars, sixPillarsIntro, site } from "@/content/rmec";
import { pillarCardClass, pillarDotClass } from "@/lib/pillar-styles";

export function SixPillarsSection() {
  return (
    <section className="border-t border-border-subtle bg-surface-band py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-gradient-gold sm:text-4xl">
            Six pillars of the RMEC ecosystem
          </h2>
          <p className="mt-3 text-muted leading-relaxed">{sixPillarsIntro}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sixPillars.map((p) => (
            <article
              key={p.n}
              className={`rounded-xl border p-6 ring-1 backdrop-blur-sm transition hover:ring-rmec-gold/30 ${pillarCardClass(p.accent)}`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${pillarDotClass(p.accent)}`}
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-body-primary/60">
                    Pillar {p.n}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-body-primary">
                    {p.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-body-primary/80">
                {p.summary}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-rmec-gold/90">
                Operational arm
              </p>
              <p className="mt-1 text-sm font-medium text-body-primary">
                {p.operationalArm}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {p.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-rmec-gold/25 bg-surface-panel p-6 sm:p-8">
          <p className="font-serif text-lg font-semibold text-rmec-gold-light">
            Apostolic declaration
          </p>
          <p className="mt-2 max-w-3xl text-body-primary/90 leading-relaxed">
            {site.apostolicDeclaration}
          </p>
          <Link
            href="/pillars"
            className="mt-6 inline-flex text-sm font-semibold text-rmec-gold hover:text-rmec-gold-light"
          >
            Explore the full seven pillars →
          </Link>
        </div>
      </div>
    </section>
  );
}
