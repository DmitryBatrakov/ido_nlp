"use client";

import { useEffect, useState } from "react";
import { contact, nav } from "@/lib/content";
import Logo from "./Logo";
import { WhatsAppIcon } from "./icons";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-cream transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line-dark bg-night/92 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-17 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" aria-label="עידו ספרא — לראש העמוד">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cream-soft transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gold-lt/40 px-4 py-2 text-sm font-bold text-gold-lt transition-colors hover:bg-gold-lt hover:text-night"
          >
            <WhatsAppIcon className="h-4 w-4" />
            לתיאום מפגש
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-[-3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        inert={!open}
        className={`grid bg-night/97 backdrop-blur-md transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="overflow-hidden" aria-label="ניווט נייד">
          <ul className="flex flex-col gap-5 border-t border-line-dark px-5 py-6">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className={`transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  className="text-lg text-cream"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li
              className={`transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + nav.length * 40}ms` : "0ms" }}
            >
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gold-lt/40 px-4 py-3 font-bold text-gold-lt"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon className="h-4 w-4" />
                לתיאום מפגש
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
