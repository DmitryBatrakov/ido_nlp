import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { getContent } from "@/lib/content";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // Our messages are the typed content dictionary for the locale.
  return {
    locale,
    messages: getContent(locale),
  };
});
