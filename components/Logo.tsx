import { brand } from "@/lib/content";


export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-1"
        fill="currentColor"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        IS
      </text>
    </svg>
  );
}

/**
 * tone="dark"  — локап на тёмной полосе (шапка, hero, подвал)
 * tone="light" — на кремовом развороте: золото уходит в более
 *                тёмный оттенок, иначе подпись теряет контраст
 */
export default function Logo({
  size = "sm",
  tone = "dark",
  className = "",
}: {
  size?: "sm" | "lg";
  tone?: "dark" | "light";
  className?: string;
}) {
  const large = size === "lg";
  const goldTone = tone === "dark" ? "text-gold-lt" : "text-gold-ink";

  return (
    <span className={`flex items-center ${large ? "gap-4" : "gap-2.5"} ${className}`}>
      <Monogram className={`${large ? "h-13 w-13" : "h-9 w-9"} shrink-0 ${goldTone}`} />
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
