"use client";

import { useState } from "react";

export default function OfferingRow({
  num,
  title,
  text,
  tags,
}: {
  num: string;
  title: string;
  text: string;
  tags: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-line nth-2:border-t-0 transition-colors hover:bg-bone/60 md:grid md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.15fr)] md:grid-rows-[auto_auto] md:gap-x-3 md:px-1 md:py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-1 py-4 text-start md:contents md:cursor-default"
      >
        <span className="shrink-0 text-[0.8125rem] font-extrabold tabular-nums tracking-[0.08em] text-gold md:col-start-1 md:row-start-1 md:pt-1">
          {num}
        </span>
        <h4 className="flex-1 text-lg sm:text-xl md:col-start-2 md:row-start-1 md:mb-2.5 md:flex-none">
          {title}
        </h4>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-gold-ink transition-transform duration-300 md:hidden ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none md:contents ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 md:contents">
          <div className="flex flex-wrap gap-1.5 px-1 pb-3 md:col-start-2 md:row-start-2 md:px-0 md:pb-0">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-beige/70 px-2.5 py-1 text-[11px] font-extrabold tracking-[0.03em] text-gold-ink"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="px-1 pb-5 pt-1 text-[0.9375rem] leading-relaxed text-ink-soft md:col-start-3 md:row-start-1 md:row-span-2 md:px-0 md:pb-0 md:pt-1">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
