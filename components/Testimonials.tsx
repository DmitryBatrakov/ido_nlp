"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/content";
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
        <section id="testimonials" className="overflow-hidden border-t border-hairline">
            <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
                <div className="flex items-end justify-between gap-4">
                    <SectionHeading eyebrow="מילים של משתתפים" title="ממליצים עליי" />

                    <Reveal className="mb-12 flex shrink-0 gap-2 md:mb-16">
                        <button
                            type="button"
                            onClick={() => scrollByCard(1)}
                            aria-label="ההמלצה הקודמת"
                            className="flex h-11 w-11 items-center justify-center border border-hairline text-sand transition-colors hover:border-brass hover:text-ivory"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollByCard(-1)}
                            aria-label="ההמלצה הבאה"
                            className="flex h-11 w-11 items-center justify-center border border-hairline text-sand transition-colors hover:border-brass hover:text-ivory"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" />
                            </svg>
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
                                className="relative w-[85vw] shrink-0 border border-hairline bg-surface p-7 pt-12 sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_2.5rem)/3)]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute right-6 top-2 font-display text-6xl leading-none text-brass"
                                >
                                    ״
                                </span>
                                <blockquote className="leading-relaxed text-ivory">
                                    {t.quote}
                                </blockquote>
                                <figcaption className="mt-5 border-t border-hairline pt-4 text-sm text-sand">
                                    — {t.author}
                                </figcaption>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2 text-sm text-sand lg:hidden">
                        ← גללו לצדדים לעוד המלצות
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
