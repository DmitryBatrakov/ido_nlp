import Image from "next/image";
import type { Dictionary } from "@/lib/content";
import { LineIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


export default function About({ t }: { t: Dictionary }) {
  const { about, roles } = t;
  return (
    <section id="about" className="bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} className="mb-6" />

        <div className="grid items-stretch gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          <Reveal delay={140} className="self-end">
            <figure className="relative mx-auto w-fit">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 mx-auto aspect-square w-4/5 rounded-full bg-gold/15 blur-2xl"
              />
              <Image
                src="/images/ido2.png"
                alt={t.ui.stageAlt}
                width={1023}
                height={1537}
                sizes="(min-width: 768px) 22rem, 70vw"
                className="relative mx-auto h-auto w-56 sm:w-72 md:w-80"
              />
            </figure>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="max-w-[56ch] text-lg leading-relaxed text-ink-soft">
                {about.introLead}
                <b className="font-extrabold text-gold-ink">{about.introHighlight}</b>
                {about.introRest}
              </p>
            </Reveal>

            <ul className="mt-8 flex flex-col">
              {about.creds.map((cred, i) => (
                <li
                  key={cred.title}
                  className={`py-5 ${i > 0 ? "border-t border-line" : ""}`}
                >
                  <Reveal delay={i * 110}>
                    <div className="flex items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/45 text-gold">
                        <LineIcon name={cred.icon} strokeWidth={1.35} className="h-7 w-7" />
                      </span>
                      <div className="flex flex-col items-start text-start">
                        <h3 className="mb-1 text-lg sm:text-xl">{cred.title}</h3>
                        <p className="leading-relaxed text-ink-soft">{cred.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-0">
          <Reveal className="md:pe-8">
            <div className="w-fit md:mx-auto">
              <div className="flex items-center gap-4">
                <h3 className="text-xl sm:text-2xl">{about.distinctTitle}</h3>
                <LineIcon
                  name="target"
                  strokeWidth={1.35}
                  className="h-10 w-10 shrink-0 text-gold"
                />
              </div>
              <span aria-hidden="true" className="mt-3 block h-px w-full bg-gold" />
            </div>

            <ul className="mt-7 flex w-fit flex-col gap-4 md:mx-auto">
              {about.distinct.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] items-start gap-4 leading-snug"
                >
                  <LineIcon
                    name="check"
                    strokeWidth={2.2}
                    className="mt-1 h-4 w-4 text-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={130} className="md:border-s md:border-line md:ps-8">
            <div className="w-fit md:mx-auto">
              <div className="flex items-center gap-4">
                <h3 className="text-xl sm:text-2xl">{about.valueTitle}</h3>
                <LineIcon
                  name="users"
                  strokeWidth={1.35}
                  className="h-10 w-10 shrink-0 text-gold"
                />
              </div>
              <span aria-hidden="true" className="mt-3 block h-px w-full bg-gold" />
            </div>

            <p className="mt-7 leading-relaxed text-ink-soft md:text-center">
              {about.value}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14 md:mt-16">
          <ul dir="ltr" className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {roles.map((role) => (
              <li
                key={role.label}
                className="flex flex-col items-center gap-2 bg-bone-2 px-4 py-7 text-center"
              >
                <LineIcon
                  name={role.icon}
                  strokeWidth={1.4}
                  className="h-7 w-7 text-gold"
                />
                <b className="text-[0.76rem] uppercase leading-tight tracking-[0.16em]">
                  {role.label}
                </b>
                {role.sub && <span className="text-sm text-ink-soft">{role.sub}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
