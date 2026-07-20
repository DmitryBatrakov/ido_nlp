import Image from "next/image";
import { book } from "@/lib/content";
import Reveal from "./Reveal";

export default function Book() {
  return (
    <section id="book" className="border-t border-hairline bg-night-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Reveal>
          <div className="grid items-center gap-10 border border-brass-dim bg-surface/50 p-8 sm:grid-cols-[auto_1fr] md:p-10">
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`לרכישת הספר ${book.title}`}
              className="group relative mx-auto block w-40 shrink-0 sm:w-44"
            >
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full border border-brass-dim transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"
              />
              <Image
                src={book.cover}
                alt={`כריכת הספר ${book.title}`}
                width={500}
                height={790}
                sizes="11rem"
                className="relative w-full border border-hairline"
              />
            </a>

            <div className="text-center sm:text-right">
              <p className="mb-2 text-sm tracking-widest text-brass">
                {book.label}
              </p>
              <h2 className="text-3xl font-medium sm:text-4xl">{book.title}</h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-sand sm:mx-0">
                {book.description}
              </p>
              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-brass px-7 py-3.5 font-medium text-night-deep transition-colors hover:bg-brass-soft"
                >
                  לרכישת הספר
                </a>
                <span className="text-sm text-sand/80">{book.note}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
