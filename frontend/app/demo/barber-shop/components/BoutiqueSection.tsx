import { products, formatPrice } from "../lib/products";
import { productIcons } from "../lib/icons";
import { LuxuryIcon } from "./LuxuryIcon";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function BoutiqueSection() {
  return (
    <section id="boutique" className="scroll-mt-24 border-y border-white/12 bg-black/25 py-14 backdrop-blur-[2px] sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Boutique Ikaro"
          title="Grooming de lujo para llevar"
          description="Selección curada de aceites, champús y styling de alta gama. Disponible en salón con asesoramiento personalizado."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const ProductIcon = productIcons[product.iconId];
            return (
              <li key={product.id}>
                <Card className="h-full overflow-hidden border-white/12 p-0">
                  <div className="relative aspect-square overflow-hidden bg-[#0b2c75]/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
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
                    <div>
                      <p className="font-semibold leading-snug text-white">{product.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {product.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg font-semibold text-[#d6ad53]">
                        {formatPrice(product.price)}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full rounded-full border-[#d6ad53]/35 font-medium text-xs text-white"
                      >
                        Comprar en salón
                      </Button>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Demo e-commerce · Los productos y precios son orientativos.
        </p>
      </div>
    </section>
  );
}
