import { site } from "@/content/rmec";

export function FounderStrip() {
  return (
    <section className="border-t border-white/10 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rmec-gold/80">
          Global mission
        </p>
        <p className="mt-4 font-serif text-3xl font-semibold text-rmec-white sm:text-4xl">
          {site.founder}
        </p>
        <p className="mt-2 text-sm font-medium uppercase tracking-widest text-rmec-gold">
          {site.founderTitle}
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-sm uppercase tracking-widest text-rmec-white/70">
          {site.globalMissionFooter}
        </p>
      </div>
    </section>
  );
}
