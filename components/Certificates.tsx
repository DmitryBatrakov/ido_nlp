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
    <section id="certificates" className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading eyebrow="הכשרה מקצועית" title="תעודות והסמכות" />

        <ul className="grid gap-6 sm:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.src} delay={(i % 2) * 120}>
              <li className="h-full">
                <button
                  type="button"
                  onClick={() => openCert(i)}
                  className="group flex h-full w-full flex-col border border-hairline bg-surface text-right transition-colors hover:border-brass-dim"
                  aria-label={`הצגת תעודה: ${c.title}`}
                >
                  <span className="block w-full overflow-hidden border-b border-hairline bg-ivory/5">
                    <Image
                      src={c.src}
                      alt={`תעודה — ${c.title}`}
                      width={c.width}
                      height={c.height}
                      sizes="(min-width: 640px) 34rem, 90vw"
                      className="aspect-[16/10] w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                    />
                  </span>
                  <span className="flex flex-1 flex-col gap-1 p-5">
                    <span className="text-lg text-ivory">{c.title}</span>
                    <span className="text-sm text-sand">{c.detail}</span>
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
        className="m-auto w-[min(64rem,94vw)] border border-hairline bg-night p-0 backdrop:cursor-pointer"
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
            <figcaption className="flex items-center justify-between gap-4 border-t border-hairline p-4 text-sm text-sand">
              <span>
                {cert.title} · {cert.detail}
              </span>
              <button
                type="button"
                onClick={closeCert}
                className="border border-hairline px-4 py-2 text-ivory transition-colors hover:border-brass"
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
