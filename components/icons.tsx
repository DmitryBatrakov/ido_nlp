import {
  ArrowLeft,
  BookOpen,
  Brain,
  Check,
  Footprints,
  Hand,
  Handshake,
  Heart,
  Lock,
  MessageSquareText,
  Mic,
  PenLine,
  Phone,
  Podcast,
  Puzzle,
  ShieldCheck,
  Sunrise,
  Target,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";


// Named line icons, backed by lucide. Public API (LineIcon name=...) is
// unchanged, so call sites stay the same.
const iconMap = {
  hand: Hand,
  speech: MessageSquareText,
  run: Footprints,
  sunrise: Sunrise,
  lock: Lock,
  pen: PenLine,
  target: Target,
  head: Brain,
  puzzle: Puzzle,
  shield: ShieldCheck,
  heart: Heart,
  mic: Mic,
  users: Users,
  book: BookOpen,
  podcast: Podcast,
  check: Check,
  person: User,
  handshake: Handshake,
  arrow: ArrowLeft,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function LineIcon({
  name,
  className = "",
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.6 4.4C6 6 3.8 9.2 3.8 13.2c0 3.9 2 6.4 5 6.4 2.5 0 4.4-1.8 4.4-4.2 0-2.3-1.6-4-3.9-4-.5 0-1 .1-1.2.2.4-2.3 2.2-4.4 4.6-5.6zm10 0C16 6 13.8 9.2 13.8 13.2c0 3.9 2 6.4 5 6.4 2.5 0 4.4-1.8 4.4-4.2 0-2.3-1.6-4-3.9-4-.5 0-1 .1-1.2.2.4-2.3 2.2-4.4 4.6-5.6z" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return <Phone className={className} strokeWidth={1.9} aria-hidden="true" />;
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
