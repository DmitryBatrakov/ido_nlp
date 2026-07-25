"use client";

import { useRef } from "react";
import type { Dictionary } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { LineIcon, QuoteMark } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


export default function Testimonials({
  t,
  lang,
}: {
  t: Dictionary;
  lang: Locale;
}) {
  const { testimonials } = t;
  const isRtl = lang === "he";
  const scrollerRef = useRef<HTMLUListElement>(null);

  // dir: -1 = previous (toward start), +1 = next (toward end).
  // In RTL the horizontal scroll axis is inverted, so flip the sign.
  const scrollByCard = (dir: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector("li");
    const gap = 20; // gap-5
    const step = card
      ? card.getBoundingClientRect().width + gap
      : scroller.clientWidth * 0.8;
    scroller.scrollBy({ left: dir * (isRtl ? -1 : 1) * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="overflow-hidden bg-bone-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-4 md:mb-16">
          <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />

          <Reveal className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label={testimonials.prevLabel}
              className="flex h-11 w-11 items-center justify-center border border-line text-ink-soft transition-colors hover:border-gold hover:text-ink cursor-pointer"
            >
              {/* base arrow points to the start (left); flip it in RTL */}
              <LineIcon
                name="arrow"
                strokeWidth={1.8}
                className={`h-5 w-5 ${isRtl ? "rotate-180" : ""}`}
              />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label={testimonials.nextLabel}
              className="flex h-11 w-11 items-center justify-center border border-line text-ink-soft transition-colors hover:border-gold hover:text-ink cursor-pointer"
            >
              <LineIcon
                name="arrow"
                strokeWidth={1.8}
                className={`h-5 w-5 ${isRtl ? "" : "rotate-180"}`}
              />
            </button>
          </Reveal>
        </div>

        <Reveal>
          <ul
            ref={scrollerRef}
            className="snap-row -mx-5 flex gap-5 overflow-x-auto px-5 pb-4"
            tabIndex={0}
            role="region"
            aria-label={testimonials.regionLabel}
          >
            {testimonials.items.map((item) => (
              <li
                key={item.quote.slice(0, 24)}
                className="relative flex w-[85vw] shrink-0 flex-col border border-line bg-card p-7 pt-12 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <QuoteMark className="absolute inset-s-6 top-6 h-7 w-7 text-gold opacity-80" />
                <blockquote className="leading-relaxed">{item.quote}</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-sm text-ink-soft">
                  — {item.author}
                </figcaption>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-ink-soft lg:hidden">
            {testimonials.scrollHint}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
