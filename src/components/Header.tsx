"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/vision-mandate", label: "Vision & Mandate" },
  { href: "/pillars", label: "Pillars" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-nav-active text-rmec-gold-light"
          : "text-body-primary/90 hover:bg-nav-hover hover:text-rmec-gold"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface-header backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-md ring-1 ring-rmec-gold/40 shadow-[var(--shadow-gold-glow)]">
            <Image
              src="/brand/rmec-official-logo.png"
              alt="RMEC International official logo"
              fill
              className="object-contain p-0.5"
              sizes="44px"
              priority
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-wide text-gradient-gold">
              RMEC
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-body-primary/70">
              International
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border-medium p-2 text-body-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border-subtle bg-surface-header-mobile px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
