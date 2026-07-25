"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { localeName, locales, type Locale } from "@/lib/i18n";
import { FlagIL, FlagUS } from "./Flags";

const flags: Record<Locale, typeof FlagIL> = {
  he: FlagIL,
  en: FlagUS,
};

export default function LangSwitch({ className = "" }: { className?: string }) {
  const active = useLocale() as Locale;
  const other = (locales.find((l) => l !== active) ?? active) as Locale;
  const Flag = flags[other];

  return (
    <Link
      href="/"
      locale={other}
      aria-label={localeName[other]}
      title={localeName[other]}
      className={`flex h-5 w-7 items-center justify-center overflow-hidden rounded-sm ring-1 ring-cream/30 opacity-80 transition hover:opacity-100 hover:ring-gold-lt ${className}`}
    >
      <Flag className="h-full w-full object-cover" />
    </Link>
  );
}
