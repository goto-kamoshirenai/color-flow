"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import en from "../locales/en";
import ja from "../locales/ja";
import { Locale, TranslationKey, Translations } from "@/types/languages";

type LocaleContextType = {
  locale: Locale;
  t: (key: TranslationKey) => string;
  setLocale: (newLocale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined
);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  // 初期値としてローカルストレージから取得
  const [locale, setLocaleState] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    return savedLocale || "ja"; // 保存された言語がない場合は "ja"
  });

  // ローカルストレージに言語を保存する関数
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale); // ローカルストレージに保存
  };

  const t = (key: TranslationKey) => {
    const translations = locale === "ja" ? ja : en;
    return (translations as Translations)[key];
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && savedLocale !== locale) {
      setLocaleState(savedLocale);
    }
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
