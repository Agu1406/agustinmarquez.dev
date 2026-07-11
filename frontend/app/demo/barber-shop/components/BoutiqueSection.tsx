"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products, formatPrice } from "../lib/products";
import { productIcons } from "../lib/icons";
import { LuxuryIcon } from "./LuxuryIcon";
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
    <section id="boutique" className="scroll-mt-24 border-t border-border/40 bg-background/25 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent">Boutique Ikaro</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Grooming de lujo para llevar
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Selección curada de aceites, champús y styling de alta gama. Disponible
              en salón con asesoramiento personalizado.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll("left")}
              aria-label="Anterior"
            >
              <ChevronLeft className="size-4" strokeWidth={1.35} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll("right")}
              aria-label="Siguiente"
            >
              <ChevronRight className="size-4" strokeWidth={1.35} />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => {
            const ProductIcon = productIcons[product.iconId];
            return (
              <Card
                key={product.id}
                className="w-[min(100%,280px)] shrink-0 snap-start overflow-hidden p-0 sm:w-[300px]"
              >
                <div className="relative aspect-square overflow-hidden bg-muted/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-accent/35 bg-[var(--rolex-charcoal)]/75 backdrop-blur">
                    <LuxuryIcon icon={ProductIcon} className="text-accent" />
                  </div>
                  {product.tag && (
                    <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
                      {product.tag}
                    </Badge>
                  )}
                </div>
                <div className="space-y-3 p-4">
                  <div>
                    <p className="font-medium leading-snug">{product.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-lg font-semibold text-accent">
                      {formatPrice(product.price)}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-accent/30 text-xs"
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
