import { process } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="border-t border-hairline bg-night-deep">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow="הדרך" title={process.title} />

        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 130}>
              <li className="h-full">
                <span
                  aria-hidden="true"
                  className="block font-display text-5xl font-light leading-none text-brass-dim"
                >
                  {i + 1}
                </span>
                <div className="mt-4 border-t border-brass-dim pt-5">
                  <h3 className="mb-3 text-xl text-ivory">{step.title}</h3>
                  <p className="leading-relaxed text-sand">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
