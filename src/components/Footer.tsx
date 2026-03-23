import Link from "next/link";
import { site } from "@/content/rmec";

const footerLinks = [
  { href: "/vision-mandate", label: "Vision & Mandate" },
  { href: "/pillars", label: "Seven Pillars" },
  { href: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle bg-surface-footer">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-semibold text-gradient-gold">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted leading-relaxed">
              {site.legalName}
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-rmec-gold/80">
              {site.globalMissionFooter}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-body-primary">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-rmec-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold text-body-primary">Leadership</p>
            <p className="mt-3 font-serif text-lg text-rmec-gold-light">
              {site.founder}
            </p>
            <p className="text-sm text-muted">{site.founderTitle}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-footer-divider py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
