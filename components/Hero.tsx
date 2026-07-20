import Image from "next/image";
import { contact, hero } from "@/lib/content";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Глубина «подсознания»: тёплое свечение из угла + виньетка */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52rem 36rem at 88% -8%, rgba(201,162,75,0.13), transparent 60%), radial-gradient(40rem 30rem at 0% 110%, rgba(21,27,35,0.9), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-32 md:grid-cols-[7fr_5fr] md:items-center md:gap-10 md:pb-28 md:pt-40">
        <div>
          <Reveal>
            <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm tracking-wide text-brass-soft">
              <span className="border border-brass-dim px-3 py-1">{hero.badge}</span>
              <span className="text-sand">{hero.location}</span>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl font-medium leading-[1.1] sm:text-6xl lg:text-7xl">
              {hero.name}
            </h1>
            <p className="mt-4 font-display text-xl font-light text-brass-soft sm:text-2xl">
              {hero.role}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 max-w-xl space-y-2 border-r-2 border-brass pr-5 text-lg leading-relaxed text-sand">
              <p>{hero.lines[0]}</p>
              <p className="text-ivory">{hero.lines[1]}</p>
              <p>{hero.lines[2]}</p>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-brass px-7 py-3.5 font-medium text-night-deep transition-colors hover:bg-brass-soft"
              >
                <WhatsAppIcon className="h-5 w-5" />
                שיחת היכרות ב-WhatsApp
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2.5 px-2 py-3.5 text-sand transition-colors hover:text-ivory"
              >
                <PhoneIcon className="h-5 w-5" />
                <span dir="ltr">{contact.phoneDisplay}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-sm md:max-w-none">
          <figure className="relative">
            {/* Смещённая латунная рамка позади портрета */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-full w-full border border-brass-dim"
            />
            <Image
              src="/images/ido.jpg"
              alt="עידו ספרא — פורטרט"
              width={1366}
              height={2048}
              priority
              sizes="(min-width: 768px) 26rem, 90vw"
              className="relative aspect-[3/4] w-full border border-hairline object-cover object-top"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
