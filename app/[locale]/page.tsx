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
import { routing } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offerings />
        <Process />
        <Testimonials />
        <Credo />
        <Impact />
        <Media />
        <Certificates />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
