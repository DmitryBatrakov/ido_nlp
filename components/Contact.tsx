import { contact, contactSection, tagline } from "@/lib/content";
import { InstagramIcon, PhoneIcon, WhatsAppIcon, YouTubeIcon } from "./icons";
import Logo from "./Logo";
import Reveal from "./Reveal";


export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-night text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(44rem 28rem at 12% 0%, rgba(184,135,59,0.14), transparent 60%)",
        }}
      />
      <div aria-hidden="true" className="dots" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-28">
        <Reveal>
          <h2 className="text-4xl leading-tight sm:text-5xl">
            {contactSection.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-cream-soft">
            {contactSection.text}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex w-full items-center justify-center gap-2.5 whitespace-nowrap px-8 py-4 font-extrabold sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {contactSection.cta}
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex w-full items-center justify-center gap-2.5 whitespace-nowrap border border-line-dark px-8 py-4 font-bold transition-colors hover:border-gold sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              <span dir="ltr">{contact.phoneDisplay}</span>
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 whitespace-nowrap border border-line-dark px-8 py-4 font-bold transition-colors hover:border-gold sm:w-auto"
            >
              <InstagramIcon className="h-5 w-5" />
              mastersafra
            </a>
            <a
              href={contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 whitespace-nowrap border border-line-dark px-8 py-4 font-bold transition-colors hover:border-gold sm:w-auto"
            >
              <YouTubeIcon className="h-5 w-5" />
              לערוץ היוטיוב שלי
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-line-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-right">
          <a href="#top" aria-label="עידו ספרא — לראש העמוד">
            <Logo size="lg" />
          </a>
          <p
            dir="ltr"
            className="text-left text-[0.78rem] font-bold uppercase leading-loose tracking-[0.18em] text-gold-lt"
          >
            {tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="border-t border-line-dark">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-sm text-cream-soft sm:flex-row">
            <p>עידו ספרא · מרצה, מנחה סדנאות ומאסטר NLP · חיפה ואונליין</p>
            <p dir="ltr">© {new Date().getFullYear()} Ido Safra</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
