import { About } from "@/app/demo/barber-shop/components/about";
import { Contact } from "@/app/demo/barber-shop/components/contact";
import { DemoOverlays } from "@/app/demo/barber-shop/components/demo-overlays";
import { Footer } from "@/app/demo/barber-shop/components/footer";
import { Hero } from "@/app/demo/barber-shop/components/hero";
import { Navbar } from "@/app/demo/barber-shop/components/navbar";
import { Reviews } from "@/app/demo/barber-shop/components/reviews";
import { Services } from "@/app/demo/barber-shop/components/services";
import { SkipLink } from "@/app/demo/barber-shop/components/skip-link";

export default function BarberShopHome() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="contenido-principal" className="pb-24 md:pb-0" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <DemoOverlays />
    </>
  );
}
