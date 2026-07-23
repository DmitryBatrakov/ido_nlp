"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { certificates } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


export default function Certificates() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const openCert = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };

  const closeCert = () => {
    dialogRef.current?.close();
    setActive(null);
  };

  const cert = active === null ? null : certificates[active];

  return (
    <section id="certificates" className="bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="Credentials"
          title="תעודות והסמכות"
          className="mb-12 md:mb-16"
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <Reveal key={c.src} delay={(i % 4) * 100}>
              <li className="h-full">
                <button
                  type="button"
                  onClick={() => openCert(i)}
                  className="group flex h-full w-full flex-col border border-line bg-card text-right transition-colors hover:border-gold/50"
                  aria-label={`הצגת תעודה: ${c.title}`}
                >
                  <span className="block w-full overflow-hidden border-b border-line">
                    <Image
                      src={c.src}
                      alt={`תעודה — ${c.title}`}
                      width={c.width}
                      height={c.height}
                      sizes="(min-width: 1024px) 17rem, (min-width: 640px) 45vw, 90vw"
                      className="aspect-16/10 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col gap-1 p-4">
                    <span className="font-bold leading-snug">{c.title}</span>
                    <span className="text-sm text-ink-soft">{c.detail}</span>
                  </span>
                </button>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeCert();
        }}
        className="m-auto w-[min(64rem,94vw)] border border-line bg-bone p-0 text-ink backdrop:cursor-pointer"
      >
        {cert && (
          <figure>
            <Image
              src={cert.src}
              alt={`תעודה — ${cert.title}`}
              width={cert.width}
              height={cert.height}
              sizes="94vw"
              className="max-h-[80vh] w-full object-contain"
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-line p-4 text-sm text-ink-soft">
              <span>
                {cert.title} · {cert.detail}
              </span>
              <button
                type="button"
                onClick={closeCert}
                className="border border-line px-4 py-2 font-bold text-ink transition-colors hover:border-gold"
              >
                סגירה
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
