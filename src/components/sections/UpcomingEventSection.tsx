import Image from "next/image";
import Link from "next/link";
import { upcomingEvent } from "@/content/upcoming-event";
import { EventSupportButton } from "@/components/sections/EventSupportButton";

export function UpcomingEventSection() {
  return (
    <section
      className="border-t border-border-subtle bg-surface-band py-16 sm:py-20"
      aria-labelledby="upcoming-event-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rmec-gold/90">
              Upcoming event
            </p>
            <h2
              id="upcoming-event-heading"
              className="mt-3 font-serif text-3xl font-bold leading-tight text-body-primary sm:text-4xl"
            >
              {upcomingEvent.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {upcomingEvent.subtitle}
            </p>
            <figure className="mt-6 border-l-2 border-rmec-gold/60 pl-4">
              <blockquote className="font-serif text-lg italic leading-relaxed text-body-primary/90 sm:text-xl">
                “{upcomingEvent.verse.text}”
              </blockquote>
              <figcaption className="mt-2 text-sm font-medium text-rmec-gold">
                {upcomingEvent.verse.ref}
              </figcaption>
            </figure>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/founder"
                className="inline-flex items-center justify-center rounded-md bg-rmec-gold px-5 py-3 text-sm font-semibold text-rmec-navy-deep shadow-[var(--shadow-gold-glow)] transition hover:bg-rmec-gold-light"
              >
                More
              </Link>
              <EventSupportButton />
            </div>
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-rmec-gold/90">
                Launch pillars
              </p>
              <ul className="mt-4 space-y-3">
                {upcomingEvent.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="flex gap-3 border-b border-border-subtle pb-3 last:border-0 last:pb-0"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rmec-gold"
                      aria-hidden
                    />
                    <div>
                      <p className="text-sm font-semibold text-body-primary">
                        {h.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">
                        {h.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-panel shadow-[var(--shadow-card)] ring-1 ring-rmec-gold/15">
              <Image
                src={upcomingEvent.imageSrc}
                alt={upcomingEvent.imageAlt}
                width={720}
                height={1280}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
