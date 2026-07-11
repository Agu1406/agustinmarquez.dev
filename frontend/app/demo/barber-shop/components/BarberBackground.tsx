/** Fondo fijo — sin animación ni variación al recargar. */
export function BarberBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 bg-[#232326]"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 90% 55% at 50% -10%, #0b2c75 0%, transparent 58%)",
            "radial-gradient(ellipse 55% 45% at 100% 85%, #05409b 0%, transparent 50%)",
            "radial-gradient(ellipse 40% 35% at 0% 60%, #0b2c75 0%, transparent 45%)",
            "linear-gradient(180deg, #232326 0%, #0b2c75 42%, #232326 100%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
