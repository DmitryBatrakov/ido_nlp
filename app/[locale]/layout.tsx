import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Assistant, Montserrat } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { contact } from "@/lib/content";
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

  const meta = await getTranslations({ locale, namespace: "meta" });
  const brand = await getTranslations({ locale, namespace: "brand" });
  const path = `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta("title"), template: meta("titleTemplate") },
    description: meta("description"),
    keywords: meta.raw("keywords") as string[],
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
      title: meta("ogTitle"),
      description: meta("ogDescription"),
      url: path,
      siteName: brand("name"),
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta("ogTitle"),
      description: meta("ogDescription"),
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
  const messages = await getMessages();
  const brand = await getTranslations({ locale, namespace: "brand" });
  const hero = await getTranslations({ locale, namespace: "hero" });
  const meta = await getTranslations({ locale, namespace: "meta" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand("name"),
    alternateName: typedLocale === "he" ? "Ido Safra" : "עידו ספרא",
    jobTitle: hero("role"),
    description: meta("description"),
    url: `${SITE_URL}/${typedLocale}`,
    image: `${SITE_URL}/images/ido.png`,
    telephone: contact.phone,
    knowsAbout: meta.raw("keywords") as string[],
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
        <NextIntlClientProvider locale={typedLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="8b44784c-9dc7-46c4-bf12-d7c77a83a219"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
