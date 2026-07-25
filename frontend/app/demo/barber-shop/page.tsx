import { About } from "@/app/demo/barber-shop/components/about";
import { Contact } from "@/app/demo/barber-shop/components/contact";
import { Footer } from "@/app/demo/barber-shop/components/footer";
import { Hero } from "@/app/demo/barber-shop/components/hero";
import { Navbar } from "@/app/demo/barber-shop/components/navbar";
import { Reviews } from "@/app/demo/barber-shop/components/reviews";
import { Services } from "@/app/demo/barber-shop/components/services";

export default function BarberShopHome() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
