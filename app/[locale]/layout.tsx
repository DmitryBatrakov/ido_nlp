import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Assistant, Montserrat } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { getContent, contact } from "@/lib/content";
import { routing } from "@/i18n/routing";
import { dir, htmlLang, ogLocale, type Locale } from "@/lib/i18n";
import "../globals.css";


const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = getContent(locale);
  const path = `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: t.meta.titleTemplate },
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: path,
      languages: {
        "he-IL": "/he",
        "en-US": "/en",
        "x-default": "/he",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url: path,
      siteName: t.brand.name,
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  const typedLocale = locale as Locale;
  const t = getContent(typedLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.brand.name,
    alternateName: typedLocale === "he" ? "Ido Safra" : "עידו ספרא",
    jobTitle: t.hero.role,
    description: t.meta.description,
    url: `${SITE_URL}/${typedLocale}`,
    image: `${SITE_URL}/images/ido.png`,
    telephone: contact.phone,
    knowsAbout: t.meta.keywords,
    address: {
      "@type": "PostalAddress",
      addressLocality: typedLocale === "he" ? "חיפה" : "Haifa",
      addressCountry: "IL",
    },
    sameAs: [contact.instagram, contact.youtube],
  };

  return (
    <html
      lang={htmlLang[typedLocale]}
      dir={dir[typedLocale]}
      className={`${assistant.variable} ${montserrat.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={typedLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
