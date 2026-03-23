"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { supportConsecration } from "@/content/support-consecration";

type SupportConsecrationContextValue = {
  openSupportModal: () => void;
  closeSupportModal: () => void;
};

const SupportConsecrationContext =
  createContext<SupportConsecrationContextValue | null>(null);

function contactEmail() {
  return (
    process.env.NEXT_PUBLIC_RMEC_CONTACT_EMAIL ?? "contact@rmecinternational.org"
  );
}

export function useSupportConsecration() {
  const ctx = useContext(SupportConsecrationContext);
  if (!ctx) {
    throw new Error(
      "useSupportConsecration must be used within SupportConsecrationProvider",
    );
  }
  return ctx;
}

export function SupportConsecrationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openSupportModal = useCallback(() => setOpen(true), []);
  const closeSupportModal = useCallback(() => setOpen(false), []);
  const titleId = useId();
  const email = contactEmail();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSupportModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeSupportModal]);

  return (
    <SupportConsecrationContext.Provider
      value={{ openSupportModal, closeSupportModal }}
    >
      {children}
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          aria-hidden={false}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm dark:bg-black/60"
            aria-label="Close support dialog"
            onClick={closeSupportModal}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[101] mt-auto max-h-[min(92vh,820px)] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border-subtle bg-surface-header px-5 pb-8 pt-6 shadow-[var(--shadow-card)] sm:mt-0 sm:rounded-xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id={titleId}
                className="font-serif text-xl font-semibold text-gradient-gold sm:text-2xl"
              >
                {supportConsecration.title}
              </h2>
              <button
                type="button"
                className="shrink-0 rounded-md p-1.5 text-body-primary/70 transition-colors hover:bg-nav-hover hover:text-body-primary"
                onClick={closeSupportModal}
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {supportConsecration.intro}
            </p>
            <ul className="mt-6 space-y-5">
              {supportConsecration.ways.map((w) => (
                <li key={w.heading}>
                  <p className="text-sm font-semibold text-rmec-gold">
                    {w.heading}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-body-primary/90">
                    {w.body}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {supportConsecration.closing}
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center rounded-md bg-rmec-gold px-4 py-2.5 text-sm font-semibold text-rmec-navy-deep transition hover:bg-rmec-gold-light"
              >
                Email {email}
              </a>
              <Link
                href="/contact"
                onClick={closeSupportModal}
                className="inline-flex items-center justify-center rounded-md border border-rmec-gold/50 px-4 py-2.5 text-sm font-semibold text-rmec-gold transition hover:border-rmec-gold hover:bg-nav-hover"
              >
                Contact page
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </SupportConsecrationContext.Provider>
  );
}
