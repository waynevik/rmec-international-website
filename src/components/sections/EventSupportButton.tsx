"use client";

import { useSupportConsecration } from "@/components/support-consecration/support-consecration-provider";

const btnClass =
  "inline-flex items-center justify-center rounded-md border border-rmec-gold/50 px-5 py-3 text-sm font-semibold text-rmec-gold transition hover:border-rmec-gold hover:bg-nav-hover";

export function EventSupportButton() {
  const { openSupportModal } = useSupportConsecration();
  return (
    <button type="button" className={btnClass} onClick={openSupportModal}>
      Support
    </button>
  );
}
