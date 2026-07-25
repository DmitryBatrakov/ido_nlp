"use client";

import { useId } from "react";

type FlagProps = { className?: string; title?: string };

/** Flag of Israel — represents the Hebrew (he) version. */
export function FlagIL({ className = "", title }: FlagProps) {
  return (
    <svg
      viewBox="0 0 220 160"
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <rect width="220" height="160" fill="#fff" />
      <rect y="24" width="220" height="18" fill="#0038b8" />
      <rect y="118" width="220" height="18" fill="#0038b8" />
      <g fill="none" stroke="#0038b8" strokeWidth="8">
        <path d="M110 52 84 98h52z" />
        <path d="M110 108 84 62h52z" />
      </g>
    </svg>
  );
}

/** Flag of the United States — represents the English (en) version. */
export function FlagUS({ className = "", title }: FlagProps) {
  const raw = useId();
  const stars = `us-${raw.replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 76 40"
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {/* 13 stripes */}
      <rect width="76" height="40" fill="#b22234" />
      <g fill="#fff">
        {[1, 3, 5, 7, 9, 11].map((i) => (
          <rect key={i} y={(i * 40) / 13} width="76" height={40 / 13} />
        ))}
      </g>
      {/* canton */}
      <rect width="30.4" height={(40 / 13) * 7} fill="#3c3b6e" />
      <g fill="#fff">
        <pattern
          id={stars}
          width="6.08"
          height="6.15"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3.04" cy="3.08" r="1.1" />
        </pattern>
        <rect width="30.4" height={(40 / 13) * 7} fill={`url(#${stars})`} />
      </g>
    </svg>
  );
}
