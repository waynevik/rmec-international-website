import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/rmec";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[120%] -translate-x-1/2 opacity-40"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_0%,transparent_0deg,rgba(212,175,55,0.15)_45deg,transparent_90deg,transparent_180deg,rgba(212,175,55,0.08)_220deg,transparent_280deg)]"
          style={{ filter: "blur(2px)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-16">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rmec-gold/90">
            {site.ribbonGoals}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            <span className="text-gradient-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]">
              {site.name}
            </span>
          </h1>
          <p className="mt-2 text-lg text-body-primary/85 sm:text-xl">
            {site.legalName}
          </p>
          <p className="mt-4 max-w-xl text-sm italic leading-relaxed text-body-primary/75 sm:text-base">
            {site.ecosystemLine}
          </p>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-body-primary/90">
            {site.taglineShort}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/vision-mandate"
              className="inline-flex items-center justify-center rounded-md bg-rmec-gold px-5 py-3 text-sm font-semibold text-rmec-navy-deep shadow-[var(--shadow-gold-glow)] transition hover:bg-rmec-gold-light"
            >
              Apostolic vision & mandate
            </Link>
            <Link
              href="/pillars"
              className="inline-flex items-center justify-center rounded-md border border-rmec-gold/50 px-5 py-3 text-sm font-semibold text-rmec-gold transition hover:border-rmec-gold hover:bg-nav-hover"
            >
              Seven pillars framework
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rmec-gold/20 via-transparent to-rmec-royal/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border-subtle shadow-[var(--shadow-card)] ring-1 ring-rmec-gold/20">
              <Image
                src="/brand/rmec-banner-1.png"
                alt="RMEC International — global mission and apostolic ecosystem"
                width={900}
                height={1200}
                className="h-auto w-full object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
