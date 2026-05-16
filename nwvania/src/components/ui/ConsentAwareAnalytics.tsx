"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function ConsentAwareAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("nwvania-cookie-consent");
    if (stored === "accepted") {
      setConsented(true);
      return;
    }
    // Watch for consent being granted in this session
    const handler = () => {
      if (localStorage.getItem("nwvania-cookie-consent") === "accepted") {
        setConsented(true);
      }
    };
    window.addEventListener("storage", handler);
    // Poll once per second for same-tab consent (storage event doesn't fire in same tab)
    const interval = setInterval(() => {
      if (localStorage.getItem("nwvania-cookie-consent") === "accepted") {
        setConsented(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      window.removeEventListener("storage", handler);
      clearInterval(interval);
    };
  }, []);

  if (!consented) return null;
  return <Analytics />;
}
