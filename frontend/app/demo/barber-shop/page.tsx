import { About } from "@/app/demo/barber-shop/components/about";
import { Contact } from "@/app/demo/barber-shop/components/contact";
import { FloatingReserve } from "@/app/demo/barber-shop/components/floating-reserve";
import { Footer } from "@/app/demo/barber-shop/components/footer";
import { Hero } from "@/app/demo/barber-shop/components/hero";
import { Navbar } from "@/app/demo/barber-shop/components/navbar";
import { Reviews } from "@/app/demo/barber-shop/components/reviews";
import { Services } from "@/app/demo/barber-shop/components/services";

export default function BarberShopHome() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingReserve />
    </>
  );
}
