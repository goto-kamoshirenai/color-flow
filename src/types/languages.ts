import ja from "@/locales/ja";
import en from "@/locales/en";

export type Locale = "en" | "ja";

export type Translations = typeof ja & typeof en;

export type TranslationKey = keyof Translations;
