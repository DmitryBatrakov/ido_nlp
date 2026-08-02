import { useTranslations } from "next-intl";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  const t = useTranslations();
  const ui = useTranslations("ui");
  return (
    <a
      href={t("whatsapp")}
      target="_blank"
      rel="noopener noreferrer"
      data-umami-event="וואטסאפ – כפתור צף"
      aria-label={ui("waFloat")}
      className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-night/25 transition-transform hover:scale-105 motion-reduce:transition-none"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
