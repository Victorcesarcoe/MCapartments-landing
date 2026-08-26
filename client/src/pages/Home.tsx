/*
 * DESIGN "Aquarela Carioca" — Landing page single-page:
 * Hero (vídeo) → Anfitrião → Verano Stay (Barra) → Copacabana → Avaliações →
 * Sistema visual: Aquarela Editorial Circulante — vídeo protagonista, superfícies de papel e assinatura de Mauricio.
 * FAQ → Rodapé CTA + WhatsApp flutuante.
 */
import { Header, Footer, FloatingWhatsApp, BackToTop } from "@/components/Layout";
import CoastlineDivider from "@/components/CoastlineDivider";
import Hero from "@/components/sections/Hero";
import Host from "@/components/sections/Host";
import ApartmentSection from "@/components/sections/ApartmentSection";
import Compare from "@/components/sections/Compare";
import Location from "@/components/sections/Location";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import { APT1, APT2 } from "@/lib/data";
import { useRevealOnScroll } from "@/hooks/useReveal";

export default function Home() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoastlineDivider color="#e8dfd0" strokeColor="#f0d9c0" />
        <Host />
        <CoastlineDivider color="#faf6f0" strokeColor="#c9b994" />
        <ApartmentSection apt={APT1} theme="barra" />
        <CoastlineDivider color="#faf6f0" strokeColor="#c9b994" />
        <ApartmentSection apt={APT2} reversed theme="copa" />
        <CoastlineDivider color="#e8dfd0" strokeColor="#c9b994" />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
