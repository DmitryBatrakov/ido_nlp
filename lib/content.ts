import type { IconName } from "@/components/icons";

/** Shared, non-localized contact handles. */
export const contact = {
  phone: "+972525106411",
  phoneDisplay: "052-510-6411",
  instagram: "https://www.instagram.com/mastersafra",
  youtube: "https://www.youtube.com/@idosafra2595",
};

const waNumber = contact.phone.replace(/\D/g, "");

/** Build a WhatsApp deep link with a localized prefilled message. */
export const waLink = (message: string) =>
  `https://wa.me/${waNumber}?text=` + encodeURIComponent(message);

type Offering = {
  icon: IconName;
  title: string;
  text: string;
  who: string;
  tags: string[];
};

type Cred = { icon: IconName; title: string; text: string };

type Step = { title: string; text: string };

type Testimonial = { quote: string; author: string };

type Certificate = {
  src: string;
  width: number;
  height: number;
  title: string;
  detail: string;
};

type Role = { icon: IconName; label: string; sub?: string };

export type MediaItem =
  | { type: "photo"; src: string }
  | { type: "video"; id: string; title?: string; short?: boolean };

export type Dictionary = {
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogAlt: string;
  };
  brand: { name: string; wordmark: { first: string; second: string }; kicker: string };
  tagline: string[];
  whatsapp: string;
  waIntro: string;
  nav: { href: string; label: string }[];
  hero: {
    role: string;
    roleSub?: string;
    cta: string;
    ctaSecondary: string;
    location: string;
  };
  roles: Role[];
  about: {
    eyebrow: string;
    title: string;
    introLead: string;
    introHighlight: string;
    introRest: string;
    creds: Cred[];
    distinctTitle: string;
    distinct: string[];
    valueTitle: string;
    value: string;
  };
  offerings: {
    eyebrowGold: string;
    eyebrowInk: string;
    lede: string;
    chips: string[];
    note: string;
    suitableFor: string;
    bookCta: string;
    topicsLabel: string;
    columns: { title: string; icon: IconName; items: Offering[] }[];
  };
  process: { eyebrow: string; title: string; steps: Step[] };
  testimonials: {
    eyebrow: string;
    title: string;
    prevLabel: string;
    nextLabel: string;
    regionLabel: string;
    scrollHint: string;
    items: Testimonial[];
  };
  credo: { eyebrow: string; quote: string; highlight: string; closing: string };
  impact: { titleGold: string; titleInk: string; chips: string[]; lede: string };
  media: {
    eyebrow: string;
    title: string;
    playLabel: string;
    photoLabel: string;
    closeLabel: string;
    moreLabel: string;
    lessLabel: string;
    items: MediaItem[];
  };
  book: {
    kicker: string;
    title: string;
    subtitle: string;
    cover: string;
    description: string;
    quote: string;
    note: string;
    cta: string;
    buyLabel: string;
    coverAlt: string;
    url: string;
  };
  podcast: {
    kicker: string;
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    quote: string;
    cta: string;
    url: string;
  };
  certificates: {
    eyebrow: string;
    title: string;
    viewLabel: string;
    closeLabel: string;
    altPrefix: string;
    items: Certificate[];
  };
  contactSection: { title: string; text: string; cta: string; youtubeLabel: string };
  ui: {
    toTop: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    headerCta: string;
    langSwitch: string;
    portraitAlt: string;
    stageAlt: string;
    waFloat: string;
    footerLine: string;
  };
};
