import { useTranslations } from "next-intl";
import type { Dictionary } from "@/lib/content";
import { LineIcon } from "./icons";
import OfferingRow from "./OfferingRow";
import Reveal from "./Reveal";


export default function Offerings() {
  const t = useTranslations("offerings");
  const columns = t.raw("columns") as Dictionary["offerings"]["columns"];

  return (
    <section id="offerings" className="bg-bone-2">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem]">
            <span className="gold-text">{t("eyebrowGold")}</span>{" "}
            {t("eyebrowInk")}
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] leading-relaxed text-ink-soft">
            {t("lede")}
          </p>
        </Reveal>

        <Reveal>
          <div className="">
            {columns.map((column, gi) => {
              const offset = columns
                .slice(0, gi)
                .reduce((sum, c) => sum + c.items.length, 0);

              return (
                <div key={column.title} className="mt-10 first:mt-0">
                  <div className="flex items-center gap-3.5 pb-6 pt-4">
                    <h3 className="text-lg tracking-wide sm:text-xl">
                      {column.title}
                    </h3>
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                    <span className="shrink-0 text-xs font-extrabold uppercase tracking-[0.14em] text-ink-soft">
                      {column.items.length} {t("topicsLabel")}
                    </span>
                  </div>

                  {column.items.map((item, ii) => (
                    <OfferingRow
                      key={item.title}
                      num={String(offset + ii + 1).padStart(2, "0")}
                      title={item.title}
                      text={item.text}
                      tags={item.tags}
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* tailoring / online note */}
          <p className="mt-10 flex items-start justify-center gap-3 border-t border-dashed border-line pt-6 text-center text-sm leading-relaxed text-ink-soft">
            <LineIcon name="target" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span className="max-w-[60ch]">{t("note")}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
