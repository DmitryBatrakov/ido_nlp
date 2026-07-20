import { credo } from "@/lib/content";
import Reveal from "./Reveal";

export default function Credo() {
  return (
    <section
      id="credo"
      className="relative overflow-hidden border-t border-hairline bg-night-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 30rem at 50% 120%, rgba(201,162,75,0.1), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <Reveal>
          <p className="mb-10 text-sm tracking-widest text-brass">
            {credo.title}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <blockquote>
            <p className="font-display text-3xl font-light leading-snug sm:text-4xl lg:text-[2.75rem]">
              {credo.lines[0]}
              <br />
              {credo.lines[1]}
            </p>
            <p className="mx-auto mt-10 inline-block border-y border-brass-dim px-8 py-4 font-display text-2xl text-brass-soft sm:text-3xl">
              {credo.highlight}
            </p>
            <p className="mt-10 text-lg text-sand">{credo.closing}</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
