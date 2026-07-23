import Image from "next/image";
import { contact, brand, hero, tagline } from "@/lib/content";
import { PhoneIcon, QuoteMark, WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-cream"
      style={{
        background:
          "linear-gradient(var(--night) 0 calc(100% - 4px), var(--bone) calc(100% - 4px) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48rem 34rem at 85% -10%, rgba(184,135,59,0.2), transparent 62%)",
        }}
      />
      <div aria-hidden="true" className="dots" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-32 md:grid-cols-[7fr_5fr] md:items-center md:gap-10 md:pb-32 md:pt-40">
        <div>
          <Reveal>
            <p
              dir="ltr"
              className="me-auto flex w-fit gap-3 text-start text-[0.8rem] font-bold uppercase leading-relaxed tracking-[0.16em] text-gold-lt"
            >
              <QuoteMark className="mt-0.5 h-6 w-6 shrink-0 opacity-75" />
              <span>
                {tagline.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1
              dir="ltr"
              className="my-6 text-end font-wordmark text-[clamp(3.1rem,11vw,6.4rem)] leading-[0.9] tracking-tight"
            >
              <span className="block">{brand.wordmark.first}</span>
              <span className="gold-text block">{brand.wordmark.second}</span>
            </h1>
            <p className="sr-only">{brand.name}</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="border-r-2 border-gold pr-4 text-xl font-bold sm:text-2xl">
              {hero.role}
              <span
                dir="ltr"
                className="mt-1 block text-right text-[0.78rem] font-bold uppercase tracking-[0.18em] text-cream-soft"
              >
                {hero.roleEn}
              </span>
            </p>
            <p className="mt-3 pr-4 text-sm text-cream-soft">{hero.location}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2.5 px-7 py-3.5 font-extrabold"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {hero.cta}
              </a>
              <a
                href="#offerings"
                className="px-2 py-3.5 font-bold text-cream-soft transition-colors hover:text-cream"
              >
                {hero.ctaSecondary} ←
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2.5 px-2 py-3.5 text-cream-soft transition-colors hover:text-cream"
              >
                <PhoneIcon className="h-5 w-5" />
                <span dir="ltr">{contact.phoneDisplay}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-sm md:max-w-none">
          <figure className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-full w-full border border-gold-lt/40"
            />
            <Image
              src="/images/ido.png"
              alt="עידו ספרא — פורטרט"
              width={1066}
              height={1600}
              preload
              sizes="(min-width: 768px) 26rem, 90vw"
              className="relative aspect-3/4 w-full object-cover object-top"
            />
          </figure>
        </Reveal>
      </div>

      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="relative block h-14 w-full md:h-22"
      >
        <path
          d="M0 68c250 48 460-34 720-34s470 82 720 34V132H0z"
          fill="var(--bone)"
        />
        <path
          d="M0 68c250 48 460-34 720-34s470 82 720 34"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
          opacity="0.55"
        />
      </svg>
    </section>
  );
}
