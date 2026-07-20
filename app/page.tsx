import About from "@/components/About";
import Book from "@/components/Book";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Credo from "@/components/Credo";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Testimonials />
        <Credo />
        <Book />
        <Certificates />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
