import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation APIs (used by the language switcher).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
