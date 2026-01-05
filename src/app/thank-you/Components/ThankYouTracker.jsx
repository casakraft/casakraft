"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { gaEvent } from "@/app/lib/ga";

export default function ThankYouTracker() {
  const searchParams = useSearchParams();
  const lead = searchParams.get("lead");

  useEffect(() => {
    if (lead !== "1") return;

    gaEvent("form_submit", {
      event_category: "conversion",
      event_label: "lead_form_thank_you",
    });
  }, [lead]);

  return null;
}
