import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Credo from "@/components/Credo";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Media from "@/components/Media";
import Offerings from "@/components/Offerings";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { getContent } from "@/lib/content";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const typedLocale = locale as Locale;
  const t = getContent(typedLocale);

  return (
    <>
      <Header t={t} />
      <main>
        <Hero t={t} lang={typedLocale} />
        <About t={t} />
        <Offerings t={t} />
        <Process t={t} />
        <Testimonials t={t} lang={typedLocale} />
        <Credo t={t} />
        <Impact t={t} />
        <Media t={t} />
        <Certificates t={t} />
        <Contact t={t} />
      </main>
      <FloatingWhatsApp t={t} />
    </>
  );
}
