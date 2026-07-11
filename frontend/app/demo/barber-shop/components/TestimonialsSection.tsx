import { testimonials } from "../lib/testimonials";
import { SectionHeading } from "./SectionHeading";
import { StarRating } from "./StarRating";
import { Card } from "./ui/card";

export function TestimonialsSection() {
  return (
    <section
      id="opiniones"
      className="scroll-mt-24 border-y border-white/10 bg-[#1c1c1f] py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Google Reviews"
          title="Opiniones de clientes"
          description="Experiencias reales de quienes ya confían en Ikaro. Trato cercano, técnica impecable y un espacio pensado para el caballero contemporáneo."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <Card className="h-full border-[#d6ad53]/15 p-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <figure className="flex h-full flex-col p-5 sm:p-6">
                  <StarRating rating={testimonial.rating} />

                  <blockquote className="mt-4 flex-1 text-sm font-medium leading-[1.7] text-white/90 sm:text-[0.9375rem]">
                    <span
                      className="mr-0.5 font-heading text-lg leading-none text-[#d6ad53]/45"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    {testimonial.text}
                    <span
                      className="ml-0.5 font-heading text-lg leading-none text-[#d6ad53]/45"
                      aria-hidden
                    >
                      &rdquo;
                    </span>
                  </blockquote>

                  <figcaption className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold tracking-wide text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                      Cliente verificado · Google
                    </p>
                  </figcaption>
                </figure>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
