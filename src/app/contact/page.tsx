import type { Metadata } from "next";
import { site } from "@/content/rmec";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}.`,
  openGraph: {
    title: `Contact | ${site.name}`,
    description: `Reach ${site.name} regarding partnerships, ministry, and inquiries.`,
  },
};

function getContact() {
  return {
    email:
      process.env.NEXT_PUBLIC_RMEC_CONTACT_EMAIL ?? "contact@rmecinternational.org",
    phone: process.env.NEXT_PUBLIC_RMEC_CONTACT_PHONE ?? "",
  };
}

export default function ContactPage() {
  const { email, phone } = getContact();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rmec-gold/90">
          Connect
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-gradient-gold sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          For partnerships, ministry inquiries, and general information about{" "}
          {site.name}, please reach out through the channels below. You can
          replace placeholder values using environment variables{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-rmec-gold">
            NEXT_PUBLIC_RMEC_CONTACT_EMAIL
          </code>{" "}
          and{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-rmec-gold">
            NEXT_PUBLIC_RMEC_CONTACT_PHONE
          </code>
          .
        </p>
      </div>

      <div className="mt-10 max-w-xl rounded-xl border border-white/10 bg-rmec-navy-mid/40 p-8 shadow-[var(--shadow-card)]">
        <p className="text-sm font-semibold uppercase tracking-wide text-rmec-gold/90">
          Organisation
        </p>
        <p className="mt-2 font-serif text-xl font-semibold text-rmec-white">
          {site.name}
        </p>
        <p className="mt-1 text-sm text-muted">{site.legalName}</p>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-rmec-gold/90">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block text-rmec-white underline decoration-rmec-gold/50 underline-offset-4 hover:text-rmec-gold"
            >
              {email}
            </a>
          </div>
          {phone ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-rmec-gold/90">
                Phone
              </p>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="mt-2 inline-block text-rmec-white hover:text-rmec-gold"
              >
                {phone}
              </a>
            </div>
          ) : (
            <p className="text-sm text-muted">
              Phone number can be configured via{" "}
              <code className="rounded bg-white/10 px-1 text-xs">
                NEXT_PUBLIC_RMEC_CONTACT_PHONE
              </code>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
