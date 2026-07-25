import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "@/lib/i18n";

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Both languages are prefixed: /he and /en.
  localePrefix: "always",
});
