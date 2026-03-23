import type { Metadata } from "next";
import {
  sevenPillars,
  sevenPillarsIntro,
  sevenPillarsSummary,
  site,
} from "@/content/rmec";
import { pillarCardClass, pillarDotClass } from "@/lib/pillar-styles";

export const metadata: Metadata = {
  title: "Seven Pillars",
  description: `${site.name} — seven pillars of influence framework.`,
  openGraph: {
    title: `Seven Pillars | ${site.name}`,
    description: sevenPillarsSummary,
  },
};

export default function PillarsPage() {
  const introParagraphs = sevenPillarsIntro.split(/\n\n+/).filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rmec-gold/90">
          Framework
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-gradient-gold sm:text-5xl">
          Seven pillars of influence
        </h1>
        <div className="mt-6 max-w-prose space-y-4 text-muted leading-relaxed">
          {introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-14 space-y-8">
        {sevenPillars.map((p) => (
          <article
            key={p.n}
            className={`rounded-xl border p-6 ring-1 sm:p-8 ${pillarCardClass(p.accent)}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={`mt-1 inline-flex h-3 w-3 shrink-0 rounded-full ${pillarDotClass(p.accent)}`}
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-body-primary/60">
                    Pillar {p.n}
                  </p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold text-body-primary">
                    {p.title}
                  </h2>
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-body-primary/85 leading-relaxed">
              {p.intro}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-rmec-gold/90">
                  Operational arm
                </p>
                <p className="mt-1 font-medium text-body-primary">
                  {p.operationalArm}
                </p>
                {p.platform ? (
                  <>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-rmec-gold/90">
                      Platform
                    </p>
                    <p className="mt-1 font-medium text-body-primary">
                      {p.platform}
                    </p>
                  </>
                ) : null}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-rmec-gold/90">
                  Key focus
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {p.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-3xl text-center text-lg text-body-primary/90 leading-relaxed">
        {sevenPillarsSummary}
      </p>
    </div>
  );
}
