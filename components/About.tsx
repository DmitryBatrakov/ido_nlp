import { about, roles } from "@/lib/content";
import { LineIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


export default function About() {
  return (
    <section id="about" className="bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow="About me" title={about.title} className="mb-6" />

        <Reveal>
          <p className="mb-10 max-w-[68ch] leading-relaxed text-ink-soft md:mb-14">
            {about.introLead}
            <b className="font-extrabold text-gold-ink">{about.introHighlight}</b>
            {about.introRest}
          </p>
        </Reveal>

        <ul className="flex flex-col md:flex-row">
          {about.creds.map((cred, i) => (
            <li
              key={cred.title}
              className={`py-7 md:flex-1 md:py-0 ${
                i > 0 ? "border-t border-line md:border-t-0 md:border-s md:ps-8" : ""
              } ${i < about.creds.length - 1 ? "md:pe-8" : ""}`}
            >
              <Reveal delay={i * 110}>
                <div className="flex items-start md:items-center gap-4 md:flex-col md:gap-5">
                  <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full border border-gold/45 text-gold">
                    <LineIcon name={cred.icon} strokeWidth={1.35} className="h-9 w-9" />
                  </span>
                  <div className="flex flex-col md:items-center md:text-center items-start text-start">
                    <h3 className="mb-1.5 text-lg sm:text-xl">{cred.title}</h3>
                    <p className="leading-relaxed text-ink-soft">{cred.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
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
                key={role.en}
                className="flex flex-col items-center gap-2 bg-bone-2 px-4 py-7 text-center"
              >
                <LineIcon
                  name={role.icon}
                  strokeWidth={1.4}
                  className="h-7 w-7 text-gold"
                />
                <b className="text-[0.76rem] uppercase leading-tight tracking-[0.16em]">
                  {role.en}
                </b>
                <span className="text-sm text-ink-soft">{role.he}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
