"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function getConsent(): string | null {
  try { return localStorage.getItem("nwvania-cookie-consent"); } catch { return null; }
}

export default function ConsentAwareAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (getConsent() === "accepted") { setConsented(true); return; }

    const handler = () => { if (getConsent() === "accepted") setConsented(true); };
    window.addEventListener("storage", handler);
    const interval = setInterval(() => {
      if (getConsent() === "accepted") { setConsented(true); clearInterval(interval); }
    }, 1000);
    return () => { window.removeEventListener("storage", handler); clearInterval(interval); };
  }, []);

  if (!consented) return null;
  return <Analytics />;
}
