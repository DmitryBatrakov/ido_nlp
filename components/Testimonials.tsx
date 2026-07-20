import { testimonials } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow="מילים של משתתפים" title="ממליצים עליי" />

        <Reveal>
          <ul className="snap-row -mx-5 flex gap-5 overflow-x-auto px-5 pb-4">
            {testimonials.map((t) => (
              <li
                key={t.quote.slice(0, 24)}
                className="relative w-[85vw] max-w-sm shrink-0 border border-hairline bg-surface p-7 pt-12 sm:w-96"
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
          <p className="mt-2 text-sm text-sand/70 lg:hidden" aria-hidden="true">
            ← גללו לצדדים לעוד המלצות
          </p>
        </Reveal>
      </div>
    </section>
  );
}
