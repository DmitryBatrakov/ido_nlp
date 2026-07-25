import type { Dictionary } from "@/lib/content";
import type { routing } from "@/i18n/routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Dictionary;
  }
}
