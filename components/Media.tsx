"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import VideoEmbed from "./VideoEmbed";

// useLayoutEffect on the client, useEffect on the server (avoids SSR warning).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;


// Hand-set mosaic map — index in media.items → { grid area, mobile shape }.
// Order must match the item order in content: big landscape, then vertical
// tiles (portraits + the two vertical shorts) woven around two more big tiles.
const LAYOUT: { area: string; shape: "big" | "wide" | "tall" }[] = [
  { area: "b1", shape: "big" },
  { area: "t1", shape: "tall" },
  { area: "t2", shape: "tall" },
  { area: "t3", shape: "tall" },
  { area: "t4", shape: "tall" },
  { area: "b2", shape: "big" },
  { area: "t5", shape: "tall" },
  { area: "t6", shape: "tall" },
  { area: "b3", shape: "big" },
  { area: "t7", shape: "tall" },
  { area: "t8", shape: "tall" },
  { area: "t9", shape: "tall" },
  { area: "t10", shape: "tall" },
];

// When collapsed on desktop, reveal the first two tile-rows of the mosaic
// (b1, t1, t2, t3, t4, b2 — the first 6 entries in LAYOUT above).
const DESKTOP_COLLAPSED = 6;

export default function Media() {
  const t = useTranslations("media");
  const items = t.raw("items") as Dictionary["media"]["items"];
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // On mobile the second half is hidden behind a "show more" toggle.
  const half = Math.ceil(items.length / 2);

  const wrapRef = useRef<HTMLDivElement>(null);
  const mosaicRef = useRef<HTMLDivElement>(null);
  const firstRun = useRef(true);

  // Target height for the current collapsed/expanded state.
  const targetHeight = () => {
    const mos = mosaicRef.current;
    if (!mos) return null;
    if (showAll) return mos.scrollHeight;
    // Collapsed: fit exactly the first N tiles. On mobile the mosaic is a
    // DOM-order flow, so we reveal the first half; on desktop it's a fixed
    // area grid, so we reveal its first two tile-rows. Measured against the
    // mosaic's own top (getBoundingClientRect) so it's independent of where
    // offsetParent happens to be, and robust to dense grid flow.
    const count = window.matchMedia("(max-width: 700px)").matches
      ? half
      : DESKTOP_COLLAPSED;
    const tiles = Array.from(mos.children) as HTMLElement[];
    if (tiles.length <= count) return mos.scrollHeight;
    const top = mos.getBoundingClientRect().top;
    let h = 0;
    for (let i = 0; i < count; i++) {
      h = Math.max(h, tiles[i].getBoundingClientRect().bottom - top);
    }
    return Math.round(h);
  };

  // Animate the wrapper height between collapsed/expanded (mobile only).
  useIsoLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const target = targetHeight();
    if (target === null) {
      wrap.style.height = "";
      return;
    }

    if (firstRun.current) {
      firstRun.current = false;
      wrap.style.height = `${target}px`;
      return;
    }

    const from = wrap.offsetHeight;
    if (from === target) {
      wrap.style.height = `${target}px`;
      return;
    }

    wrap.style.height = `${from}px`;
    void wrap.offsetHeight; // force reflow so the start height applies
    requestAnimationFrame(() => {
      wrap.style.height = `${target}px`;
    });
  }, [showAll]);

  // Recompute the clip height on resize / orientation change.
  useEffect(() => {
    const onResize = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const target = targetHeight();
      wrap.style.height = target === null ? "" : `${target}px`;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAll]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="videos" className="bg-bone-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          className="mb-12 md:mb-16"
        />

        <Reveal>
          <div ref={wrapRef} className="media-collapse">
            <div ref={mosaicRef} className="media-mosaic">
              {items.map((item, i) => {
              const { area, shape } = LAYOUT[i] ?? { area: "", shape: "tall" };
              const place = `a-${area} shape-${shape}${i >= half ? " media-extra" : ""}`;

              if (item.type === "video") {
                return (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-xl border border-line bg-night shadow-sm ${place}`}
                  >
                    <VideoEmbed
                      id={item.id}
                      title={item.title}
                      short={item.short}
                      playLabel={t("playLabel")}
                      fill
                    />
                  </div>
                );
              }

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(item.src)}
                  aria-label={t("photoLabel")}
                  className={`group relative cursor-pointer overflow-hidden rounded-xl border border-line bg-bone shadow-sm ${place}`}
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(min-width: 700px) 20vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              );
              })}
            </div>
          </div>
        </Reveal>

        {/* reveal the hidden tiles (mobile: second half, desktop: bottom rows) */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 border border-gold/45 px-7 py-3 font-extrabold text-gold-ink transition-colors hover:bg-gold hover:text-night cursor-pointer"
          >
            {showAll ? t("lessLabel") : t("moreLabel")}
          </button>
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("photoLabel")}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-night/92 p-5 backdrop-blur-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt=""
            className="max-h-[88vh] max-w-[94vw] border border-line-dark object-contain"
          />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={t("closeLabel")}
            className="absolute inset-e-5 top-5 flex h-11 w-11 items-center justify-center border border-line-dark bg-night/60 text-cream transition-colors hover:border-gold"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
