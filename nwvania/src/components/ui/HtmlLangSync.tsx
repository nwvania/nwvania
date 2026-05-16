"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n/LangContext";

export default function HtmlLangSync() {
  const { lang } = useLang();

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  return null;
}
