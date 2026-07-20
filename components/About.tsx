import { about, specialties } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow="היכרות" title="במה אוכל לעזור לך" />

        <div className="grid gap-14 lg:grid-cols-[7fr_5fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-sand">
              <p className="text-xl text-ivory">{about.greeting}</p>
              <p>{about.intro}</p>
              <p>{about.approach}</p>
              <p className="border-r-2 border-brass pr-5 text-ivory">
                {about.method}
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ul className="flex flex-col gap-4">
              {about.points.map((point) => (
                <li
                  key={point}
                  className="flex items-baseline gap-3 border border-hairline bg-surface px-5 py-4 text-ivory"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
          {specialties.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="bg-night">
              <article className="h-full bg-surface/60 p-7 transition-colors hover:bg-surface">
                <h3 className="mb-3 text-2xl text-brass-soft">{item.title}</h3>
                <p className="leading-relaxed text-sand">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
