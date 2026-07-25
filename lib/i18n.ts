export const locales = ["he", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "he";

export const dir: Record<Locale, "rtl" | "ltr"> = {
  he: "rtl",
  en: "ltr",
};

export const localeName: Record<Locale, string> = {
  he: "עברית",
  en: "English",
};

export const htmlLang: Record<Locale, string> = {
  he: "he-IL",
  en: "en-US",
};

export const ogLocale: Record<Locale, string> = {
  he: "he_IL",
  en: "en_US",
};
