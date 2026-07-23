import type { ReactNode } from "react";


const linePaths = {
  hand: (
    <path d="M9 11.5V5.5a1.5 1.5 0 0 1 3 0V11m0-1.2a1.5 1.5 0 0 1 3 0V12m0-1.2a1.5 1.5 0 0 1 3 0V16a5.5 5.5 0 0 1-5.5 5.5H11a5 5 0 0 1-4.3-2.45L4.9 15.9a1.6 1.6 0 0 1 2.6-1.85L9 15.6" />
  ),
  speech: (
    <>
      <path d="M20.5 4.5h-17v11.5h4.5v4l5-4h7.5z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  run: (
    <>
      <circle cx="15" cy="4.5" r="2" />
      <path d="M13.5 21l1.5-5.5-3-2.5.8-4.5 3.2 3 3.5.8" />
      <path d="M12.8 8.5L9 10l-1 3.5M11 15l-3.5 6" />
    </>
  ),
  sunrise: (
    <>
      <path d="M3 18h18M6.5 18a5.5 5.5 0 0 1 11 0" />
      <path d="M12 4v2.5M5.2 7l1.6 1.6M18.8 7l-1.6 1.6M2.5 13H5M19 13h2.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="11" width="15" height="9.5" rx="1.5" />
      <path d="M8 11V7.5a4 4 0 0 1 7.8-1.3" />
      <path d="M12 15v2" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20.5l1.2-4.4L16.4 5a2 2 0 0 1 2.8 0l.8.8a2 2 0 0 1 0 2.8L8.8 19.4z" />
      <path d="M14.8 6.8l3.2 3.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12l7-7M16.5 3.2l2.5 2.5 2.6-.4-.4 2.6" />
    </>
  ),
  head: (
    <>
      <path d="M20 13.5c0-4.7-3.6-8.5-8-8.5S4 8.8 4 13.5c0 1.7.5 2.6 1.4 3.5V21h9v-2.5h2.4a1 1 0 0 0 1-1v-2z" />
      <path d="M9 12.5a2.5 2.5 0 1 1 3.6 2.2" />
    </>
  ),
  puzzle: (
    <path d="M10 4.5h4v2a2 2 0 1 0 4 0v-2h1.5v5h-2a2 2 0 1 0 0 4h2v5h-5v-2a2 2 0 1 0-4 0v2H4.5v-5h2a2 2 0 1 0 0-4h-2v-5H10z" />
  ),
  shield: (
    <>
      <path d="M12 3.2l7.5 3v6c0 4.6-3.2 8.2-7.5 9.3-4.3-1.1-7.5-4.7-7.5-9.3v-6z" />
      <path d="M9 12.2l2.2 2.2 4-4.2" />
    </>
  ),
  heart: (
    <path d="M12 20.4s-7.6-4.6-7.6-9.6a4.3 4.3 0 0 1 7.6-2.8 4.3 4.3 0 0 1 7.6 2.8c0 5-7.6 9.6-7.6 9.6z" />
  ),
  mic: (
    <>
      <rect x="9.2" y="2.8" width="5.6" height="11" rx="2.8" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.2M8.5 21.2h7" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.2 20.2a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 14.5a5.8 5.8 0 0 1 3.4 5.7" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.4S10 4.5 4 4.8v13.6c6-.3 8 1.6 8 1.6s2-1.9 8-1.6V4.8c-6-.3-8 1.6-8 1.6z" />
      <path d="M12 6.4v13.6" />
    </>
  ),
  podcast: (
    <>
      <path d="M4.8 16A9 9 0 1 1 19.2 16" />
      <rect x="2.8" y="13.5" width="3.6" height="6.5" rx="1.8" />
      <rect x="17.6" y="13.5" width="3.6" height="6.5" rx="1.8" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  person: (
    <>
      <circle cx="12" cy="7.5" r="3.6" />
      <path d="M4.8 20.5a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  handshake: (
    <>
      <path d="M2.8 9.5L6 6.5l3.5 1.2L13 6.5l4.5 3.4" />
      <path d="M13 6.5l3.6 3.6a1.8 1.8 0 0 1-2.4 2.6l-1.6-1.4" />
      <path d="M12.6 11.3l2 1.9a1.7 1.7 0 0 1-2.3 2.5M12.3 15.7a1.7 1.7 0 0 1-2.4 2.4l-3.7-3.4" />
      <path d="M18 10.5l3.2-2.8" />
    </>
  ),
  arrow: <path d="M15 5l-7 7 7 7" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof linePaths;

export function LineIcon({
  name,
  className = "",
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {linePaths[name]}
    </svg>
  );
}

/** Крупные золотые кавычки — открывают цитаты на каждом развороте. */
export function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.6 4.4C6 6 3.8 9.2 3.8 13.2c0 3.9 2 6.4 5 6.4 2.5 0 4.4-1.8 4.4-4.2 0-2.3-1.6-4-3.9-4-.5 0-1 .1-1.2.2.4-2.3 2.2-4.4 4.6-5.6zm10 0C16 6 13.8 9.2 13.8 13.2c0 3.9 2 6.4 5 6.4 2.5 0 4.4-1.8 4.4-4.2 0-2.3-1.6-4-3.9-4-.5 0-1 .1-1.2.2.4-2.3 2.2-4.4 4.6-5.6z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

export function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
