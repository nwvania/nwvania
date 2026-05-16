"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang } from "./translations";

interface LangContextValue {
  lang: Lang;
  t: typeof translations["en"];
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  t: translations["en"],
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("nwvania-lang") as Lang | null;
    if (stored === "ar" || stored === "en") {
      applyLang(stored);
      setLangState(stored);
    }
  }, []);

  function setLang(l: Lang) {
    localStorage.setItem("nwvania-lang", l);
    applyLang(l);
    setLangState(l);
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function applyLang(l: Lang) {
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  if (l === "ar") {
    document.documentElement.style.fontFamily =
      "var(--font-arabic), 'Noto Sans Arabic', 'Arial', sans-serif";
  } else {
    document.documentElement.style.fontFamily = "";
  }
}

export function useLang() {
  return useContext(LangContext);
}
