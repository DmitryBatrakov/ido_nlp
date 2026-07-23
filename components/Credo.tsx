import { credo } from "@/lib/content";
import { QuoteMark } from "./icons";
import Reveal from "./Reveal";

export default function Credo() {
  return (
    <section
      id="credo"
      className="relative overflow-hidden bg-night text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(42rem 26rem at 50% 118%, rgba(184,135,59,0.18), transparent 66%)",
        }}
      />
      <div aria-hidden="true" className="dots" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-gold-lt">
            {credo.eyebrow}
          </p>
          <QuoteMark className="mx-auto mb-6 h-10 w-10 text-gold" />
        </Reveal>
        <Reveal delay={120}>
          <blockquote>
            <p className="text-3xl leading-snug sm:text-4xl lg:text-[2.75rem]">
              {credo.quote}
            </p>
            <p className="gold-text mt-9 inline-block border-y border-gold-lt/45 px-8 py-4 text-2xl font-bold sm:text-3xl">
              {credo.highlight}
            </p>
            <p className="mx-auto mt-9 max-w-[44ch] text-lg text-cream-soft">
              {credo.closing}
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
