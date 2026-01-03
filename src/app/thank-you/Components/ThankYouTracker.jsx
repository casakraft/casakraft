"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { gaEvent } from "@/app/lib/ga";

export default function ThankYouTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only fire conversion if user landed here after a real successful submission
    const lead = searchParams.get("lead");
    if (lead !== "1") return;

    gaEvent("form_submit", {
      event_category: "conversion",
      event_label: "lead_form_thank_you",
    });
  }, [searchParams]);

  return null;
}
