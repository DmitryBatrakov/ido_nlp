"use client";

import { useState } from "react";

const hq = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const maxres = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export default function VideoEmbed({
  id,
  title,
  playLabel,
  vertical = false,
  short = false,
  fill = false,
}: {
  id: string;
  title?: string;
  playLabel: string;
  vertical?: boolean;
  short?: boolean;
  fill?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const isVertical = vertical || short;
  const label = title ? `${playLabel}: ${title}` : playLabel;

  // `fill` mode: fill the parent grid cell (parent owns border/size).
  const wrapper = fill
    ? "absolute inset-0"
    : `relative w-full overflow-hidden border border-line bg-night ${
        isVertical ? "aspect-9/16" : "aspect-video"
      }`;

  return (
    <div className={wrapper}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={label}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isVertical ? hq(id) : maxres(id)}
            alt=""
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.src.includes("hqdefault")) img.src = hq(id);
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-night/25 transition-colors group-hover:bg-night/10" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-night shadow-lg shadow-night/30 transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ms-0.5 h-6 w-6" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
          {short && (
            <span className="absolute top-2.5 inset-s-2.5 bg-night/70 px-2 py-1 text-[0.6rem] font-extrabold uppercase tracking-[0.12em] text-gold-lt">
              Short
            </span>
          )}
          {title && !short && (
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent px-3 pb-2.5 pt-6 text-start text-xs text-cream">
              {title}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
