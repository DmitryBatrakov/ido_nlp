import { contact } from "@/lib/content";
import { InstagramIcon, PhoneIcon, WhatsAppIcon, YouTubeIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-hairline">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(44rem 28rem at 12% 0%, rgba(201,162,75,0.1), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
            הצעד הראשון הוא הודעה אחת
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sand">
            שיחת היכרות קצרה, בגובה העיניים וללא התחייבות — נבין יחד מה מעסיק
            אותך, ואיך תהליך יכול להיראות. מפגשים בחיפה או אונליין.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 bg-brass px-8 py-4 font-medium text-night-deep transition-colors hover:bg-brass-soft sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              כתבו לי ב-WhatsApp
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex w-full items-center justify-center gap-2.5 border border-hairline px-8 py-4 text-ivory transition-colors hover:border-brass sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5" />
              <span dir="ltr">{contact.phoneDisplay}</span>
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 border border-hairline px-8 py-4 text-ivory transition-colors hover:border-brass sm:w-auto"
            >
              <InstagramIcon className="h-5 w-5" />
              mastersafra
            </a>
            <a
              href={contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 border border-hairline px-8 py-4 text-ivory transition-colors hover:border-brass sm:w-auto"
            >
              <YouTubeIcon className="h-5 w-5" />
              לערוץ היוטיוב שלי
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-sand/70 sm:flex-row">
          <p>עידו ספרא · מטפל ב-NLP ודמיון מודרך · חיפה ואונליין</p>
          <p dir="ltr">© {new Date().getFullYear()} Ido Safra</p>
        </div>
      </footer>
    </section>
  );
}
