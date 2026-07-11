/**
 * Fondo fijo con degradado de la paleta Ikaro.
 * Negro dominante + navy/azul en banda central + oro muy sutil en esquinas.
 */
export function BarberBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 bg-[#232326]"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 55% 40% at 92% 8%, color-mix(in srgb, #d6ad53 22%, transparent) 0%, transparent 62%)",
            "radial-gradient(ellipse 45% 35% at 4% 92%, color-mix(in srgb, #d6ad53 12%, transparent) 0%, transparent 58%)",
            "radial-gradient(ellipse 70% 50% at 12% 18%, #0b2c75 0%, transparent 52%)",
            "radial-gradient(ellipse 55% 45% at 88% 72%, #05409b 0%, transparent 50%)",
            "linear-gradient(168deg, #232326 0%, #232326 12%, #0b2c75 36%, #05409b 54%, #232326 82%, #232326 100%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
