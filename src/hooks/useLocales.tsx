"use client";

import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import en from "../locales/en";
import ja from "../locales/ja";

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    // LocaleProvider がない場合のフォールバック
    const defaultLocale = "ja";
    const defaultTranslations = defaultLocale === "ja" ? ja : en;

    const t = (key: keyof typeof defaultTranslations) =>
      defaultTranslations[key];

    return { locale: defaultLocale, t };
  }

  return context;
};
