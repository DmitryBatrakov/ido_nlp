import Image from "next/image";
import { book, impact, podcast } from "@/lib/content";
import { LineIcon } from "./icons";
import Reveal from "./Reveal";


export default function Impact() {
  return (
    <section id="impact" className="bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem]">
            <span className="gold-text">{impact.titleGold}</span>
            <span className="block">{impact.titleInk}</span>
          </h2>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-3.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-ink">
            {impact.chips.map((chip, i) => (
              <span key={chip} className="flex items-center gap-3.5">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="block h-1.5 w-1.5 rounded-full bg-gold"
                  />
                )}
                {chip}
              </span>
            ))}
          </p>
          <p className="mx-auto mt-5 max-w-[62ch] leading-relaxed text-ink-soft">
            {impact.lede}
          </p>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col border border-line bg-card p-6 md:p-8">
              <p className="mb-5 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.2em] text-gold-ink">
                <LineIcon name="book" className="h-5 w-5" />
                {book.kicker}
              </p>

              <div className="flex flex-col gap-6 sm:flex-row">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`לרכישת הספר ${book.title}`}
                  className="group relative mx-auto block w-34 shrink-0 sm:mx-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2.5 -left-2.5 h-full w-full border border-gold/40 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"
                  />
                  <Image
                    src={book.cover}
                    alt={`כריכת הספר ${book.title}`}
                    width={500}
                    height={790}
                    sizes="8.5rem"
                    className="relative w-full"
                  />
                </a>

                <div>
                  <h3 className="text-2xl">{book.title}</h3>
                  <p className="mb-2 text-sm font-bold text-gold-ink">
                    {book.subtitle}
                  </p>
                  <p className="leading-relaxed text-ink-soft">{book.description}</p>
                </div>
              </div>

              <p className="mt-5 border-t border-line pt-4 font-bold leading-snug">
                ״{book.quote}״
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center px-6 py-3 font-extrabold"
                >
                  {book.cta}
                </a>
                <span className="text-sm text-ink-soft">{book.note}</span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="flex h-full flex-col border border-line bg-card p-6 md:p-8">
              <p className="mb-5 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.2em] text-gold-ink">
                <LineIcon name="podcast" className="h-5 w-5" />
                {podcast.kicker}
              </p>

              <h3 className="text-2xl">{podcast.title}</h3>
              <p dir="ltr" className="mb-2 text-right text-sm font-bold text-gold-ink">
                {podcast.subtitle}
              </p>
              <p className="leading-relaxed text-ink-soft">{podcast.description}</p>

              <ul className="mt-4 flex flex-col gap-2.5">
                {podcast.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-ink-soft">
                    <LineIcon
                      name="check"
                      strokeWidth={2.2}
                      className="mt-1.5 h-4 w-4 shrink-0 text-gold"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-line pt-4 font-bold leading-snug">
                {podcast.quote}
              </p>

              <div className="mt-6">
                <a
                  href={podcast.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-gold/45 px-6 py-3 font-extrabold text-gold-ink transition-colors hover:bg-gold hover:text-night"
                >
                  <LineIcon name="mic" className="h-5 w-5" />
                  {podcast.cta}
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
