"use client";

import { useState } from "react";
import { contact, offerings } from "@/lib/content";
import { LineIcon } from "./icons";
import Reveal from "./Reveal";


const items = offerings.columns.flatMap((column, gi) =>
  column.items.map((item, ii) => ({
    ...item,
    kind: column.title,
    key: `${gi}-${ii}`,
  })),
);

type Item = (typeof items)[number];

const waLink = (title: string) =>
  `https://wa.me/${contact.phone.replace(/\D/g, "")}?text=` +
  encodeURIComponent(`היי עידו, אשמח לשמוע על המפגש "${title}"`);

function Detail({ item, compact }: { item: Item; compact?: boolean }) {
  return (
    <>
      {!compact && (
        <>
          <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/45 text-gold-ink">
            <LineIcon name={item.icon} className="h-7 w-7" />
          </span>
          <p className="mb-2 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-gold-ink">
            {item.kind}
          </p>
          <h4 className="mb-3 text-xl sm:text-2xl">{item.title}</h4>
        </>
      )}

      <p className="max-w-[52ch] leading-relaxed text-ink-soft">{item.text}</p>

      <p className="mt-5 border-t border-line pt-4 text-sm leading-snug text-ink-soft">
        <span className="mb-1.5 block text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-ink">
          מתאים ל
        </span>
        {item.who}
      </p>

      <a
        href={waLink(item.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold mt-6 inline-flex self-start px-7 py-3 font-extrabold"
      >
        לתיאום המפגש
      </a>
    </>
  );
}

export default function Offerings() {
  const [activeKey, setActiveKey] = useState(items[0].key);
  const active = items.find((item) => item.key === activeKey) ?? items[0];

  return (
    <section id="offerings" className="bg-bone-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem]">
            <span className="gold-text">{offerings.eyebrowGold}</span>{" "}
            {offerings.eyebrowInk}
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] leading-relaxed text-ink-soft">
            {offerings.lede}
          </p>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-3.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-ink">
            {offerings.chips.map((chip, i) => (
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
        </Reveal>

        <Reveal>
          <div className="border border-line bg-card lg:grid lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,23rem)_minmax(0,1fr)]">
            <div className="lg:border-e lg:border-line">
              {offerings.columns.map((column, gi) => (
                <div key={column.title}>
                  <h3 className="flex items-center gap-2.5 bg-beige px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em]">
                    <LineIcon
                      name={column.icon}
                      className="h-5 w-5 text-gold-ink"
                    />
                    {column.title}
                    <span className="ms-auto font-bold text-ink-soft">
                      {column.items.length}
                    </span>
                  </h3>

                  <ul>
                    {column.items.map((item, ii) => {
                      const key = `${gi}-${ii}`;
                      const isActive = key === activeKey;
                      return (
                        <li key={item.title} className="border-b border-line">
                          <button
                            type="button"
                            onClick={() => setActiveKey(key)}
                            aria-expanded={isActive}
                            className={`flex w-full cursor-pointer items-center gap-2.5 px-4 py-2.5 text-start text-[0.95rem] font-extrabold leading-snug transition-colors ${
                              isActive
                                ? "bg-ink text-bone"
                                : "hover:bg-bone-2/70"
                            }`}
                          >
                            <LineIcon
                              name={item.icon}
                              strokeWidth={1.4}
                              className={`h-5 w-5 shrink-0 ${
                                isActive ? "text-gold-lt" : "text-gold"
                              }`}
                            />
                            {item.title}
                          </button>

                          <div
                            inert={!isActive}
                            className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
                              isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div
                              className={`min-h-0 transition-opacity duration-200 motion-reduce:transition-none ${
                                isActive
                                  ? "opacity-100 delay-100"
                                  : "opacity-0"
                              }`}
                            >
                              <div className="flex flex-col bg-bone px-4 pb-5 pt-4">
                                <Detail
                                  item={{ ...item, kind: column.title, key }}
                                  compact
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Список из 14 строк заметно выше карточки темы, поэтому
                панель — не просто блок сверху: подсветка в нижнем углу
                и прижатая вниз сноска закрывают пустоту, которая иначе
                остаётся под кнопкой. */}
            <div className="relative hidden flex-col p-8 lg:flex xl:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(32rem 22rem at 10% 100%, rgba(184,135,59,0.12), transparent 62%)",
                }}
              />

              <div aria-live="polite" className="relative flex flex-1 flex-col">
                <Detail item={active} />
              </div>

              <p className="relative mt-10 flex items-start gap-3 border-t border-dashed border-line pt-6 text-sm leading-relaxed text-ink-soft">
                <LineIcon
                  name="target"
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                />
                <span className="max-w-[56ch]">{offerings.note}</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* На десктопе сноска уже стоит в подвале панели — золотая
            плашка остаётся только там, где панели нет */}
        <Reveal className="mt-12 md:mt-16 lg:hidden">
          <p className="gold-plate flex items-center justify-center gap-4 px-6 py-6 text-center font-bold md:px-10">
            <LineIcon name="target" className="h-8 w-8 shrink-0" />
            <span className="max-w-[52ch]">{offerings.note}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
