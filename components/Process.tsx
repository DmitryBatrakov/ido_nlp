import { process } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


export default function Process() {
  return (
    <section id="process" className="bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="The process"
          title={process.title}
          className="mb-12 md:mb-16"
        />

        <ol className="grid gap-15 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 130}>
              <li className="h-full">
                <div className="w-fit md:w-full">
                  <span
                    aria-hidden="true"
                    className="block font-wordmark text-4xl leading-none text-gold/35"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-px w-full bg-gold/40"
                  />
                </div>
                <div className="pt-5">
                  <h3 className="mb-3 text-xl">{step.title}</h3>
                  <p className="leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
