import type { Dictionary } from "@/lib/content";


/**
 * Brand mark — the Capricorn glyph (♑) inside a gold ring.
 * Uses a fixed metallic-gold gradient (independent of the wordmark tone).
 */
export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ido-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e7a8" />
          <stop offset="0.35" stopColor="#e0b64e" />
          <stop offset="0.7" stopColor="#c8992f" />
          <stop offset="1" stopColor="#a9781f" />
        </linearGradient>
      </defs>
      <circle
        cx="120"
        cy="120"
        r="92"
        fill="none"
        stroke="url(#ido-gold)"
        strokeWidth="9"
      />
      <g
        fill="none"
        stroke="url(#ido-gold)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* left leg + long tail curving right at the bottom */}
        <path d="M108 186 C124 180 124 162 117 146 C110 126 106 104 102 92 C99 82 89 80 85 90" />
        {/* rounded hump (n) + right leg */}
        <path d="M85 90 C88 72 110 66 124 82 C132 91 132 104 132 118" />
        {/* small round loop (o) on the right */}
        <path d="M132 116 C132 100 150 96 160 108 C170 120 166 138 150 142 C138 145 128 136 132 126" />
      </g>
    </svg>
  );
}

/**
 * tone="dark"  — локап на тёмной полосе (шапка, hero, подвал)
 * tone="light" — на кремовом развороте: золото уходит в более
 *                тёмный оттенок, иначе подпись теряет контраст
 */
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
