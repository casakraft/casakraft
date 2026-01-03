export const GA_ID = "G-WXLLXZ9HRM";

export function gaEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return; // prevents errors if GA loads late

  window.gtag("event", name, params);
}
