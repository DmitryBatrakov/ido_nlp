import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Credo from "@/components/Credo";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Offerings from "@/components/Offerings";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";


export default function Home() {
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
        <Certificates />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
