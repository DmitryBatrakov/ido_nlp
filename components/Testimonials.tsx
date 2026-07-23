"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/content";
import { LineIcon, QuoteMark } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


export default function Testimonials() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector("li");
    const gap = 20; // gap-5
    const step = card
      ? card.getBoundingClientRect().width + gap
      : scroller.clientWidth * 0.8;
    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="overflow-hidden bg-bone-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-4 md:mb-16">
          <SectionHeading eyebrow="Testimonials" title="ממליצים עליי" />

          <Reveal className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="ההמלצה הקודמת"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink-soft transition-colors hover:border-gold hover:text-ink"
            >
              <LineIcon name="arrow" strokeWidth={1.8} className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="ההמלצה הבאה"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink-soft transition-colors hover:border-gold hover:text-ink"
            >
              <LineIcon name="arrow" strokeWidth={1.8} className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        <Reveal>
          <ul
            ref={scrollerRef}
            className="snap-row -mx-5 flex gap-5 overflow-x-auto px-5 pb-4"
            tabIndex={0}
            role="region"
            aria-label="המלצות — ניתן לגלול לצדדים"
          >
            {testimonials.map((t) => (
              <li
                key={t.quote.slice(0, 24)}
                className="relative flex w-[85vw] shrink-0 flex-col border border-line bg-card p-7 pt-12 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <QuoteMark className="absolute right-6 top-6 h-7 w-7 text-gold opacity-80" />
                <blockquote className="leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-sm text-ink-soft">
                  — {t.author}
                </figcaption>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-ink-soft lg:hidden">
            ← גללו לצדדים לעוד המלצות
          </p>
        </Reveal>
      </div>
    </section>
  );
}
