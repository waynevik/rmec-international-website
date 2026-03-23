"use client";

import { useSupportConsecration } from "@/components/support-consecration/support-consecration-provider";

const btnClass = "cta-secondary";

export function EventSupportButton() {
  const { openSupportModal } = useSupportConsecration();
  return (
    <button type="button" className={btnClass} onClick={openSupportModal}>
      Support
    </button>
  );
}
