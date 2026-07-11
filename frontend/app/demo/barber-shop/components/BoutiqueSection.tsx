"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products, formatPrice } from "../lib/products";
import { productIcons } from "../lib/icons";
import { LuxuryIcon } from "./LuxuryIcon";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function BoutiqueSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  }

  return (
    <section id="boutique" className="scroll-mt-24 border-y border-white/12 bg-[#0b2c75]/35 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Boutique Ikaro"
          title="Grooming de lujo para llevar"
          description="Selección curada de aceites, champús y styling de alta gama. Disponible en salón con asesoramiento personalizado."
        />

        <div className="mt-6 hidden justify-center gap-2 md:flex">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/20"
            onClick={() => scroll("left")}
            aria-label="Anterior"
          >
            <ChevronLeft className="size-4" strokeWidth={1.5} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/20"
            onClick={() => scroll("right")}
            aria-label="Siguiente"
          >
            <ChevronRight className="size-4" strokeWidth={1.5} />
          </Button>
        </div>

        <p className="mt-3 text-center text-xs font-medium text-white/80 md:hidden">
          Desliza para ver más productos →
        </p>

        <div
          ref={scrollRef}
          className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => {
            const ProductIcon = productIcons[product.iconId];
            return (
              <Card
                key={product.id}
                className="w-[min(100%,280px)] shrink-0 snap-start overflow-hidden border-white/12 p-0 sm:w-[300px]"
              >
                <div className="relative aspect-square overflow-hidden bg-[#0b2c75]/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-[#d6ad53]/35 bg-[#232326]/85 backdrop-blur">
                    <LuxuryIcon icon={ProductIcon} className="text-[#d6ad53]" />
                  </div>
                  {product.tag && (
                    <Badge className="absolute left-3 top-3 bg-[#d6ad53] font-semibold text-[#232326]">
                      {product.tag}
                    </Badge>
                  )}
                </div>
                <div className="space-y-3 p-4">
                  <div className="text-center sm:text-left">
                    <p className="font-semibold leading-snug text-white">{product.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                    <span className="text-lg font-semibold text-[#d6ad53]">
                      {formatPrice(product.price)}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-[#d6ad53]/35 font-medium text-xs text-white"
                    >
                      Comprar en salón
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Demo e-commerce · Los productos y precios son orientativos.
        </p>
      </div>
    </section>
  );
}
