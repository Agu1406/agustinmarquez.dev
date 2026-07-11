import { ServicesList } from "../components/ServicesList";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Carta completa</p>
      <h1 className="mt-1 font-heading text-3xl font-semibold">Servicios</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Precios orientativos para la demo. Cada servicio incluye consulta de estilo y
        acabado con productos premium.
      </p>
      <div className="mt-10">
        <ServicesList />
      </div>
    </div>
  );
}
