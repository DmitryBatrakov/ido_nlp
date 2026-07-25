import Image from "next/image";
import type { Dictionary } from "@/lib/content";



export function Monogram({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={334}
      height={680}
      priority
      className={`w-auto ${className}`}
      aria-hidden="true"
    />
  );
}


export default function Logo({
  brand,
  size = "sm",
  tone = "dark",
  className = "",
}: {
  brand: Dictionary["brand"];
  size?: "sm" | "lg";
  tone?: "dark" | "light";
  className?: string;
}) {
  const large = size === "lg";
  const goldTone = tone === "dark" ? "text-gold-lt" : "text-gold-ink";

  return (
    <span className={`flex items-center ${large ? "gap-4" : "gap-2.5"} ${className}`}>
      <Monogram className={`${large ? "h-14" : "h-10"} shrink-0`} />
      <span className="flex flex-col leading-tight">
        <span
          dir="ltr"
          className={`font-wordmark tracking-[0.16em] ${large ? "text-xl sm:text-2xl" : "text-[0.95rem]"}`}
        >
          {brand.wordmark.first} {brand.wordmark.second}
        </span>
        <span
          dir="ltr"
          className={`tracking-[0.2em] ${goldTone} ${large ? "text-[0.65rem]" : "text-[0.58rem]"}`}
        >
          {brand.kicker}
        </span>
      </span>
    </span>
  );
}
